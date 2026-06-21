import gsap from 'gsap';

interface CursorState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isHovering: boolean;
}

export function initCursorAnimation(state: CursorState, cursorRef: HTMLElement, dotRef: HTMLElement) {
  function onMouseMove(e: MouseEvent) {
    state.targetX = e.clientX;
    state.targetY = e.clientY;
  }

  function onMouseEnter() {
    gsap.to(cursorRef, { opacity: 1, duration: 0.3 });
    gsap.to(dotRef, { opacity: 1, scale: 1, duration: 0.3 });
  }

  function onMouseLeave() {
    gsap.to(cursorRef, { opacity: 0, duration: 0.3 });
    gsap.to(dotRef, { opacity: 0, scale: 0, duration: 0.3 });
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseenter', onMouseEnter);
  document.addEventListener('mouseleave', onMouseLeave);

  // Hover detection for interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .hover-target');
  hoverTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => {
      state.isHovering = true;
      gsap.to(cursorRef, {
        scale: 2,
        backgroundColor: 'rgba(77, 131, 200, 0.15)',
        borderColor: '#4D83C8',
        duration: 0.3,
      });
      gsap.to(dotRef, {
        scale: 0,
        duration: 0.2,
      });
    });

    target.addEventListener('mouseleave', () => {
      state.isHovering = false;
      gsap.to(cursorRef, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: '#303030',
        duration: 0.3,
      });
      gsap.to(dotRef, {
        scale: 1,
        duration: 0.2,
      });
    });
  });

  // Animation loop
  function animate() {
    state.x += (state.targetX - state.x) * 0.15;
    state.y += (state.targetY - state.y) * 0.15;

    gsap.set(cursorRef, { x: state.x - 16, y: state.y - 16 });
    gsap.set(dotRef, { x: state.x - 3, y: state.y - 3 });

    requestAnimationFrame(animate);
  }

  animate();

  return () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
  };
}
