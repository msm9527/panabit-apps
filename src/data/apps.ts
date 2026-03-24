import { MSM_LINKS, MSM_RELEASE_DATE, MSM_RELEASE_TAG } from './msm';

export interface DownloadLink {
  architecture: 'arm64' | 'x86' | 'universal';
  url: string;
  size: string;
}

export interface UpdateRecord {
  version: string;
  date: string;
  changes: string[];
}

export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  author: string;
  publishDate: string;
  lastUpdate: string;
  version: string;
  category: string;
  tags: string[];
  downloads: DownloadLink[];
  updateHistory: UpdateRecord[];
}

// 获取应用图标路径（引用本仓库 public/apps/{id}/icon.png）
// 使用相对路径以兼容 GitHub Pages
export function getAppIconPath(id: string): string {
  return `apps/${id}/icon.png`;
}

// 获取应用下载路径（引用本仓库 public/apps/{id}/downloads/）
export function getAppDownloadPath(id: string, filename: string): string {
  return `apps/${id}/downloads/${filename}`;
}

export const apps: App[] = [
  {
    id: 'panabit-msm',
    name: 'MSM 管理中心',
    description: 'MSM 是面向网络与系统场景的管理平台，这里提供文档、Beta 版本下载，以及直达 Web 管理界面的集成入口。',
    icon: 'apps/panabit-msm/icon.svg',
    author: 'msm9527',
    publishDate: '2026-03-24',
    lastUpdate: MSM_RELEASE_DATE,
    version: MSM_RELEASE_TAG,
    category: '系统工具',
    tags: ['管理平台', 'DNS', '广告拦截', '网络优化', '分流'],
    downloads: [
      { architecture: 'x86', url: MSM_LINKS.amd64, size: '20.3 MB' },
      { architecture: 'arm64', url: MSM_LINKS.arm64, size: '18.6 MB' },
    ],
    updateHistory: [
      { version: MSM_RELEASE_TAG, date: MSM_RELEASE_DATE, changes: ['美化重启服务全屏弹窗', '统一重启服务流程', '修正用户菜单问题'] },
    ],
  },
  {
    id: 'panabit-adguard-home',
    name: 'AdGuard Home',
    description: '免费开源、功能强大的全网广告和追踪器拦截 DNS 服务器。',
    icon: getAppIconPath('panabit-adguard-home'),
    author: 'defawong',
    publishDate: '2026-02-26',
    lastUpdate: '2026-03-02',
    version: '20260302.184349',
    category: '网络工具',
    tags: ['DNS', '广告拦截', '隐私保护'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-adguard-home', 'panabit-adguard-home-arm64-20260302.184349.apx'), size: '9.6 MB' },
      { architecture: 'x86', url: getAppDownloadPath('panabit-adguard-home', 'panabit-adguard-home-amd64-20260302.184349.apx'), size: '10.9 MB' },
    ],
    updateHistory: [
      { version: '20260302.184349', date: '2026-03-02', changes: ['更新 AdGuard Home 核心版本', '支持一键重置'] },
      { version: '20260226.183113', date: '2026-02-26', changes: ['初始发布', '支持 arm64 和 x86 架构'] },
    ],
  },
  {
    id: 'panabit-smartdns',
    name: 'SmartDNS',
    description: 'SmartDNS 是一个本地 DNS 服务器，通过获取最快的网站 IP 地址，为用户提供最佳的上网体验。支持 DoH、DoT、DoQ 等加密 DNS 协议。',
    icon: getAppIconPath('panabit-smartdns'),
    author: 'defawong',
    publishDate: '2026-02-26',
    lastUpdate: '2026-02-26',
    version: '20260226.194409',
    category: '网络工具',
    tags: ['DNS', '分流', '网络优化'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-smartdns', 'panabit-smartdns-arm64-20260226.194409.apx'), size: '1.9 MB' },
      { architecture: 'x86', url: getAppDownloadPath('panabit-smartdns', 'panabit-smartdns-amd64-20260226.194410.apx'), size: '2.0 MB' },
    ],
    updateHistory: [
      { version: '20260226.194409', date: '2026-02-26', changes: ['初始发布', '支持 arm64 和 x86 架构', '集成 SmartDNS 核心功能'] },
    ],
  },
  {
    id: 'panabit-relay',
    name: '直播网关',
    description: '直播网关，适用于RTMP直播推流和远程拉流本地分发场景，实现公网单播源局域网内单播、组播分发，节省带宽',
    icon: getAppIconPath('panabit-relay'),
    author: 'defawong',
    publishDate: '2026-01-03',
    lastUpdate: '2026-03-05',
    version: '20260305.215400',
    category: '网络工具',
    tags: ['中继', 'RTMP', '负载均衡', '推流', '拉流'],
    downloads: [
      { architecture: 'universal', url: getAppDownloadPath('panabit-relay', 'panabit-relay-20260305.215400.apx'), size: '3.7 MB' },
    ],
    updateHistory: [
      { version: '20260305.215400', date: '2026-03-05', changes: ['修复应用禁用后定时任务未退出', '禁用组播功能'] },
      { version: '20260113.170333', date: '2026-01-13', changes: ['支持拉黑客户端', '修复内存泄漏问题'] },
      { version: '20260108.175500', date: '2026-01-08', changes: ['优化分类展示', '支持音画同步开关'] },
    ],
  },
  {
    id: 'panabit-dynamic-sync',
    name: 'Dynamic Sync 动态同步',
    description: 'Dynamic Sync 提供域名群组和 IP 群组动态同步功能，支持从外部源自动更新域名列表和 IP 分组信息，适用于动态 IP 和域名管理场景。',
    icon: getAppIconPath('panabit-dynamic-sync'),
    author: 'defawong',
    publishDate: '2026-03-04',
    lastUpdate: '2026-03-05',
    version: '20260305.112625',
    category: '系统工具',
    tags: ['同步', '动态域名', '自动化'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-dynamic-sync', 'panabit-dynamic-group-sync-arm64-20260305.112624.apx'), size: '2.4 MB' },
      { architecture: 'x86', url: getAppDownloadPath('panabit-dynamic-sync', 'panabit-dynamic-group-sync-amd64-20260305.112625.apx'), size: '2.7 MB' },
    ],
    updateHistory: [
      { version: '20260305.112625', date: '2026-03-05', changes: ['新增 IP 群组动态组同步功能', '优化同步性能'] },
      { version: '20260304.194747', date: '2026-03-04', changes: ['初始发布', '域名动态同步功能'] },
    ],
  },
  {
    id: 'panabit-iperf3',
    name: 'iPerf3 网络测速',
    description: 'iPerf3 是网络性能测试工具，用于测量网络带宽和网络质量。支持 TCP、UDP 和 SCTP 协议，可用于测试网络吞吐量、丢包率和抖动。',
    icon: getAppIconPath('panabit-iperf3'),
    author: 'defawong',
    publishDate: '2026-01-09',
    lastUpdate: '2026-01-09',
    version: '20260109.190452',
    category: '网络工具',
    tags: ['测速', '性能测试', '网络诊断'],
    downloads: [
      { architecture: 'universal', url: getAppDownloadPath('panabit-iperf3', 'panabit-iperf3-20260109.190452.apx'), size: '155 KB' },
    ],
    updateHistory: [
      { version: '20260109.190452', date: '2026-01-09', changes: ['初始发布', '集成 iPerf3 核心功能', 'Universal 架构支持'] },
    ],
  },
  {
    id: 'panabit-ddns-go',
    name: 'DDNS-GO',
    description: '一个 Panabit 智能应用网关插件，可在不开启 SSH 的条件下为用户安装和维护 jeessy2/ddns-go，实现动态域名解析功能。',
    icon: getAppIconPath('panabit-ddns-go'),
    author: 'szu17dmy',
    publishDate: '2023-12-22',
    lastUpdate: '2024-11-28',
    version: '0.0.2-rc2',
    category: '网络工具',
    tags: ['DDNS', '动态域名', 'DNS'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-ddns-go', 'panabit-ddns-go-arm64.tar.gz'), size: '7.2 MB' },
      { architecture: 'x86', url: getAppDownloadPath('panabit-ddns-go', 'panabit-ddns-go-amd64.tar.gz'), size: '7.9 MB' },
    ],
    updateHistory: [
      { version: '0.0.2-rc2', date: '2024-11-28', changes: ['修复 x86 VM 上更新证书失败的问题', '支持 ax40-10k 及其他型号'] },
      { version: '0.0.2-rc1', date: '2023-12-22', changes: ['支持 linux/amd64 架构', '升级 ddns-go 到 5.7.1'] },
    ],
  },
  {
    id: 'panabit-stun',
    name: 'STUN NAT 穿透',
    description: '实现 NAT1 宽带网络的 NAT 穿透，提供近似于公网 IP 的体验',
    icon: getAppIconPath('panabit-stun'),
    author: 'defawong',
    publishDate: '2026-03-07',
    lastUpdate: '2026-03-07',
    version: '20260307.024435',
    category: '网络工具',
    tags: ['STUN', 'NAT1', '端口映射', '穿透'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-stun', 'panabit-stun-arm64-20260307.024435.apx'), size: '1.3 MB' },
      { architecture: 'x86', url: getAppDownloadPath('panabit-stun', 'panabit-stun-amd64-20260307.024435.apx'), size: '1.4 MB' },
    ],
    updateHistory: [
      { version: '20260307.024435', date: '2026-03-07', changes: ['初始发布', '实现 NAT 穿透'] },
    ],
  },
  {
    id: 'panabit-split-tunnel-testing',
    name: 'Split Tunnel 分流测试',
    description: '用于测试和验证路由策略，检查不同出站路径使用的 IP 地址',
    icon: getAppIconPath('panabit-split-tunnel-testing'),
    author: 'unizhu',
    publishDate: '2026-03-07',
    lastUpdate: '2026-03-07',
    version: '0.1',
    category: '网络工具',
    tags: ['分流', '路由测试', '策略验证'],
    downloads: [
      { architecture: 'arm64', url: getAppDownloadPath('panabit-split-tunnel-testing', 'splitunnel-arm64-v0.1.apx'), size: '787 KB' },
    ],
    updateHistory: [
      { version: '0.1', date: '2026-03-07', changes: ['初始发布', '支持 arm64 架构', '路由策略测试功能'] },
    ],
  },
];

export const categories = ['全部', '网络工具', '系统工具', '监控工具', '安全工具', '分析工具'];
