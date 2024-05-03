"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import { getFromFirestore } from "@/app/utils";
import { motion } from "framer-motion";
export default function ContactUs() {
  const [info, setData] = useState<any>(null);
  const [mailData, setEmailData] = useState<any>({ name: "", message: "",reply_to: "" });
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAIl_JS_PBK,
      blockHeadless: true,
      limitRate: {
        id: "portfolio",
        throttle: 10000,
      },
    });
    console.debug("process.env.NEXT_PUBLIC_EMAIl_JS_PBK",process.env.NEXT_PUBLIC_EMAIl_JS_PBK)
    getFromFirestore("info").then((d) => {
      setData(d[0] as any);
    });
  }, []);

  if (!info) return <p>Loading...</p>;

  return (
    <section id="contact">
      <motion.h3
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.1, duration: 1 } }}
      >
        Want to get in touch? <br />
        Drop me a line!
      </motion.h3>
      {info && (
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: "40%" }}
          whileInView={{
            opacity: 1,
            y: "0%",
            transition: { delay: 1, duration: 0.5 },
          }}
          className="p-light"
        >
          {info.sections.contact.text}
        </motion.p>
      )}
      <form
        className="contact-form"
        onSubmit={(dt) => {
          mailData.name && mailData.message && emailjs.send("portfolio", "default", {
            from_name: mailData.name,
            to_name: info.sections.contact.mail,
            message: mailData.message,
            reply_to: mailData.reply_to
          });
        }}
      >
        <div className="form-header">
        <div className="input-group">
            <label htmlFor="name">Email</label>
            <motion.input
              viewport={{ once: true }}
              onChange={(e) =>
                setEmailData({ ...mailData, reply_to: e.target.value })
              }
              initial={{ opacity: 0.5, scaleX: "0%" }}
              whileInView={{
                opacity: 1,
                scaleX: "100%",
                transition: { delay: 2, duration: 0.5 },
              }}
              placeholder="Your Email"
              name="email"
              type="email"
              id="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <motion.input
              viewport={{ once: true }}
              onChange={(e) =>
                setEmailData({ ...mailData, name: e.target.value })
              }
              initial={{ opacity: 0.5, scaleX: "0%" }}
              whileInView={{
                opacity: 1,
                scaleX: "100%",
                transition: { delay: 2, duration: 0.5 },
              }}
              placeholder="Your Name :)"
              name="name"
              type="name"
              id="name"
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="form-text">Description</label>
          <motion.textarea
            onChange={(e) =>
              setEmailData({ ...mailData, message: e.target.value })
            }
            viewport={{ once: true }}
            initial={{ opacity: 0.5, scaleY: "0%" }}
            whileInView={{
              opacity: 1,
              scaleY: "100%",
              transition: { delay: 2.2, duration: 0.5 },
            }}
            placeholder="Enter Text !"
            name="form-text"
            id="form-text"
            cols={30}
            rows={9}
          ></motion.textarea>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </section>
  );
}
