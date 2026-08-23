import '../styles/ShiftLeftQualityMap.css';

const stages = [
  {
    id: "01",
    title: "Requirements",
    icon: "📄",
    items: [
      { icon: "🛡️", text: "Risk-based testing — Identify risks early and prioritize what matters." },
      { icon: "🚩", text: "Test strategy — Define quality goals and approach aligned to business outcomes." },
      { icon: "👁", text: "Observability — Plan quality signals and success measures from day one." },
    ],
  },
  {
    id: "02",
    title: "Design",
    icon: "✏️",
    items: [
      { icon: "🛡️", text: "Risk-based testing — Risk assessment in design decisions and edge cases." },
      { icon: "🚩", text: "Test strategy — Shift-left test design and scenario planning." },
      { icon: "📦", text: "Automation framework — Define automation scope and reusable test components." },
    ],
  },
  {
    id: "03",
    title: "Development",
    icon: "</>",
    items: [
      { icon: "📦", text: "Automation framework — Build and evolve a robust, scalable automation framework." },
      { icon: "🛡️", text: "Risk-based testing — Collaborate on unit & integration testing focus." },
      { icon: "👁", text: "Observability — Embed quality checks and early feedback loops." },
    ],
  },
  {
    id: "04",
    title: "CI/CD",
    icon: "⚙️",
    items: [
      { icon: "📦", text: "Automation framework — Continuous automated testing in pipelines." },
      { icon: "📊", text: "Observability — Quality gates, dashboards, and pipeline visibility." },
      { icon: "🚩", text: "Test strategy — Fast feedback and automated regression assurance." },
    ],
  },
  {
    id: "05",
    title: "Production",
    icon: "☁️",
    items: [
      { icon: "👁", text: "Observability — Monitor quality in production and user impact." },
      { icon: "🛡️", text: "Risk-based testing — Production risk monitoring and mitigation." },
      { icon: "🚩", text: "Test strategy — Continuous improvement through data and feedback." },
    ],
  },
];

const ShiftLeftQualityMap = () => {
  return (
    <section id="shift-left" className="sl-section">
      <div className="sl-container">
        {/* Header */}
        <div className="sl-top-bar">
          <div className="sl-left-badge">
            <span>📍</span> QUALITY ENGINEERING PORTFOLIO
          </div>
        </div>

        <h2 className="sl-title">Shift-Left Quality Map</h2>
        <p className="sl-subtitle">
          Building quality in early. Delivering value with confidence.<br />
          A QA Lead’s end-to-end quality mindset.
        </p>
        <div className="sl-underline"></div>

        {/* Cards */}
        <div className="sl-grid">
          {stages.map((stage, index) => (
            <div key={stage.id} className="sl-card-wrapper">
              <div className="sl-card">
                <div className="sl-card-header">
                  <div className="sl-number">{stage.id}</div>
                  <div className="sl-card-icon">{stage.icon}</div>
                </div>
                <h3 className="sl-card-title">{stage.title}</h3>
                <div className="sl-card-label">QA Contributions</div>
                <ul className="sl-list">
                  {stage.items.map((item, i) => (
                    <li key={i}>
                      <span className="sl-item-icon">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < stages.length - 1 && (
                <div className="sl-arrow">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sl-footer">
          <div className="sl-footer-left">
            🛡️ QUALITY IS EVERYONE’S RESPONSIBILITY. OWNERSHIP STARTS EARLY.
          </div>
          <div className="sl-footer-right">
            ✦ QA Lead. Quality Advocate. Delivery Partner.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiftLeftQualityMap;