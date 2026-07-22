const projects = [
  {
    category: "Machine Learning",
    title: "AI-Based Disease Prediction System",
    text: "Independently designed and deployed an AI system that predicts potential diseases based on user-reported symptoms, returning multiple diagnoses with confidence scores through an interactive web interface.",
    tags: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Bootstrap"],
    link: "https://github.com/Keerthi778/AI-Based-disease-prediction-System",
  },
  {
    category: "Web Development",
    title: "Expense Tracker",
    text: "Built a responsive expense tracker with dynamic categorization, local storage for data retention, and an interactive dashboard with chart-based visualizations.",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage API"],
    link: "https://github.com/Keerthi778/Expense-Tracker-App",
  },
  {
    category: "Data Analytics",
    title: "AI Adoption Dashboard — Excel Macros",
    text: "Built a one-click dashboard with VBA macros for automated data processing, KPI calculations, and report generation, visualizing AI adoption rates and industry trends.",
    tags: ["Microsoft Excel", "VBA", "Power BI"],
    link: "https://www.linkedin.com/posts/siddakeerthi04_ai-adoption-in-fortune-500-companies-one-click-ugcPost-7468868512338354176--yI6",
  },
  {
    category: "AI / Portfolio",
    title: "Personal Portfolio — Lovable",
    text: "Developed a responsive personal portfolio app showcasing skills, certifications, and projects, designed to highlight professional profile for remote hiring opportunities.",
    tags: ["Lovable", "React", "Responsive Design"],
    link: "https://siddakeerthi-portfolio.lovable.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <span className="project-category">{project.category}</span>
            <h4>{project.title}</h4>
            <p>{project.text}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View Project ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
