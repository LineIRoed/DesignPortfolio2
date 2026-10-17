import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
const form = useRef(null);
const [status, setStatus] = useState("");
const [isSending, setIsSending] = useState(false);
const sendEmail = async (event) => {
  event.preventDefault();

  setIsSending(true);
  setStatus("");

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    setStatus("success");
    form.current.reset();
  } catch (error) {
    console.error("Failed to send message:", error);
    setStatus("error");
  } finally {
    setIsSending(false);
  }
};
  return (
    <main className="contact-page">
        <div className="contact-banner">
            <div className="contact-banner-track">
                <span>• CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME&nbsp;</span>
                <span aria-hidden="true">• CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME&nbsp;</span>
            </div>
        </div>
      <h1 className="visually-hidden">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
            <input
                id="name"
                name="user_name"
                type="text"
                required
                placeholder="Your name"
            />
        <label htmlFor="email">Email</label>
            <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="you@example.com"
            />
        <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={5}
                required
            />
        <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
        </button>
            {status === "success" && (
            <p className="form-success" role="status">
                Message sent successfully!
            </p>
        )}

        {status === "error" && (
            <p className="form-error" role="alert">
                Something went wrong. Please try again.
            </p>
        )}
      </form>
    </main>
  );
}

export default Contact;