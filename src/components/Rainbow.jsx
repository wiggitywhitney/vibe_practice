import React, { useRef, useEffect, useState } from 'react';
import './Rainbow.css'; // Assuming Rainbow.css exists or will be created

const Rainbow = React.forwardRef(({ isSpiderPresent }, ref) => {
  // const rainbowRef = useRef(null); // No longer needed here if ref is from parent
  const [width, setWidth] = useState(0);
  const internalImageRef = useRef(null); // Use a different ref for internal image width if needed
  
  useEffect(() => {
    // If we want to set an internal width state from the image itself
    if (internalImageRef.current) {
      setWidth(internalImageRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (internalImageRef.current) {
        setWidth(internalImageRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  
  return (
    // Ensure this div has the class 'rainbow-container' for tests to pass
    <div 
      ref={ref} // Use the forwarded ref here
      className="rainbow-container" 
      style={{ opacity: isSpiderPresent ? 0.75 : 1 }}
    >
      <img 
        ref={internalImageRef} // If Rainbow needs its own ref to the img
        src="/Rainbow.png" // Using specific path from test
        alt="Rainbow"
        className="rainbow-image"
        // The image itself doesn't need an inline width style if its container handles sizing,
        // or if CSS handles it. The `width` state is for internal logic or export.
      />
    </div>
  );
});

// Exporting both default and named as per task description
export default Rainbow;
export { Rainbow }; 