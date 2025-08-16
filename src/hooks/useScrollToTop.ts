import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Aggressive scroll to top for all page changes
    const scrollToTop = () => {
      // Method 1: Direct scroll
      window.scrollTo(0, 0);

      // Method 2: Document element scroll
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }

      // Method 3: Body scroll
      if (document.body) {
        document.body.scrollTop = 0;
      }

      // Method 4: Force scroll with requestAnimationFrame
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
        }
        if (document.body) {
          document.body.scrollTop = 0;
        }
      });
    };

    // Execute immediately
    scrollToTop();

    // Execute multiple times to ensure it works
    const timer1 = setTimeout(scrollToTop, 50);
    const timer2 = setTimeout(scrollToTop, 100);
    const timer3 = setTimeout(scrollToTop, 200);
    const timer4 = setTimeout(scrollToTop, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [location.pathname]);
};
