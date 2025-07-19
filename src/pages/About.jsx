import React from "react";
const About = () => {
  return (
    <main>
      <section className="section-about">
        <div className="container grid grid-two--cols">
          <div className="section-about--content">
            <h1 className="about-heading">About Us</h1>
            <p className="about-para">
              Welcome to your ultimate destination for movie and TV show lovers! We bring
              you curated content, trending titles, and deep insights into the world of
              entertainment. Whether you're into blockbuster hits, hidden gems, or the
              latest dramas, we’ve got it all covered.
            </p>
            <p className="about-para">
              Our mission is to help you discover, explore, and enjoy the best movies and
              series from around the globe. Dive into our platform and find your next
              favorite watch.
            </p>
            <p className="about-para">
              Built with love by passionate movie enthusiasts, our platform is constantly
              evolving to serve your binge-watching cravings.
            </p>
          </div>
          <div className="section-about--image">
            <img
              src="https://i.pinimg.com/originals/66/8a/8c/668a8cccacc792924fa588b4adca8f68.gif"
              alt="About us"
              width="150"
              height="150"
            />
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1696038172">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
              70.36-5.37,136.33-33.31,206.8-37.5,
              73.84-3.86,147.54,17.38,218.2,35.76,
              69.27,18,138.3,24.88,209.4,13.08,
              36.15-6,69.85-17.84,104.45-29.34,
              93.64-30.79,217.15-70.08,304.15-3.32V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,
              99.41,111.27,165,111,224.58,91.58,
              31.15-10.15,60.09-26.07,89.67-39.8,
              40.92-19,84.73-46,130.83-49.67,
              36.26-2.85,70.9,9.42,98.6,31.56,
              31.77,25.39,62.32,62,103.63,73,
              40.44,10.79,81.35-6.69,119.13-24.28,
              37.78-17.59,75.16-39,116.92-43.05,
              59.73-5.85,113.28,22.88,168.9,38.84,
              30.2,8.66,59,6.17,87.09-7.5,
              22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57,
              518.83,34.93,560.06,22.45,603.44,16.11,
              662.44,7.48,715.92,28.35,769,51.51,
              827.93,77.22,886,95.24,951.2,90,
              1037.73,83,1123.66,44.29,1200,5.19V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </main>
  );
};

export default About;