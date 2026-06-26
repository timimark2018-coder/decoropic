# Decoropic 设计哲学

> Decoropic 是什么样的网站，以及为什么它是那样
> 用作姊妹项目（如 usedcarbase）借鉴和判断的参考

---

## 一、一句话定位

Decoropic 是一个让加纳客户在线上"感觉自己被认真对待"的建材与室内装修服务网站。
不像电商，不像目录，更像一份杂志专栏。

---

## 二、视觉哲学

### 1. Editorial（杂志感）

不是"商城"，是"专栏"。

- 衬线字（Playfair Display）做大标题
- 大量留白，让内容呼吸
- 章节式叙事："Chapter 01 — The Whole Home"
- 序号编号（01 / 02 / 03）取代干巴巴的标题

参考调性：纽约时报杂志、Apartamento、Cereal Magazine

### 2. 节制的色彩

只用 4 个颜色：

- 深绿 #1f4a3a（主品牌色，沉稳）
- 金色 #ae9260（强调色，精致）
- 米色 #f7f3ec（背景，温暖）
- 深米 #efe7d9（次背景，层次）

不引入新色。所有 hover / 高亮都在这 4 色内做组合。

### 3. 流体字号 clamp()

字号不靠断点（lg/xl/2xl）切换。
用 clamp(min, vw, max) 跟着 viewport 平滑变化。
任何屏幕都协调。

例：clamp(2.5rem, 5vw, 5.5rem)
mobile 撞 min，桌面撞 max，中间区间流体。

### 4. 留白多于装饰

没有花哨的渐变、阴影、动画。
留白本身就是设计。
Apple / Stripe 是这种思路的世界级例子。

---

## 三、内容哲学

### 1. 节制叙事，不堆砌

不写 "我们提供 N 种服务，N+1 个保障，N+2 个流程"。
写一个核心承诺，然后展开。

例：
- "We measure before we quote."（一句话承诺）
- "Drawings lie. Sites tell the truth."（一句话理由）
- 不写 10 条优势

### 2. 第一人称 + 慢承诺

"We"（我们）讲故事，不"the company offers..."（公司提供...）。
"慢承诺"：先承认困难（drawings lie / 客户不知道砍多少题），再讲解决。
建立信任的方式不是"我们最强"，而是"我们诚实"。

### 3. 加纳本地化

不是"我们是中国公司，做加纳生意"。
是"我们扎根 Accra / Kumasi / Tamale，了解本地"。
- Accra 现场测量
- Kumasi 详情页（已做）
- 加纳 cedi（GHS）货币
- 双语（英文为主，中文辅助，因为加纳客户说英文）

### 4. 编号节制

如果流程是 6 步，写 6。
不是"为了显得专业"凑成 11 步。
内部 estimator 是 11 题，但外部叙事可能只展示 6 个核心。

---

## 四、技术哲学

### 1. Next.js（不是 WordPress）

理由：
- 自己写，完全控制
- 不被插件绑架
- 性能高（服务器组件 + 静态生成）
- 构建一次部署到全球边缘
- 邮件链路 / API 路由都自己写
- 长期可维护

代价：要写代码（但用 Claude Code 协作）

### 2. Vercel（不是自建服务器）

理由：
- 零配置部署
- 全球 CDN
- 自动 SSL
- iad1 区域（与 Resend 同区，邮件快）
- Hobby 计划免费够用

### 3. Resend（专业事务邮件）

理由：
- 域名验证（DKIM/SPF/DMARC）
- 99% 投递率
- 不去垃圾箱
- 用根域 lead@decoropic.com 发件

### 4. 阿里云 DNS（继承自原域名）

不动它。9 条 DNS 记录管 3 件事：
- Vercel 网站（A + CNAME）
- 金山邮箱（MX + 2 TXT）
- Resend 发件（DKIM + SPF + MX + DMARC）

### 5. 不重型化

不上 Database。Lead 通过邮件发出。
不上 CMS。内容写在 TypeScript 文件里。
不上 Analytics（暂时）。
保持极简，每加一个工具有充分理由。

---

## 五、可迁移到 usedcarbase 的部分

下面这些可以直接借鉴。

### 1. ✅ 节制叙事

二手车也讲一个核心承诺。
不是"我们有 1000 辆车"。
而是"每一辆我们都亲眼看过"。

### 2. ✅ Editorial 排版

