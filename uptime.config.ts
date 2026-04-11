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
    '🌐 Frontend Services': ['login_page', 'wrans_blog', 'galleryliedus'],
    '🔐 Private Services': ['mdliedus', 'weatherliedus', 'bitliedus'],
    '📡 Xray': ['lax_vwc', 'lax_grpc8443', 'lax_grpc2087', 'lax_vision2053', 'lax_vision2096'],
    '🖥️ Server': ['server_us', 'server2_us'],
  },
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // ── Frontend Services ──
    {
      id: 'login_page',
      name: 'xui面板',
      method: 'GET',
      target: 'https://xui.lied.us/wne66',
      tooltip: 'xui 面板登录页',
      statusPageLink: 'https://xui.lied.us/wne66',
    },
    {
      id: 'wrans_blog',
      name: 'wrans.top 博客',
      method: 'GET',
      target: 'https://wrans.top',
      tooltip: 'wrans.top 个人博客',
      statusPageLink: 'https://wrans.top',
    },
    {
      id: 'galleryliedus',
      name: 'gallery.lied.us',
      method: 'GET',
      target: 'https://gallery.lied.us',
      tooltip: 'gallery.lied.us',
      statusPageLink: 'https://gallery.lied.us',
    },

    // ── Private Services ──
    {
      id: 'mdliedus',
      name: 'md.lied.us 文档库',
      method: 'GET',
      target: 'https://md.lied.us',
      tooltip: 'Markdown 文档库',
      statusPageLink: 'https://md.lied.us',
    },
    {
      id: 'weatherliedus',
      name: 'weather.lied.us 天气',
      method: 'GET',
      target: 'https://weather.lied.us',
      tooltip: '天气服务',
      statusPageLink: 'https://weather.lied.us',
    },
    {
      id: 'bitliedus',
      name: 'Vaultwarden',
      method: 'GET',
      target: 'https://bit.lied.us',
      tooltip: 'Vaultwarden 密码管理',
      statusPageLink: 'https://bit.lied.us',
    },

    // ── Xray (TCP_PING) ──
    {
      id: 'lax_vwc',
      name: 'LAX-vwc',
      method: 'TCP_PING',
      target: 'server.lied.us:2083',
      tooltip: 'LAX vwc :2083',
      timeout: 5000,
    },
    {
      id: 'lax_grpc8443',
      name: 'LAX-GRPC8443',
      method: 'TCP_PING',
      target: 'server.lied.us:8443',
      tooltip: 'LAX gRPC :8443',
      timeout: 5000,
    },
    {
      id: 'lax_grpc2087',
      name: 'LAX-GRPC2087',
      method: 'TCP_PING',
      target: 'server.lied.us:2087',
      tooltip: 'LAX gRPC :2087',
      timeout: 5000,
    },
    {
      id: 'lax_vision2053',
      name: 'LAX-Vision2053',
      method: 'TCP_PING',
      target: 'server.lied.us:2053',
      tooltip: 'LAX Vision :2053',
      timeout: 5000,
    },
    {
      id: 'lax_vision2096',
      name: 'LAX-Vision2096',
      method: 'TCP_PING',
      target: 'server.lied.us:2096',
      tooltip: 'LAX Vision :2096',
      timeout: 5000,
    },

    // ── Server ──
    {
      id: 'server_us',
      name: '服务器（洛杉矶）',
      method: 'TCP_PING',
      target: 'server.lied.us:2083',
      tooltip: '洛杉矶服务器 :2083',
      timeout: 5000,
    },
    {
      id: 'server2_us',
      name: '服务器2（洛杉矶）',
      method: 'TCP_PING',
      target: 'server1.lied.us:443',
      tooltip: '洛杉矶服务器2 :443',
      timeout: 5000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
