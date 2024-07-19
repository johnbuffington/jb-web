import { notoSansMono, notoSansDisplay } from "./fonts";

export default function Main() {
  return (
    <main className={`${notoSansDisplay.className} px-6 sm:px-7 md:px-8 lg:px-9`}>
      <section className="max-w-screen-md mx-auto">
        <div className={`${notoSansMono.className} relative px-2 pt-5 pb-3`}>
          <div className="relative z-10">
            <p className="px-8 py-7 font-light text-center text-pretty text-emerald-950 text-xl sm:text-2xl leading-tight sm:leading-tight">
              I design and develop eleganty-crafted software solutions for business partners to increase the effectiveness and efficiency of operations.
            </p>
          </div>
          <div className="w-full h-full absolute top-0 z-0">
            <svg className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="grad" gradientTransform="rotate(107)">
                  <stop offset="0%" stop-color="#059669" />
                  <stop offset="100%" stop-color="#4ade80" />
                </linearGradient>
                <filter id="turbulentFilter" y="0" height="150%">
                  <feTurbulence type="turbulence" baseFrequency="0.1" numOctaves="6" seed="2" result="turbulence">
                    <animate attributeName="baseFrequency" values="0.01;0.005;0.01" dur="60s" begin="0" repeatCount="indefinite" />
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="B" result="displacement" />
                </filter>
              </defs>
              <g className="turbulentBackground">
                <rect width="92%" height="92%" x="2%" y="2%" rx="30" ry="30" fill="url(#grad)" className="drop-shadow-[0_10px_0_rgba(2,44,34,1)]" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}