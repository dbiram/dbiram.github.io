import { AiFillGithub, AiOutlineEye } from "react-icons/ai";
import IconButton from '../../common/components/IconButton/IconButton';
import style from './Projects.module.css';

//import images
import ChurnPrediction from '../../assets/images/churn-prediction.png';
import DietAssistant from '../../assets/images/diet-assistant.png';
import IphoneSalesForecast from '../../assets/images/iphone-sales-forecast.png';


interface Project {
    name: string;
    link: string;
    github: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        name: 'Churn Prediction API',
        link: 'https://huggingface.co/spaces/dbiram/churn-prediction-ui',
        github: 'https://github.com/dbiram/churn-prediction',
        description: 'FastAPI + LightGBM with clean preprocessing modules. Deployed on Hugging Face.',
        image: ChurnPrediction
    },
    {
        name: 'iPhone Sales Forecast',
        link: 'https://huggingface.co/spaces/dbiram/iphone-sales-forecast',
        github: 'https://github.com/dbiram/iphone_sales_forecasting',
        description: 'Feature-engineered LightGBM forecasting with 8-week horizon.',
        image: IphoneSalesForecast
    },
    {
        name: 'Diet Assistant (RAG + CV)',
        link: 'https://diet-assistant-1.onrender.com/',
        github: 'https://github.com/dbiram/diet_assistant',
        description: 'RAG Q&A + Food-101 vision for calorie estimates. Auth, logs, summaries.',
        image: DietAssistant
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
