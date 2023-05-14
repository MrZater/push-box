// 该模块用于将地图显示到页面上
import * as map from './map.js'
// 获取容器
let divContainer = document.getElementById('game');
let pieceWidth = 45; //每个小块的宽度
let pieceHeight = 45; //每个小块的高度
/**
 * 设置容器Div的宽高 
 */
function setDivContainer() {
    // 通过地图数组的长宽设置容器的大小
    divContainer.style.width = pieceWidth * map.colNumber + 'px';
    divContainer.style.height = pieceHeight * map.rowNumberF + 'px';
}

//判断箱子是否在正确位置上的函数
function isCorrect(row, col) {
    // for (let p of map.correct) {
    //     if (p.col === col && p.row === row) {
    //         return true;
    //     }
    // }
    // return false;
    return map.correct.find(p => p.col === col && p.row === row) !== undefined; //find方法：判断数组是否符合条件
}


/**
 * 创建每一个piece并给定位置和类名
 * @param {*} row 
 * @param {*} col 
 * @returns 
 */
function setOnePiece(row, col) { //传入在content的位置
    let value = map.content[row][col]; //获取该piece的value
    let correct = isCorrect(row, col) //判断该piece是否是箱子的正确位置
    let div = document.createElement('div'); //创建div
    div.className = 'item'; //给div一个item类名，以实现大小和绝对定位功能（空白也有）
    // 调整div的位置
    div.style.left = col * pieceWidth + 'px'; //添加位置 left  piece宽度 * col
    div.style.top = row * pieceHeight + 'px'; //添加位置 right piece高度 * row
    // 通过每个piece的value给每个piece添加不同的类名，以实现最终样式
    if (value === map.PLAYER) { //玩家模块
        div.classList.add('player');
    } else if (value === map.WALL) { //墙模块
        div.classList.add('wall');
    } else if (value === map.BOX) { //箱子模块
        if (correct) { //判断是否在正确位置上
            div.classList.add('correct-box'); //在
        } else {
            div.classList.add('box'); //不在
        }
    } else { //空白模块
        if (correct) { //判断剩下的空白是否是箱子的正确位置
            div.classList.add('correct'); //是
        } else {
            return; //不是
        }
    }
    divContainer.appendChild(div); //将创建好的piece插入到容器中

}

/**
 * 根据地图在页面上设置相应的元素
 */
function setComtent() {
    // 1. 清空容器
    divContainer.innerHTML = '';
    // 遍历地图内容，设置元素
    for (let row = 0; row < map.rowNumber; row++) {
        for (let col = 0; col < map.colNumber; col++) {
            // 调用setOnePiece方法并传入数组位置，创建每个piece
            setOnePiece(row, col);
        }
    }
}



/**
 * 用于显示地图的函数，并导出
 */
export default function () {
    // 1. 设置Div的宽高
    setDivContainer();
    // 2. 显示地图的内容
    setComtent();
}