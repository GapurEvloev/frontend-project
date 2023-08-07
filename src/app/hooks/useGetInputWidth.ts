import React, { useEffect, useState } from 'react';

interface propsUseGetInputWidth {
  ref: React.MutableRefObject<any>,
  caretPosition: number
}

export function useGetInputWidth(props: propsUseGetInputWidth) {
  const {
    ref,
    caretPosition,
  } = props;

  const [inputWidth, setInputWidth] = useState(0);

  useEffect(() => {
    const getContext = () => {
      const fragment = document.createDocumentFragment();
      const canvas = document.createElement('canvas');
      fragment.appendChild(canvas);
      return canvas.getContext('2d');
    };
    if (ref && ref.current) {
      const context = getContext();
      const computedStyles = window.getComputedStyle(ref.current);
      context.font = computedStyles.font;
      const metrics = context.measureText(ref.current.value.toString().substring(0, caretPosition));
      setInputWidth(metrics.width);
    }
  }, [ref, caretPosition]);

  return inputWidth;
}
