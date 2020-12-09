import { useEffect, useRef } from 'react';
import { MountedRef } from '@typings/hooks';

const useComponentMounted = (): MountedRef => {
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

export default useComponentMounted;
