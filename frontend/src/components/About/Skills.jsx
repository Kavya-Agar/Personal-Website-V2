export const Skills = ({ enabled }) => {
  const boxStyle = {
    transition: 'opacity 0.5s, transform 0.5s',
    opacity: 1,
    transform: 'translateY(0px)',
  };
  const textColor = enabled ? "text-amber-400" : "text-amber-100";
  const badgeClass = `px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 ${textColor} rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
      <div style={boxStyle}>
        <h4 className={`text-lg font-semibold ${textColor} mb-3`}>Programming Languages</h4>
        <div className="flex flex-wrap gap-2">
          <span className={badgeClass}>Python</span>
          <span className={badgeClass}>JavaScript</span>
          <span className={badgeClass}>TypeScript</span>
          <span className={badgeClass}>Java</span>
          <span className={badgeClass}>C++</span>
          <span className={badgeClass}>Swift</span>
          <span className={badgeClass}>SQL</span>
          <span className={badgeClass}>R</span>
          <span className={badgeClass}>TailwindCSS</span>
        </div>
      </div>

      <div style={boxStyle}>
        <h4 className={`text-lg font-semibold ${textColor} mb-3`}>Data Science &amp; Machine Learning</h4>
        <div className="flex flex-wrap gap-2">
          <span className={badgeClass}>Machine Learning</span>
          <span className={badgeClass}>Deep Learning</span>
          <span className={badgeClass}>LLMs &amp; Fine-tuning</span>
          <span className={badgeClass}>PyTorch</span>
          <span className={badgeClass}>Natural Language Processing</span>
          <span className={badgeClass}>LangChain</span>
          <span className={badgeClass}>Computer Vision</span>
          <span className={badgeClass}>TensorFlow</span>
          <span className={badgeClass}>SageMaker</span>
          <span className={badgeClass}>Keras</span>
          <span className={badgeClass}>Scikit-learn</span>
          <span className={badgeClass}>Hugging Face</span>
          <span className={badgeClass}>ML Model Deployment</span>
          <span className={badgeClass}>MLOps</span>
        </div>
      </div>

      <div style={boxStyle}>
        <h4 className={`text-lg font-semibold ${textColor} mb-3`}>Frameworks &amp; Libraries</h4>
        <div className="flex flex-wrap gap-2">
          <span className={badgeClass}>React.js</span>
          <span className={badgeClass}>Django</span>
          <span className={badgeClass}>Flask</span>
          <span className={badgeClass}>SwiftUI</span>
          <span className={badgeClass}>Pandas</span>
          <span className={badgeClass}>NumPy</span>
        </div>
      </div>

      <div style={boxStyle}>
        <h4 className={`text-lg font-semibold ${textColor} mb-3`}>Cloud &amp; DevOps</h4>
        <div className="flex flex-wrap gap-2">
          <span className={badgeClass}>AWS</span>
          <span className={badgeClass}>Docker</span>
          <span className={badgeClass}>Kubernetes</span>
          <span className={badgeClass}>Terraform</span>
          <span className={badgeClass}>Git</span>
          <span className={badgeClass}>GitHub Actions</span>
          <span className={badgeClass}>CI/CD</span>
          <span className={badgeClass}>OpenShift</span>
        </div>
      </div>

      <div style={boxStyle}>
        <h4 className={`text-lg font-semibold ${textColor} mb-3`}>Databases</h4>
        <div className="flex flex-wrap gap-2">
          <span className={badgeClass}>PostgreSQL</span>
          <span className={badgeClass}>MongoDB</span>
          <span className={badgeClass}>MySQL</span>
          <span className={badgeClass}>Apache Cassandra</span>
          <span className={badgeClass}>DynamoDB</span>
          <span className={badgeClass}>SQLite</span>
        </div>
      </div>

      <div style={boxStyle}>
        <h4 className={`text-lg font-semibold ${textColor} mb-3`}>Tools &amp; Methodologies</h4>
        <div className="flex flex-wrap gap-2">
          <span className={badgeClass}>Agile/Scrum</span>
          <span className={badgeClass}>RESTful APIs</span>
          <span className={badgeClass}>Containerization</span>
          <span className={badgeClass}>Figma</span>
          <span className={badgeClass}>Postman</span>
          <span className={badgeClass}>JIRA</span>
        </div>
      </div>

      <div style={boxStyle}>
        <h4 className={`text-lg font-semibold ${textColor} mb-3`}>Other</h4>
        <div className="flex flex-wrap gap-2">
          <span className={badgeClass}>Full Stack Development</span>
          <span className={badgeClass}>Data Engineering Pipelines</span>
          <span className={badgeClass}>UI/UX Design</span>
          <span className={badgeClass}>Graphic Design</span>
          <span className={badgeClass}>Strategic Planning</span>
        </div>
      </div>
    </div>
  );
};
