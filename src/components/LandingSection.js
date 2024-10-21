import React from "react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <img
      src="https://i.pravatar.cc/150?img=7"
      alt="Round Image"
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
    <h1>{greeting}</h1>
    <br />
    <p style={{ fontSize: "45px" }}>{bio1}</p>
    <p style={{ fontSize: "35px" }}>{bio2}</p>
    <p >
      <a
          className="App-link"
          href="https://github.com/eggOnion/myPortfolio?tab=readme-ov-file"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', color: '#FFFFFF' }}
        >
          Visit my learning journey here 
      </a>
    </p>
  </FullScreenSection>
);

export default LandingSection;
