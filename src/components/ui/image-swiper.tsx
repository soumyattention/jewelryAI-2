import React, { useEffect, useRef, useState, useCallback } from 'react';

interface ImageSwiperProps {
  images: string;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
  autoSwipeInterval?: number;
}

export const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  cardWidth = 256,  // 16rem = 256px
  cardHeight = 352, // 22rem = 352px
  className = '',
  autoSwipeInterval = 2000 // Default 2 seconds
}) => {
  const cardStackRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const swipeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const imageList = images.split(',').map(img => img.trim()).filter(img => img);
  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    Array.from({ length: imageList.length }, (_, i) => i)
  );

  const getDurationFromCSS = useCallback((
    variableName: string,
    element?: HTMLElement | null
  ): number => {
    const targetElement = element || document.documentElement;
    const value = getComputedStyle(targetElement)
      ?.getPropertyValue(variableName)
      ?.trim();
    if (!value) return 300; // Default fallback
    if (value.endsWith("ms")) return parseFloat(value);
    if (value.endsWith("s")) return parseFloat(value) * 1000;
    return parseFloat(value) || 300;
  }, []);

  const getCards = useCallback((): HTMLElement[] => {
    if (!cardStackRef.current) return [];
    return [...cardStackRef.current.querySelectorAll('.image-card')] as HTMLElement[];
  }, []);

  const getActiveCard = useCallback((): HTMLElement | null => {
    const cards = getCards();
    return cards[0] || null;
  }, [getCards]);

  const calculateShadowValues = useCallback((
    displayIndex: number,
    deltaX: number = 0,
    rotation: number = 0,
    isAnimatingCard: boolean = false
  ) => {
    const depth = displayIndex + 1;
    
    // Base shadow values based on card depth
    const baseShadowX = Math.min(depth * 2, 8);
    const baseShadowY = Math.min(depth * 4, 16);
    const baseShadowBlur = Math.min(depth * 6 + 8, 32);
    const baseShadowSpread = Math.max(0, Math.min(depth * 1, 4));
    const baseOpacity = Math.max(0.1, 0.4 - (depth * 0.05));
    
    // Dynamic adjustments based on movement
    let shadowX = baseShadowX;
    let shadowY = baseShadowY;
    let shadowBlur = baseShadowBlur;
    let shadowSpread = baseShadowSpread;
    let shadowOpacity = baseOpacity;
    
    if (displayIndex === 0) { // Active card
      // Adjust shadow based on swipe movement
      const swipeInfluence = Math.abs(deltaX) / 100;
      const rotationInfluence = Math.abs(rotation) / 20;
      
      shadowX = baseShadowX + (deltaX * 0.1);
      shadowY = baseShadowY + (swipeInfluence * 8);
      shadowBlur = baseShadowBlur + (swipeInfluence * 12) + (rotationInfluence * 8);
      shadowSpread = baseShadowSpread + (swipeInfluence * 2);
      shadowOpacity = baseOpacity + (swipeInfluence * 0.2);
      
      if (isAnimatingCard) {
        // Motion blur effect during animation
        shadowBlur += 16;
        shadowSpread += 4;
        shadowOpacity = Math.min(shadowOpacity + 0.3, 0.8);
      }
    }
    
    return {
      shadowX: Math.round(shadowX * 100) / 100,
      shadowY: Math.round(shadowY * 100) / 100,
      shadowBlur: Math.round(shadowBlur * 100) / 100,
      shadowSpread: Math.round(shadowSpread * 100) / 100,
      shadowOpacity: Math.round(shadowOpacity * 100) / 100
    };
  }, []);

  const applyShadowToCard = useCallback((
    card: HTMLElement,
    shadowValues: ReturnType<typeof calculateShadowValues>
  ) => {
    const { shadowX, shadowY, shadowBlur, shadowSpread, shadowOpacity } = shadowValues;
    
    card.style.setProperty('--shadow-x', `${shadowX}px`);
    card.style.setProperty('--shadow-y', `${shadowY}px`);
    card.style.setProperty('--shadow-blur', `${shadowBlur}px`);
    card.style.setProperty('--shadow-spread', `${shadowSpread}px`);
    card.style.setProperty('--shadow-opacity', shadowOpacity.toString());
  }, []);

  const updatePositions = useCallback(() => {
    const cards = getCards();
    cards.forEach((card, displayIndex) => {
      card.style.setProperty('--i', (displayIndex + 1).toString());
      card.style.setProperty('--swipe-x', '0px');
      card.style.setProperty('--swipe-rotate', '0deg');
      card.style.opacity = '1';
      
      // Calculate and apply shadow values for each card
      const shadowValues = calculateShadowValues(displayIndex);
      applyShadowToCard(card, shadowValues);
    });
  }, [getCards, calculateShadowValues, applyShadowToCard]);

  const performSwipeAnimation = useCallback((direction: number = 1) => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    const duration = getDurationFromCSS('--card-swap-duration', cardStackRef.current);
    const card = getActiveCard();

    if (card) {
      card.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${duration}ms ease, box-shadow ${duration}ms ease`;
      card.style.setProperty('--swipe-x', `${direction * 350}px`);
      card.style.setProperty('--swipe-rotate', `${direction * 25}deg`);
      card.style.opacity = '0';
      
      // Apply animation shadow effect
      const animationShadowValues = calculateShadowValues(0, direction * 350, direction * 25, true);
      applyShadowToCard(card, animationShadowValues);

      // Mid-animation rotation adjustment for more natural movement
      setTimeout(() => {
        if (getActiveCard() === card) {
          card.style.setProperty('--swipe-rotate', `${-direction * 15}deg`);
          const rotationShadowValues = calculateShadowValues(0, direction * 350, -direction * 15, true);
          applyShadowToCard(card, rotationShadowValues);
        }
      }, duration * 0.4);

      setTimeout(() => {
        setCardOrder(prev => {
          if (prev.length === 0) return [];
          return [...prev.slice(1), prev[0]];
        });
        isAnimating.current = false;
      }, duration);
    } else {
      isAnimating.current = false;
    }
  }, [getDurationFromCSS, getActiveCard, calculateShadowValues, applyShadowToCard]);

  // Auto-swipe functionality only
  useEffect(() => {
    if (!autoSwipeInterval || autoSwipeInterval <= 0) return;

    const startAutoSwipe = () => {
      if (swipeTimerRef.current) {
        clearInterval(swipeTimerRef.current);
      }
      
      swipeTimerRef.current = setInterval(() => {
        if (!isAnimating.current) {
          performSwipeAnimation(1);
        }
      }, autoSwipeInterval);
    };

    // Start auto-swipe immediately
    startAutoSwipe();

    return () => {
      if (swipeTimerRef.current) {
        clearInterval(swipeTimerRef.current);
        swipeTimerRef.current = null;
      }
    };
  }, [autoSwipeInterval, performSwipeAnimation]);

  useEffect(() => {
    updatePositions();
  }, [cardOrder, updatePositions]);

  return (
    <section
      className={`relative grid place-content-center select-none ${className}`}
      ref={cardStackRef}
      style={{
        width: cardWidth + 32,
        height: cardHeight + 32,
        touchAction: 'none',
        transformStyle: 'preserve-3d',
        '--card-perspective': '700px',
        '--card-z-offset': '12px',
        '--card-y-offset': '7px',
        '--card-max-z-index': imageList.length.toString(),
        '--card-swap-duration': '400ms',
      } as React.CSSProperties}
    >
      {cardOrder.map((originalIndex, displayIndex) => (
        <article
          key={`${imageList[originalIndex]}-${originalIndex}`}
          className="image-card absolute place-self-center border border-slate-400 rounded-xl
                     overflow-hidden will-change-transform pointer-events-none"
          style={{
            '--i': (displayIndex + 1).toString(),
            zIndex: imageList.length - displayIndex,
            width: cardWidth,
            height: cardHeight,
            transform: `perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotateY(var(--swipe-rotate, 0deg))`,
            boxShadow: `var(--shadow-x, 4px) var(--shadow-y, 8px) var(--shadow-blur, 16px) var(--shadow-spread, 0px) rgba(0, 0, 0, var(--shadow-opacity, 0.3))`,
            transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          } as React.CSSProperties}
        >
          <img
            src={imageList[originalIndex]}
            alt={`Jewelry showcase ${originalIndex + 1}`}
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable={false}
          />
        </article>
      ))}
    </section>
  );
};