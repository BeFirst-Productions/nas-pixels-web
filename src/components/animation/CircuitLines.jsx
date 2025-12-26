"use client";

export default function CircuitConnections({ className = "" }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg
        width="360"
        height="220"
        viewBox="0 0 360 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ================= LEFT GROUP ================= */}

        {/* Top bent line */}
        <BasePath d="M20 40 H120 C145 40 145 80 170 80 H260" />
        <SignalPath d="M20 40 H120 C145 40 145 80 170 80 H260" />

        {/* Middle straight */}
        <BasePath d="M20 70 H200" />
        <SignalPath d="M20 70 H200" />

        {/* Bottom bent */}
        <BasePath d="M20 100 H110 C135 100 135 60 160 60 H260" />
        <SignalPath d="M20 100 H110 C135 100 135 60 160 60 H260" />

        {/* Left dots */}
        <Dot cx="20" cy="40" />
        <Dot cx="20" cy="70" />
        <Dot cx="20" cy="100" />

        {/* ================= RIGHT GROUP ================= */}

        {/* Top bent */}
        <BasePath d="M340 120 H240 C215 120 215 160 190 160 H80" />
        <SignalPath d="M340 120 H240 C215 120 215 160 190 160 H80" />

        {/* Middle straight */}
        <BasePath d="M340 150 H210" />
        <SignalPath d="M340 150 H210" />

        {/* Bottom bent */}
        <BasePath d="M340 180 H230 C205 180 205 140 180 140 H80" />
        <SignalPath d="M340 180 H230 C205 180 205 140 180 140 H80" />

        {/* Right dots */}
        <Dot cx="340" cy="120" />
        <Dot cx="340" cy="150" />
        <Dot cx="340" cy="180" />
      </svg>
    </div>
  );
}

/* ================= Sub Components ================= */

function BasePath({ d }) {
  return (
    <path
      d={d}
      stroke="#70C879"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.9"
    />
  );
}

function SignalPath({ d }) {
  return (
    <path
      d={d}
      stroke="#B6F5C2"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      className="circuit-signal"
    />
  );
}

function Dot({ cx, cy }) {
  return <circle cx={cx} cy={cy} r="4" fill="#70C879" />;
}
