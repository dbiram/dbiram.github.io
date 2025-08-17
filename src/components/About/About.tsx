import { useEffect } from 'react';
import AOS from 'aos';
import profilePic from '../../assets/my-photo.png';
import style from './About.module.css';
import { SiPython, SiMysql, SiPytorch, SiDocker, SiFastapi } from 'react-icons/si';
import { FaBrain, FaCogs, FaChartLine, FaReact } from 'react-icons/fa';
import { VscDatabase } from 'react-icons/vsc';
import { BsGit, BsPuzzle } from 'react-icons/bs';

const skills = [
  {
    name: 'Python',
    icon: <SiPython size="25px" color="white" />,
    cssName: "python"
  },
  {
    name: 'SQL',
    icon: <SiMysql size="25px" color="white" />,
    cssName: "sql"
  },
  {
    name: 'Machine Learning',
    icon: <FaBrain size="25px" color="white" />,
    cssName: "ml"
  },
  {
    name: 'Deep Learning',
    icon: <SiPytorch size="25px" color="white" />,
    cssName: "dl"
  },
  {
    name: 'Data Engineering',
    icon: <VscDatabase size="25px" color="white" />,
    cssName: "data-eng"
  },
  {
    name: 'ETL Pipelines',
    icon: <FaCogs size="25px" color="white" />,
    cssName: "etl"
  },
  {
    name: 'Time Series Forecasting',
    icon: <FaChartLine size="25px" color="white" />,
    cssName: "forecasting"
  },
  {
    name: 'MLOps',
    icon: <SiDocker size="25px" color="white" />,
    cssName: "mlops"
  },
  {
    name: 'FastAPI',
    icon: <SiFastapi size="25px" color="white" />,
    cssName: "fastapi"
  },
  {
    name: 'React',
    icon: <FaReact size="25px" color="white" />,
    cssName: "react"
  },
  {
    name: 'Git',
    icon: <BsGit size="25px" color="white" />,
    cssName: "git"
  },
  {
    name: 'Problem Solving',
    icon: <BsPuzzle size="25px" color="white" />,
    cssName: "problem-solving"
  }
];


export default function About(){
  useEffect(() => { AOS.init({ duration: 700, once:true }); }, []);
  return (
    <div id='About' className={style.about}>
        <div className={style.container}>
            <h2 className={style.title}>About Me</h2>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            <div className={style["about-content"]}>
                <div className={style["about-info"]}>
                    <h3>Get to know me!</h3>
                    <div className={style["about-details"]}>
                      <img src={profilePic} alt="Profile" className={style.profilePic} />
                      <p>
                        I'm a <span>Data Scientist & Engineer</span> passionate about building
                        scalable data pipelines, developing <span>machine learning</span> models,
                        and deploying end-to-end solutions that create real business impact. Check
                        out some of my work in the <span>Projects</span> section. <br />{" "}
                        <br />
                        I'm open to exciting <span>opportunities</span> where I can leverage my
                        skills in data science, engineering, and AI to contribute, learn, and grow.
                        If you have a great opportunity that aligns with my background, don’t
                        hesitate to <span>contact</span> me.
                      </p>
                    </div>
                </div>
                <div className={style["my-skill"]}>
                    <h3>My Skills</h3>
                    <div className={style.skills}>
                        {
                            skills.map((skill, index) => {
                                return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
                                    <div className={style["skill-name"]}>{skill.name}</div>
                                    <div className={style["skill-icon"]}>{skill.icon}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
