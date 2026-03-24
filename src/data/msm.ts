export const MSM_RELEASE_TAG = 'beta-1.0.7';
export const MSM_RELEASE_DATE = '2026-03-24';
const RELEASE_BASE = `https://github.com/msm9527/msm-wiki/releases/download/${MSM_RELEASE_TAG}`;

export const MSM_LINKS = {
  amd64: `${RELEASE_BASE}/msm-beta-1.0.7-linux-amd64.tar.gz`,
  arm64: `${RELEASE_BASE}/msm-beta-1.0.7-linux-arm64.tar.gz`,
} as const;
