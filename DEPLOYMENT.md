# 国内用户完整部署方案

## 第一步：域名购买

### 方案一：海外域名（推荐）
**平台：Namecheap**（支付宝可用）

1. 访问 https://www.namecheap.com
2. 搜索域名：`daycounter.pro` 或其他
3. 加入购物车，选择 1 年
4. 结账时选择 **Alipay（支付宝）**
5. 价格：约 $8.88/年（¥64）

**推荐域名：**
- daycounter.pro（专业感强）
- mycountdown.io（科技感）
- dayscounter.net（易记）
- anniversarytracker.com（直白）

### 方案二：国内域名（需备案）
**平台：阿里云/腾讯云**
- 支持：支付宝/微信支付
- 价格：¥50-80/年
- 缺点：需要 ICP 备案（15-30 天）

**我的建议：用 Namecheap + Vercel，完全不需要备案！**

---

## 第二步：部署到 Vercel（完全免费）

### 方法一：拖拽上传（最简单）

1. 访问 https://vercel.com
2. 点击 **Sign Up** → 用 GitHub 登录（没有就注册一个）
3. 登录后点击 **Add New...** → **Project**
4. 选择 **Import Git Repository** → 如果没有仓库，选 **Continue with a different repository**
5. 或者直接拖拽整个 `daycounter` 文件夹到页面
6. 点击 **Deploy**
7. 等待 30 秒，完成！

### 方法二：GitHub 仓库（推荐）

```bash
# 1. 创建 GitHub 账号（如果没有）
# 访问 https://github.com/signup

# 2. 创建新仓库
# 点击 New Repository
# 名称：daycounter
# 设为 Public（公开）

# 3. 上传文件
# 在仓库页面点击 "uploading an existing file"
# 拖拽 daycounter 文件夹所有文件
# 点击 Commit changes

# 4. 连接 Vercel
# 登录 Vercel → Import 你的 GitHub 仓库
# 自动部署，每次 push 代码都会自动更新
```

### Vercel 默认域名
部署成功后，你会获得免费域名：
```
your-project-name.vercel.app
```

**这个域名可以直接用于 AdSense 申请！**

---

## 第三步：绑定自定义域名（可选）

### 如果买了 Namecheap 域名：

1. 在 Vercel 项目页面点击 **Settings** → **Domains**
2. 输入你的域名：`daycounter.pro`
3. 点击 **Add**
4. Vercel 会给 DNS 记录，类似：
   ```
   A record: 76.76.21.21
   CNAME: cname.vercel-dns.com
   ```
5. 去 Namecheap 后台：
   - Domain List → 你的域名 → Manage
   - Advanced DNS → Add New Record
   - 添加 Vercel 提供的记录
6. 等待 5-30 分钟生效
7. 自动配置 HTTPS（免费 SSL）

---

## 第四步：Google AdSense 申请

### 准备工作检查清单
- ✅ 网站已上线（Vercel 域名可访问）
- ✅ 至少 3 个页面（首页、隐私政策、服务条款）
- ✅ Cookie 提示已实现
- ✅ 网站内容完整（功能可用）
- ✅ 支持多语言（加分项）

### 申请流程（详细步骤）

#### 1. 注册 AdSense
1. 访问 https://www.google.com/adsense
2. 点击 **Get Started**
3. 使用 Google 账号登录

#### 2. 填写账户信息
```
账户类型：个人
国家/地区：中国
时区：(GMT+08:00) 北京
地址：你的真实地址（拼音）
邮政编码：你的邮编
```

**地址填写示例：**
```
Name: ZHANG SAN
Address: Room 101, Building A, Sunshine Garden
City: Beijing
Province: Beijing
Postal Code: 100000
Country: China
```

#### 3. 添加网站
```
网站网址：https://your-project.vercel.app
网站语言：English
```

#### 4. 获取广告代码
Google 会给你一段代码，类似：
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

