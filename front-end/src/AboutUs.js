import React, { useEffect } from 'react';

function AboutUs() {
  
  useEffect(() => {
    // Hardcoded URL for API endpoint
    const apiUrl = "http://localhost:5002/AboutUs";
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {

        document.getElementById("about-title").innerText = data.title;
        document.getElementById("about-content").innerText = data.content;
        document.getElementById("about-image").src = data.image;
      });
  }, []); 

  return (
    <div className="about-us-page">
      <h1 id="about-title"></h1>
      <p id="about-content"></p>
      <img id="about-image" alt="About Us" />
    </div>
  );
}

export default AboutUs;
