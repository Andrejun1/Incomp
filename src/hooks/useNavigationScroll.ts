import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useNavigationScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateWithScrollToTop = useCallback(
    (href: string) => {
      // Force scroll to top immediately
      const forceScrollToTop = () => {
        // Multiple methods to ensure scroll to top
        window.scrollTo(0, 0);

        if (document.documentElement) {
          document.documentElement.scrollTop = 0;
          document.documentElement.scrollLeft = 0;
        }

        if (document.body) {
          document.body.scrollTop = 0;
          document.body.scrollLeft = 0;
        }

        // Use requestAnimationFrame for immediate execution
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

      // Always scroll to top first
      forceScrollToTop();

      // If same page, just scroll to top
      if (location.pathname === href) {
        // Force scroll multiple times to ensure it works
        setTimeout(forceScrollToTop, 50);
        setTimeout(forceScrollToTop, 100);
        setTimeout(forceScrollToTop, 200);
        return;
      }

      // For different pages, navigate and ensure scroll to top
      navigate(href);

      // Force scroll to top after navigation
      setTimeout(forceScrollToTop, 50);
      setTimeout(forceScrollToTop, 100);
      setTimeout(forceScrollToTop, 200);
      setTimeout(forceScrollToTop, 500);
    },
    [navigate, location.pathname]
  );

  return navigateWithScrollToTop;
};


