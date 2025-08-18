import type { JSX } from "react";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import IconButton from '../../common/components/IconButton/IconButton';
import style from './Projects.module.css';
import { SiPython, SiDocker, SiFastapi, SiJupyter, SiPrometheus, SiGrafana, SiHuggingface, SiLangchain, SiMongodb, SiPostgresql, SiTableau, SiApache, SiApachehadoop } from 'react-icons/si';
import { FaBrain, FaCogs, FaChartLine, FaReact, FaRobot, FaEye, FaDatabase } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';

//import images
import ChurnPrediction from '../../assets/images/churn-prediction.png';
import DietAssistant from '../../assets/images/diet-assistant.png';
import IphoneSalesForecast from '../../assets/images/iphone-sales-forecast.png';
import TwitterPlayerPerformance from '../../assets/images/twitter-player-performance.png';


interface Tag {
    name: string;
    icon: JSX.Element;
    cssName: string;
}

interface Project {
    name: string;
    link: string;
    github: string;
    description: string;
    image: string;
    tags?: Tag[];
}

const tagMap: { [key: string]: Tag } = {
    'Python': {
        name: 'Python',
        icon: <SiPython size="25px" color="white" />,
        cssName: "python"
    },
    'FastAPI': {
        name: 'FastAPI',
        icon: <SiFastapi size="25px" color="white" />,
        cssName: "fastapi"
    },
    'RAG': {
        name: 'RAG',
        icon: <FaRobot size="25px" color="white" />,
        cssName: "rag"
    },
    'LLM': {
        name: 'LLM',
        icon: <FaBrain size="25px" color="white" />,
        cssName: "llm"
    },
    'LangChain': {
        name: 'LangChain',
        icon: <SiLangchain size="25px" color="white" />,
        cssName: "langchain"
    },
    'Computer Vision': {
        name: 'Computer Vision',
        icon: <FaEye size="25px" color="white" />,
        cssName: "computer-vision"
    },
    'Docker': {
        name: 'Docker',
        icon: <SiDocker size="25px" color="white" />,
        cssName: "docker"
    },
    'Git': {
        name: 'Git',
        icon: <BsGit size="25px" color="white" />,
        cssName: "git"
    },
    'Grafana': {
        name: 'Grafana',
        icon: <SiGrafana size="25px" color="white" />,
        cssName: "grafana"
    },
    'Prometheus': {
        name: 'Prometheus',
        icon: <SiPrometheus size="25px" color="white" />,
        cssName: "prometheus"
    },
    'React': {
        name: 'React',
        icon: <FaReact size="25px" color="white" />,
        cssName: "react"
    },
    'Machine Learning': {
        name: 'Machine Learning',
        icon: <FaBrain size="25px" color="white" />,
        cssName: "ml"
    },
    'Timeseries': {
        name: 'Timeseries',
        icon: <FaChartLine size="25px" color="white" />,
        cssName: "timeseries"
    },
    'Feature Engineering': {
        name: 'Feature Engineering',
        icon: <FaCogs size="25px" color="white" />,
        cssName: "feature-engineering"
    },
    'Jupyter Notebooks': {
        name: 'Jupyter Notebooks',
        icon: <SiJupyter size="25px" color="white" />,
        cssName: "jupyter"
    },
    'Hugging Face': {
        name: 'Hugging Face',
        icon: <SiHuggingface size="25px" color="white" />,
        cssName: "huggingface"
    },
    'Joblib': {
        name: 'Joblib',
        icon: <FaCogs size="25px" color="white" />,
        cssName: "joblib"
    },
    'Data Engineering': {
        name: 'Data Engineering',
        icon: <FaDatabase size="25px" color="white" />,
        cssName: "data-eng"
    },
    'ETL': {
        name: 'ETL',
        icon: <FaCogs size="25px" color="white" />,
        cssName: "etl"
    },
    'HDFS': {
        name: 'HDFS',
        icon: <SiApachehadoop size="25px" color="white" />,
        cssName: "hdfs"
    },
    'Avro': {
        name: 'Avro',
        icon: <SiApache size="25px" color="white" />,
        cssName: "avro"
    },
    'MongoDB': {
        name: 'MongoDB',
        icon: <SiMongodb size="25px" color="white" />,
        cssName: "mongodb"
    },
    'PostgreSQL': {
        name: 'PostgreSQL',
        icon: <SiPostgresql size="25px" color="white" />,
        cssName: "postgresql"
    },
    'Tableau': {
        name: 'Tableau',
        icon: <SiTableau size="25px" color="white" />,
        cssName: "tableau"
    }
};

