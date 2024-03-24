import infotecsLogo from '@/assets/infotecs_logo.png';
import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__projectInfo">
                <p>Разработано командой Биты Шрёдингера</p>
                <p>В рамках Secon Хакатон</p>
            </div>
            <div className="footer__companyInfo">
                <p>Кейс от комании Infotecs</p>
                <Link
                    target="_blank"
                    to="https://infotecs.ru/"
                >
                    <img
                        src={infotecsLogo}
                        alt="infotecs"
                    />
                </Link>
            </div>
        </footer>
    );
};
