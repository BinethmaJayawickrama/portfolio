import { useEffect, useRef, useState } from "react";

export default function AutoScrollRow({ 
  items = [], 
  speed = 50, 
  ariaLabel = "Skills row" 
}) {
  const rowRef = useRef(null);
  const rafRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPosRef = useRef(0);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    let lastTime = performance.now();

    const animate = (currentTime) => {
      if (!isPaused) {
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        scrollPosRef.current += speed * deltaTime;

        // Reset when we've scrolled past half (since content is duplicated)
        const maxScroll = el.scrollWidth / 2;
        if (scrollPosRef.current >= maxScroll) {
          scrollPosRef.current = 0;
        }

        el.scrollLeft = scrollPosRef.current;
      } else {
        lastTime = currentTime;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isPaused, speed]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div 
      className="autoRowWrap" 
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="autoRow" ref={rowRef}>
        <div className="autoEdge" aria-hidden="true" />
        
        {duplicatedItems.map((item, idx) => (
          <div className="autoItem" key={`${item.key}-${idx}`} title={item.label}>
            <span className="autoIcon" style={{ color: item.color }} aria-hidden="true">
              {item.icon}
            </span>
          </div>
        ))}
        
        <div className="autoEdge" aria-hidden="true" />
      </div>
    </div>
  );
}