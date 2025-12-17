import { ctx, canvas } from './canvas.js';
import { drawMatrix, handleResize as handleMatrixResize } from './matrix.js';
import { drawLyrics, handleLyricsResize } from './lyrics.js';
import './input.js';

function draw() {
    // 添加半透明黑色覆盖层，创建拖尾效果
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制数字雨效果
    drawMatrix();
    
    // 绘制歌词
    drawLyrics();
}

// 每50毫秒重绘一次
setInterval(draw, 50);

// 窗口大小改变时调整画布
window.addEventListener('resize', () => {
    handleMatrixResize();
    handleLyricsResize();
});