不是车型卡片九宫格挤满首页。
是"本周精选" / "这台车的故事" / 单页讲深一辆。

### 3. ✅ 留白哲学

二手车通常网站塞满信息（年份/里程/价格/参数）。
反其道：留白 + 大图 + 一句话故事。
让客户"感觉这台车被认真对待"。

### 4. ✅ 加纳本地化

加纳进口二手车有自己的关切：
- 路况（适合 SUV / 高底盘）
- 燃料（柴油 vs 汽油）
- 海关（清关知识）
- 服务（在 Accra 哪里维修）

写这些 = 比"全球库存最大"更有信任感。

### 5. ✅ 第一人称 + 慢承诺

"We inspect every car in Foshan before shipping."
"We meet you in Accra to handover."
不是"专业团队为您服务"。

### 6. ✅ 技术栈

如果 usedcarbase 想升级到 Next.js + Vercel：
- 同样的部署流程可复用
- 同样的 Resend 邮件链路可复用
- 同样的 DECOROPIC_OPS_GUIDE.md 文档结构可借鉴

### 7. ✅ 双语策略

英文为主（加纳客户）+ 中文辅助。

---

## 六、不能照搬到 usedcarbase 的部分

下面这些不要照抄，二手车需要不同的表达。

### 1. ❌ 衬线字体（Playfair Display）

衬线字是 editorial 调性，但是"慢"。
二手车要"信任 + 性能"，需要更现代的 sans-serif。
推荐：Inter / Söhne / Helvetica Now / Neue Haas Grotesk

### 2. ❌ 米色背景

米色是装修的"温暖家居感"。
二手车不适合。
推荐：黑色 #0a0a0a 或纯白 #ffffff 或深灰 #1a1a1a。
顶级汽车品牌（Porsche / McLaren / Bentley）多用纯黑或纯白。

### 3. ❌ 金色 + 深绿品牌色

这是建材的色。
二手车的色应该来自：
- 金属质感（银 / 铬 / 铝）
- 一抹强调色（车漆红 / 蓝 / 黄）
- 黑白对比

### 4. ❌ 章节式叙事

Decoropic "Chapter 01" 适合慢思考的家装。
二手车决策更快，需要：
- 数据立刻呈现（年份/里程/价格放大）
- 但配图保持高质量
- 数据 + 杂志感的混合

### 5. ❌ 流程页 6 步

装修流程长，6 步说得通。
二手车流程短：看车 → 出价 → 提车。
不要凑步骤显得"专业"。

### 6. ❌ Decoropic 的复杂 estimator

二手车不需要 11 题预算测算器。
客户需要的是"快速找到车"。
搜索 + 筛选 + 对比 + 联系 = 主流程。

### 7. ❌ "We measure before we quote" 这种语言

太"装修味"。
二手车需要的承诺：
- "Every car inspected in Foshan."
- "Your handover, in Accra."
- "No surprises at clearance."
（基于车的痛点）

---

## 七、参考网站（用作 usedcarbase 灵感）

不是要 copy，是要"取其味"。

### 极简奢华派
- porsche.com
- mclaren.com  
- bentleymotors.com

### Editorial 长文派（这条最重要）
- bringatrailer.com（拍卖二手车，巨大的 editorial 长文 + 高质量图）
- collectingcars.com（同上，英国版）
- rmsothebys.com（拍卖行）

### 数据驱动派
- carwow.co.uk
- kbb.com
- edmunds.com

### 推荐组合
Bring a Trailer 的 editorial 长文质感 + Porsche 的留白 + KBB 的数据可信度。

---

## 八、最重要的一条

Decoropic 是"对的事情，慢慢做"。

不堆砌、不夸张、不做假大空。
用真实的细节、节制的语言、克制的设计建立信任。

这个底层逻辑可以搬到任何项目，包括 usedcarbase。
但具体的字体、颜色、排版要重新做，因为不同行业有不同的视觉语言。

慢做，做对。

---

## 附录：Decoropic 当前状态

- 上线：https://decoropic.com
- 仓库：https://github.com/timimark2018-coder/decoropic（Private）
- 部署：Vercel Hobby
- 邮件：Resend，发件 lead@decoropic.com
- 总 commit：57+ 次（迭代细致）
- 完整运维文档：DECOROPIC_OPS_GUIDE.md

---

文档完。
