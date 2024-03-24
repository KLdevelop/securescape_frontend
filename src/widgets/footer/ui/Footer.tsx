import infotecsLogo from '@/assets/infotecs_logo.png';
import './Footer.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__projectInfo">
                <p>Разработано командой Биты Шрёдингера</p>
                <p>В рамках Secon Хакатон</p>
            </div>
            <div className="footer__companyInfo">
                <p>Кейс от комании Infotecs</p>
                <img
                    src={infotecsLogo}
                    alt="infotecs"
                />
            </div>
        </footer>
    );
};
