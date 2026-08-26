import '../styles/QualityImpactDashboard.css';

const metrics = [
  {
    value: "0.8%",
    label: "Defect Escape Rate",
    trend: "+ improved",
  },
  {
    value: "85%",
    label: "Test Automation Coverage",
    trend: "+ improved",
  },
  {
    value: "4.2h",
    label: "Average Time to Detect",
    trend: "+ improved",
  },
  {
    value: "96%",
    label: "Release Quality Score",
    trend: "+ improved",
  },
];

const QualityImpactDashboard = () => {
  return (
    <section id="quality-impact" className="qid-section">
      <div className="qid-container">
        <div className="qid-header">
          <p className="qid-label">MEASURABLE IMPACT</p>
          <h2 className="qid-title">Quality Impact Dashboard</h2>
          <p className="qid-subtitle">
            Data-driven insights into quality outcomes, efficiency gains,<br />
            and continuous improvement.
          </p>
        </div>

        <div className="qid-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="qid-card">
              <div className="qid-value">{metric.value}</div>
              <div className="qid-label-text">{metric.label}</div>
              <div className="qid-trend">
                <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#a855f7" 
                    strokeWidth="2.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path d="M3 17 L9 11 L13 14 L21 6" />
                    <path d="M14 6 H21 V13" />
                </svg>
                <span>+ improved</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityImpactDashboard;