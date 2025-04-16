/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useEffect } from 'react';

export const useClickOutside = (element: any, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (element.current && !element.current.contains(event.target as any)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};
