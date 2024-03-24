function AboutMe() {
  return (
    <>
      <div className="home-static-background"></div>

      <div className="AboutMe">
        <div id="about">
          <div className="container condensed-container cloudy-background">
            <div className="text-center">
              <h1 style={{ marginTop: "65px" }}>ABOUT ME</h1>
              <hr className="divider-line" />

              <div className="about-text">
                <p>
                  Welcome to my corner of the Antelope Valley real estate
                  market! I'm Diana Santacruz, your dedicated guide through the
                  journey of buying or selling your home in this vibrant
                  community.
                </p>
                <br />
                <p>
                  With a passion for real estate and a deep-rooted connection to
                  the Antelope Valley area, I bring a wealth of knowledge and
                  expertise to every transaction. Whether you're a first-time
                  homebuyer, seasoned investor, or looking to upgrade or
                  downsize, I'm here to make the process smooth and rewarding.
                </p>
                <br />
                <p>
                  What sets me apart? It's not just about closing deals; it's
                  about building lasting relationships with my clients. I
                  understand that buying or selling a home is one of the most
                  significant decisions you'll make, and I'm committed to
                  providing personalized attention, clear communication, and
                  unparalleled support every step of the way.
                  <br />
                  <p>
                    I stay ahead of market trends, leverage cutting-edge
                    technology, and tap into a vast network of resources to
                    ensure you achieve your real estate goals.
                  </p>
                </p>
                <br />
                <p>
                  I take pride in being a trusted advisor and advocate for my
                  clients. I believe in transparency, integrity, and going the
                  extra mile to exceed expectations. Whether you're relocating
                  to the Antelope Valley, moving within the area, or exploring
                  investment opportunities, I'm here to help you navigate the
                  process with confidence and peace of mind.
                </p>
                <br />
                <p>
                  Let's embark on this exciting journey together. Contact me
                  today, and let's turn your real estate dreams into reality!
                </p>
              </div>
              {/* <img
              className="not-grey big-img"
              src={`${process.env.PUBLIC_URL}/assets/home-image.jpg`}
              alt="avatar"
            /> */}
              <hr className="divider-line" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
