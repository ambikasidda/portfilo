const coreSkills = [
  "Python",
  "JavaScript",
  "Machine Learning",
  "Flask",
  "Django",
  "SQL / MongoDB",
  "Data Structures & Algorithms",
  "Power BI",
  "Git & GitHub",
  "REST APIs",
  "Computer Vision Basics",
  "Cloud Fundamentals (AWS)",
  "Problem Solving",
  "Excel & VBA",
];

const skillGroups = [
  {
    icon: "🐍",
    title: "Programming",
    text: "Python, Data Structures, Algorithms",
  },
  {
    icon: "🌐",
    title: "Web Development",
    text: "HTML, CSS, JavaScript, NodeJS",
  },
  {
    icon: "🤖",
    title: "AI / ML Libraries",
    text: "Scikit-learn, Pandas, NumPy, Flask",
  },
  {
    icon: "💬",
    title: "Soft Skills",
    text: "Communication, Teamwork, Self-Disciplined, Quick Learner, Adaptable",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills & Tools</h2>

      <div className="skills-tags">
        {coreSkills.map((skill) => (
          <span className="tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="icon">{group.icon}</div>
            <h4>{group.title}</h4>
            <p>{group.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
