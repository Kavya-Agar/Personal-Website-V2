export const Skills = () => {
    return (
        <div className="lato-light flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-amber-100 max-w-5xl w-full">
                <div className="flex flex-col gap-6">
                    <div>
                        <b className="flex justify-center mb-1">Languages</b>
                        <ul className="list-disc ml-6">
                            <li>Python</li>
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                            <li>C++</li>
                            <li>Swift</li>
                            <li>SQL</li>
                            <li>R</li>
                        </ul>
                    </div>
                    <div>
                        <b className="flex justify-center mb-1">Frameworks/Libraries</b>
                        <ul className="list-disc ml-6">
                            <li>React.js</li>
                            <li>Django</li>
                            <li>Flask</li>
                            <li>SwiftUI</li>
                            <li>TensorFlow</li>
                            <li>Keras</li>
                            <li>Scikit-learn</li>
                            <li>Pandas</li>
                            <li>NumPy</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <b className="flex justify-center mb-1">Cloud & DevOps</b>
                        <ul className="list-disc ml-6">
                            <li>AWS (EC2, S3, SageMaker, Lambda, DynamoDB)</li>
                            <li>Docker</li>
                            <li>Terraform</li>
                            <li>Git</li>
                            <li>GitHub Actions</li>
                            <li>CI/CD</li>
                            <li>OpenShift</li>
                        </ul>
                    </div>
                    <div>
                        <b className="flex justify-center mb-1">Databases</b>
                        <ul className="list-disc ml-6">
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                            <li>Apache Cassandra</li>
                            <li>SQLite</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div>
                        <b className="flex justify-center mb-1">Tools & Methodologies</b>
                        <ul className="list-disc ml-6">
                            <li>Agile/Scrum</li>
                            <li>RESTful APIs</li>
                            <li>Containerization</li>
                            <li>Figma</li>
                            <li>Postman</li>
                            <li>JIRA</li>
                            <li>VS Code</li>
                            <li>Xcode</li>
                        </ul>
                    </div>
                    <div>
                        <b className="flex justify-center mb-1">Other</b>
                        <ul className="list-disc ml-6">
                            <li>Full Stack Development</li>
                            <li>ML Model Deployment</li>
                            <li>DevOps</li>
                            <li>MLOps</li>
                            <li>Data Engineering Pipelines</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}