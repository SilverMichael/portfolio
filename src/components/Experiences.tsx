import { useApp } from "../context/AppContext";

const experienceTags = [
  ["Node.js", "GraphQL", "React", "Next.js", "Tailwind CSS", "Stripe"],
  ["React", "C# .NET", "SQL Server", "Tailwind CSS"],
  ["React Native", "QR Code", "React", "Tailwind CSS", "SQLite", "Prisma"],
  ["Python", "TensorFlow", "Keras", "JavaScript", "PHP"],
];

export function Experiences() {
  const { t } = useApp();

  return (
    <section id="experiences" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">{t.experiences.label}</span>
          <h2 className="section-title">{t.experiences.title}</h2>
        </div>

        <div className="projects-grid">
          {t.experiences.items.map((p, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card-header">
                <span className="project-emoji">icon</span>
                <span className="project-period">{p.period}</span>
              </div>

              <div>
                <div className="project-title">{p.title}</div>
                <div className="project-company">{p.company}</div>
              </div>

              <ul className="project-description">
                {p.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="project-tags">
                {experienceTags[idx].map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
