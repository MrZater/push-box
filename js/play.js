import * as map from './map.js'
/**
 * 按照指定的方向，让玩家移动
 * @param {*} direction 
 */
export function playerMove(direction) {
    let point = playerPoint(); //调用playerPoint函数，获取玩家当前位置
    let nextInfo = getPlayNextInfo(point.row, point.col, direction); //调用getPlayNextInfo函数，获取玩家接下来要移动到的位置和value
    if (nextInfo.value === map.WALL) { //判断接下来要移动到的位置是不是墙
        return false; //移动失败，返回false
    }
    if (nextInfo.value === map.SPACE) { //判断接下来移动到的位置是不是空白区域
        exchange(point, nextInfo); //将数组中  玩家位置的数据  与  接下来移动到位置的数据  进行交换
        return true; // 移动成功，返回true
    } else {
        //若接下来移动到的位置不是墙或空白位置，则就是箱子了
        // 调用getPlayNextInfo函数，获取到箱子后面位置的位置信息
        let nextNextinfo = getPlayNextInfo(nextInfo.row, nextInfo.col, direction);
        // 判断箱子后面是不是空白区域
        if (nextNextinfo.value === map.SPACE) {
            // 是空白区域
            exchange(nextInfo, nextNextinfo); //将箱子移动到箱子下一个的位置
            exchange(point, nextInfo); //将玩家位置移动到之前箱子的位置
            return true; // 移动成功，返回true
        } else {
            return false; //移动失败，返回false
        }
    }

}
// 交换数组数据位置的函数
function exchange(point1, point2) {
    let temp = map.content[point1.row][point1.col]; //保留当前point1的位置
    map.content[point1.row][point1.col] = map.content[point2.row][point2.col]; //将point1的位置设为point2的位置
    map.content[point2.row][point2.col] = temp; //将point2的位置设为point1的位置
}
/**
 * 得到玩家在指定方向上的下一个位置的信息（第几行，第几列，内容）
 * @param {*} row 
 * @param {*} col 
 * @param {*} direction 
 */
function getPlayNextInfo(row, col, direction) {
    if (direction === 'left') { // 向左
        return {
            row: row, //行不变
            col: col - 1, //列减1，下同
            value: map.content[row][col - 1]
        }
    } else if (direction === 'right') { //向右
        return {
            row: row,
            col: col + 1,
            value: map.content[row][col + 1]
        }
    } else if (direction === 'up') { //向上
        return {
            row: row - 1,
            col: col,
            value: map.content[row - 1][col]
        }
    } else { //向下
        return {
            row: row + 1,
            col: col,
            value: map.content[row + 1][col]
        }
    }
}

// 获取当前玩家的位置
function playerPoint() {
    for (let row = 0; row < map.rowNumber; row++) {
        for (let col = 0; col < map.colNumber; col++) {
            if (map.content[row][col] === map.PLAYER) {
                return {
                    row,
                    col
                }
            }
        }
    }
}

// 判断游戏是否完成
export function isWin() {
    for (let i = 0; i < map.correct.length; i++) {
        let point = map.correct[i]; //获取每个正确位置信息
        if (map.content[point.row][point.col] !== map.BOX) { //判断每个正确位置的value是否是箱子的value
            return false; //不是，返回false
        }
    }

    return true; //是，返回true
}