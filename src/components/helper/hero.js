import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on server-side rendering
  }

  if (resolvedTheme === 'dark') {
    return (
      <div className="relative  w-full h-full flex flex-col overflow-hidden" id="about-me">
        <div className="absolute bottom-0 left-0 right-0">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 h-full w-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>

        </div>
      </div>
    );
  } else {
    return null; // Return null if theme is not dark
  }
};

export default Hero;
