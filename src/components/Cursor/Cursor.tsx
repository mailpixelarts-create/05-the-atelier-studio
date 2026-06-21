import { useEffect, useRef } from 'react';
import './Cursor.scss';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !dotRef.current) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows immediately
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    }

    function animate() {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      cursor.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
      requestAnimationFrame(animate);
    }

    // Hover effects
    function addHoverListeners() {
      const targets = document.querySelectorAll('a, button, .cursor-hover');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', () => {
          cursor.classList.add('is-hovering');
          dot.classList.add('is-hovering');
        });
        target.addEventListener('mouseleave', () => {
          cursor.classList.remove('is-hovering');
          dot.classList.remove('is-hovering');
        });
      });
    }

    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(animate);

    // Delayed hover setup to catch dynamically rendered elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
