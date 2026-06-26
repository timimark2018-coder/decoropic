# Decoropic 技术运维全景图

> 上线日期：2026-05-01
> 维护者：Kevin（佛山豪斯特进出口有限公司 CEO）
> 目的：日后处理网站相关问题时知道去哪个平台核实

---

## 一、平台清单 & 各自的角色

### 5 个平台分工

| 平台 | 角色 |
|------|------|
| GitHub | 代码仓库（你写的代码存这） |
| Vercel | 网站托管（把代码跑成网站） |
| 阿里云 DNS | 域名解析（告诉全世界 decoropic.com 在哪） |
| Resend | 发邮件服务（网站用它发 lead 通知） |
| 金山企业邮箱 | 收邮件（service@decoropic.com 收件用） |

### 数据流

```
客户 → 浏览器
   ↓ 输入 decoropic.com
阿里云 DNS（解析）
   ↓ 告诉浏览器去 216.198.79.1
Vercel（托管）
   ↓ 返回网站内容
客户填表单 → 提交
Vercel 后端
   ↓ 调用 Resend API
Resend
   ↓ 用 lead@decoropic.com 发邮件
金山邮箱 service@decoropic.com（收到）
```

二、域名层（最重要）
你的真实业务域名

域名: decoropic.com
注册商: 阿里云
DNS 服务商: 阿里云 云解析 DNS
域名状态: 免费版

出问题去哪查
问题平台域名续费 / 过期阿里云 域名注册控制台DNS 解析问题阿里云 云解析 DNS 控制台 https://dns.console.aliyun.com/
绝对不要做的事

⚠️ 不要让域名过期（建议自动续费）
⚠️ 不要随便删除阿里云 9 条 DNS 记录
⚠️ 修改 DNS 记录前先截图当前状态


三、阿里云 DNS 的 9 条记录
网站组（指向 Vercel）
#类型主机记录记录值作用1A@216.198.79.1访问 decoropic.com 时去 Vercel2CNAMEwww8c4c3a7435ea1c62.vercel-dns-017.com访问 www.decoropic.com 时去 Vercel
收信组（金山企业邮箱）
#类型主机记录记录值作用3MX@mail.ksomail.com（优先级 1）收 *@decoropic.com 邮件去金山服务器4TXT@v=spf1 include:spf-a.ksomail.com include:spf-b.ksomail.com -all金山的反垃圾验证5TXT@code_kingsoft=-k3kmse4o-xJxC_RSWTmD金山所有权验证
发信组（Resend）
#类型主机记录记录值作用6TXTresend._domainkeyp=MIGfMA0GCS...wIDAQABDKIM 签名密钥7TXTsendv=spf1 include:amazonses.com ~allResend envelope-from 子域 SPF8MXsendfeedback-smtp.us-east-1.amazonses.com（优先级 10）Resend 收退信用9TXT_dmarcv=DMARC1; p=none;DMARC 策略（监控不强制）
域名相关常见问题
问：网站打不开了
查：

浏览器访问 https://decoropic.vercel.app 看 Vercel 本身是否在工作

能访问 → DNS 问题，去阿里云检查
不能访问 → Vercel 问题，去 Vercel Dashboard 看部署状态


用 dig decoropic.com（让 Claude Code 跑）看 DNS 解析对不对
阿里云 DNS 控制台看 9 条记录是否还在

问：DNS 改了多久生效
答：5-30 分钟，全球完全传播 24 小时
问：要不要续费
答：阿里云域名一年一续，建议开自动续费
位置：阿里云 → 域名 → 我的域名 → 找 decoropic.com → 开启自动续费

四、网站托管层 — Vercel

平台: vercel.com
账号: GitHub OAuth 登录
项目名: decoropic
团队: timimark2018-coder's projects（个人）
计划: Hobby（免费）
区域: iad1（US East）
Node: 24.x

