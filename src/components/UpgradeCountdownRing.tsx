'use client';

interface UpgradeCountdownRingProps {
  progressPercent: number; // 0 to 100
  monthsLeft: number;
  totalMonths: number;
}

export default function UpgradeCountdownRing({ progressPercent, monthsLeft, totalMonths: _totalMonths }: UpgradeCountdownRingProps) {
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          stroke="var(--color-border-default)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="var(--color-cosmic-orange)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-in-out' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
        />
      </svg>
      <div style={{ position: 'absolute', textAlign: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: '700', color: 'white', lineHeight: '1' }}>{monthsLeft}</div>
        <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>months left</div>
      </div>
    </div>
  );
}
