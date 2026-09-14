"use client";

import type {
  FormEvent,
  ReactNode,
} from "react";

import { useState } from "react";

import {
  AlertCircle,
  CheckCircle2,
  Send,
} from "lucide-react";

import { z } from "zod";

import { contactInfo } from "@/data/contact";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  company: z
    .string()
    .trim()
    .max(100, "Company name is too long.")
    .optional(),

  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(120, "Subject is too long."),

  message: z
    .string()
    .trim()
    .min(
      10,
      "Please provide a little more detail in your message."
    )
    .max(2000, "Message is too long."),
});

type FormErrors = Record<string, string>;

export default function ContactForm() {
  const [errors, setErrors] =
    useState<FormErrors>({});

  const [status, setStatus] =
    useState<"idle" | "ready">("idle");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(
        formData.get("company") ?? ""
      ),
      subject: String(
        formData.get("subject") ?? ""
      ),
      message: String(
        formData.get("message") ?? ""
      ),
    };

    const result =
      contactSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FormErrors = {};

      for (const issue of result.error.issues) {
        const field = String(
          issue.path[0] ?? "form"
        );

        if (!nextErrors[field]) {
          nextErrors[field] =
            issue.message;
        }
      }

      setErrors(nextErrors);
      return;
    }

    setErrors({});

    const companyLine =
      result.data.company
        ? `Company: ${result.data.company}\n`
        : "";

    const body = [
      "Hello Hasnain,",
      "",
      `Name: ${result.data.name}`,
      `Email: ${result.data.email}`,
      companyLine.trimEnd(),
      "",
      "Message:",
      result.data.message,
      "",
      "Sent from your portfolio contact form.",
    ]
      .filter(Boolean)
      .join("\n");

    const separator =
      contactInfo.emailHref.includes("?")
        ? "&"
        : "?";

    const mailtoUrl =
      `${contactInfo.emailHref}` +
      `${separator}subject=${encodeURIComponent(
        result.data.subject
      )}` +
      `&body=${encodeURIComponent(body)}`;

    setStatus("ready");

    window.location.href = mailtoUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* NAME + EMAIL */}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          error={errors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="contact-input"
          />
        </Field>

        <Field
          id="email"
          label="Email"
          required
          error={errors.email}
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="contact-input"
          />
        </Field>
      </div>

      {/* COMPANY + SUBJECT */}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="company"
          label="Company"
          detail="Optional"
          error={errors.company}
        >
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or organization"
            className="contact-input"
          />
        </Field>

        <Field
          id="subject"
          label="Subject"
          required
          error={errors.subject}
        >
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Role, project or opportunity"
            className="contact-input"
          />
        </Field>
      </div>

      {/* MESSAGE */}

      <Field
        id="message"
        label="Message"
        required
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about the opportunity, project or analytics challenge..."
          className="contact-input min-h-[160px] resize-y"
        />
      </Field>

      {/* STATUS */}

      {status === "ready" && (
        <div
          role="status"
          className="flex gap-3 rounded-2xl border border-green-400/15 bg-green-400/[0.035] p-4"
        >
          <CheckCircle2
            size={17}
            className="mt-0.5 shrink-0 text-green-300"
          />

          <div>
            <p className="text-[10px] font-semibold text-white">
              Email draft prepared.
            </p>

            <p className="mt-1 text-[9px] leading-5 text-slate-500">
              Your email application should open with the
              message already filled in.
            </p>
          </div>
        </div>
      )}

      {/* SUBMIT */}

      <div className="flex flex-col gap-4 border-t border-slate-400/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[430px] text-[9px] leading-5 text-slate-600">
          Your details are validated in the browser.
          Submitting opens a pre-filled email draft addressed
          directly to me.
        </p>

        <button
          type="submit"
          className="btn-primary shrink-0"
        >
          Send via Email
          <Send size={15} />
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  detail,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  detail?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label
          htmlFor={id}
          className="text-[10px] font-semibold text-slate-300"
        >
          {label}

          {required && (
            <span className="ml-1 text-cyan-400">
              *
            </span>
          )}
        </label>

        {detail && (
          <span className="text-[8px] text-slate-700">
            {detail}
          </span>
        )}
      </div>

      {children}

      {error && (
        <div className="mt-2 flex items-center gap-2 text-[9px] text-red-300">
          <AlertCircle size={12} />

          {error}
        </div>
      )}
    </div>
  );
}