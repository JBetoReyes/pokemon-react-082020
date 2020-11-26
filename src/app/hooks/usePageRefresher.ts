import { useCallback, useRef } from 'react';

export const usePageRefresher = (
  setPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const ref = useRef(null);
  let observer: IntersectionObserver;
  const setRef = useCallback((node) => {
    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      };
      observer = new IntersectionObserver((entities) => {
        const [entity] = entities;
        if (entity.intersectionRatio === 1) {
          setPage((page: number) => page + 1);
          observer.disconnect();
        }
      }, options);
      observer.observe(node as any);
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
};
