// Canvas 初始化和配置
// 初始化全局命名空间
window.App = window.App || {};

(function() {
    const canvas = document.getElementById('matrix');
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }
    
    const ctx = canvas.getContext('2d', { alpha: false });

    // 设置画布大小
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 优化Canvas文字渲染质量
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    // 启用文字平滑
    if (ctx.textRenderingQuality) {
        ctx.textRenderingQuality = 'high';
    }
    // 设置图像平滑
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // 导出到全局命名空间
    window.App.canvas = canvas;
    window.App.ctx = ctx;
})();
