import './footer.css';

function Footer() {
    return (
        <footer>
            <h3>© {new Date().getFullYear()}</h3>
            <div className="flex">
                <a href="https://github.com/evanGRU" target="_blank">
                    GITHUB
                </a>
                <a href="https://www.linkedin.com/in/evan-gruchot-6b1297231/" target="_blank">
                    LINKEDIN
                </a>
                <a href="img/CV-gruchot.pdf" target="_blank">CV</a>
            </div>
        </footer>
    );
}

export default Footer;
