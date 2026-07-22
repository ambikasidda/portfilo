const certifications = [
  { icon: "🎓", org: "AICTE", title: "AI & Machine Learning" },
  { icon: "☕", org: "AICTE", title: "Java Full Stack" },
  { icon: "🐍", org: "Skill Dunia", title: "Machine Learning with Python" },
  { icon: "☁️", org: "Amazon Web Services", title: "AWS Certified Cloud Practitioner" },
  { icon: "🌐", org: "Skill India", title: "Web Development" },
  { icon: "🤖", org: "IBM", title: "AI & Machine Learning" },
  { icon: "☕", org: "Skill Drize", title: "Full Stack Java" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="container">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <div className="cert-card" key={i}>
            <span className="icon">{cert.icon}</span>
            <div>
              <h4>{cert.org}</h4>
              <p>{cert.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
