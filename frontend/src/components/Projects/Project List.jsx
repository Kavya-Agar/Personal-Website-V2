export const ProjectList = () => {
  return (
    <div className="min-h-screen w-full pt-20">
      <div className="flex justify-center mt-8 mb-4">
        <div className="w-full max-w-4xl px-4">
          <div className="text-7xl text-center md:text-left text-amber-100 lato-black mb-4">
            Projects
          </div>

          <div className="grid grid-cols-1 gap-6 lato-regular">
            <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
              <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
                Financial NER Analyser
              </h3>
              <p className="text-amber-100 mb-2 text-sm sm:text-base">
                <ul class="list-disc list-inside">
                  <li>
                    Fine-tuned DistilBERT on 116K+ tokens, achieving 98%
                    accuracy and reducing manual document review time by 70%
                  </li>
                  <li>
                    Architected a scalable AWS pipeline using Step Functions to
                    orchestrate Textract to SageMaker to a validation workflow,
                    processing documents with automatic error handling and retry
                    logic
                  </li>
                  <li>
                    Built production-ready document classifier supporting
                    multiple financial document types (bank statements, tax
                    forms, loan applications) with custom entity recognition for
                    amounts, dates, and account numbers
                  </li>
                </ul>
              </p>
              <h3 className="text-amber-100 text-sm sm:text-base">
                Technologies Used:
                <div className="space-x-3 mt-1">
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Python
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    PyTorch
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    HuggingFace
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    AWS
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    React
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Docker
                  </span>
                </div>
              </h3>
              <a
                href="https://github.com/Kavya-Agar/financial-ner-project"
                className="mt-6 text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
              <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
                Stock Sentiment Dashboard
              </h3>
              <p className="text-amber-100 mb-2 text-sm sm:text-base">
                <ul class="list-disc list-inside">
                  <li>
                    Orchestrated an end-to-end machine learning pipeline using
                    Terraform and Docker to automate model serving and data
                    ingestion from financial news sources (e.g., Reddit,
                    Finnhub)
                  </li>
                  <li>
                    Developed a real-time NLP-based sentiment analysis system
                    with HuggingFace Transformers and VADER, deploying the model
                    on AWS SageMaker for scalable inference
                  </li>
                  <li>
                    Designed a full-stack application with Flask and React to
                    visualize sentiment trends, storing and serving live data
                    with DynamoDB
                  </li>
                </ul>
              </p>
              <h3 className="text-amber-100 text-sm sm:text-base">
                Technologies Used:
                <div className="space-x-3 mt-1">
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Python
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    AWS
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    HuggingFace
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Flask
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Terraform
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    React
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Docker
                  </span>
                </div>
              </h3>

              <a
                href="https://github.com/Kavya-Agar/Stock-Sentiment-Dashboard"
                className="mt-6 text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
              <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
                FIN-ance
              </h3>
              <p className="text-amber-100 mb-2 text-sm sm:text-base">
                <ul class="list-disc list-inside">
                  <li>
                    Built a full-stack, cross-platform expense tracking app
                    leveraging machine learning to analyze user spending
                    patterns and forecast budgets, improving savings plan
                    accuracy by 40%
                  </li>
                  <li>
                    Engineered predictive analytics feature to deliver
                    personalized savings strategies, achieving 90% accuracy
                  </li>
                  <li>
                    Developed an iOS widget and app using SwiftUI and WidgetKit
                    for instant expense logging from a phone, synced in real
                    time via a Django REST API
                  </li>
                  <li>
                    Integrated RESTful APIs with SwiftUI using URLSession,
                    enabling seamless transaction tracking and real-time data
                    updates on a web-based dashboard
                  </li>
                </ul>
              </p>
              <h3 className="text-amber-100 text-sm sm:text-base">
                Technologies Used:
                <div className="space-x-3 mt-1">
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    React
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Django
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Tensorflow
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Scikit-learn
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    PostgreSQL
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Swift
                  </span>
                  <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                    Docker
                  </span>
                </div>
              </h3>

              <a
                href="https://github.com/Kavya-Agar/fin-ance"
                className="mt-6 text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
            <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
              Personal Website V2
            </h3>
            <p className="text-amber-100 mb-2 text-sm sm:text-base">
              <ul className="list-disc list-inside">
                <li>
                  The second rendition of my portfolio website to showcase my
                  projects and skills
                </li>
                <li>
                  UI was a major focus for this version to create a visually
                  appealing and responsive experience
                </li>
                <li>
                  Emphasis was placed on clean design, accessibility, and smooth
                  navigation across devices
                </li>
              </ul>
            </p>
            <h3 className="text-amber-100 text-sm sm:text-base">
              Technologies Used:
              <div className="space-x-3 mt-1">
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                  React
                </span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                  TailwindCSS
                </span>
              </div>
            </h3>

            <div className="mt-6 text-blue-500">This website</div>
          </div>

          <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
            <h3 className="text-lg text-amber-400 sm:text-xl mb-2">Heart R8</h3>
            <p className="text-amber-100 mb-2 text-sm sm:text-base">
              <ul className="list-disc list-inside">
                <li>
                  A low-cost wristband for older adults that detects abnormal
                  heart rhythms and alerts them in case of arrythmias
                </li>
                <li>
                  The wristband is designed to be simple and easy to use, easing
                  the process of managing cardiac health
                </li>
              </ul>
            </p>
            <h3 className="text-amber-100 text-sm sm:text-base">
              Technologies Used:
              <div className="space-x-3 mt-1">
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                  Arduino
                </span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                  C++
                </span>
              </div>
            </h3>

            <a
              href="https://devpost.com/software/heart-rate-pulse-sensor"
              className="mt-6 text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
            <h3 className="text-lg text-amber-400 sm:text-xl mb-2">
              Personal Website V1
            </h3>
            <p className="text-amber-100 mb-2 text-sm sm:text-base">
              <ul className="list-disc list-inside">
                <li>
                  The first rendition of my personal website to showcase my
                  projects and skills so far as well as serve as a learning
                  opportunity
                </li>
                <li>
                  The website was designed to be simple and easy to navigate, as
                  well as responsive to different screen sizes
                </li>
              </ul>
            </p>
            <h3 className="text-amber-100 text-sm sm:text-base">
              Technologies Used:
              <div className="space-x-3 mt-1">
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                  React
                </span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                  Django
                </span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 text-amber-100 rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block">
                  Leaflet.js
                </span>
              </div>
            </h3>

            <a
              href="https://github.com/Kavya-Agar/Personal-Website"
              className="mt-6 text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
