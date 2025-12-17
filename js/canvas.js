// Canvas 初始化和配置
export const canvas = document.getElementById('matrix');
export const ctx = canvas.getContext('2d', { alpha: false });

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

