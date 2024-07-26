"use client";
import { useState, useEffect } from "react";

import type { ClassValue } from "clsx";
import { useInView } from "react-intersection-observer";
import { cn } from "@/helpers/utils/helpers";

interface IAnimateValueProps {
  start: number;
  end: number;
  duration: number;
  className?: ClassValue;
  withFormatter?: boolean;
  formatterOptions?: Intl.NumberFormatOptions;
}

const AnimateValue: React.FC<IAnimateValueProps> = ({
  start,
  end,
  duration,
  className,
  withFormatter = false,
  formatterOptions,
}) => {
  const [value, setValue] = useState(start);
  const formatter = new Intl.NumberFormat("en-US");
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    let startTimestamp: number | null = null;
    if (inView) {
      const easeInOutCubic = (t: number) => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        const animatedValue = easedProgress * (end - start) + start;
        setValue(animatedValue);

        if (elapsed < duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    return () => {
      startTimestamp = null;
    };
  }, [start, end, duration, inView]);

  return (
    <p ref={ref} className={cn(className)}>
      {withFormatter ? formatter.format(value) : value}+
    </p>
  );
};

export default AnimateValue;
