import { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    nameRef.current.focus();
  }

  return (
    <div className="contact-page">

      <section className="page-hero">

        <div>
          <p className="section-title">
            GET IN TOUCH
          </p>

          <h1>
            Contact Wanderly
          </h1>

          <p>
            Have a question about your trip?
            Send us a message and we will get back
            to you.
          </p>
        </div>

      </section>

      <section className="section">

        <div className="contact-layout">

          <div className="contact-info">

            <p className="section-title">
              CONTACT US
            </p>

            <h2>
              Let's talk about your next journey.
            </h2>

            <p>
              We are here to help you with your
              travel plans, bookings and questions.
            </p>

            <div className="contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>Wanderly Support</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <strong>Location</strong>
                <p>India</p>
              </div>
            </div>

            <div className="contact-item">
              <span>🕐</span>
              <div>
                <strong>Support Hours</strong>
                <p>Monday - Saturday</p>
              </div>
            </div>

          </div>

          <div className="contact-form-card">

            <h2>
              Send a Message
            </h2>

            {submitted && (
              <div className="success-message">
                Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label>
                  Name *
                </label>

                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="What is your question?"
                  value={formData.subject}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>
                  Message *
                </label>

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                />

              </div>

              <button
                type="submit"
                className="main-button"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;