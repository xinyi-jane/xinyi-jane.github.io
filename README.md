# xinyi-jane.github.io

个人主页和项目集合，包含多个使用 Vanilla Web Development 开发的项目。

## 🚀 在线访问

- **主页**: [https://xinyi-jane.github.io/](https://xinyi-jane.github.io/)
- **Hacker Style Resume**: [https://xinyi-jane.github.io/hacker-style-resume/](https://xinyi-jane.github.io/hacker-style-resume/)

## 📦 项目列表

### 1. 勇气 - 歌词展示项目

一个具有黑客帝国风格的数字雨背景效果的歌词滚动展示应用。支持歌词从左到右滚动显示，并允许用户实时输入自定义文本。

**访问地址**: [https://xinyi-jane.github.io/](https://xinyi-jane.github.io/)

### 2. Hacker Style Resume

一个采用黑客风格设计的个人简历页面，使用纯 Vanilla Web Development 技术栈开发。

**访问地址**: [https://xinyi-jane.github.io/hacker-style-resume/](https://xinyi-jane.github.io/hacker-style-resume/)  
**项目仓库**: [hacker-style-resume](https://github.com/xinyi-jane/hacker-style-resume)

---

## 勇气 - 歌词展示项目详情

## 项目结构

```
simpleweb/
├── index.html          # 主HTML文件
├── style.css           # 样式文件
├── README.md           # 项目说明文档
└── js/                 # JavaScript模块目录
    ├── main.js         # 主入口文件
    ├── canvas.js       # Canvas初始化和配置
    ├── matrix.js       # 数字雨效果模块
    ├── lyrics.js       # 歌词显示逻辑模块
    └── input.js        # 用户输入处理模块
```

## 模块说明

### 1. `canvas.js` (16行)
**职责：** Canvas 初始化和配置

- 获取并初始化 canvas 元素和 2D 上下文
- 设置画布大小为窗口大小
- 导出 `canvas` 和 `ctx` 供其他模块使用

**导出：**
- `canvas`: Canvas DOM 元素
- `ctx`: Canvas 2D 渲染上下文

---

### 2. `matrix.js` (56行)
**职责：** 数字雨背景效果

- 实现黑客帝国风格的数字雨下落效果
- 使用字符集（数字、字母、中文字符）创建动态背景
- 处理窗口大小改变时的数字雨列数调整

**主要功能：**
- `drawMatrix()`: 绘制数字雨效果
- `handleResize()`: 处理窗口大小改变，调整数字雨列数

**导出：**
- `drawMatrix()`: 绘制数字雨的函数
- `handleResize()`: 窗口大小改变处理函数

---

### 3. `lyrics.js` (211行)
**职责：** 歌词显示和管理

- 存储和管理歌词数据
- 实现歌词从左到右的滚动显示效果
- 支持多行歌词同时显示（最多5行）
- 管理歌词行的位置和状态
- 区分原始歌词和用户输入（使用不同颜色）

**主要功能：**
- `addLyricToActive(text, isUserInput)`: 将歌词添加到活跃显示列表
- `drawLyrics()`: 绘制所有活跃的歌词行
- `handleLyricsResize()`: 处理窗口大小改变时更新歌词位置

**导出：**
- `lyrics`: 歌词数据数组（可修改）
- `addLyricToActive()`: 添加歌词到显示列表的函数
- `drawLyrics()`: 绘制歌词的函数
- `handleLyricsResize()`: 窗口大小改变处理函数

**关键变量：**
- `lyricSpeed`: 歌词移动速度 (2.5px/帧)
- `lyricFontSize`: 歌词字体大小 (32px)
- `maxVisibleLines`: 最大同时显示行数 (5行)
- `lineSpacing`: 行间距 (100px)
- `lyricDelay`: 歌词之间的延迟 (2000ms)

**颜色区分：**
- 原始歌词：绿色 (`#00ff00`)
- 用户输入：蓝色 (`#00aaff`)

---

### 4. `input.js` (28行)
**职责：** 用户输入处理

- 处理用户输入的文本
- 监听输入框的提交事件（按钮点击和回车键）
- 将用户输入实时添加到歌词显示列表

**主要功能：**
- `addUserInput()`: 处理用户输入，添加到显示列表

**事件监听：**
- 提交按钮点击事件
- 输入框回车键事件

---

### 5. `main.js` (25行)
**职责：** 应用主入口和协调

- 协调所有模块的工作
- 实现主绘制循环（每50毫秒刷新一次）
- 设置全局事件监听器（窗口大小改变）

**主要功能：**
- `draw()`: 主绘制函数，按顺序调用各模块的绘制函数
- 初始化绘制循环
- 设置窗口大小改变事件处理

**模块依赖关系：**
```
main.js
├── canvas.js (基础)
├── matrix.js → canvas.js
├── lyrics.js → canvas.js
└── input.js → lyrics.js
```

---

## 功能特性

### 视觉效果
- ✨ 黑客帝国风格的数字雨背景
- 🎨 绿色主题配色方案
- 💫 歌词发光效果和半透明背景
- 📱 响应式设计，支持移动设备

### 歌词显示
- 📜 歌词从左到右滚动显示
- 🎯 支持多行同时显示（最多5行）
- 🔄 自动循环播放
- ⚡ 用户输入立即显示

### 交互功能
- ⌨️ 文本输入框
- 🖱️ 提交按钮
- ⌨️ 支持回车键快速提交
- 🎨 用户输入与原始歌词颜色区分

## 技术栈

- **HTML5**: 页面结构
- **CSS3**: 样式和响应式设计
- **JavaScript (ES6 Modules)**: 
  - ES6 模块系统 (import/export)
  - Canvas API
  - DOM API

## 使用方法

1. **打开项目**
   - 直接在浏览器中打开 `index.html` 文件
   - 或使用本地服务器运行（推荐）

2. **查看歌词**
   - 页面加载后，歌词会自动开始滚动显示
   - 原始歌词以绿色显示

3. **输入自定义文本**
   - 在页面底部的输入框中输入文本
   - 点击"提交"按钮或按回车键
   - 输入的文本会立即以蓝色显示并开始滚动

4. **响应式支持**
   - 调整浏览器窗口大小，画布和歌词位置会自动调整

## 浏览器兼容性

- 支持所有现代浏览器（Chrome、Firefox、Safari、Edge）
- 需要支持 ES6 模块的浏览器
- 需要支持 Canvas API

## 开发说明

### 模块化设计
项目采用 ES6 模块系统，代码结构清晰，便于维护和扩展。

### 可扩展性
- 可以轻松修改歌词数据（`lyrics.js` 中的 `lyrics` 数组）
- 可以调整显示参数（字体大小、速度、行数等）
- 可以自定义颜色主题（修改 CSS 和 JS 中的颜色值）

### 性能优化
- 使用 Canvas API 进行高效渲染
- 合理控制刷新频率（50ms/帧）
- 自动清理移出屏幕的歌词对象

## 文件说明

| 文件 | 行数 | 说明 |
|------|------|------|
| `index.html` | 20 | 主HTML文件 |
| `style.css` | 80 | 样式文件 |
| `js/main.js` | 25 | 主入口文件 |
| `js/canvas.js` | 9 | Canvas初始化 |
| `js/matrix.js` | 56 | 数字雨效果 |
| `js/lyrics.js` | 211 | 歌词显示逻辑 |
| `js/input.js` | 28 | 用户输入处理 |
| **总计** | **429** | - |

## 未来可能的改进

- [ ] 添加歌词播放控制（暂停/继续/跳过）
- [ ] 支持歌词文件导入（JSON/文本文件）
- [ ] 添加更多主题颜色选择
- [ ] 优化移动端触摸交互
- [ ] 添加歌词字体大小调节功能
- [ ] 支持歌词同步音乐播放

