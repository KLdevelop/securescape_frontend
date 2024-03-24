import dice from '@/assets/random.svg';
import './RandomCard.scss';

type RandomCardProps = {
    title: string;
    onRandom?: () => void;
};

export const RandomCard = ({ title, onRandom }: RandomCardProps) => {
    return (
        <section className="randomCard card bottomBlueBorder">
            <h3 className="h3">{title}</h3>
            <button
                type="button"
                className="randomCard__random"
                onClick={onRandom}
            >
                <img
                    src={dice}
                    alt="random"
                />
            </button>
        </section>
    );
};
