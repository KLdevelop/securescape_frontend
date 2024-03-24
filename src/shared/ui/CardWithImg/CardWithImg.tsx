import clsx from 'clsx';
import './CardWithImg.scss';

type Appearence = 'horizontal' | 'vertical';

type CardProps = {
    img: string;
    title: string;
    description: string;
    className?: string;
    appearence?: Appearence;
};

export const CardWithImg = ({ img, title, description, className, appearence = 'vertical' }: CardProps) => {
    const cardClassName = `cardWithImg_${appearence}`;

    return (
        <article className={clsx(cardClassName, className)}>
            <img
                className={cardClassName + '__img'}
                src={img}
                alt=""
            />
            <div className={cardClassName + '__content'}>
                <h3 className="h3">{title}</h3>
                <p className={cardClassName + '__description'}>{description}</p>
            </div>
        </article>
    );
};
