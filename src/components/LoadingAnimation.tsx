import React from "react";

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* Loading dots */}
      <div className="relative z-10 flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-400 rounded-full animate-[bounce_1s_infinite_0ms]"></div>
        <div className="w-4 h-4 bg-blue-400 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
        <div className="w-4 h-4 bg-blue-400 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
      </div>

      <p className="absolute bottom-20 text-blue-200 text-xl font-bold tracking-wider">
        Loading<span className="animate-[ellipsis_1.5s_steps(4,end)_infinite]">...</span>
      </p>
    </div>
  );
}