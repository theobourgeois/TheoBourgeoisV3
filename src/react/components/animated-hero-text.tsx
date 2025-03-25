import React, { useState, useEffect } from "react";

const AnimatedHeroText = () => {
    const [displayText, setDisplayText] = useState("");
    const [displaySubText, setDisplaySubText] = useState("");
    const fullText = "Hi, my name is Théo!";
    const subText =
        "I'm a Software Engineer based in Halifax Nova Scotia, Canada";

    const [showCursor, setShowCursor] = useState(true);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let charIndex = 0;

        const typeWriter = () => {
            if (charIndex < fullText.length && isMounted) {
                setDisplayText((prev) => {
                    const text = fullText[charIndex];
                    charIndex++;
                    return prev + text;
                });
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    let subCharIndex = 0;
                    const typeSubText = () => {
                        if (subCharIndex < subText.length && isMounted) {
                            setDisplaySubText((prev) => {
                                const text = subText[subCharIndex];
                                subCharIndex++;
                                return prev + text;
                            });
                            setTimeout(typeSubText, 50);
                        } else {
                            setIsTypingComplete(true);
                        }
                    };
                    typeSubText();
                }, 500);
            }
        };

        // Cursor blinking effect
        const cursorInterval = setInterval(() => {
            if (isMounted) {
                setShowCursor((prev) => !prev);
            }
        }, 500);

        typeWriter();

        return () => {
            isMounted = false;
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <div className="relative">
            <h2 className="text-slate-200 text-[30px] md:text-6xl text-center font-bold drop-shadow-lg">
                {displayText}
                <span
                    className={`ml-1 ${
                        showCursor && !isTypingComplete
                            ? "visible"
                            : "invisible"
                    }`}
                >
                    |
                </span>
            </h2>
            <h3 className="text-slate-200 text-xl md:text-3xl drop-shadow-lg text-center mt-4 animate-fade-in">
                {displaySubText}
            </h3>
        </div>
    );
};

export default AnimatedHeroText;
