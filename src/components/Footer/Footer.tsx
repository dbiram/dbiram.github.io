import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import style from './Footer.module.css';

export default function Footer(){
    return (
        <div className={style.footer}>
                <div className={style.container}>
                    <div className={style["footer-info"]}>
                        <div>
                            <h3>moez dbira</h3>
                            <p>A Data Scientist & Engineer crafting scalable data solutions, machine learning models, and intelligent applications that drive meaningful business impact</p>
                        </div>
                        <div className={style.social}>
                            <h3>Social</h3>
                            <div className="">
                                <a className={style.git} target="_blank" href='https://github.com/dbiram' >
                                    <AiFillGithub size="30px" color='white' />
                                </a>
                                <a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/moez-dbira/' >
                                    <AiFillLinkedin size="30px" color='white' />
                                </a>
                                <a className={style.gmail} target="_blank" href="mailto:dbiramoez@hotmail.fr?subject=SendMail&body=Description" >
                                    <BiLogoGmail size="30px" color='white' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style["copy-right"]}>
                        © Copyright 2025. Made by <span>Moez Dbira</span>
                    </div>
                </div>
            </div>
    );
};
