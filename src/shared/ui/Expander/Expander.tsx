import plus from '@/assets/plus.svg';
import minus from '@/assets/minus.svg';
import { ReactNode, useState } from 'react';
import './Expander.scss';

type ExpanderProps = {
    title: string;
    children: ReactNode;
};

const PlusIcon = () => (
    <img
        src={plus}
        alt="expand"
    />
);
const MinusIcon = () => (
    <img
        src={minus}
        alt="collapse"
    />
);

export const Expander = ({ title, children: content }: ExpanderProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    return (
        <section className="expander block">
            <header className="expander__header">
                <h2 className="h3">{title}</h2>
                <button
                    type="button"
                    className="unsettedButton expander__toggleButton"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? <PlusIcon /> : <MinusIcon />}
                </button>
            </header>
            {!isCollapsed && <div className="expander__content">{content}</div>}
        </section>
    );
};