const projects: Project[] = [
    {
        name: 'Nutrition Tracking Assistant with RAG & Computer Vision',
        link: 'https://diet-assistant-1.onrender.com/',
        github: 'https://github.com/dbiram/diet_assistant',
        description: 'Built a full-stack diet and fitness assistant that combines RAG for text queries with computer vision for food calorie estimation. Users can chat with the assistant, log meals and workouts, and upload images for nutrition analysis. Implemented user authentication, personalized profiles, and a unified /chat endpoint with intent detection. Designed with FastAPI + React, deployed via Docker, and optimized for GPU inference with Hugging Face models. Added a monitoring dashboard with Grafana + Prometheus to track LLM latency, token usage, and system health in real time.',
        image: DietAssistant,
        tags: [
            tagMap['FastAPI'],
            tagMap['RAG'],
            tagMap['LLM'],
            tagMap['LangChain'],
            tagMap['Computer Vision'],
            tagMap['Docker'],
            tagMap['Git'],
            tagMap['Grafana'],
            tagMap['Prometheus'],
            tagMap['React']
        ]
    },
    {
        name: 'Time Series Forecasting for Iphone Sales',
        link: 'https://huggingface.co/spaces/dbiram/iphone-sales-forecast',
        github: 'https://github.com/dbiram/iphone_sales_forecasting',
        description: 'Developed a time series forecasting model to predict weekly iPhone sales per model, incorporating seasonality, promotions, and product launches. Engineered features like product age, discount rate, and contract cycles to capture business dynamics from real-world non-cleaned data. Trained and compared LightGBM, XGBoost and Prophet models to achieve strong predictive performance (MAPE ~0.8) with LightGBM. Insights supported inventory and promotion strategies, bridging ML with real business needs.',
        image: IphoneSalesForecast,
        tags: [
            tagMap['Python'],
            tagMap['Machine Learning'],
            tagMap['Timeseries'],
            tagMap['Feature Engineering'],
            tagMap['Jupyter Notebooks'],
            tagMap['Git'],
            tagMap['Hugging Face']
        ]
    },
    {
        name: 'Football Performance Analytics from Social Media',
        link: '',
        github: 'https://github.com/dbiram/twitter_player_performance',
        description: 'Built a full ETL pipeline that correlates Bundesliga football players’ match ratings with public sentiment on Twitter. The system ingests match data and tweets via APIs, stores raw data in an HDFS-based data lake (Avro format), and processes it through batch pipelines that run sentiment analysis before loading into a data warehouse (MongoDB + PostgreSQL). Results are served via Tableau dashboards, enabling interactive exploration of how online sentiment impacts on-field performance.',
        image: TwitterPlayerPerformance,
        tags: [
            tagMap['Python'],
            tagMap['Data Engineering'],
            tagMap['ETL'],
            tagMap['HDFS'],
            tagMap['Avro'],
            tagMap['MongoDB'],
            tagMap['PostgreSQL'],
            tagMap['Tableau']
        ]
    },
    {
        name: 'Churn Risk Scoring Service',
        link: 'https://huggingface.co/spaces/dbiram/churn-prediction-ui',
        github: 'https://github.com/dbiram/churn-prediction',
        description: 'Built an end-to-end churn prediction system to identify customers likely to leave. The project covers preprocessing with OneHotEncoder, training a LightGBM model, and evaluating its performance. The model and encoder were serialized with Joblib and deployed using FastAPI as a REST API. Everything was containerized with Docker for reproducibility and integration into external apps.',
        image: ChurnPrediction,
        tags: [
            tagMap['Python'],
            tagMap['Machine Learning'],
            tagMap['FastAPI'],
            tagMap['Joblib'],
            tagMap['Docker'],
            tagMap['Git'],
            tagMap['Hugging Face']
        ]
    }
];

export default function  Projects(){
    return (
        <div id='Projects' className={style.projects}>
            <div className={style.container}>
                <h2 className={style.title}>Projects</h2>
                <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
                <div className={style["projects-list"]}>
                    {
                        projects.map((project, index) => {
                            return <div key={`project${index}`} className={style.project}>
                                <div className={style["project-image"]}>
                                    <img src={project.image} alt="Project Image" />
                                </div>
                                <div className={style["project-info"]}>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className={style["project-tags"]}>
                                        {project.tags?.map((tag, tagIndex) => (
                                            <div key={`${index}-${tagIndex}`} className={`${style["project-tag"]} ${style[tag.cssName]}`}>
                                                <div className={style["tag-name"]}>{tag.name}</div>
                                                <div className={style["tag-icon"]}>{tag.icon}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={style["project-buttons"]}>
                                        <IconButton
                                            width="170px"
                                            height="50px"
                                            backgroundColor="var(--primary-main)"
                                            color="white"
                                            link={project.link}
                                            icon={<AiOutlineEye size="25px" color='white' />}
                                        >
                                            Live Demo
                                        </IconButton>
                                        <IconButton
                                            width="100px"
                                            height="50px"
                                            backgroundColor="black"
                                            color="white"
                                            link={project.github}
                                            icon={<AiFillGithub size="25px" color='white' />}
                                        >
                                            Github
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};
