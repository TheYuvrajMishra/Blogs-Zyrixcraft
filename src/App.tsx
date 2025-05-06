import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Blog from "./pages/Blogs";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    } as any); // <--- Force it to accept 'el'

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Blog />
    </div>
  );
}

export default App;
