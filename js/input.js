import { addLyricToActive, lyrics } from './lyrics.js';

// 输入框处理逻辑
const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');

function addUserInput() {
    const inputText = textInput.value.trim();
    if (inputText) {
        // 立即将用户输入添加到活跃列表显示
        addLyricToActive(inputText, true);
        // 同时也添加到歌词数组（可选，用于后续播放）
        lyrics.push(inputText);
        // 清空输入框
        textInput.value = '';
    }
}

// 点击提交按钮
submitBtn.addEventListener('click', addUserInput);

// 按回车键提交
textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addUserInput();
    }
});

