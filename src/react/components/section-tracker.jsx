import React, { useState, useEffect, useRef } from "react";

const SectionTracker = () => {
    const [currentSection, setCurrentSection] = useState("");
    const observerRef = useRef(null);

    useEffect(() => {
        // Create intersection observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setCurrentSection(entry.target.dataset.section);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        // Observe sections
        const sectionElements = document.querySelectorAll("section");
        sectionElements.forEach((section) => {
            observerRef.current.observe(section);
        });

        // Cleanup
        return () => {
            if (observerRef.current) {
                sectionElements.forEach((section) => {
                    observerRef.current.unobserve(section);
                });
            }
        };
    }, []);

    if (!currentSection) return null;

    return (
        <div className="fixed right-4 bottom-4 z-50">
            <div className="bg-black/70 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                <span className="text-sm font-medium">{currentSection}</span>
            </div>
        </div>
    );
};

export default SectionTracker;