Vercel 上的 3 个域名
域名用途decoropic.vercel.appVercel 默认域名，永远工作decoropic.com你的主域名www.decoropic.com307 重定向到 decoropic.com
出问题去哪查
问题操作路径部署失败Vercel Dashboard → Deployments → 看红色那条 → 点 "View Build Logs"网站 500 错误Vercel Dashboard → Logs → 实时日志环境变量配错Vercel Dashboard → Settings → Environment Variables域名失效Vercel Dashboard → Settings → Domains
Vercel 环境变量（关键，等同于密码）
变量名当前值作用RESEND_API_KEYre_E***FsVP（敏感，已脱敏）调用 Resend API 发邮件用的密钥LEAD_FROM_EMAILDecoropic <lead@decoropic.com>发件人显示名LEAD_NOTIFICATION_EMAILservice@decoropic.comlead 通知发到这个邮箱（金山）
改环境变量步骤

Vercel Dashboard → 项目 decoropic → Settings → Environment Variables
找对应变量 → "..." → Edit → 改 Value → Save
然后必须 Redeploy 让新值生效（Deployments → 最新一条 → "..." → Redeploy）

⚠️ Sensitive 标记的变量看不到旧值，只能新增覆盖。建议本地 .env.local 里有备份。
Resend API Key 泄露处理
如果 API Key 不小心暴露（比如截图里 / GitHub 里）：

立刻去 Resend Dashboard → API Keys → 撤销旧 Key
生成新 Key
Vercel 改 RESEND_API_KEY 用新 Key
Redeploy


五、代码层 — GitHub

平台: github.com
账号: timimark2018-coder
仓库: decoropic（私有）
URL: https://github.com/timimark2018-coder/decoropic

认证方式

PAT（Personal Access Token）
存储：macOS Keychain（钥匙串）
权限：Contents: Read+Write
有效期：你设置的（建议 1 年）

出问题去哪查
问题操作git push 报错认证失败PAT 过期或被撤销，去 https://github.com/settings/tokens 重新生成，然后 git credential approve（让 Claude Code 帮你做）误删除文件git checkout -- 文件名 恢复想看历史git log（让 Claude Code 帮你）
工作流
标准工作流：

在 Claude AI 这里聊战略 / 设计 / 决策
把指令转发给 Claude Code（你电脑终端）
Claude Code 执行（看代码 / 改代码 / 测试）
Claude Code 用 ask_user_input_v0 让你确认
你确认后 Claude Code commit + push
Vercel 自动检测 push → redeploy
你浏览器验证 https://decoropic.com

关键文件位置（你电脑）

