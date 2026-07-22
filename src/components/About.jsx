export default function About() {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            <strong>
              AI & ML Engineer · Full-Stack Developer · B.Tech CSE (AI & ML),
              CGPA 9.1/10
            </strong>
          </p>
          <p>
            I build AI-driven products end-to-end — from training and
            deploying machine learning models to shipping the full-stack web
            apps that put them in front of real users. My AI-Based Disease
            Prediction System takes user symptoms and returns ranked
            diagnoses with confidence scores through a live web interface,
            and my Expense Tracker and VBA-powered AI Adoption Dashboard show
            I can turn raw data into decision-ready insights.
          </p>
          <p>
            I'm AWS Certified Cloud Practitioner certified and backed by IBM,
            AICTE, and Skill India credentials in AI/ML and full-stack
            development. I move fast, learn new stacks on demand, and I'm
            comfortable owning a project from idea to deployment.
          </p>
        </div>

        <div className="about-meta">
          <div className="meta-card">
            <span>Languages</span>
            English · Telugu
          </div>
          <div className="meta-card">
            <span>Location</span>
            Nandyal, Andhra Pradesh
          </div>
          <div className="meta-card">
            <span>Availability</span>
            Open to Internships & Full-Time
          </div>
          <div className="meta-card">
            <span>Focus Areas</span>
            AI/ML · Web Dev · Robotics
          </div>
        </div>
      </div>
    </section>
  );
}
