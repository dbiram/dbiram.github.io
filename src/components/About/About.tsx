import { useEffect } from 'react';
import AOS from 'aos';
import profilePic from '../../assets/my-photo.png';
import style from './About.module.css';
import { 
  SiPython, 
  SiPytorch, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiTensorflow, 
  SiDocker, 
  SiFastapi, 
  SiJupyter, 
  SiPrometheus, 
  SiGrafana, 
  SiHuggingface, 
  SiLangchain, 
  SiMongodb, 
  SiPostgresql, 
  SiTableau,
  SiApachespark,
  SiApacheairflow,
  SiDbt,
  SiApachehadoop,
  SiAmazon,
  SiReact,
  SiAmazonredshift,
  SiRedis,
  SiOnnx,
  SiMinio
} from 'react-icons/si';
import { 
  FaBrain, 
  FaCogs, 
  FaChartLine, 
  FaRobot, 
  FaEye,
  FaDatabase 
} from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { PiShareNetworkDuotone } from 'react-icons/pi';


const categorizedSkills = {
  'Programming': [
    { name: 'Python', icon: <SiPython size="25px" color="white" />, cssName: "python" },
    { name: 'SQL', icon: <FaDatabase size="25px" color="white" />, cssName: "sql" },
    { name: 'Pandas', icon: <SiPandas size="25px" color="white" />, cssName: "pandas" },
    { name: 'NumPy', icon: <SiNumpy size="25px" color="white" />, cssName: "numpy" },
    { name: 'scikit-learn', icon: <SiScikitlearn size="25px" color="white" />, cssName: "scikit-learn" },
    { name: 'React', icon: <SiReact size="25px" color="white" />, cssName: "react" },
    { name: 'Git', icon: <BsGit size="25px" color="white" />, cssName: "git" },
  ],
  'Machine Learning & AI': [
    { name: 'Machine Learning', icon: <FaBrain size="25px" color="white" />, cssName: "ml" },
    { name: 'Deep Learning', icon: <PiShareNetworkDuotone size="25px" color="white" />, cssName: "dl" },
    { name: 'Time Series Forecasting', icon: <FaChartLine size="25px" color="white" />, cssName: "timeseries" },
    { name: 'Reinforcement Learning', icon: <FaRobot size="25px" color="white" />, cssName: "rl" },
    { name: 'Computer Vision', icon: <FaEye size="25px" color="white" />, cssName: "cv" },
    { name: 'Onnx', icon: <SiOnnx size="25px" color="white" />, cssName: "onnx" },
  ],
  'LLMs & Generative AI': [
    { name: 'LangChain', icon: <SiLangchain size="25px" color="white" />, cssName: "langchain" },
    { name: 'Hugging Face', icon: <SiHuggingface size="25px" color="white" />, cssName: "huggingface" },
    { name: 'RAG', icon: <FaRobot size="25px" color="white" />, cssName: "rag" },
  ],
  'Data Engineering & MLOps': [
    { name: 'FastAPI', icon: <SiFastapi size="25px" color="white" />, cssName: "fastapi" },
    { name: 'Docker', icon: <SiDocker size="25px" color="white" />, cssName: "docker" },
    { name: 'MLOps', icon: <FaCogs size="25px" color="white" />, cssName: "mlops" },
    { name: 'Apache Spark', icon: <SiApachespark size="25px" color="white" />, cssName: "spark" },
    { name: 'Airflow', icon: <SiApacheairflow size="25px" color="white" />, cssName: "airflow" },
    { name: 'dbt', icon: <SiDbt size="25px" color="white" />, cssName: "dbt" },
    { name: 'HDFS', icon: <SiApachehadoop size="25px" color="white" />, cssName: "hdfs" },
    { name: 'AWS', icon: <SiAmazon size="25px" color="white" />, cssName: "aws" },
    { name: 'MinIO', icon: <SiMinio size="25px" color="white" />, cssName: "minio" },
  ],
  'Databases, Visualization & Other skills': [
    { name: 'PostgreSQL', icon: <SiPostgresql size="25px" color="white" />, cssName: "postgresql" },
    { name: 'MongoDB', icon: <SiMongodb size="25px" color="white" />, cssName: "mongodb" },
    { name: 'Redshift', icon: <SiAmazonredshift size="25px" color="white" />, cssName: "redshift" },
    { name: 'Redis', icon: <SiRedis size="25px" color="white" />, cssName: "redis" },
    { name: 'Tableau', icon: <SiTableau size="25px" color="white" />, cssName: "tableau" },
    { name: 'Grafana', icon: <SiGrafana size="25px" color="white" />, cssName: "grafana" },
    { name: 'Prometheus', icon: <SiPrometheus size="25px" color="white" />, cssName: "prometheus" },
    { name: 'Jupyter', icon: <SiJupyter size="25px" color="white" />, cssName: "jupyter" },
    { name: 'Problem Solving', icon: <FaCogs size="25px" color="white" />, cssName: "problem-solving" },
    { name: 'Communication Skills', icon: <FaBrain size="25px" color="white" />, cssName: "communication" },
  ]
};


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
                      {Object.entries(categorizedSkills).map(([category, skillsArr], catIdx) => (
                        <div key={category} style={{width: '100%'}}>
                          <div style={{fontWeight: 'bold', fontSize: '15px', margin: '18px 0 10px 0', color: 'var(--title-color)'}}>{category}</div>
                          <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px 10px'}}>
                            {skillsArr.map((skill, idx) => (
                              <div key={`skill${catIdx}-${idx}`} className={`${style.skill} ${style[skill.cssName]}`}>
                                <div className={style["skill-name"]}>{skill.name}</div>
                                <div className={style["skill-icon"]}>{skill.icon}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
