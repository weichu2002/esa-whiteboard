# 🎨 ESA AI Agent 白板 V7.0

<p align="center">
  <img src="https://img.shields.io/badge/阿里云-ESA-red" alt="阿里云ESA">
  <img src="https://img.shields.io/badge/Edge-Functions-blue" alt="边缘函数">
  <img src="https://img.shields.io/badge/AI-DeepSeek-green" alt="DeepSeek">
  <img src="https://img.shields.io/badge/实时协作-WebSocket-orange" alt="实时协作">
</p>

## ✨ 在线体验

- **阿里云 ESA 部署**：https://esa-whiteboard33.c4ec24f8.er.aliyun-esa.net
- **Vercel 备用部署**：https://esa-whiteboard.vercel.app

## 🚀 项目简介

**ESA AI Agent 白板 V7.0** 是基于阿里云边缘安全加速（ESA）构建的下一代智能协作白板平台。它将实时协作绘图与AI智能生成能力深度融合，通过边缘计算实现全球低延迟交互，为远程办公、在线教育、团队协作等场景提供了一站式可视化解决方案。<img width="7534" height="844" alt="图片" src="https://github.com/user-attachments/assets/bc0f9abb-1658-47f1-acc2-db0d3c0e3080" />


## 🌟 核心功能

### 🤝 实时协作
- 多人同时在线绘制，实时同步
- 无延迟的画笔、形状、文本同步
- 房间链接分享，一键邀请协作
- 离线缓存，断网重连自动同步

### 🧠 AI 智能生成
- **思维导图模式**：输入主题，AI自动生成完整思维导图结构
- **矢量绘图模式**：文字描述生成SVG矢量图形
- 支持自定义AI提示词和生成参数
- 实时预览和编辑AI生成内容

### 🛠️ 丰富工具集
- 基础绘图：画笔、橡皮、直线、箭头
- 几何形状：矩形、圆形、三角形、星形等
- 思维导图图章：中心主题、子节点、决策框等
- 文本编辑：自由文本框，支持字体大小颜色
- 图像插入：支持JPG/PNG/SVG格式

### 🎨 专业特性
- 多主题背景：网格、点阵、工程图、思维导图等
- 暗色/亮色主题切换
- 画布缩放平移（支持鼠标滚轮和抓手）
- 历史记录撤销重做
- 一键导出PNG图片

## 🏗️ 技术架构

### 前端技术栈
- **渲染引擎**：原生HTML5 Canvas，高性能绘图
- **UI框架**：纯CSS3 + 原生JavaScript，无框架依赖
- **实时通信**：Pusher WebSocket服务
- **AI集成**：DeepSeek-V3 API
- **部署适配**：智能平台检测，双平台兼容

### 后端架构
- **阿里云 ESA Pages**：全球CDN加速静态资源
- **阿里云边缘函数**：Serverless AI代理服务
- **环境变量**：安全存储API密钥
- **跨域处理**：自动CORS配置

### 边缘计算优势
- 🌍 **全球加速**：通过ESA全球节点就近访问
- ⚡ **低延迟**：边缘函数处理，响应时间<100ms
- 🔒 **安全可靠**：内置WAF和DDoS防护
- 💰 **成本优化**：按量计费，零运维成本

## 📦 部署说明

### 一键部署到阿里云 ESA
1. Fork 本仓库
2. 登录[阿里云ESA控制台](https://esa.console.aliyun.com/)
3. 创建Pages项目，连接GitHub仓库
4. 配置环境变量：`API_KEY=your_deepseek_key`
5. 点击部署，等待完成

### 本地开发
```bash
# 克隆项目
git clone https://github.com/weichu2002/esa-whiteboard.git

# 本地运行
# 直接打开index.html即可
