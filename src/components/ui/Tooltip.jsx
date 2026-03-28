import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Tooltip = ({
  children,
  text,
  position: initialPosition = 'top',
}) => {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [activePosition, setActivePosition] = useState(initialPosition);
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const triggerRef = useRef(null);

  const updateCoords = React.useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      const viewportWidth = window.innerWidth;

      // 1. Vertical Smart Flipping
      let nextPos = initialPosition;
      const threshold = 100; // Increased to avoid navbar
      if (initialPosition === 'top' && rect.top < threshold) {
        nextPos = 'bottom';
      } else if (
        initialPosition === 'bottom' &&
        window.innerHeight - rect.bottom < threshold
      ) {
        nextPos = 'top';
      }

      setActivePosition(nextPos);

      // 2. Horizontal Boundary Protection
      const centerX = rect.left + rect.width / 2;
      const estimatedHalfWidth = 80;
      let hOffset = 0;

      if (centerX - estimatedHalfWidth < 10) {
        hOffset = 10 - (centerX - estimatedHalfWidth);
      } else if (centerX + estimatedHalfWidth > viewportWidth - 10) {
        hOffset = viewportWidth - 10 - (centerX + estimatedHalfWidth);
      }

      setHorizontalOffset(hOffset);
      setCoords({
        top: Math.round(rect.top + scrollY),
        left: Math.round(rect.left + scrollX),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    }
  }, [initialPosition]);

  useEffect(() => {
    if (show) {
      updateCoords();
      const timer = setTimeout(updateCoords, 0);
      window.addEventListener('scroll', updateCoords);
      window.addEventListener('resize', updateCoords);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', updateCoords);
        window.removeEventListener('resize', updateCoords);
      };
    }
  }, [show, updateCoords]);

  const getPositionStyles = () => {
    const gap = 12;
    const styles = {
      position: 'absolute',
      zIndex: 999999,
      pointerEvents: 'none',
    };

    switch (activePosition) {
      case 'bottom':
        return {
          ...styles,
          top: coords.top + coords.height + gap + 20,
          left: coords.left + coords.width / 2 + horizontalOffset,
          transform: 'translateX(-50%)',
        };
      case 'left':
        return {
          ...styles,
          top: coords.top + coords.height / 2,
          left: coords.left - gap,
          transform: 'translate(-100%, -50%)',
        };
      case 'right':
        return {
          ...styles,
          top: coords.top + coords.height / 2,
          left: coords.left + coords.width + gap,
          transform: 'translate(0, -50%)',
        };
      default: // top
        return {
          ...styles,
          top: coords.top - gap,
          left: coords.left + coords.width / 2 + horizontalOffset,
          transform: 'translate(-50%, -100%)',
        };
    }
  };

  const arrowPositions = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-navy/95 dark:border-t-ghost',
    bottom:
      'bottom-full left-1/2 -translate-x-1/2 border-b-navy/95 dark:border-b-ghost',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-navy/95 dark:border-l-ghost',
    right:
      'right-full top-1/2 -translate-y-1/2 border-r-navy/95 dark:border-r-ghost',
  };

  return (
    <div
      ref={triggerRef}
      className="block relative w-full h-full grid place-items-center "
      onMouseEnter={() => {
        if (window.innerWidth >= 768) setShow(true);
      }}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: activePosition === 'top' ? 5 : -5,
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              style={getPositionStyles()}
            >
              <div className="absolute right-[50%] translate-x-1/2 bottom-[100%] bg-navy/95 dark:bg-navy/90 backdrop-blur-2xl text-white dark:text-mint text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-lg shadow-2xl border border-white/10 dark:border-mint/20 max-w-[280px] text-center leading-relaxed">
                {text}
                {/* Tooltip Arrow - Dynamically shifted to maintain connection */}
                <div
                  className={`absolute w-0 h-0 border-[5px] border-transparent ${arrowPositions[activePosition]}`}
                  style={{
                    left:
                      activePosition === 'top' || activePosition === 'bottom'
                        ? `calc(50% - ${horizontalOffset}px)`
                        : undefined,
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};
