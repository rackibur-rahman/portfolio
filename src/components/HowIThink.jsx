import '../styles/HowIThink.css';

const principles = [
  {
    icon: "🛡️",
    title: "Risk over Checklist",
    desc: "Focus on what could impact users most, not just ticking boxes.",
  },
  {
    icon: "👤",
    title: "Quality is Ownership",
    desc: "We own outcomes, not just tests. Quality is everyone’s commitment.",
  },
  {
    icon: "⚙️",
    title: "Automation should reduce toil",
    desc: "Automate to free minds, not just to replace clicks.",
  },
  {
    icon: "🌱",
    title: "Every bug is a teacher",
    desc: "Every issue is insight. We learn, improve, and prevent.",
  },
];

const HowIThink = () => {
  return (
    <section id="how-i-think" className="hit-section">
      <div className="hit-container">
        <div className="hit-header">
          <p className="hit-label">QUALITY PHILOSOPHY</p>
          <h2 className="hit-title">How I Think</h2>
          <p className="hit-subtitle">
            A QA Lead’s approach to building quality that lasts.
          </p>
        </div>

        <div className="hit-grid">
          {principles.map((item, index) => (
            <div key={index} className="hit-card">
              <div className="hit-icon">{item.icon}</div>
              <h3 className="hit-card-title">{item.title}</h3>
              <p className="hit-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIThink;