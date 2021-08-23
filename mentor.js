var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Boston University's Computer Science Ambassadors" />
        <meta name="keywords" content="BU, BUCSA, BU CSA, BU CS Ambassadors, Boston University, Boston University Computer Science" />
        <title>BU CS Ambassadors | Mentorship</title>
        <link rel="stylesheet" href="/static/css/main.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Rubik:wght@700&display=swap" rel="stylesheet" /> 
        <link rel="shortcut icon" sizes="32x32" href="/static/images/reg logo no background small.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="icon-bar">
          {/* https://css-tricks.com/simple-social-sharing-links/ */}
          {/* assuming link is https://www.bucsambassadors.bu.edu/ */}
          <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F" target="_blank" className="facebook"><i className="fa fa-facebook" /></a>
          <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F&text=Hey%21+BU+CS+Ambassadors+has+a+new+website%21+Take+a+look%21&hashtags=bostonuniversity,bucsambassadors" target="_blank" className="twitter"><i className="fa fa-twitter" /></a>
          <a href="mailto:?subject=Check out this new website&body=Hey! BU CS Ambassadors has a new website! Take a look at https://www.bucsambassadors.bu.edu." title="Share by Email" className="mail"><i className="fa fa-envelope" /></a>
        </div>
        <header className="header">
          <a href="index.html" className="logo">
            {/* Graphic as link => Alt attribute indicates path [MWAS] */}
            <img src="/static/images/reg logo no background small.png" alt="/views/index.html" />
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="mentor.html" className="link">Mentorship</a></li>
              <li><a href="ambassadors.html" className="link">Ambassadors</a></li>
              <li><a href="clubs.html" className="link">Clubs</a></li><li><a href="resources.html" className="link">Resources</a></li>
              <li><a href="contactus.html" className="link">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        <section className="mentor-landing">
          <div className="mentor-landing-left">
            <h2>Mentorship</h2>
            <h4>We want to make sure that every CS student has access to all of the rich resources to prepare themselves for the journey ahead.</h4>
          </div>
          <div className="mentor-landing-right">
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/mentors.svg" alt="" />
          </div>
        </section>
        <section className="mentor-stats">
          <div className="stats">
            <div className="stats-num">
              <h2>14</h2>
            </div>
            <div className="stats-info">
              <p>Brilliant BU CS Ambassadors</p>
            </div>
          </div>
          <div className="stats">
            <div className="stats-num">
              <h2>50+</h2>
            </div>
            <div className="stats-info">
              <p>Unique CS courses our mentors can help with</p>
            </div>
          </div>
          <div className="stats">
            <div className="stats-num">
              <h2><span className="redword">100%</span></h2>
            </div>
            <div className="stats-info">
              <p>Success in growth, networking, and more!</p>
            </div>
          </div>
        </section>
        <section className="mentor-why">
          <div className="mentor-why-top">
            <h2>Why Join?</h2>
            <h5>The CS Curriculum is no easy feat for any student alone. With at least 15 courses to take ranging from algorithms to artificial intelligence, let the Ambassadors give you a helping hand!</h5>
          </div>
          <div className="mentor-why-cards">
            <div className="mentor-card">
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/mentors-friends.svg" alt="" />
              <h3>Make Friends</h3>
              <p>Connect with mentors, study with mentees, make lifelong friendships with ambassadors! BU CS Ambassadors is a social community inclusive of all students from all backgrounds.</p>
            </div>
            <div className="mentor-card">
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/mentors-working.svg" alt="" />
              <h3>Work Together</h3>
              <p>Work smarter, not harder. Through BU CS Ambassadors, you’ll always be able to find a study buddy in any course, from Data Structures to Software Engineering and everything in between!</p>
            </div>
            <div className="mentor-card">
              {/* Decorative graphic => Blank alt attribute [MWAS] */}
              <img src="/static/images/mentors-goals.svg" alt="" />
              <h3>Reach Goals</h3>
              <p>Checking off your weekly problem sets will be a breeze. Our Ambassadors have taken all sorts of CS courses and would love to help you out!</p>
            </div>
          </div>
        </section>
        <section className="mentor-ready">
          <h2>You Ready?</h2>
          <h5>Fill out a quick Google Form below!</h5>
        </section>
        <section className="form">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeYKs7xp7U9zf0kRTpkMnjc_58m8kl1NBB5HRLQMSNXOoCj0A/viewform?embedded=true" width={700} height={520} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
        </section>
        <footer>
          <div className="social-icons footer-layer">
            <a href="https://www.facebook.com/csa.bu.397" className="icon">
              <span className="iconify" data-inline="false" data-icon="mdi:facebook" />
            </a>
            <a href="https://twitter.com/BUCSAmbassadors" className="icon">
              <span className="iconify" data-inline="false" data-icon="mdi:twitter" />
            </a>
            <a href="https://www.instagram.com/bucsambassadors/" className="icon">
              <span className="iconify" data-inline="false" data-icon="mdi:instagram" />
            </a>
          </div>
          <div className="footer-information footer-layer">
            <div className="info">
              <a href="https://www.bu.edu/cs/" target="_blank">
              </a><p><a href="https://www.bu.edu/cs/" target="_blank"><b>Boston University</b> Arts &amp; Sciences
                  <br />
                  Department of Computer Science
                </a>
                <br />
                111 Cummington Mall, Boston, MA 02215
                <br />
                phone: (617)353-8919; email: <a href="mailto:cs@bu.edu">cs@bu.edu</a></p>
            </div>
            <div className="info">
              <a href="/index.html">
              </a><p><a href="/index.html"><b>Boston University</b>
                  <br />
                  Computer Science Ambassadors
                </a>
                <br />
                111 Cummington Mall, Boston, MA 02215
                <br />
                email: <a href="mailto:bucsambassadors@gmail.com">bucsambassadors@gmail.com</a></p>
            </div>
          </div>
          <div className="footer-links footer-layer">
            <div className="footer-indiv-link">
              <a href="https://www.bu.edu/copyright/" target="_blank">
                <p><b>© 2021 Trustees of Boston University</b></p>
              </a>
            </div>
            <div className="footer-indiv-link">
              <a href="https://www.bu.edu/policies/digital-privacy-statement/" target="_blank">
                <p><b>Privacy Statement</b></p>
              </a>
            </div>
            <div className="footer-indiv-link">
              <a href="https://www.bu.edu/disability/" target="_blank">
                <p><b>Accessibility</b></p>
              </a>
            </div>
          </div>
          <div className="footer-bucsa footer-layer">
            <a href="/index.html">
              <p><b>© 2021 Boston University Computer Science Ambassadors</b></p>
            </a>
          </div>
          <div className="footer-bu footer-layer">
            <a href="https://www.bu.edu/" target="_blank">
              {/* Graphic as link => Alt attribute indicates path [MWAS] */}
              <img src="/static/images/BU-logo.png" alt="https://www.bu.edu/" />
            </a>
          </div>
        </footer>
        {/* iconify plugin */}
      </div>
    );
  }
});
