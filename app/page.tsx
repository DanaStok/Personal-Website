"use client";
import React, { useState, useEffect } from 'react';
import ComputerProfile from './components/computerProfile';
import MobileProfile from './components/mobileProfile';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Mark as client-side rendered
    setIsClient(true);

    // Check on initial load
    checkMobile();

    // Add event listener to check on resize
    window.addEventListener('resize', checkMobile);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // If not client-side yet, don't render anything or show a placeholder
  if (!isClient) {
    return null; 
  }

  return (
    <div>
      {isMobile ? <MobileProfile /> : <ComputerProfile />}
    </div>
  );
}