import '../styles/MentorshipTeamGrowth.css';

const cards = [
  {
    icon: "👥",
    value: "15+",
    title: "Engineers Mentored",
    desc: "Guided and mentored 15+ engineers in testing best practices, problem solving and professional growth.",
  },
  {
    icon: "📈",
    value: "85%",
    title: "Skills Upskilled",
    desc: "Improved team automation capabilities by 85% through training in frameworks, scripting and CI/CD testing.",
  },
  {
    icon: "🚀",
    value: "70%",
    title: "Junior to Mid-Level Growth",
    desc: "Helped 70% of junior engineers advance to mid-level roles with structured guidance and growth plans.",
  },
];

const MentorshipTeamGrowth = () => {
  return (
    <section id="mentorship" className="mtg-section">
      <div className="mtg-container">
        <div className="mtg-header">
          <h2 className="mtg-title">Mentorship & Team Growth</h2>
          <p className="mtg-subtitle">
            QA Lead Engineer • Building high-performing QA teams through mentorship, skills growth and career development
          </p>
        </div>

        <div className="mtg-grid">
          {cards.map((card, index) => (
            <div key={index} className="mtg-card">
              <div className="mtg-icon">{card.icon}</div>
              <div className="mtg-value">{card.value}</div>
              <h3 className="mtg-card-title">{card.title}</h3>
              <p className="mtg-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mtg-quote">
          <div className="mtg-quote-mark">“</div>
          <p>
            Working with a mentor who truly invested in my growth was a game changer.
            The guidance, feedback and opportunities to learn accelerated career in QA.
          </p>
          <span className="mtg-quote-author">— QA Engineer (Mid-Level)</span>
        </div>
      </div>
    </section>
  );
};

export default MentorshipTeamGrowth;