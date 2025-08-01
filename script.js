const follower = document.getElementById('follower');

// Move the follower with the mouse
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  follower.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
  follower.style.opacity = 1;
});

// Hide follower when mouse leaves window
window.addEventListener('mouseout', (e) => {
  // Only hide if it really left the window, not just into child element
  if (!e.relatedTarget && !e.toElement) {
    follower.style.opacity = 0;
  }
});

// Optional: show again if mouse re-enters
window.addEventListener('mouseenter', () => {
  follower.style.opacity = 1;
});