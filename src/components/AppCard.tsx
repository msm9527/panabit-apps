import { useState } from 'react';
import type { App } from '../data/apps';
import { AppInstallChannels } from './AppInstallChannels';

interface AppCardProps {
  app: App;
  index: number;
}

export function AppCard({ app, index }: AppCardProps) {
  const [showHistory, setShowHistory] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const architectureLabels: Record<string, { label: string; color: string }> = {
    arm64: { label: 'ARM64', color: '#00d4aa' },
    x86: { label: 'x86', color: '#6366f1' },
    universal: { label: 'Universal', color: '#f59e0b' },
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'slide-up 0.5s ease-out forwards',
        opacity: 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, rgba(26, 26, 37, 0.95) 0%, rgba(18, 18, 26, 0.98) 100%)`,
          opacity: isHovered ? 1 : 0.9,
        }}
      />

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 212, 170, 0.06), transparent 40%)`,
        }}
      />

      {/* Border */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-300"
        style={{
          border: `1px solid ${isHovered ? 'rgba(0, 212, 170, 0.3)' : 'var(--color-border)'}`,
        }}
      />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
              border: '1px solid rgba(0, 212, 170, 0.2)',
            }}
          >
            <img 
              src={app.icon} 
              alt={app.name}
              className="w-10 h-10 object-contain"
              style={{ imageRendering: 'auto' }}
              onError={(e) => {
                // 如果图标加载失败，显示默认图标
                const img = e.target as HTMLImageElement;
                img.src = 'app.png';
                img.onerror = null;
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-white mb-1 truncate group-hover:text-[var(--color-primary)] transition-colors">
              {app.name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <a
                href={`https://github.com/${app.author}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono hover:text-[var(--color-primary)] transition-colors"
              >
                @{app.author}
              </a>
              <span>·</span>
              <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                {app.category}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4 line-clamp-2">
          {app.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md text-xs font-mono"
              style={{
                background: 'rgba(0, 212, 170, 0.1)',
                color: 'var(--color-primary)',
                border: '1px solid rgba(0, 212, 170, 0.2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] mb-4 font-mono">
          <div className="flex items-center gap-4">
            <span>版本 {app.version}</span>
            <span>更新于 {app.lastUpdate}</span>
          </div>
        </div>

        {app.installChannels ? (
          <AppInstallChannels channels={app.installChannels} />
        ) : null}

        {app.downloads.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {app.downloads.map((download) => (
              <a
                key={download.architecture}
                href={download.url}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: 'rgba(26, 26, 37, 0.8)',
                  border: `1px solid ${architectureLabels[download.architecture].color}40`,
                  color: architectureLabels[download.architecture].color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${architectureLabels[download.architecture].color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(26, 26, 37, 0.8)';
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{architectureLabels[download.architecture].label}</span>
                <span className="text-[var(--color-text-muted)]">({download.size})</span>
              </a>
            ))}
          </div>
        ) : null}

        {/* Update history toggle */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${showHistory ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span>更新历史</span>
        </button>

        {/* Update history panel */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{
            maxHeight: showHistory ? '300px' : '0',
            opacity: showHistory ? 1 : 0,
          }}
        >
          <div className="pt-4 mt-4 border-t border-[var(--color-border)]">
            <div className="space-y-3">
              {app.updateHistory.map((record, idx) => (
                <div key={idx} className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono font-semibold text-[var(--color-primary)]">
                      {record.version}
                    </span>
                    <span className="text-[var(--color-text-muted)] text-xs">{record.date}</span>
                  </div>
                  <ul className="text-[var(--color-text-muted)] text-xs space-y-1 ml-4 list-disc list-inside">
                    {record.changes.map((change, cidx) => (
                      <li key={cidx} className="marker:text-[var(--color-primary)]">
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
