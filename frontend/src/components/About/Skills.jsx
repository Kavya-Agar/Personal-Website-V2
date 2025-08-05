export const Skills = () => {
  const boxStyle = {
    transition: 'opacity 0.5s, transform 0.5s',
    opacity: 1,
    transform: 'translateY(0px)',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
      <div style={boxStyle}>
        <h4 className="text-lg font-semibold text-amber-100 mb-3">Programming Languages</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Python</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">JavaScript</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">TypeScript</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Java</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">C++</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Swift</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">SQL</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">R</span>
        </div>
      </div>

      <div style={boxStyle}>
        <h4 className="text-lg font-semibold text-amber-100 mb-3">Data Science &amp; Machine Learning</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Machine Learning</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Deep Learning</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">LLMs &amp; Fine-tuning</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">PyTorch</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Natural Language Processing</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Computer Vision</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">TensorFlow</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">SageMaker</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Keras</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Scikit-learn</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Hugging Face</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">ML Model Deployment</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">MLOps</span>
        </div>
      </div>
      
      <div style={boxStyle}>
        <h4 className="text-lg font-semibold text-amber-100 mb-3">Frameworks &amp; Libraries</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">React.js</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Django</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Flask</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">SwiftUI</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Pandas</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">NumPy</span>
        </div>
      </div>
      
      <div style={boxStyle}>
        <h4 className="text-lg font-semibold text-amber-100 mb-3">Cloud &amp; DevOps</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">AWS</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Docker</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Kubernetes</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Terraform</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Git</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">GitHub Actions</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">CI/CD</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">OpenShift</span>
        </div>
      </div>
      
      <div style={boxStyle}>
        <h4 className="text-lg font-semibold text-amber-100 mb-3">Databases</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">PostgreSQL</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">MySQL</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Apache Cassandra</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">DynamoDB</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">SQLite</span>
        </div>
      </div>

      <div style={boxStyle}>
        <h4 className="text-lg font-semibold text-amber-100 mb-3">Tools &amp; Methodologies</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Agile/Scrum</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">RESTful APIs</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Containerization</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Figma</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Postman</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">JIRA</span>
        </div>
      </div>
      
      <div style={boxStyle}>
        <h4 className="text-lg font-semibold text-amber-100 mb-3">Other</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Full Stack Development</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Data Engineering Pipelines</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">UI/UX Design</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Graphic Design</span>
          <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-md text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">Strategic Planning</span>
        </div>
      </div>
    </div>
  );
};