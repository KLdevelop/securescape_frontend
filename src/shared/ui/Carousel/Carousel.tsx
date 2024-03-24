import { Dispatch, JSX, SetStateAction } from 'react';
import { Triangle } from '../Triangle';
import './Carousel.scss';

type CarouselProps = {
    itemsCount: number;
    onIndexChange: Dispatch<SetStateAction<number>>;
    children: JSX.Element;
};

export const Carousel = ({ children: content, onIndexChange, itemsCount }: CarouselProps) => {
    return (
        <div className="carousel">
            <button
                className="carousel__arrow"
                onClick={() => onIndexChange((prevInd) => (prevInd - 1) % itemsCount)}
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
                className="carousel__arrow"
                onClick={() => onIndexChange((prevInd) => (prevInd + 1) % itemsCount)}
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
