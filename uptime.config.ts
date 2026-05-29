// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "wrans's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/wayne0926', label: 'GitHub' },
    { link: 'https://wrans.top', label: 'Blog' },
    { link: 'mailto:wran@outlook.it', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  group: {
    '🌐 前台服务': ['wrans_blog', 'blog_lied_us', 'galleryliedus'],
    '🔐 私有服务': ['bitliedus', 'mail_lied_us', 'translate_lied_us', 'dyid_lied_us'],
    '📡 Xray': ['lax_vwc', 'lax_grpc8443', 'lax_grpc2087', 'lax_vision2053', 'lax_vision2096'],
    '📧 邮件服务': ['maddy_smtp', 'maddy_imap'],
    '🖥️ 服务器': ['server2_us'],
  },
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // ── 前台服务 ──
    {
      id: 'wrans_blog',
      name: 'wrans.top 博客',
      method: 'GET',
      target: 'https://wrans.top',
      tooltip: 'wrans.top 个人博客',
      statusPageLink: 'https://wrans.top',
    },
    {
      id: 'blog_lied_us',
      name: 'blog.lied.us',
      method: 'GET',
      target: 'https://blog.lied.us',
      tooltip: 'Ghost 博客',
      statusPageLink: 'https://blog.lied.us',
    },
    {
      id: 'galleryliedus',
      name: 'gallery.lied.us',
      method: 'GET',
      target: 'https://gallery.lied.us',
      tooltip: '图库',
      statusPageLink: 'https://gallery.lied.us',
    },

    // ── 私有服务 ──
    {
      id: 'bitliedus',
      name: 'Vaultwarden',
      method: 'GET',
      target: 'https://bit.lied.us',
      tooltip: 'Vaultwarden 密码管理',
      statusPageLink: 'https://bit.lied.us',
    },
    {
      id: 'mail_lied_us',
      name: 'mail.lied.us 网页邮件',
      method: 'GET',
      target: 'https://mail.lied.us',
      tooltip: 'Alps 网页邮件',
      statusPageLink: 'https://mail.lied.us',
    },
    {
      id: 'translate_lied_us',
      name: 'translate.lied.us 翻译',
      method: 'GET',
      target: 'https://translate.lied.us',
      tooltip: 'AI 翻译服务',
      statusPageLink: 'https://translate.lied.us',
    },
    {
      id: 'dyid_lied_us',
      name: 'dyid.lied.us 抖音ID',
      method: 'GET',
      target: 'https://dyid.lied.us',
      tooltip: '抖音ID提取器',
      statusPageLink: 'https://dyid.lied.us',
    },

    // ── Xray (TCP_PING) ──
    {
      id: 'lax_vwc',
      name: 'LAX-vwc',
      method: 'TCP_PING',
      target: 'server1.lied.us:2083',
      tooltip: 'LAX vwc :2083',
      timeout: 5000,
    },
    {
      id: 'lax_grpc8443',
      name: 'LAX-GRPC8443',
      method: 'TCP_PING',
      target: 'server1.lied.us:8443',
      tooltip: 'LAX gRPC :8443',
      timeout: 5000,
    },
    {
      id: 'lax_grpc2087',
      name: 'LAX-GRPC2087',
      method: 'TCP_PING',
      target: 'server1.lied.us:2087',
      tooltip: 'LAX gRPC :2087',
      timeout: 5000,
    },
    {
      id: 'lax_vision2053',
      name: 'LAX-Vision2053',
      method: 'TCP_PING',
      target: 'server1.lied.us:2053',
      tooltip: 'LAX Vision :2053',
      timeout: 5000,
    },
    {
      id: 'lax_vision2096',
      name: 'LAX-Vision2096',
      method: 'TCP_PING',
      target: 'server1.lied.us:2096',
      tooltip: 'LAX Vision :2096',
      timeout: 5000,
    },

    // ── 邮件服务 (TCP_PING) ──
    {
      id: 'maddy_smtp',
      name: 'Maddy SMTP',
      method: 'TCP_PING',
      target: 'server1.lied.us:587',
      tooltip: 'Maddy 提交端口 :587',
      timeout: 5000,
    },
    {
      id: 'maddy_imap',
      name: 'Maddy IMAP',
      method: 'TCP_PING',
      target: 'server1.lied.us:993',
      tooltip: 'Maddy IMAPS :993',
      timeout: 5000,
    },

    // ── 服务器 ──
    {
      id: 'server2_us',
      name: '服务器（洛杉矶）',
      method: 'TCP_PING',
      target: 'server1.lied.us:22',
      tooltip: '洛杉矶服务器 :22',
      timeout: 5000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    webhook: {
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
