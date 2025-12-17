// 使用全局命名空间
(function() {
    const canvas = window.App.canvas;
    const ctx = window.App.ctx;
    const drawMatrix = window.App.drawMatrix;
    const handleMatrixResize = window.App.handleMatrixResize;
    const drawLyrics = window.App.drawLyrics;
    const handleLyricsResize = window.App.handleLyricsResize;
    
    if (!canvas || !ctx || !drawMatrix || !drawLyrics) {
        console.error('Modules not initialized!');
        return;
    }

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
})();
