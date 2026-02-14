import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "服务运行状态",
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
  group: {
    "前端服务": ["frontend_api", "landing_page", "login_page", "wrans_blog"],
    "后端API": ["user_service", "payment_service", "stockapi_lied_us"],
    "私有服务": ["internal_db", "admin_panel", "chat_lied_us", "md_lied_us", "weather_lied_us", "shouxin_lied_us", "bit_lied_us"],
    "Xray": ["lax_vwc_2083", "lax_grpc_8443", "lax_grpc_2087", "lax_vision_2053", "lax_vision_2096"],
    "服务器": ["server_us"]
  }
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,

  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    // webhook: {
    //   url: 'https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage',
    //   method: 'POST',
    //   payloadType: 'json',
    //   payload: {
    //     chat_id: '<YOUR_CHAT_ID>',
    //     text: '$MSG',
    //   },
    // },
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5
  },

  monitors: [
    // 前端服务
    {
      id: 'login_page',
      name: 'xui面板',
      method: 'GET',
      target: 'https://xui.lied.us/wne66',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: 'Welcome'
    },
    {
      id: 'wrans_blog',
      name: 'wrans.top 博客',
      method: 'GET',
      target: 'https://wrans.top',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: 'My Space'
    },

    // 后端API
    {
      id: 'stockapi_lied_us',
      name: 'stockapi',
      method: 'GET',
      target: 'https://stockapi.lied.us',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: 'Available endpoints'
    },

    // 私有服务
    {
      id: 'chat_lied_us',
      name: 'chat.lied.us (LobeChat)',
      method: 'GET',
      target: 'https://chat.lied.us',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: 'lobe'
    },
    {
      id: 'md_lied_us',
      name: 'md.lied.us 文档库',
      method: 'GET',
      target: 'https://md.lied.us',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: 'Documents'
    },
    {
      id: 'weather_lied_us',
      name: 'weather.lied.us 天气',
      method: 'GET',
      target: 'https://weather.lied.us',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: '预测天数'
    },
    {
      id: 'shouxin_lied_us',
      name: 'shouxin.lied.us 生成工具',
      method: 'GET',
      target: 'https://shouxin.lied.us',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: '生成结果'
    },
    {
      id: 'bit_lied_us',
      name: 'Vaultwarden',
      method: 'GET',
      target: 'https://bit.lied.us',
      expectedCodes: [200],
      timeout: 10000,
      responseKeyword: 'Vaultwarden'
    },

    // Xray
    {
      id: 'lax_vwc_2083',
      name: 'LAX-vwc',
      method: 'TCP_PING',
      target: 'server.lied.us:2083',
      timeout: 5000
    },
    {
      id: 'lax_grpc_8443',
      name: 'LAX-GRPC8443',
      method: 'TCP_PING',
      target: 'server.lied.us:8443',
      timeout: 5000
    },
    {
      id: 'lax_grpc_2087',
      name: 'LAX-GRPC2087',
      method: 'TCP_PING',
      target: 'server.lied.us:2087',
      timeout: 5000
    },
    {
      id: 'lax_vision_2053',
      name: 'LAX-Vision2053',
      method: 'TCP_PING',
      target: 'server.lied.us:2053',
      timeout: 5000
    },
    {
      id: 'lax_vision_2096',
      name: 'LAX-Vision2096',
      method: 'TCP_PING',
      target: 'server.lied.us:2096',
      timeout: 5000
    },

    // 服务器
    {
      id: 'server_us',
      name: '服务器（洛杉矶）',
      method: 'GET',
      target: 'http://server.lied.us',
      timeout: 10000,
    }
  ],

  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 状态变化时触发
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 故障持续时每分钟触发
    },
  },
}

const maintenances: MaintenanceConfig[] = []

export { pageConfig, workerConfig, maintenances }
