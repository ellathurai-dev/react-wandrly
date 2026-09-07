function Profile() {
  return (
    <div className="profile-page">

      <section className="profile-header">

        <div className="profile-photo">
          EE
        </div>

        <div>
          <p className="section-title">MY PROFILE</p>

          <h1>Ellathurai E</h1>

          <p>
            B.Sc. Computer Science Student
          </p>
        </div>

      </section>


      <section className="profile-content">

        <div className="profile-card">

          <h2>About Me</h2>

          <p>
            I am Ellathurai E, a B.Sc. Computer Science
            student at Sree Saraswathi Thyagaraja College.
            I am interested in learning technology and
            developing useful web applications using
            modern programming concepts.
          </p>

          <p>
            This profile is part of my Wanderly React
            frontend application project.
          </p>

        </div>


        <div className="profile-card">

          <h2>Personal Information</h2>

          <div className="profile-detail">
            <span>Name</span>
            <strong>Ellathurai E</strong>
          </div>

          <div className="profile-detail">
            <span>Email</span>
            <strong>ellathuria18@gmail.com</strong>
          </div>

          <div className="profile-detail">
            <span>Phone</span>
            <strong>9600245399</strong>
          </div>

          <div className="profile-detail">
            <span>Location</span>
            <strong>Covai</strong>
          </div>

        </div>


        <div className="profile-card">

          <h2>Education</h2>

          <div className="education-item">

            <h3>
              Sree Saraswathi Thyagaraja College
            </h3>

            <p>
              B.Sc. Computer Science
            </p>

          </div>

        </div>


        <div className="profile-card">

          <h2>Connect With Me</h2>

          <div className="social-links">

            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ellathurai-e-8a1b363a1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Profile;