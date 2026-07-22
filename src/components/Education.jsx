const educationHistory = [
  {
    year: "2022 – 2026",
    title: "B.Tech in CSE (AI & ML)",
    place: "Santhiram College of Engineering & Technology, Nandyal, AP",
    detail: "CGPA: 9.1 / 10",
  },
  {
    year: "2020 – 2022",
    title: "XII Standard — MPC",
    place: "Nucleus Junior College, Srinivasa Nagar, Nandyal, AP",
    detail: "CGPA: 9.18 / 10",
  },
  {
    year: "2020",
    title: "SSC (10th Standard)",
    place: "Sri Chaitanya English Medium School, Nandyal, AP",
    detail: "CGPA: 9.2 / 10",
  },
];

export default function Education() {
  return (
    <section id="education" className="container">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationHistory.map((item) => (
          <div className="timeline-item" key={item.title}>
            <span className="timeline-year">{item.year}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.place}</p>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
