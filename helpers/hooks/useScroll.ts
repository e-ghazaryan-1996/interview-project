import { useEffect, useState } from "react";

const useScrollTop = (height: number, elementId?: string) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollElement = elementId
        ? document.getElementById(elementId)
        : window;
      if (scrollElement) {
        const isScrolled = elementId
          ? (scrollElement as HTMLElement).scrollTop > height
          : window.scrollY > height;
        setScroll(isScrolled);
      }
    };

    checkScroll();

    const scrollElement = elementId
      ? document.getElementById(elementId)
      : window;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return scroll;
};

export default useScrollTop;
