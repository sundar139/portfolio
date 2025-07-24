import { FaChartBar, FaRobot, FaBrain, FaTools } from "react-icons/fa";
import Title from "/src/components/Title.jsx";

const skillSections = [
  {
    title: "Data Analysis",
    icon: <FaChartBar size={28} />,
    skills: [
      "Data Processing: Pandas, NumPy, SciPy",
      "Visualization: Power BI, Tableau, Matplotlib, Seaborn, Plotly",
      "Databases: MySQL, PostgreSQL, MongoDB",
      "Environments: Jupyter Notebook",
      "Big Data: Hadoop, HDFS, MapReduce, Spark",
    ],
  },
  {
    title: "Data Science",
    icon: <FaBrain size={28} />,
    skills: [
      "Libraries: Scikit-Learn, TensorFlow, Keras, PyTorch",
      "NLP: NLTK, Spacy",
      "MLOps: AWS (EC2, S3, SageMaker, Lambda, API Gateway, IAM, Bedrock, DynamoDB)",
      "Tools: Docker, Kubernetes, MLflow, Boto3, GitHub Actions",
      "Visualization: Seaborn, Matplotlib, Plotly",
    ],
  },
  {
    title: "AI",
    icon: <FaRobot size={28} />,
    skills: [
      "LLMs: GPT-2, GPT-3.5, BERT, RoBERTa, T5, LLaMA 2, DistilBERT, Mistral",
      "Frameworks: Langchain, Langflow",
      "Pipelines: Retrieval-Augmented Generation (RAG)",
      "Databases: ChromaDB, AstraDB",
      "Deployment: AWS Bedrock, Lambda, API Gateway, Streamlit",
    ],
  },
  {
    title: "Core Skills",
    icon: <FaTools size={28} />,
    skills: [
      "Languages: Python, R, SQL, MATLAB, Excel, SAS, C, C++, CUDA",
      "Libraries: Pandas, NumPy, SciPy",
      "Visualization: Matplotlib, Seaborn, Plotly",
      "DevOps: AWS, Docker, Kubernetes",
      "Version Control: Git, GitHub Actions",
      "Environments: Jupyter Notebook, Streamlit",
      "Automation: Boto3",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-16 px-6 flex justify-center">
      <div className="max-w-screen-xl w-full">
        <Title title="My Core Skills" />
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          {skillSections.map((section, index) => (
            <div className="card2" key={index}>
              <div className="face1">
                <div className="icon mb-2">{section.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wide">{section.title}</h3>
              </div>
              <div className="face2">
                <ul>
                  {section.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
