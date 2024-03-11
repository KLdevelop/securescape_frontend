type TrinagleProps = {
    size: number;
    color: string;
    strokeColor?: string;
    angle?: number;
    strokeWidth?: number;
    className?: string;
};

export const Triangle = ({
    size,
    color,
    strokeColor = 'black',
    angle = 0,
    strokeWidth = 0,
    className,
}: TrinagleProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 53 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${angle}deg)` }}
            className={className}
        >
            <path
                d="M20.5 7.34937L43 20.3397C49.6667 24.1887 49.6667 33.8113 43 37.6603L20.5 50.6506C13.8333 54.4996 5.5 49.6884 5.5 41.9904L5.5 16.0096C5.5 8.31161 13.8333 3.50037 20.5 7.34937Z"
                fill={color}
                stroke={strokeColor}
                stroke-width={strokeWidth}
            />
        </svg>
    );
};
