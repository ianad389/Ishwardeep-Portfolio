import React from 'react';
import coverImage from '../../assets/IMG_4500_Original.jpg';
function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
       <img src={coverImage} style={{width:"300px", height:"auto", borderRadius:"25%"}}></img>
        </div>
        <p>
       Im a software engineer based out of the Bay Area who gradutaed from California State University East Bay. My skills include index.html, css, javascript, insomnia, mongo db, React and many other technologies! When Im not working I enjoy producing music and also I create social media content with my brother as well. Some things I enjoy is traveling and working out. A motto i live by is that hard work does pay off. Never give up and continue to push!
        </p>
      </div>
    </section>
  );
}

export default About;
