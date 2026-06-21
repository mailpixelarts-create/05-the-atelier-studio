import { useEffect, RefObject } from 'react';
import SplitType from 'split-type';

interface UseSplitTypeOptions {
  types?: 'lines' | 'words' | 'chars';
  lineClass?: string;
  wordClass?: string;
  charClass?: string;
}

export function useSplitType(
  ref: RefObject<HTMLElement | null>,
  options: UseSplitTypeOptions = {},
) {
  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, {
      types: options.types || 'lines,words',
      lineClass: options.lineClass || 'split-line',
      wordClass: options.wordClass || 'split-word',
      charClass: options.charClass || 'split-char',
    });

    return () => {
      split.revert();
    };
  }, [ref, options.types, options.lineClass, options.wordClass, options.charClass]);
}
