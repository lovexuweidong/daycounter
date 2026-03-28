# DayCounter.pro - 海外纪念日倒计时工具站

## 项目简介
这是一个面向海外用户的纪念日/倒计时追踪工具站，支持：
- 正数日计算（Days Since）
- 倒计时计算（Countdown）
- 日期差计算
- 年龄计算器
- 日期加减计算

## 技术栈
- 纯静态 HTML/CSS/JS
- Tailwind CSS（CDN 引入，无需构建）
- 响应式设计（PC + 移动端自适应）
- 无后端依赖，可直接部署

## 项目结构
```
daycounter/
├── index.html          # 主页面（核心功能）
├── privacy.html        # 隐私政策（AdSense 必备）
├── terms.html          # 服务条款
├── about.html          # 关于页面
└── README.md           # 本文件
```

## 部署方式

### 方式一：Vercel 部署（推荐）
1. 登录 https://vercel.com
2. 点击 "New Project"
3. 上传整个 `daycounter` 文件夹
4. 点击 "Deploy"
5. 完成！获得免费 HTTPS 域名

### 方式二：微信云开发 Qcloud
1. 打开微信开发者工具
2. 新建「云开发」项目
3. 将 `daycounter` 文件夹所有文件复制到项目根目录
4. 上传部署

### 方式三：GitHub Pages
1. 创建 GitHub 仓库
2. 上传所有文件
3. Settings → Pages → 选择 main 分支
4. 等待自动部署

### 方式四：Netlify
1. 登录 https://netlify.com
2. 拖拽 `daycounter` 文件夹到上传区域
3. 自动部署完成

## Google AdSense 申请指南

### 前置条件
- ✅ 域名已上线（Vercel/Netlify 会自动分配域名）
- ✅ 隐私政策页面已就绪（privacy.html）
- ✅ 服务条款页面已就绪（terms.html）
- ✅ 网站内容完整（至少 3 个页面）
- ✅ Cookie 提示已实现

### 申请步骤
1. 访问 https://www.google.com/adsense
2. 使用 Google 账号登录
3. 添加网站信息：
   - 网站 URL：你的域名
   - 网站语言：English
   - 账户类型：个人
4. 填写收款信息：
   - 姓名：拼音（与身份证一致）
   - 地址：英文地址
   - 邮编、城市、国家
5. 提交审核

### 审核周期
- 通常 1-2 周
- 期间保持网站正常访问
- 不要频繁修改内容

### 审核通过后
1. 获取 AdSense 代码
2. 替换 HTML 中的广告占位符：
```html
<!-- 替换前 -->
<div class="ad-placeholder...">
    📢 Advertisement Space
</div>

<!-- 替换后 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXX"
     data-ad-slot="XXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## 域名购买建议

### 推荐平台
1. **Namecheap**（推荐）
   - 价格：$8.88/年（约 ¥64）
   - 支付：支付宝、微信
   - 免费隐私保护

2. **GoDaddy**
   - 价格：$11.99/年（约 ¥86）
   - 支付：支付宝
   - 知名度高

3. **Google Domains**
   - 价格：$12/年（约 ¥86）
   - 支付：信用卡
   - 简洁好用

### 推荐域名
- daycounter.pro
- mycountdown.io
- dayscounter.net
- anniversarytracker.com
- countdowndays.org

## 收款方式

### AdSense → 国内银行卡
1. **Payoneer**
   - 注册地址：https://www.payoneer.com
   - 费用：$1.5/笔
   - 支持国内银行卡提现

2. **万里汇（WorldFirst）**
   - 注册地址：https://www.worldfirst.com
   - 费率：1% 以内
   - 支持支付宝提现

3. **直接电汇**
   - 需要美元账户
   - 手续费较高
   - 不推荐

## SEO 优化建议

### 已实现
- ✅ 响应式设计
- ✅ 语义化 HTML
- ✅ Meta 描述标签
- ✅ 快速加载（纯静态）

### 待优化（上线后）
- [ ] 添加 Google Analytics
- [ ] 添加 sitemap.xml
- [ ] 添加 robots.txt
- [ ] 提交 Google Search Console
- [ ] 添加结构化数据（Schema.org）

## 收益预期

### 保守估计
- 1-3 个月：AdSense 审核通过
- 3-6 个月：$50-$200/月
- 6-12 个月：$200-$600/月
- 1 年以上：$800-$2000/月

### 影响因素
- 流量来源地区（美国 CPC 最高）
- 广告点击率
- 页面浏览量
- 季节性波动

## 常见问题

### Q: 需要备案吗？
A: 部署在海外服务器（Vercel/Netlify）不需要备案。

### Q: 需要公司注册吗？
A: 不需要，个人即可申请 AdSense。

### Q: 中文还是英文？
A: 面向海外用户，全英文界面。

### Q: 需要写文章吗？
A: 不需要，这是纯工具站。

## 下一步计划

### 功能扩展
- [ ] 本地存储事件（localStorage）
- [ ] 导出 ICS 日历文件
- [ ] 分享链接功能
- [ ] 自定义主题颜色
- [ ] 暗黑模式

### SEO 增强
- [ ] 添加更多计算器工具
- [ ] FAQ 页面
- [ ] 博客文章（可选）

## 联系方式
- Email: hello@daycounter.pro
- Website: https://daycounter.pro

---
© 2026 DayCounter.pro. All rights reserved.
