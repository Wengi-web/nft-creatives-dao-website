import React from "react";

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>
        If you have any questions, comments, or feedback about our platform, or
        if you want to inquire about minting your artwork as an NFT, please
        fill out the form below or send an email to{" "}
        <a href="mailto:info@nftcreativesdao.com">info@nftcreativesdao.com</a>.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <style>
        {`
          .contact-page {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            font-size: 1.2rem;
            font-family: "Ubuntu", sans-serif;
          }

          .contact-page h2 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
          }

          .contact-page p {
            margin-bottom: 1rem;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #d4a373;
            border-radius: 5px;
            font-size: 1rem;
            font-family: "Ubuntu", sans-serif;
          }

          .form-group textarea {
            resize: vertical;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            outline: none;
            border-color: #5f4339;
          }

          button[type="submit"] {
            background-color: #d4a373;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-size: 1rem;
            font-family: "Ubuntu", sans-serif;
          }

          button[type="submit"]:hover {
            background-color: #5f4339;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default ContactPage;
