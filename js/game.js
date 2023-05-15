import {
    playerMove,
    isWin
} from "./play.js";
import showUI from './ui.js';

showUI(); //调用showUI函数，渲染初始化页面
let over = false; //定义变量判断游戏是否结束
window.onkeydown = (e) => { //绑定键盘按键按下事件
    if (over) { //若游戏已结束，则不执行
        return;
    }
    let result = false; // 定义当前状态是否玩家移动成功
    if (e.key === 'ArrowUp') { //向上
        result = playerMove('up');
    } else if (e.key === 'ArrowDown') { //向下
        result = playerMove('down');
    } else if (e.key === 'ArrowLeft') { //向左
        result = playerMove('left');
    } else if (e.key === 'ArrowRight') { //向右
        result = playerMove('right');
    }
    // 一次移动完成后渲染页面，并判断游戏是否结束
    if (result) {
        showUI();
        if (isWin()) { //调用win函数，判断游戏是否结束
            // 游戏结束
            console.log(123);
            over = true; // 将over设为true，不在执行按键事件了
            let win = document.querySelector('.over'); //获取提示胜利dom
            win.className = 'win'; //添加类名，以添加样式，实现提醒文字弹出  
        }
    }

}