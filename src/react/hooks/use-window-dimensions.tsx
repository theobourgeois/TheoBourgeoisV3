import { useEffect, useState } from "react";

type Dimensions = {
    width: number;
    height: number;
};

export function useWindowDimensions() {
    // Initial state with default values (since window is not available on the server)
    const [dimensions, setDimensions] = useState<Dimensions>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleSetDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Set initial dimensions on client-side only
        handleSetDimensions();

        // Add resize event listener
        window.addEventListener("resize", handleSetDimensions);
        return () => window.removeEventListener("resize", handleSetDimensions);
    }, []);

    return {
        ...dimensions,
        isMobile: dimensions.width < 768,
    };
}
