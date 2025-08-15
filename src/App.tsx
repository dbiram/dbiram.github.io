import './App.css'

export default function App() {
  const projects = [
    {
      title: 'Churn Prediction API',
      desc: 'Binary classification model to predict customer churn, deployed on Hugging Face.',
      code: 'https://github.com/dbiram/churn-prediction',
      demo: 'https://huggingface.co/spaces/dbiram/churn-prediction-ui'
    },
    {
      title: 'iPhone Sales Forecast',
      desc: 'LightGBM model predicting 8 weeks of sales per iPhone model.',
      code: 'https://github.com/dbiram/iphone_sales_forecasting',
      demo: 'https://huggingface.co/spaces/dbiram/iphone-sales-forecast'
    },
    {
      title: 'Diet Assistant (RAG + Computer Vision)',
      desc: 'RAG + Vision app to track meals, workouts, and provide nutritional guidance.',
      code: 'https://github.com/dbiram/diet_assistant',
      demo: 'https://diet-assistant-1.onrender.com/'
    }
  ];

  return (
    <div className="container">
      <header>
        <h1>Dbira Moez</h1>
        <p>Data Scientist | ML Engineer</p>
      </header>

      <main>
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.code} target="_blank">Code</a> | <a href={p.demo} target="_blank">Demo</a>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <small>&copy; 2025 Dbira Moez</small>
      </footer>
    </div>
  )
}
