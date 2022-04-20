import { useCallback, useRef } from 'react';

export const useDebounce = (timeout: number) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounce = useCallback(
    (callback: () => Promise<void> | void) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback();
      }, timeout);
    },
    [timeout],
  );

  return { debounce };
};
