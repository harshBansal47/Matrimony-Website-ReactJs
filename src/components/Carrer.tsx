"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface JobOpening {
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  contactEmail: string;
}

const Career: React.FC = () => {
  const jobOpenings: JobOpening[] = [
    {
      title: "Software Engineer",
      location: "Goverdhan, Mathura, UP",
      type: "Full-Time",
      description: "We are looking for a skilled Software Engineer to join our team. You will be responsible for developing high-quality applications.",
      responsibilities: [
        "Write clean, maintainable code.",
        "Collaborate with cross-functional teams.",
        "Participate in code reviews.",
        "Troubleshoot and debug applications.",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or related field.",
        "2+ years of experience in software development.",
        "Proficiency in JavaScript, React, and Node.js.",
        "Strong problem-solving skills.",
      ],
      contactEmail: "hr@miisco.com",
    },
    // Add more job openings here
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center pt-16">
      <div className="text-center mb-16 banner h-52 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-100">Career Opportunities</h1>
      </div>

      <div className="container mx-auto p-4">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg mb-8 p-6 mx-6 transition-transform transform hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
                <p className="text-gray-600">{job.location} - {job.type}</p>
              </div>
              <button
                className="text-gray-800 hover:text-gray-600 transition-colors"
                onClick={() => toggleExpand(index)}
              >
                {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {expandedIndex === index && (
              <div className="mt-4">
                <p className="text-lg text-gray-800">{job.description}</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Responsibilities:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Qualifications:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {job.qualifications.map((qualification, i) => (
                    <li key={i}>{qualification}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">Contact:</h3>
                  <p className="text-gray-600">Please send your resume to <a href={`mailto:${job.contactEmail}`} className="text-blue-500 hover:underline">{job.contactEmail}</a> and mention the job title in the subject line.</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;