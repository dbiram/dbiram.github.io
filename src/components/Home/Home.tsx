import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import DownloadButton from '../../common/components/DownloadButton/DownloadButton';
import cv from '../../assets/files/resume.pdf';
import style from './Home.module.css';

const Home: React.FC = () => {
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
            </div>
            <div className={style["scroll-icon"]}>
                <div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
                    <div className={style.chevrons}>
                        <div className={style["chevron-down"]}></div>
                        <div className={style["chevron-down"]}></div>
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default Home;
