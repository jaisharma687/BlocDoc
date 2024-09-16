"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 63763 35347",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "bloc.doc.alpha@gmail.com",
  },
];

const Contact = () => {
  const router = useRouter(); // Use the useRouter hook
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xpwarjpk");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const customToast = (message) => {
    toast.custom((t) => (
      <div
        style={{
          borderRadius: "10px",
          background: "#1F4047",
          color: "#fff",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {message}
      </div>
    ));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e); 
    if (state.succeeded) {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
      // router.push("/thank-you"); 
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none flex justify-center mb-8">
            <form
              className="flex flex-col gap-6 p-10 bg-[#0d1b1e] rounded-xl"
              onSubmit={handleFormSubmit}
            >
              <h3 className="text-4xl text-accent hover:text-accent-hover">
                Let's get in touch!
              </h3>
              <p className="text-white/60">
                We'd love to hear from you! Tell us what we're doing great and
                how we can improve BlocDoc to better meet your needs. Your
                feedback is invaluable in helping us enhance our decentralized
                storage solution.
              </p>
              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* TextArea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={state.submitting}
              >
                Send Message
              </Button>
              {state.succeeded && customToast("Form sent successfully")}
            </form>
          </div>
          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-primary text-accent rounded-md flex items-center justify-center hover:text-accent-hover"
                    onClick={
                      item.title === "Email"
                        ? null
                        : () => {
                            navigator.clipboard.writeText(item.description);
                            customToast(
                              "Copied to clipboard: " + item.description
                            );
                          }
                    }
                  >
                    {item.title === "Email" ? (
                      <a
                        href={`mailto:${item.description}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </a>
                    ) : (
                      item.icon
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl selectable">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
