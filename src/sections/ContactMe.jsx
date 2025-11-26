import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";

import Title from "/src/components/Title.jsx";
import animationData from "/src/assets/c1.json";

const ContactMe = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Let’s Connect!"
        />

        <div className="flex flex-row gap-8 mt-16">
          {/* Contact Form - 90% */}
          <div className="w-[60%] bg-black p-10 rounded-2xl shadow-lg">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1 bg-neutral-950 text-white p-3 rounded-lg border border-neutral-700 placeholder:text-neutral-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-1 bg-neutral-950 text-white p-3 rounded-lg border border-neutral-700 placeholder:text-neutral-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-1 bg-neutral-950 text-white p-3 rounded-lg border border-neutral-700 placeholder:text-neutral-400"
                  placeholder="I'd love to hear from you!"
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="btn w-fit px-6 py-2 text-white rounded-lg font-semibold relative overflow-hidden">
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>

          {/* Lottie Animation - 10% */}
          <div className="w-[40%] flex items-center justify-center">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