#### 5. 替换广告占位符
打开 `index.html`，找到广告占位符：
```html
<!-- 替换前 -->
<div class="ad-placeholder w-full h-16 md:h-20 flex items-center justify-center text-gray-400 text-sm">
    <span>📢 Advertisement Space</span>
</div>

<!-- 替换后 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

#### 6. 提交审核
- 等待 1-2 周
- Google 会发邮件通知审核结果
- 期间保持网站正常访问

### 审核通过率提升技巧
1. ✅ 网站至少运行 1 周再申请
2. ✅ 多语言支持（已实现）
3. ✅ 移动端适配（已实现）
4. ✅ 隐私政策完整（已实现）
5. ✅ 网站加载速度快（纯静态）
6. ✅ 无违规内容（纯工具站）

---

## 第五步：收款方式（国内可收美元）

### 方案一：Payoneer（推荐）

#### 注册 Payoneer
1. 访问 https://www.payoneer.com
2. 点击 **Register** → 个人账户
3. 填写信息：
   ```
   姓名：拼音（与身份证一致）
   地址：英文地址
   手机：+86 你的手机号
   ```

#### 绑定 AdSense
1. 登录 AdSense → 付款 → 添加付款方式
2. 选择 **银行转账**
3. 输入 Payoneer 提供的信息：
   ```
   银行名称：First Century Bank
   账户类型：Checking
   Routing Number：Payoneer 提供
   Account Number：Payoneer 提供
   ```

#### 提现到国内银行卡
1. Payoneer → 提现到银行
2. 添加国内银行卡（中国银行/工商银行等）
3. 提现手续费：1.2% 左右
4. 到账时间：1-3 个工作日

### 方案二：万里汇（WorldFirst）

#### 注册 WorldFirst
1. 访问 https://www.worldfirst.com
2. 选择 **个人账户**
3. 完成实名认证（需要身份证）

#### 绑定 AdSense
同 Payoneer 流程

#### 提现
- 支持支付宝提现
- 费率：0.3% 起
- 到账速度快

### 方案三：直接电汇（不推荐）
- 需要美元账户
- 手续费高（$15-30/笔）
- 部分银行不支持

---

## 收益预期（真实数据）

### 流量来源地区与 CPC（单次点击价格）
```
美国：$0.50 - $2.00
英国：$0.30 - $1.00
加拿大：$0.25 - $0.80
澳大利亚：$0.20 - $0.70
欧洲：$0.15 - $0.50
其他地区：$0.05 - $0.20
```

### 预估收益（保守）
```
日访问 100 人 × 2% 点击率 × $0.30 CPC = $0.60/天 = $18/月
日访问 500 人 × 2% 点击率 × $0.30 CPC = $3.00/天 = $90/月
日访问 1000 人 × 2% 点击率 × $0.30 CPC = $6.00/天 = $180/月
日访问 5000 人 × 2% 点击率 × $0.30 CPC = $30.00/天 = $900/月
```

### 实际案例（类似工具站）
- 3 个月：$50 - $200/月
- 6 个月：$200 - $600/月
- 1 年：$800 - $2000/月
- 长期：$1000 - $3000/月 很常见

---

## SEO 优化（免费流量）

### 已实现
- ✅ 响应式设计
- ✅ 快速加载（纯静态）
- ✅ 语义化 HTML
- ✅ Meta 描述

### 待优化（上线后）
```bash
# 1. 提交 Google Search Console
# 访问 https://search.google.com/search-console
# 添加网站验证所有权
# 提交 sitemap.xml

# 2. 添加 sitemap.xml
# 我可以帮你生成

# 3. 添加 robots.txt
# 我可以帮你生成

# 4. 添加 Google Analytics
# 免费流量分析工具
```

---

## 完整时间表

### Day 1（今天）
- [x] 网站代码完成
- [x] 多语言支持
- [ ] 部署到 Vercel
- [ ] 测试所有功能

### Day 2-3
- [ ] 购买域名（可选）
- [ ] 绑定自定义域名
- [ ] 添加 Google Analytics

### Week 1
- [ ] 提交 Google Search Console
- [ ] 网站 SEO 优化
- [ ] 准备 AdSense 申请资料

### Week 2
- [ ] 申请 Google AdSense
- [ ] 等待审核

### Week 3-4
- [ ] 审核通过，放置广告代码
- [ ] 开始积累流量

### Month 2-3
- [ ] 收益达到 $100 阈值
- [ ] 注册 Payoneer
- [ ] 绑定收款方式

### Month 4+
- [ ] 收益持续增长
- [ ] 收到第一笔付款

---

## 总成本

### 必需支出
```
域名（Namecheap）：¥64/年
Vercel 托管：免费
AdSense 申请：免费
Payoneer 注册：免费
```

### 可选支出
```
域名隐私保护：免费（Namecheap 送）
Google Workspace：不需要
SSL 证书：免费（Vercel 自动配置）
```

**总成本：¥64/年，约等于一杯咖啡的钱！**

---

## 常见问题

### Q: 不懂英文能做吗？
A: 可以！所有操作都是图形界面，浏览器可以自动翻译。

### Q: 没有海外银行卡怎么办？
A: 用 Payoneer 或 WorldFirst，国内银行卡就能收款。

### Q: 需要海外公司吗？
A: 不需要，个人即可申请 AdSense。

### Q: 需要备案吗？
A: 用 Vercel 托管不需要备案。

### Q: 多久能赚到钱？
A: AdSense 需要累积到 $100 才能提现，通常 3-6 个月。

### Q: 会封号吗？
A: 遵守 AdSense 政策（不点击自己的广告、不诱导点击）就不会。

---

## 下一步行动

**现在就可以做的：**
1. 部署到 Vercel（5 分钟）
2. 用 Vercel 免费域名测试网站
3. 注册 Payoneer（提前准备好）

**需要我帮你：**
- 生成 sitemap.xml？
- 生成 robots.txt？
- 添加 Google Analytics 代码？
- 优化 SEO？

告诉我你想先做什么！
