export const statusStyles = `
.live-dot {
  position: relative;
  isolation: isolate;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--vscode-testing-iconPassed) 18%, transparent);
}

.live-dot.is-on-air {
  animation: live-dot-pulse 1.8s ease-out infinite;
}

.live-dot.is-on-air::before,
.live-dot.is-on-air::after {
  content: '';
  position: absolute;
  inset: -5px;
  border: 1px solid color-mix(in srgb, var(--vscode-testing-iconPassed) 72%, transparent);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  animation: live-dot-ripple 1.8s ease-out infinite;
}

.live-dot.is-on-air::after {
  animation-delay: .9s;
}

@keyframes live-dot-pulse {
  0%, 100% { box-shadow: 0 0 0 4px color-mix(in srgb, var(--vscode-testing-iconPassed) 18%, transparent); }
  50% { box-shadow: 0 0 0 5px color-mix(in srgb, var(--vscode-testing-iconPassed) 28%, transparent); }
}

@keyframes live-dot-ripple {
  0% { transform: scale(.65); opacity: .85; }
  75%, 100% { transform: scale(2.5); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .live-dot.is-on-air,
  .live-dot.is-on-air::before,
  .live-dot.is-on-air::after {
    animation: none;
  }
}
`;
