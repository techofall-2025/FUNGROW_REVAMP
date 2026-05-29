"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Loader2, MessageSquare, Mail } from "lucide-react";
import { SITE_CONFIG } from "../lib/constants";

interface FormFields {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
}

interface FormErrors {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  description?: string;
  global?: string;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    projectType: "",
    description: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors as user edits to optimize INP
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!fields.companyName.trim()) {
      tempErrors.companyName = "Company or Enterprise name is required.";
      isValid = false;
    }

    if (!fields.contactName.trim()) {
      tempErrors.contactName = "Contact person name is required.";
      isValid = false;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.trim()) {
      tempErrors.email = "Work email address is required.";
      isValid = false;
    } else if (!emailRegex.test(fields.email)) {
      tempErrors.email = "Please provide a valid work email format.";
      isValid = false;
    }

    // Indian Phone format check
    const phoneClean = fields.phone.replace(/\s+/g, "");
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!fields.phone.trim()) {
      tempErrors.phone = "Phone number is required for follow-up.";
      isValid = false;
    } else if (!phoneRegex.test(phoneClean)) {
      tempErrors.phone = "Please enter a valid 10-digit Indian phone number (starting 6-9).";
      isValid = false;
    }

    if (!fields.projectType) {
      tempErrors.projectType = "Please select a candidate project domain.";
      isValid = false;
    }

    if (!fields.description.trim()) {
      tempErrors.description = "Project specification brief is required.";
      isValid = false;
    } else if (fields.description.length < 20) {
      tempErrors.description = `Details must be at least 20 characters (Current: ${fields.description.length}).`;
      isValid = false;
    } else if (fields.description.length > 500) {
      tempErrors.description = "Brief must not exceed 500 characters.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fields)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFields({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          projectType: "",
          description: ""
        });
      } else {
        setStatus("error");
        setErrors((prev) => ({
          ...prev,
          global: data.errors?.global || data.error || "Form validation failed on server."
        }));
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
      setErrors((prev) => ({
        ...prev,
        global: "A network error occurred. Please check connection and try again."
      }));
    }
  };

  if (status === "success") {
    return (
      <div className="bg-zinc-900 border border-brand-green/30 px-8 py-12 rounded-3xl text-center flex flex-col items-center justify-center gap-6 shadow-[0_0_30px_rgba(0,200,83,0.06)] min-h-[450px]">
        <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20 animate-pulse">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white">Project Proposal Received!</h3>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          Thank you for trusting Funngro. Senior talent planners have been alerted, and we will contact you via your work email or phone within 24 working hours!
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 inline-flex items-center gap-2 text-sm text-brand-green hover:text-brand-green-hover font-semibold underline"
        >
          Submit another project request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800/80 rounded-3xl p-8 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 blur-xl rounded-full" />

      {status === "error" && (
        <div
          role="alert"
          className="bg-red-950/40 border border-red-900 text-red-300 text-xs md:text-sm p-4 rounded-xl flex items-start gap-3 mb-6"
        >
          <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block mb-0.5">Submission Error</span>
            {errors.global || "Ensure your information matches standards and try again."}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {/* Double Column inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="companyName" className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
              Company Name <span className="text-brand-green">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={fields.companyName}
              onChange={handleChange}
              placeholder="e.g. Tata Digital"
              disabled={status === "loading"}
              aria-required="true"
              aria-invalid={!!errors.companyName}
              aria-describedby={errors.companyName ? "company-error" : undefined}
              className={`bg-zinc-950 text-white border text-sm rounded-xl px-4 py-3 placeholder-zinc-650 focus:outline-none transition-all duration-150 ${
                errors.companyName
                  ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                  : "border-zinc-800 focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
              }`}
            />
            {errors.companyName && (
              <span id="company-error" role="alert" className="text-[11px] text-red-400">
                {errors.companyName}
              </span>
            )}
          </div>

          {/* Contact Person */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contactName" className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
              Contact Name <span className="text-brand-green">*</span>
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={fields.contactName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              disabled={status === "loading"}
              aria-required="true"
              aria-invalid={!!errors.contactName}
              aria-describedby={errors.contactName ? "contact-error" : undefined}
              className={`bg-zinc-950 text-white border text-sm rounded-xl px-4 py-3 placeholder-zinc-650 focus:outline-none transition-all duration-150 ${
                errors.contactName
                  ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                  : "border-zinc-800 focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
              }`}
            />
            {errors.contactName && (
              <span id="contact-error" role="alert" className="text-[11px] text-red-400">
                {errors.contactName}
              </span>
            )}
          </div>
        </div>

        {/* Double Column Info Contacts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
              Work Email <span className="text-brand-green">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="ramesh@tatadigital.com"
              disabled={status === "loading"}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`bg-zinc-950 text-white border text-sm rounded-xl px-4 py-3 placeholder-zinc-650 focus:outline-none transition-all duration-150 ${
                errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                  : "border-zinc-800 focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
              }`}
            />
            {errors.email && (
              <span id="email-error" role="alert" className="text-[11px] text-red-400">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone (with +91 hint) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
              Phone Number <span className="text-brand-green">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium select-none pointer-events-none">
                +91
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
                placeholder=" 98765 43210"
                disabled={status === "loading"}
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full bg-zinc-950 text-white border text-sm rounded-xl pl-12 pr-4 py-3 placeholder-zinc-650 focus:outline-none transition-all duration-150 ${
                  errors.phone
                    ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                    : "border-zinc-800 focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
                }`}
                style={{ contentVisibility: "auto" }}
              />
            </div>
            {errors.phone && (
              <span id="phone-error" role="alert" className="text-[11px] text-red-400">
                {errors.phone}
              </span>
            )}
          </div>
        </div>

        {/* Project Target Column */}
        <div className="flex flex-col gap-2">
          <label htmlFor="projectType" className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
            Project Type / Domain <span className="text-brand-green">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={fields.projectType}
            onChange={handleChange}
            disabled={status === "loading"}
            aria-required="true"
            aria-invalid={!!errors.projectType}
            aria-describedby={errors.projectType ? "type-error" : undefined}
            className="bg-zinc-950 text-white border border-zinc-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all duration-150 cursor-pointer"
          >
            <option value="" disabled>Select project category...</option>
            <option value="Social Media">Social Media (Influencer, Reels, Graphics)</option>
            <option value="Content Writing">Content Writing (Articles, Copywriting)</option>
            <option value="Graphic Design">Graphic Design (Logos, Collaterals, UI Mockups)</option>
            <option value="Video Editing">Video Editing (Shorts, YouTube, Promos)</option>
            <option value="Research">Market Surveys & Research</option>
            <option value="Data Entry">Data Entry & Transcription</option>
            <option value="Other">Other Custom Task</option>
          </select>
          {errors.projectType && (
            <span id="type-error" role="alert" className="text-[11px] text-red-400">
              {errors.projectType}
            </span>
          )}
        </div>

        {/* Description Brief Box */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="description" className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
              Project Description brief <span className="text-brand-green">*</span>
            </label>
            <span className={`text-[10px] font-mono tracking-wider ${
              fields.description.length > 500 ? "text-red-400 font-bold" : "text-zinc-550"
            }`}>
              {fields.description.length} / 500
            </span>
          </div>
          <textarea
            id="description"
            name="description"
            value={fields.description}
            onChange={handleChange}
            placeholder="Tell us about the project, deadlines, deliverables, and targets... (Min 20 characters)"
            rows={4}
            disabled={status === "loading"}
            aria-required="true"
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? "desc-error" : undefined}
            className={`bg-zinc-950 text-white border text-sm rounded-xl px-4 py-3 placeholder-zinc-650 focus:outline-none transition-all duration-150 resize-none ${
              errors.description
                ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                : "border-zinc-800 focus:border-brand-green focus:ring-2 focus:ring-brand-green/30"
            }`}
          />
          {errors.description && (
            <span id="desc-error" role="alert" className="text-[11px] text-red-400">
              {errors.description}
            </span>
          )}
        </div>

        {/* Submit trigger button */}
        <button
          type="submit"
          disabled={status === "loading"}
          aria-busy={status === "loading"}
          className="mt-2 w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-zinc-950 font-sans font-bold py-3.5 px-6 rounded-xl hover:-translate-y-0.5 active:translate-y-0 text-base shadow-[0_0_20px_rgba(0,200,83,0.15)] hover:shadow-glow-green transition-all duration-200"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting Brief...
            </>
          ) : (
            <>
              Submit Project Proposal
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Alternative direct contacts */}
        <div className="mt-4 pt-6 border-t border-zinc-805 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <a
            href="https://wa.me/919988776655"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors focus:underline outline-none"
          >
            <MessageSquare className="w-4 h-4 text-brand-green" />
            WhatsApp: +91 99887 76655
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors focus:underline outline-none"
          >
            <Mail className="w-4 h-4 text-brand-green" />
            Email: {SITE_CONFIG.email}
          </a>
        </div>

      </form>
    </div>
  );
}
