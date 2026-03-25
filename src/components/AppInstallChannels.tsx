import type { InstallChannel } from '../data/apps';

interface AppInstallChannelsProps {
  channels: InstallChannel[];
}

const channelStyles = {
  stable: {
    background: 'rgba(125, 211, 252, 0.08)',
    border: 'rgba(125, 211, 252, 0.18)',
    badgeBackground: 'rgba(125, 211, 252, 0.14)',
    badgeColor: '#7dd3fc',
  },
  beta: {
    background: 'rgba(251, 191, 36, 0.08)',
    border: 'rgba(251, 191, 36, 0.18)',
    badgeBackground: 'rgba(251, 191, 36, 0.14)',
    badgeColor: '#fbbf24',
  },
  default: {
    background: 'rgba(255, 255, 255, 0.04)',
    border: 'rgba(255, 255, 255, 0.08)',
    badgeBackground: 'rgba(255, 255, 255, 0.08)',
    badgeColor: '#e5e7eb',
  },
} as const;

function resolveChannelStyle(tone: InstallChannel['tone']) {
  if (tone === 'stable') {
    return channelStyles.stable;
  }

  if (tone === 'beta') {
    return channelStyles.beta;
  }

  return channelStyles.default;
}

function InstallLinkButton({ link, tone }: { link: InstallChannel['links'][number]; tone: InstallChannel['tone'] }) {
  const style = resolveChannelStyle(tone);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105"
      style={{
        background: style.badgeBackground,
        border: `1px solid ${style.border}`,
        color: style.badgeColor,
      }}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8L10 18m-6-5v5h5" />
      </svg>
      <span>{link.label}</span>
      {link.size ? <span className="text-[var(--color-text-muted)]">({link.size})</span> : null}
    </a>
  );
}

function InstallChannelCard({ channel }: { channel: InstallChannel }) {
  const style = resolveChannelStyle(channel.tone);

  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: style.background,
        border: `1px solid ${style.border}`,
      }}
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-white">{channel.name}</div>
        <span
          className="rounded-full px-2 py-1 text-xs font-mono"
          style={{
            background: style.badgeBackground,
            color: style.badgeColor,
          }}
        >
          {channel.version}
        </span>
      </div>
      <p className="mb-3 text-xs leading-6 text-[var(--color-text-muted)]">{channel.note}</p>
      <div className="flex flex-wrap gap-2">
        {channel.links.map((link) => (
          <InstallLinkButton key={link.label} link={link} tone={channel.tone} />
        ))}
      </div>
    </div>
  );
}

export function AppInstallChannels({ channels }: AppInstallChannelsProps) {
  return (
    <div className="mb-4 space-y-3">
      {channels.map((channel) => (
        <InstallChannelCard key={channel.name} channel={channel} />
      ))}
    </div>
  );
}
