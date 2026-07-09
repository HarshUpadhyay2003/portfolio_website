import { useState, useEffect } from "react";

export function Typewriter({
  words,
  delay = 100,
  deleteDelay = 60,
  pause = 2000,
}: {
  words: string[];
  delay?: number;
  deleteDelay?: number;
  pause?: number;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = words[currentWordIndex];

    if (isDeleting) {
      // Deleting character by character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deleteDelay);
    } else {
      // Typing character by character
      timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, delay);
    }

    // Determine state changes
    if (!isDeleting && currentText === fullText) {
      // Pause at the end of typing before deleting
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, delay, deleteDelay, pause]);

  return (
    <span className="relative inline-flex items-center">
      <span>{currentText}</span>
      <span className="ml-1 w-[2px] h-[1.1em] bg-accent inline-block animate-pulse" style={{ verticalAlign: "middle" }} aria-hidden="true" />
    </span>
  );
}
