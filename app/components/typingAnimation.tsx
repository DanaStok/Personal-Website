import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const words = ["Programmer", "Developer", "Problem Solver"];
  
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const current = words[wordIndex];
      
      if (!isDeleting && currentWord.length < current.length) {
        setCurrentWord(current.substring(0, currentWord.length + 1));
        setTypingSpeed(100);
      }
      
      if (isDeleting && currentWord.length > 0) {
        setCurrentWord(current.substring(0, currentWord.length - 1));
        setTypingSpeed(50);
      }
      
      if (!isDeleting && currentWord === current) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      }
      
      if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(500);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentWord, isDeleting, wordIndex, typingSpeed]);

  return (
    <div className="text-2xl text-pink-800">
      I am a <span className="font-bold">{currentWord}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};
export default TypingAnimation;