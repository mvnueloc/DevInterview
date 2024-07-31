import React, { useState, useEffect, useRef } from "react";

const Spliter = ({ children, initialSize = 80 }) => {
  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];
  const secondChild = childrenArray[1];

  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 990);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 990);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const containerHeight = containerRef.current.clientHeight;
        const minSize = 20; // 40% del tamaño del contenedor
        const maxSize = 80; // 80% del tamaño del contenedor
        setSize((prevSize) => {
          const newSize = prevSize + (e.movementY / containerHeight) * 100;
          return Math.max(minSize, Math.min(maxSize, newSize));
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.classList.remove("no-select");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
    document.body.classList.add("no-select");
  };

  return (
    <div className="rounded-lg w-full base:w-1/2 base:gap-1">
      <div
        ref={containerRef}
        className="h-full w-full flex flex-col space-y-2.5 base:space-y-1">
        <div
          className={`w-full `}
          style={!isSmallScreen ? { height: `${size}%` } : {}}>
          {firstChild}
        </div>
        <div
          onMouseDown={handleMouseDown}
          className="hidden base:block cursor-ns-resize  w-full hover:bg-blue-500 rounded-full">
          <div className="w-8 mx-auto h-1 bg-gray-500/30 rounded-full overflow-x-auto" />
        </div>
        <div className="relative w-full base:flex-1 max-base:h-[20rem]">
          {secondChild}
        </div>
      </div>
    </div>
  );
};

export default Spliter;
