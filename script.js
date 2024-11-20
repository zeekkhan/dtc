// Generate Floating Dots
const banner = document.querySelector('.banner');

for (let i = 0; i < 50; i++) {
  const dot = document.createElement('div');
  dot.classList.add('network-dot');
  const size = Math.random() * 5 + 2; // Random size between 2px and 7px
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.animationDelay = `${Math.random() * 5}s`;
  banner.appendChild(dot);
}
