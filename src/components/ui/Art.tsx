import type { ReactNode } from 'react'
export type ArtKind = 'laptop' | 'desktop' | 'custom' | 'components' | 'monitor' | 'peripherals' | 'printer' | 'network' | 'cctv' | 'software' | 'consumables' | 'service'
const O = '#ff6a1a', L = '#3a3a42'
const pins = (n: number, f: (i: number) => ReactNode) => Array.from({ length: n }, (_, i) => f(i))
const S: Record<ArtKind, ReactNode> = {
  laptop: <>
    <rect x="85" y="55" width="230" height="140" rx="12" fill="url(#gb)" stroke={L} />
    <rect x="95" y="65" width="210" height="120" rx="6" fill="url(#gs)" />
    <path d="M105 168 150 138 185 156 232 104 295 148" stroke="#fff" strokeOpacity=".75" strokeWidth="2" />
    <path d="M48 205h304l-20 20H68z" fill="url(#gb)" stroke={L} /><rect x="170" y="208" width="60" height="4" rx="2" fill="#000" opacity=".5" />
  </>,
  desktop: <>
    <rect x="40" y="55" width="220" height="140" rx="10" fill="url(#gb)" stroke={L} /><rect x="49" y="64" width="202" height="122" rx="5" fill="url(#gs)" />
    <path d="M140 195h20l8 40h-36z" fill="url(#gb)" stroke={L} /><rect x="105" y="235" width="90" height="8" rx="4" fill="url(#gb)" stroke={L} />
    <rect x="285" y="85" width="75" height="165" rx="10" fill="url(#gb)" stroke={L} /><circle cx="322" cy="125" r="16" stroke={O} strokeWidth="2" /><rect x="300" y="200" width="44" height="4" rx="2" fill={O} />
  </>,
  custom: <>
    <rect x="120" y="22" width="160" height="256" rx="16" fill="url(#gb)" stroke={L} />
    <rect x="132" y="34" width="136" height="232" rx="9" fill="#0c0c0f" stroke={O} strokeOpacity=".35" />
    {[88, 162].map((y) => <g key={y}><circle cx="200" cy={y} r="34" stroke={O} strokeWidth="2" /><circle cx="200" cy={y} r="8" fill={O} />{pins(6, (i) => <line key={i} x1="200" y1={y} x2={200 + 28 * Math.cos(i * 1.047)} y2={y + 28 * Math.sin(i * 1.047)} stroke={O} strokeOpacity=".5" />)}</g>)}
    <rect x="142" y="222" width="116" height="16" rx="4" fill={O} opacity=".85" />
  </>,
  components: <>
    <rect x="125" y="75" width="150" height="150" rx="14" fill="url(#gb)" stroke={L} /><rect x="155" y="105" width="90" height="90" rx="8" fill="url(#gs)" stroke={O} strokeOpacity=".6" />
    {pins(7, (i) => <g key={i} stroke="#8a8a94" strokeWidth="3"><line x1={142 + i * 19} y1="75" x2={142 + i * 19} y2="60" /><line x1={142 + i * 19} y1="225" x2={142 + i * 19} y2="240" /><line x1="125" y1={92 + i * 19} x2="110" y2={92 + i * 19} /><line x1="275" y1={92 + i * 19} x2="290" y2={92 + i * 19} /></g>)}
  </>,
  monitor: <>
    <rect x="35" y="45" width="330" height="175" rx="12" fill="url(#gb)" stroke={L} /><rect x="44" y="54" width="312" height="157" rx="6" fill="url(#gs)" />
    <path d="M60 190C120 120 180 190 240 130S320 110 340 100" stroke="#fff" strokeOpacity=".6" strokeWidth="2" />
    <path d="M180 220h40l10 45h-60z" fill="url(#gb)" stroke={L} /><rect x="140" y="265" width="120" height="8" rx="4" fill="url(#gb)" stroke={L} />
  </>,
  peripherals: <>
    <rect x="30" y="140" width="270" height="105" rx="12" fill="url(#gb)" stroke={L} />
    {pins(3, (r) => pins(10, (c) => <rect key={r * 10 + c} x={44 + c * 25} y={154 + r * 27} width="19" height="19" rx="4" fill="#0c0c0f" stroke={r === 1 && c === 4 ? O : L} />))}
    <path d="M330 120c28 0 40 30 40 62 0 36-14 60-40 60s-40-24-40-60c0-32 12-62 40-62z" fill="url(#gb)" stroke={L} /><line x1="330" y1="120" x2="330" y2="165" stroke={O} strokeWidth="2" />
  </>,
  printer: <>
    <rect x="105" y="45" width="190" height="85" rx="4" fill="#e8e8ec" opacity=".9" /><path d="M125 70h150M125 88h120M125 106h140" stroke="#999" strokeWidth="3" />
    <rect x="55" y="120" width="290" height="105" rx="16" fill="url(#gb)" stroke={L} /><rect x="85" y="170" width="230" height="8" rx="4" fill="#000" opacity=".6" /><circle cx="318" cy="145" r="5" fill={O} />
    <rect x="100" y="200" width="200" height="45" rx="3" fill="#e8e8ec" opacity=".9" />
  </>,
  network: <>
    <rect x="60" y="165" width="280" height="62" rx="12" fill="url(#gb)" stroke={L} />{pins(4, (i) => <circle key={i} cx={95 + i * 28} cy="196" r="5" fill={i < 3 ? O : '#444'} />)}
    {[100, 200, 300].map((x) => <g key={x}><line x1={x} y1="165" x2={x} y2="75" stroke={L} strokeWidth="9" strokeLinecap="round" /><path d={`M${x - 22} 55a31 31 0 0 1 44 0`} stroke={O} strokeOpacity=".7" strokeWidth="2" /></g>)}
  </>,
  cctv: <>
    <path d="M70 70v100h24v-76h40l30 30h30" stroke={L} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <g transform="rotate(18 190 130)">
      <rect x="120" y="100" width="180" height="65" rx="14" fill="url(#gb)" stroke={L} strokeWidth="2" />
      <path d="M300 115l45 -12v64l-45 -12z" fill="url(#gb)" stroke={O} strokeWidth="2" />
      <circle cx="160" cy="132" r="14" fill="#0c0c0f" stroke={O} strokeWidth="2" />
      <circle cx="160" cy="132" r="5" fill={O} />
      <line x1="110" y1="92" x2="260" y2="92" stroke={O} strokeWidth="4" strokeLinecap="round" />
    </g>
    <path d="M280 180c40 15 80 40 100 70" stroke={O} strokeOpacity=".4" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M260 205c30 12 60 32 75 55" stroke={O} strokeOpacity=".6" strokeWidth="2" strokeDasharray="4 4" />
  </>,
  software: <>
    <rect x="90" y="55" width="130" height="175" rx="8" fill="url(#gb)" stroke={L} strokeWidth="2" />
    <rect x="105" y="75" width="100" height="55" rx="4" fill="url(#gs)" />
    <path d="M125 102h60M125 114h40" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    <circle cx="270" cy="165" r="72" fill="url(#gb)" stroke={L} strokeWidth="2" />
    <circle cx="270" cy="165" r="48" fill="none" stroke={O} strokeOpacity=".4" strokeWidth="4" />
    <circle cx="270" cy="165" r="22" fill="#101013" stroke={O} strokeWidth="3" />
    <circle cx="270" cy="165" r="6" fill="#fff" />
  </>,
  consumables: <>
    <rect x="65" y="125" width="170" height="85" rx="12" fill="url(#gb)" stroke={L} strokeWidth="2" />
    <rect x="85" y="145" width="130" height="14" rx="4" fill={O} opacity=".85" />
    <circle cx="105" cy="180" r="8" fill="#00e5ff" />
    <circle cx="130" cy="180" r="8" fill="#ff00aa" />
    <circle cx="155" cy="180" r="8" fill="#ffee00" />
    <circle cx="180" cy="180" r="8" fill="#111" stroke="#555" />
    <rect x="255" y="80" width="85" height="135" rx="16" fill="url(#gb)" stroke={L} strokeWidth="2" />
    <rect x="280" y="58" width="35" height="24" rx="4" fill={O} />
    <path d="M275 140c0-14 18-30 22-30s22 16 22 30a22 22 0 0 1-44 0z" fill={O} opacity=".85" />
  </>,
  service: <>
    <rect x="65" y="70" width="210" height="130" rx="10" fill="url(#gb)" stroke={L} />
    <rect x="75" y="80" width="190" height="110" rx="6" fill="url(#gs)" />
    <path d="M40 205h260l-16 18H56z" fill="url(#gb)" stroke={L} />
    <g transform="translate(260, 80)">
      <path d="M20 50l40 -40a12 12 0 0 1 17 17l-40 40z" fill={O} stroke={L} />
      <path d="M60 90l35 -35-15-15-35 35 15 15z" fill="url(#gb)" stroke={O} strokeWidth="2" />
    </g>
  </>,
}
export function Art({ kind, className = '' }: { kind: ArtKind; className?: string }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label={`Illustration of ${kind}`} className={className} fill="none">
      <defs>
        <linearGradient id="gb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2b2b31" /><stop offset="1" stopColor="#101013" /></linearGradient>
        <linearGradient id="gs" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={O} stopOpacity=".6" /><stop offset="1" stopColor="#16161a" /></linearGradient>
        <radialGradient id="gg"><stop offset="0" stopColor={O} stopOpacity=".28" /><stop offset="1" stopColor={O} stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="200" cy="155" rx="180" ry="125" fill="url(#gg)" />
      {S[kind]}
    </svg>
  )
}
