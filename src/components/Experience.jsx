import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

// Helper function to highlight keywords and stats in text
const highlightText = (text) => {
  const parts = [];
  let lastIndex = 0;
  const matches = [];

  // Pattern 1: Stats - percentages, numbers with +, or large numbers
  // Matches: "30%", "45%", "50+", "1,000", "200%", "95%"
  const statPattern = /\b(\d{1,3}(?:,\d{3})*(?:\+|\%)?|\d+%|\d+\+)\b/g;
  let match;
  while ((match = statPattern.exec(text)) !== null) {
    matches.push({
      text: match[0],
      index: match.index,
      endIndex: match.index + match[0].length,
      type: "stat",
    });
  }

  // Pattern 2: Technology names and APIs
  // Matches: "HubSpot API", "React Query", "D3.js", "Socket.IO", "Bedrock AI", "AWS S3", etc.
  const techPatterns = [
    /\b([A-Z][a-zA-Z0-9]+(?:\s+[A-Z][a-zA-Z]+)?(?:\s+API|Query|AI|S3|NDA|webhooks|gateway))\b/g,
    /\b([A-Z][a-zA-Z0-9]+\.(js|IO|js))\b/g,
    /\b(React\s+Query|D3\.js|Socket\.IO|Node\.JS|Next\.JS|Vue|Nuxt|Nest\.JS|Express\s+JS|PostgreSQL|MongoDB|Redux\s+Toolkit|TailwindCSS|GraphQL|Supabase|Docker|Vitest|Firebase|SendGrid|Stripe|Twilio|Terra|EJS|Socket\.IO)\b/g,
  ];

  techPatterns.forEach((pattern) => {
    while ((match = pattern.exec(text)) !== null) {
      // Skip common words
      const commonWords = [
        "The",
        "This",
        "That",
        "With",
        "Using",
        "For",
        "And",
        "Or",
        "But",
        "By",
        "To",
      ];
      const firstWord = match[0].split(/\s+|\./)[0];
      if (!commonWords.includes(firstWord)) {
        // Check if not already matched
        const isAlreadyMatched = matches.some(
          (m) =>
            m.index <= match.index &&
            m.endIndex >= match.index + match[0].length
        );
        if (!isAlreadyMatched) {
          matches.push({
            text: match[0],
            index: match.index,
            endIndex: match.index + match[0].length,
            type: "tech",
          });
        }
      }
    }
  });

  // Pattern 3: Platform/Product names (specific known platforms)
  const platformNames = [
    "QA TAX",
    "Taqtik",
    "StagingPro",
    "Lumaya",
    "Akme App",
    "Envision Estates",
    "HubSpot",
    "Perplexity",
    "Reddit",
    "OpenAI",
    "YouTube",
    "Google Sheets",
    "Terra",
    "Twilio",
    "Firebase",
    "SendGrid",
    "Stripe",
    "Verif",
    "Skribble",
    "Bedrock",
    "Sonnet",
  ];

  platformNames.forEach((platform) => {
    const regex = new RegExp(`\\b${platform.replace(/\s+/g, "\\s+")}\\b`, "gi");
    while ((match = regex.exec(text)) !== null) {
      // Check if not already matched as tech
      const isAlreadyMatched = matches.some(
        (m) =>
          m.index <= match.index && m.endIndex >= match.index + match[0].length
      );
      if (!isAlreadyMatched) {
        matches.push({
          text: match[0],
          index: match.index,
          endIndex: match.index + match[0].length,
          type: "platform",
        });
      }
    }
  });

  // Sort matches by index
  matches.sort((a, b) => a.index - b.index);

  // Remove overlapping matches (keep the first one)
  const filteredMatches = [];
  let lastEnd = 0;
  matches.forEach((match) => {
    if (match.index >= lastEnd) {
      filteredMatches.push(match);
      lastEnd = match.endIndex;
    }
  });

  // Build the parts array
  filteredMatches.forEach((match) => {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, match.index),
        type: "normal",
      });
    }

    // Add the highlighted match
    parts.push({ text: match.text, type: match.type });
    lastIndex = match.endIndex;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ text: text.substring(lastIndex), type: "normal" });
  }

  // If no matches found, return the original text
  if (parts.length === 0) {
    parts.push({ text, type: "normal" });
  }

  return parts;
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => {
          const highlightedParts = highlightText(point);
          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {highlightedParts.map((part, partIndex) => {
                if (part.type === "normal") {
                  return <span key={partIndex}>{part.text}</span>;
                } else if (part.type === "stat") {
                  // Stats and percentages - bold with accent color
                  return (
                    <span key={partIndex} className="font-bold text-[#915EFF]">
                      {part.text}
                    </span>
                  );
                } else if (part.type === "tech") {
                  // Technology names - bold with different accent
                  return (
                    <span key={partIndex} className="font-bold text-[#00D9FF]">
                      {part.text}
                    </span>
                  );
                } else if (part.type === "platform") {
                  // Platform names - bold italic
                  return (
                    <span
                      key={partIndex}
                      className="font-bold italic text-[#FFD700]"
                    >
                      {part.text}
                    </span>
                  );
                }
                return <span key={partIndex}>{part.text}</span>;
              })}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
