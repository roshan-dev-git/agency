"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import InputField from "../ui/InputField";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle label="Let's Talk" title="Start Something Great" align="center" />

          <Reveal animation="fade-up" delay="delay-200">
            <p className="text-sm text-[var(--color-text-muted)] mt-6 mb-12 leading-relaxed">
              Tell us about your project. We respond within 24 hours.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal animation="scale-in">
              <div className="border border-[var(--color-border)] p-12 text-center">
                <span className="text-3xl text-[var(--color-accent)] animate-pulse-dot inline-block" aria-hidden="true">✦</span>
                <h3
                  className="text-2xl text-[var(--color-text-primary)] mt-4 mb-3"
                  style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
                >
                  Message Received
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Thank you, {form.name}. We'll be in touch within 24 hours.
                </p>
              </div>
            </Reveal>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="text-left space-y-8">
              <Reveal animation="fade-up" delay="delay-300">
                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
              </Reveal>
              <Reveal animation="fade-up" delay="delay-400">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </Reveal>
              <Reveal animation="fade-up" delay="delay-500">
                <TextArea
                  label="Message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                />
              </Reveal>
              <Reveal animation="fade-up" delay="delay-600">
                <Button variant="primary" type="submit" className="w-full">
                  Send Message →
                </Button>
              </Reveal>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
