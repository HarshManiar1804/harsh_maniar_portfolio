"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Cover } from "./ui/cover";

export function Contact() {
  const [loadingMessage, setLoadingMessage] = useState({
    loading: false,
    message: "",
    success: false,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setLoadingMessage({
        loading: false,
        message: "Please fill all the fields!",
        success: false,
      });
      return;
    }

    setLoadingMessage({
      loading: true,
      message: "",
      success: false,
    });

    try {
      const finalFormData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalFormData),
      });

      if (!response.ok) {
        throw new Error("Network response was not okay");
      }

      const res = await response.json(); // Fixed response parsing

      if (res?.message) {
        setFormData({ firstName: "", lastName: "", message: "", email: "" });
        setLoadingMessage({
          loading: false,
          message: res.message,
          success: true, // Fixed success status
        });
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      setLoadingMessage({
        loading: false,
        message: "Failed to send message!",
        success: false,
      });
      console.log("Contact form error:", error);
    }
  };

  return (
    <div
      className="max-w-[800px] backdrop-blur-[18px] bg-[#11121617] z-[20] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
      id="contact"
    >
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 items-center justify-center flex">
        <Cover className="pr-12 pl-12">Contact Me</Cover>
      </h2>
      {loadingMessage.message && (
        <p
          className={`mt-[20px] text-[0.9rem] ${
            loadingMessage.success ? "text-green-400" : "text-red-400"
          }`}
        >
          *{loadingMessage.message}
        </p>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              placeholder="Harsh"
              value={formData.firstName}
              name="firstName"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              name="lastName"
              value={formData.lastName}
              placeholder="Maniar"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            placeholder="harshmaniar@gmail.com"
            type="email"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 mt-4">
          <Label htmlFor="message">Enter Your Message</Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Write a message...."
            className="p-[10px] outline-none border-none resize-none h-[140px] bg-zinc-800 text-white"
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="bg-blue-900 w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          {!loadingMessage.loading ? "Submit" : "...."}
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
