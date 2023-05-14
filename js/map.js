/**
 * 数组位置相当于地图
 * 0. 空白
 * 1. 玩家
 * 2. 墙
 * 3. 箱子
 */
export let content = [
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 0, 1, 0, 2, 0, 0],
    [0, 0, 2, 0, 3, 0, 2, 0, 0],
    [2, 2, 2, 0, 0, 0, 2, 2, 2],
    [2, 0, 0, 0, 3, 0, 0, 0, 2],
    [2, 0, 3, 3, 3, 3, 3, 0, 2],
    [2, 0, 0, 0, 3, 0, 0, 0, 2],
    [2, 2, 0, 3, 3, 3, 0, 2, 2],
    [0, 2, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 3, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0]
];
/**
 * 箱子的正确位置
 */
export let correct = [{
        row: 3,
        col: 4
    },
    {
        row: 4,
        col: 4
    },
    {
        row: 5,
        col: 2
    },
    {
        row: 5,
        col: 3
    },
    {
        row: 5,
        col: 4
    },
    {
        row: 5,
        col: 5
    },
    {
        row: 5,
        col: 6
    },
    {
        row: 6,
        col: 4
    },
    {
        row: 7,
        col: 4
    },
    {
        row: 8,
        col: 4
    },
    {
        row: 9,
        col: 4
    },
    {
        row: 10,
        col: 4
    }
];
// 保存并导出地图数组的长宽
export let colNumber = content[0].length;
export let rowNumber = content.length;
// 导出地图数组中的数字表示
export let SPACE = 0;
export let PLAYER = 1;
export let WALL = 2;
export let BOX = 3;