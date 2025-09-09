import { useState, useEffect } from 'react';

export const useTypewriter = (
  words: string[],
  typeSpeed: number = 100,
  deleteSpeed: number = 50,
  delaySpeed: number = 2000
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        // After pause, start deleting
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Deleting characters
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        // Typing characters
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, start pause
          setIsPaused(true);
        }
      }
    }, 
      isPaused 
        ? delaySpeed 
        : isDeleting 
          ? deleteSpeed 
          : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return currentText;
};