import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.substring(1);

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Wait for the Home page to render before scrolling
    const timeout = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  return null;
}

export default HashScroll;