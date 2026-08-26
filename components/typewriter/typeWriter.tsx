"use client";

import { useState, useEffect } from "react";
import "./typewriter.css";

interface TypewriterProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    className?: string;
}

export default function Typewriter({
    texts,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseTime = 1800,
    className = "",
}: TypewriterProps) {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setDisplayText(currentFullText.substring(0, displayText.length + 1));

                if (displayText.length + 1 === currentFullText.length) {
                    // Finished typing → pause then start deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                setDisplayText(currentFullText.substring(0, displayText.length - 1));

                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className={`typewriter ${className}`}>
            {displayText}
            <span className="typewriter-cursor">|</span>
        </span>
    );
}