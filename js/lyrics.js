import { ctx, canvas } from './canvas.js';

// 歌词数据
export let lyrics = [
    '终于做了这个决定',
    '别人怎么说我不理',
    '只要你也一样的肯定',
    '我愿意天涯海角都随你去',
    '我知道一切不容易',
    '我的心一直温习说服自己',
    '最怕你忽然说要放弃',
    '爱真的需要勇气',
    '来面对流言蜚语',
    '只要你一个眼神肯定',
    '我的爱就有意义',
    '我们都需要勇气',
    '去相信会在一起',
    '人潮拥挤我能感觉你',
    '放在我手心里 你的真心',
    '终于做了这个决定',
    '别人怎么说我不理',
    '只要你也一样的肯定',
    '我愿意天涯海角都随你去',
    '我知道一切不容易',
    '我的心一直温习说服自己',
    '最怕你忽然说要放弃',
    '爱真的需要勇气',
    '来面对流言蜚语',
    '只要你一个眼神肯定',
    '我的爱就有意义',
    '我们都需要勇气',
    '去相信会在一起',
    '人潮拥挤我能感觉你',
    '放在我手心里 你的真心',
    '如果我的坚强任性',
    '会不小心伤害了你',
    '你能不能温柔提醒',
    '我虽然心太急 更害怕错过你',
    '爱真的需要勇气',
    '来面对流言蜚语',
    '只要你一个眼神肯定',
    '我的爱就有意义',
    '我们都需要勇气',
    '去相信会在一起',
    '人潮拥挤我能感觉你',
    '放在我手心里 你的真心'
];

// 歌词显示相关变量
let currentLyricIndex = 0;
const lyricSpeed = 2.5; // 歌词移动速度
const lyricFontSize = 36; // 增大字体以提高清晰度
const maxVisibleLines = 5; // 同时显示的最大行数
const lineSpacing = 100; // 行间距（增大以防止重叠）
const lyricDelay = 2000; // 每行歌词之间的延迟（毫秒）
let lastLyricTime = Date.now(); // 初始化为当前时间，让第一行立即显示

// 歌词行对象数组，存储所有正在显示的歌词
const activeLyrics = [];

// 计算所有行的固定垂直位置
function calculateLinePositions() {
    const positions = [];
    const centerY = canvas.height / 2;
    const startY = centerY - (maxVisibleLines - 1) * lineSpacing / 2;
    for (let i = 0; i < maxVisibleLines; i++) {
        positions.push(startY + (i * lineSpacing));
    }
    return positions;
}

let linePositions = calculateLinePositions();

// 添加歌词到活跃列表的辅助函数
export function addLyricToActive(text, isUserInput = false) {
    // 设置字体以计算文本宽度
    ctx.font = 'bold ' + lyricFontSize + 'px "Microsoft YaHei", "PingFang SC", "SimHei", "STHeiti", "Arial Unicode MS", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    
    const textWidth = ctx.measureText(text).width;
    
    // 找到第一个可用的位置槽位
    const usedSlots = activeLyrics.map(lyric => lyric.slotIndex).sort((a, b) => a - b);
    let availableSlot = 0;
    for (let i = 0; i < usedSlots.length; i++) {
        if (usedSlots[i] === availableSlot) {
            availableSlot++;
        } else {
            break;
        }
    }
    
    // 如果所有槽位都被占用，使用第一个槽位（覆盖最旧的一行）
    if (availableSlot >= maxVisibleLines) {
        availableSlot = 0;
        // 移除该槽位的旧歌词
        const indexToRemove = activeLyrics.findIndex(lyric => lyric.slotIndex === availableSlot);
        if (indexToRemove !== -1) {
            activeLyrics.splice(indexToRemove, 1);
        }
    }
    
    // 添加新的歌词行
    activeLyrics.push({
        text: text,
        x: -textWidth - 100,
        y: linePositions[availableSlot],
        slotIndex: availableSlot,
        isUserInput: isUserInput
    });
}

// 绘制歌词
export function drawLyrics() {
    // 设置歌词文字样式
    ctx.font = 'bold ' + lyricFontSize + 'px "Microsoft YaHei", "PingFang SC", "SimHei", "STHeiti", "Arial Unicode MS", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    
    const currentTime = Date.now();
    
    // 检查是否需要添加新的歌词行
    if (currentLyricIndex < lyrics.length && activeLyrics.length < maxVisibleLines) {
        // 第一行立即显示，后续行需要延迟
        const shouldAdd = (activeLyrics.length === 0) || (currentTime - lastLyricTime >= lyricDelay);
        
        if (shouldAdd) {
            // 找到第一个可用的位置槽位
            const usedSlots = activeLyrics.map(lyric => lyric.slotIndex).sort((a, b) => a - b);
            let availableSlot = 0;
            for (let i = 0; i < usedSlots.length; i++) {
                if (usedSlots[i] === availableSlot) {
                    availableSlot++;
                } else {
                    break;
                }
            }
            
            // 确保槽位不超过最大值
            if (availableSlot < maxVisibleLines) {
                // 获取当前歌词
                const lyricText = lyrics[currentLyricIndex];
                const textWidth = ctx.measureText(lyricText).width;
                
                // 添加新的歌词行，使用固定的位置槽位
                activeLyrics.push({
                    text: lyricText,
                    x: -textWidth - 100,
                    y: linePositions[availableSlot],
                    slotIndex: availableSlot,
                    index: currentLyricIndex,
                    isUserInput: false // 标记为原始歌词
                });
                
                currentLyricIndex++;
                lastLyricTime = currentTime;
            }
        }
    }
    
    // 绘制所有活跃的歌词行
    for (let i = activeLyrics.length - 1; i >= 0; i--) {
        const lyric = activeLyrics[i];
        const textWidth = ctx.measureText(lyric.text).width;
        
        // 根据是否是用户输入选择不同的颜色
        const textColor = lyric.isUserInput ? '#00aaff' : '#00ff00'; // 用户输入用蓝色，原歌词用绿色
        const shadowColor = lyric.isUserInput ? '#00aaff' : '#00ff00';
        
        // 只有当歌词在屏幕范围内或刚从左侧进入时才绘制背景
        if (lyric.x > -textWidth - 50 && lyric.x < canvas.width + 50) {
            // 先绘制一个半透明的背景框，让歌词更清晰（背景框高度小于行间距的一半）
            const bgHeight = Math.min(lyricFontSize + 8, lineSpacing * 0.6);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fillRect(lyric.x - 10, lyric.y - bgHeight / 2, textWidth + 20, bgHeight);
        }
        
        // 绘制歌词文本（带发光效果）
        ctx.fillStyle = textColor;
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 20;
        ctx.fillText(lyric.text, lyric.x, lyric.y);
        ctx.shadowBlur = 0;
        
        // 移动歌词位置（从左到右）
        lyric.x += lyricSpeed;
        
        // 如果歌词完全移出屏幕右侧，移除这一行
        if (lyric.x > canvas.width + textWidth + 100) {
            activeLyrics.splice(i, 1);
        }
    }
    
    // 如果所有歌词都播放完毕且没有活跃的歌词行，重新开始
    if (currentLyricIndex >= lyrics.length && activeLyrics.length === 0) {
        currentLyricIndex = 0;
        lastLyricTime = 0;
    }
}

// 处理窗口大小改变时更新歌词位置
export function handleLyricsResize() {
    linePositions = calculateLinePositions();
    // 更新所有活跃歌词的垂直位置
    activeLyrics.forEach((lyric) => {
        lyric.y = linePositions[lyric.slotIndex];
    });
}

