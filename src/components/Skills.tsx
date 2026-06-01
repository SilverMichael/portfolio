import { useApp } from '../context/AppContext'

const skillsByCategory = [
  ["React", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  ["Node.js", "Express", "GraphQL", "C# .NET", "REST API", "PHP", "Python"],
  ["MySQL", "PostgreSQL", "SQL Server", "SQLite", "Prisma", "Entity Framework"],
  ["Git", "GitHub", "Stripe", "Vite", "WordPress", "Docker"],
]

export function Skills() {
  const { t } = useApp()

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">{t.skills.label}</span>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        <div className="skills-grid">
          {t.skills.categories.map((catName, idx) => (
            <div key={catName} className="skill-category">
              <div className="skill-cat-header">
                <span className="skill-cat-name">{catName}</span>
              </div>
              <div className="skill-tags">
                {skillsByCategory[idx].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
