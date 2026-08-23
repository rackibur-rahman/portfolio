import '../styles/BugLifecycleStory.css';

const steps = [
  {
    id: "01",
    title: "DETECTION",
    desc: "Critical payment bug caught in staging",
    note: "Caught before customer impact",
    noteIcon: "⏱",
  },
  {
    id: "02",
    title: "ROOT CAUSE ANALYSIS",
    desc: "RCA: Missing edge case in concurrency",
    note: "Deep dive drives clarity",
    noteIcon: "🎯",
  },
  {
    id: "03",
    title: "FIX & VERIFICATION",
    desc: "Fix implemented and verified with automated tests",
    note: "Tests green. Confidence high.",
    noteIcon: "✅",
  },
  {
    id: "04",
    title: "PREVENTION",
    desc: "Added safeguards and improved test coverage",
    note: "Guardrails stop regression",
    noteIcon: "🔒",
  },
  {
    id: "05",
    title: "TEAM LEARNING",
    desc: "Shared insights and updated our playbooks",
    note: "Stronger team. Better systems.",
    noteIcon: "📈",
  },
];

const BugLifecycleStory = () => {
  return (
    <section id="bug-lifecycle" className="bls-section">
      <div className="bls-container">
        {/* Header */}
        <div className="bls-top-bar">
          <div className="bls-left-badge">
            <span className="bls-bug-icon">🐞</span>
            <span>ENGINEERING • RESILIENCE • IMPACT</span>
          </div>
        </div>

        <h2 className="bls-title">Bug Lifecycle Story</h2>
        <p className="bls-subtitle">
          From detection to lasting impact — how we find, fix, and learn<br />
          so bugs don’t come back.
        </p>
        <div className="bls-underline"></div>

        {/* Timeline */}
        <div className="bls-timeline">
          <div className="bls-line"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="bls-step">
              <div className="bls-dot-wrapper">
                <div className="bls-outer-dot">
                  <div className="bls-inner-dot"></div>
                </div>
              </div>

                <div className="bls-card">
                <div className="bls-card-icon">
                    {index === 0 && "🐞"}
                    {index === 1 && "🔍"}
                    {index === 2 && "🛡️"}
                    {index === 3 && "🛡️"}
                    {index === 4 && "👥"}
                </div>

                <div className="bls-card-number">
                    <span className="bls-number-box">{step.id}</span>
                    <span className="bls-number-title">{step.title}</span>
                </div>

                <p className="bls-card-desc">{step.desc}</p>

                <div className="bls-card-note">
                    <span>{step.noteIcon}</span> {step.note}
                </div>
                </div>
            </div>
          ))}
        </div>

        {/* Key Takeaway */}
        <div className="bls-takeaway">
          <div className="bls-takeaway-label">✦ KEY TAKEAWAY</div>
          <p>Every bug is a story. Every story makes our system — and our team — better.</p>
        </div>
      </div>
    </section>
  );
};

export default BugLifecycleStory;