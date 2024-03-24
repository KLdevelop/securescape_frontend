import { Dispatch, JSX, SetStateAction, useCallback } from 'react';
import { Triangle } from '../Triangle';
import './Carousel.scss';

type CarouselProps = {
    itemsCount: number;
    onIndexChange: Dispatch<SetStateAction<number>>;
    children: JSX.Element;
};

export const Carousel = ({ children: content, onIndexChange, itemsCount }: CarouselProps) => {
    const indexHandler = useCallback(
        (index: number) => (index < 0 ? itemsCount + index : index % itemsCount),
        [itemsCount],
    );
    return (
        <div className="carousel">
            <button
                className="carousel__arrow"
                onClick={() => onIndexChange((prev) => indexHandler(prev - 1))}
            >
                <Triangle
                    size={50}
                    color="white"
                    angle={180}
                    strokeColor="#2d2d2d"
                    strokeWidth={8}
                />
            </button>
            <div className="carousel__content">{content}</div>
            <button
                type="button"
                className="carousel__arrow"
                onClick={() => onIndexChange((prev) => indexHandler(prev + 1))}
            >
                <Triangle
                    size={50}
                    color="white"
                    strokeColor="#2d2d2d"
                    strokeWidth={8}
                />
            </button>
        </div>
    );
};
