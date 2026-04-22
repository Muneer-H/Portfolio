"use client";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    setSending(true);
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderEmail: email.current.value,
          receiverEmail: "muneermh41004@gmail.com",
          name: name.current.value,
          subject: subject.current.value,
          message: message.current.value,
        }),
      });
      const result = await res.json();
      console.log(result);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <form action={(e) => handleSubmit(e)} className="w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="sm:flex-row flex-col flex gap-3 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="input-parchment w-full"
            ref={name}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input-parchment w-full"
            ref={email}
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="input-parchment w-full"
          ref={subject}
        />
        <textarea
          rows={7}
          placeholder="Write your message on this enchanted parchment..."
          className="input-parchment w-full resize-none"
          ref={message}
        ></textarea>
        <button
          type="submit"
          className="btn-golden flex justify-center items-center gap-3 w-full"
          disabled={sending}
        >
          {sent ? "Owl Dispatched!" : sending ? "Casting Spell..." : "Cast the Spell"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