项目根目录：/Users/Administrator/Documents/decoropic
环境变量：.env.local（不进 git）
环境变量示范：.env.example（进 git，是文档）
Next.js 配置：next.config.mjs
Tailwind 配置：tailwind.config.ts
邮件发送：lib/email/send-lead-notification.ts
Lead 持久化：services/lead-capture.ts
首页：components/home/*


六、邮件层
Resend（发件方）

平台: resend.com
账号: OAuth 登录
计划: Free（免费）
已验证域名: decoropic.com（根域）

当前发件配置：

From: Decoropic <lead@decoropic.com>
Reply-To: service@decoropic.com

出问题去哪查
问题操作客户没收到邮件Resend Dashboard → Logs（看每封邮件状态），message id 形如 3d5d110d-81b1-4e23...域名验证失败Resend Dashboard → Domains → decoropic.com，看哪条 DNS 记录失败 → 回阿里云检查那条发件被拒（403）发件域和验证域不匹配，只能用已验证域名 @decoropic.com
免费额度

每天 100 封 / 每月 3000 封
业务量初期肯定够，超过了再升级

金山企业邮箱（收件方）

平台: mail.ksomail.com
管理员邮箱: 你设的（service@decoropic.com 等）
用途: 收客户回复 + 收 Resend lead 通知

出问题去哪查
问题操作收不到 lead 通知1. Resend Dashboard 看那封邮件状态：Delivered → 是金山的问题；Bounced / Failed → 是发送问题。2. 金山邮箱后台看垃圾箱。3. 金山邮箱后台看反垃圾规则。邮箱续费金山企业邮箱后台（也是按年续费）

七、出问题的诊断顺序
"网站打不开"
第 1 步：访问 https://decoropic.vercel.app

能访问 → DNS 问题（去阿里云）
不能访问 → Vercel 问题

第 2 步：Vercel Dashboard → Deployments

最新一条状态：

Ready → 部署成功，是别的问题
Error → 看 Build Logs
Building → 在构建，等 3-5 分钟



第 3 步：Vercel Dashboard → Logs
看实时错误日志
"客户提交后没收到邮件"
第 1 步：Resend Dashboard → Logs
找最近的提交对应的邮件

状态 Delivered → 是金山接收问题
状态 Bounced → 邮箱地址写错了
没记录 → 后端代码没调用 Resend → 看 Vercel Logs 找 API 错误

第 2 步：金山邮箱垃圾箱
有时候新发件人会被判垃圾
第 3 步：检查环境变量
Vercel → Settings → Environment Variables
确认 LEAD_FROM_EMAIL / RESEND_API_KEY / LEAD_NOTIFICATION_EMAIL 都对
"邮件 From 显示错误"
去 Vercel 检查 LEAD_FROM_EMAIL 环境变量。改完必须 Redeploy。
"Decoropic 字号偏大"
不是 Decoropic 问题，是 Chrome 浏览器问题（用 Edge / Safari 看是正常的）。
检查 Chrome → Settings → Appearance → Font size: Medium

八、敏感信息位置（自己保存好）
千万不要在聊天里贴出来的

RESEND_API_KEY（在 Vercel 环境变量 + 你 .env.local）
GitHub PAT（在 macOS Keychain）
阿里云账号 + 密码（你自己脑子里）
Vercel 账号（GitHub OAuth）
金山邮箱密码

建议
用 1Password / Bitwarden / Apple 钥匙串统一管理这些密码。
不要写在记事本 / Word 文档里。

九、月度维护建议
每月做的事（10 分钟）

看 Vercel Dashboard → Analytics（流量怎么样、有没有报错）
看 Resend Dashboard → Logs（邮件发送状况、有没有大量 Bounce / Failed）
看 Vercel Dashboard → Deployments（有没有失败的部署）

每季度做的事

阿里云 → 域名 → 续费状态（开自动续费就免心）
GitHub → Settings → PAT 检查是否快过期
Vercel → Settings → Domains → SSL 证书状态（自动续期，看一眼即可）
金山邮箱续费状态

紧急情况清单
Vercel 出问题且不会修：
临时回滚 → Vercel Dashboard → Deployments → 找上一个 Ready 的部署 → "..." → Promote to Production
阿里云 DNS 误改了：
临时回滚 → 阿里云 DNS → 操作日志 → 找改之前的状态 → 手动恢复
（阿里云有 30 天操作日志）
Resend Key 泄露：
立刻去 Resend → API Keys → Revoke 旧的 → 生成新的 → Vercel 改环境变量 → Redeploy

十、最重要的一条
不动就不会坏
Decoropic 现在的配置已经稳定运行。
不要：

没事别去阿里云 DNS 删记录
没事别去 Vercel 删环境变量
没事别去 Resend 删域名

要改任何东西之前：

先在 Claude AI 这里聊清楚要改什么、为什么改
截图当前状态备份
一次只改一个地方
改完立刻测试
出问题立刻回滚


附录：上线时间线
日期战役内容2026-05-01战役 17next.config.mjs 修复（commit 9b3d2ef）2026-05-01战役 18 P3Vercel 文件系统兼容（commit 2100698）2026-05-01战役 18 P3.1catch-all 容错（commit 60eb6c9）2026-05-01战役 18 P5邮件保证送达 await（commit c799015）2026-05-01上线https://decoropic.com 公开访问2026-05-01战役 19 P2Resend 根域发件 lead@decoropic.com（commit 2f0a4c6）

---

## 附录二：产品决策记录

### estimator 11 题 vs 6 题（待讨论，未决）

首页预算测算器当前 11 题（q1-q11）。
未来可能精简到 6 题，但需先决定：
- 砍哪 5 题
- 是否影响 lead 质量
- A/B 测试还是直接改

不是"残留清理"问题，而是产品设计决策。
留待业务负责人重新评估后再启动。

---

文档结束。
