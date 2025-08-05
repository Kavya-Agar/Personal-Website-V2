import React from "react";

export const ProjectList = ({ enabled }) => {
  const mainText = enabled ? "text-amber-400" : "text-amber-100";
  const badgeText = enabled ? "text-amber-400" : "text-amber-100";

  const badgeClass = `px-2.5 py-0.5 bg-gradient-to-r from-fuchsia-900 to-cyan-700 ${badgeText} rounded-sm text-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 inline-block`;

  return (
    <div className="min-h-screen w-full pt-20">
      <div className="flex justify-center mt-8 mb-4">
        <div className="w-full max-w-4xl px-4">
          <div className={`text-7xl text-center md:text-left lato-black mb-4 ${mainText}`}>
            Projects
          </div>

          <div className="grid grid-cols-1 gap-6 lato-regular">

            <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
              <h3 className={`text-lg sm:text-xl mb-2 ${mainText}`}>Stock Sentiment Dashboard</h3>
              <div className={`mb-2 text-sm sm:text-base ${mainText}`}>
                <ul className="list-disc list-inside">
                  <li>
                    Developed and deployed a real-time sentiment analysis system
                    using HuggingFace Transformers and AWS SageMaker, enabling
                    scalable inference from financial news with live updates to
                    a React dashboard.
                  </li>
                  <li>
                    Automated an end-to-end ML pipeline using Terraform, Docker,
                    and SageMaker, integrating model serving, data ingestion
                    from Reddit, and sentiment visualization via Flask and
                    DynamoDB.
                  </li>
                </ul>
              </div>
              <h3 className={`text-sm sm:text-base ${mainText}`}>
                Technologies Used:
                <div className="space-x-3 mt-1">
                  <span className={badgeClass}>Python</span>
                  <span className={badgeClass}>AWS</span>
                  <span className={badgeClass}>HuggingFace</span>
                  <span className={badgeClass}>Flask</span>
                  <span className={badgeClass}>Docker</span>
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
              <h3 className={`text-lg sm:text-xl mb-2 ${mainText}`}>FIN-ance</h3>
              <div className={`mb-2 text-sm sm:text-base ${mainText}`}>
                <ul className="list-disc list-inside">
                  <li>
                    Built a full-stack, cross-platform expense tracking app
                    leveraging machine learning to analyze user spending
                    patterns and forecast budgets, improving savings plan
                    accuracy
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
              </div>
              <h3 className={`text-sm sm:text-base ${mainText}`}>
                Technologies Used:
                <div className="space-x-3 mt-1">
                  <span className={badgeClass}>React</span>
                  <span className={badgeClass}>Django</span>
                  <span className={badgeClass}>Tensorflow</span>
                  <span className={badgeClass}>Scikit-learn</span>
                  <span className={badgeClass}>PostgreSQL</span>
                  <span className={badgeClass}>Swift</span>
                  <span className={badgeClass}>Docker</span>
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

            <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
              <h3 className={`text-lg sm:text-xl mb-2 ${mainText}`}>Personal Website V2</h3>
              <div className={`mb-2 text-sm sm:text-base ${mainText}`}>
                <ul className="list-disc list-inside">
                  <li>
                    The second rendition of my personal website to showcase my
                    projects and skills.
                  </li>
                  <li>
                    UI was a major focus for this version to create a visually
                    appealing and responsive experience. Emphasis was placed on
                    clean design, accessibility, and smooth navigation across
                    devices.
                  </li>
                </ul>
              </div>
              <h3 className={`text-sm sm:text-base ${mainText}`}>
                Technologies Used:
                <div className="space-x-3 mt-1">
                  <span className={badgeClass}>React</span>
                  <span className={badgeClass}>Django</span>
                </div>
              </h3>
              <div className="mt-6 text-blue-500">This website</div>
            </div>

            <div className="bg-emerald-950 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col h-full border border-emerald-800">
              <h3 className={`text-lg sm:text-xl mb-2 ${mainText}`}>Heart R8</h3>
              <div className={`mb-2 text-sm sm:text-base ${mainText}`}>
                <ul className="list-disc list-inside">
                  <li>
                    A low-cost wristband for older adults that detects abnormal
                    heart rhythms and alerts them in case of arrythmias.
                  </li>
                  <li>
                    The wristband is designed to be simple and easy to use,
                    easing the process of managing cardiac health.
                  </li>
                </ul>
              </div>
              <h3 className={`text-sm sm:text-base ${mainText}`}>
                Technologies Used:
                <div className="space-x-3 mt-1">
                  <span className={badgeClass}>Arduino</span>
                  <span className={badgeClass}>C++</span>
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
              <h3 className={`text-lg sm:text-xl mb-2 ${mainText}`}>Personal Website V1</h3>
              <div className={`mb-2 text-sm sm:text-base ${mainText}`}>
                <ul className="list-disc list-inside">
                  <li>
                    The first rendition of my personal website to showcase my
                    projects and skills so far as well as serve as a learning
                    opportunity.
                  </li>
                  <li>
                    The website was designed to be simple and easy to navigate,
                    as well as responsive to different screen sizes.
                  </li>
                </ul>
              </div>
              <h3 className={`text-sm sm:text-base ${mainText}`}>
                Technologies Used:
                <div className="space-x-3 mt-1">
                  <span className={badgeClass}>React</span>
                  <span className={badgeClass}>Django</span>
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
    </div>
  );
};
