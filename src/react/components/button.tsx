import { toRGBString, useTheme } from "../store/theme";

type ButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
};

export function Button({ onClick, children }: ButtonProps) {
    const theme = useTheme();

    return (
        <button
            onClick={onClick}
            style={{
                background: `linear-gradient(45deg, ${toRGBString(
                    theme[0]
                )}, ${toRGBString(theme[1])})`,
                color: "white",
                padding: "10px",
                borderRadius: "5px",
            }}
        >
            {children}
        </button>
    );
}
