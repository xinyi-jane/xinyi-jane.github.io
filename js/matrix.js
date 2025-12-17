import { ctx, canvas } from './canvas.js';

// 字符集 - 用于数字雨背景
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑';

const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);

// 为每一列创建一个下落位置
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height / fontSize;
}

// 绘制数字雨效果
export function drawMatrix() {
    // 设置数字雨文字样式
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';
    
    // 绘制数字雨字符
    for (let i = 0; i < drops.length; i++) {
        // 随机选择一个字符
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // 绘制字符
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // 随机重置位置，创建新的字符列
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // 移动到下一行
        drops[i]++;
    }
}

// 处理窗口大小改变
export function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // 重新计算列数
    const newColumns = Math.floor(canvas.width / fontSize);
    
    // 调整drops数组
    if (newColumns > columns) {
        for (let i = columns; i < newColumns; i++) {
            drops[i] = Math.random() * canvas.height / fontSize;
        }
    } else if (newColumns < columns) {
        drops.length = newColumns;
    }
    
    // 更新列数
    columns = newColumns;
}

