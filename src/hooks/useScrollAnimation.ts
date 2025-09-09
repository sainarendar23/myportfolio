import { useCallback, useEffect, useRef, useState } from 'react';

type AnimationDirection = 'left' | 'right' | 'up' | 'down' | 'fade';

interface UseScrollAnimationOptions {
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface UseScrollAnimationReturn<T extends HTMLElement = HTMLElement> {
  ref: React.RefCallback<T>;
  isVisible: boolean;
}

const getTransformValue = (direction: AnimationDirection, distance: number = 90): string => {
  switch (direction) {
    case 'left':
      return `translateX(-${distance}px)`;
    case 'right':
      return `translateX(${distance}px)`;
    case 'up':
      return `translateY(-${distance}px)`;
    case 'down':
      return `translateY(${distance}px)`;
    case 'fade':
    default:
      return 'translateY(0)';
  }
};

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>({
  direction = 'fade',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: UseScrollAnimationOptions = {}): UseScrollAnimationReturn<T> => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: T | null) => {
    if (element) {
      // Clean up previous observer
      if (observerRef.current) {
        observerRef.current.unobserve(element);
      }
    }
    setElement(node);
  }, [element]);

  useEffect(() => {
    if (!element) return;

    // Apply initial styles immediately
    const initialTransform = getTransformValue(direction);
    element.style.transform = initialTransform;
    element.style.opacity = direction === 'fade' ? '0' : '1';
    element.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.willChange = 'transform, opacity';

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Apply visible styles
            entry.target.style.transform = 'translateX(0) translateY(0)';
            entry.target.style.opacity = '1';

            // If once is true, stop observing after first intersection
            if (once) {
              observerRef.current?.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
            
            // Apply hidden styles
            const hiddenTransform = getTransformValue(direction);
            entry.target.style.transform = hiddenTransform;
            entry.target.style.opacity = direction === 'fade' ? '0' : '1';
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [element, direction, delay, duration, threshold, rootMargin, once]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { ref, isVisible };
};

// Convenience hooks for specific directions
export const useScrollFadeIn = (options?: Omit<UseScrollAnimationOptions, 'direction'>) =>
  useScrollAnimation({ ...options, direction: 'fade' });

export const useScrollSlideUp = (options?: Omit<UseScrollAnimationOptions, 'direction'>) =>
  useScrollAnimation({ ...options, direction: 'up' });

export const useScrollSlideDown = (options?: Omit<UseScrollAnimationOptions, 'direction'>) =>
  useScrollAnimation({ ...options, direction: 'down' });

export const useScrollSlideLeft = (options?: Omit<UseScrollAnimationOptions, 'direction'>) =>
  useScrollAnimation({ ...options, direction: 'left' });

export const useScrollSlideRight = (options?: Omit<UseScrollAnimationOptions, 'direction'>) =>
  useScrollAnimation({ ...options, direction: 'right' });