import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import DownloadButton from '../../common/components/DownloadButton/DownloadButton';
import cv from '../../assets/files/resume.pdf';
import style from './Home.module.css';


interface HomeProps {
    menu: boolean;
}

const Home: React.FC<HomeProps> = ({ menu }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showScrollIcon, setShowScrollIcon] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setShowScrollIcon(false);
            } else {
                setShowScrollIcon(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id='Home' className={style.home}>
            <div className={style["home-content"]}>
                <h1>HEY, I'M Moez Dbira</h1>
                <p>A Data Scientist & Engineer building scalable data pipelines, machine learning models, and AI-driven applications that deliver real business impact</p>
                <a
                    href={cv}
                    download="cv-PDF-document"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DownloadButton>
                        Download Resume
                    </DownloadButton>
                </a>
                {isMobile && (
                    <div className={style["contact-nav"]}>
                        <a className={style.github} target="_blank" href='https://github.com/dbiram' >
                            <AiFillGithub size="30px" color='black' />
                        </a>
                        <a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/moez-dbira/' >
                            <AiFillLinkedin size="30px" color='black' />
                        </a>
                        <a className={style.gmail} target="_blank" href="mailto:dbiamoez@hotmail.fr?subject=SendMail&body=Description" >
                            <BiLogoGmail size="30px" color='black' />
                        </a>
                    </div>
                )}
            </div>
            {showScrollIcon && !menu && (
                <div className={style["scroll-icon"]}>
                    <div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
                        <div className={style.chevrons}>
                            <div className={style["chevron-down"]}></div>
                            <div className={style["chevron-down"]}></div>
                        </div>
                    </div>
                </div>
            )}
            {!isMobile && (
                <div className={style["contact-nav"]}>
                    <a className={style.github} target="_blank" href='https://github.com/dbiram' >
                        <AiFillGithub size="30px" color='black' />
                    </a>
                    <a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/moez-dbira/' >
                        <AiFillLinkedin size="30px" color='black' />
                    </a>
                    <a className={style.gmail} target="_blank" href="mailto:dbiramoez@hotmail.fr?subject=SendMail&body=Description" >
                        <BiLogoGmail size="30px" color='black' />
                    </a>
                </div>
            )}
        </div>
    );
};

export default Home;
