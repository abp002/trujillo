"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [phase, setPhase] = useState<"idle" | "submitting" | "success">("idle");

  const progress = useMemo(() => {
    const parts = [
      form.firstName.trim().length > 1,
      form.lastName.trim().length > 1,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
      form.message.trim().length > 8,
    ];
    const p = parts.filter(Boolean).length / parts.length;
    return clamp(p, 0, 1);
  }, [form]);

  const canSubmit =
    phase === "idle" &&
    form.firstName.trim().length > 1 &&
    form.lastName.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    form.message.trim().length > 8;

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setPhase("submitting");

    await new Promise((r) => setTimeout(r, 900));

    setPhase("success");
  }

  function reset() {
    setPhase("idle");
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  }

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-neutral-950 text-white">
      <AnimatedGeoBackground />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-6 py-16">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              CONTACT
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let’s build something clean and unforgettable.
            </h1>

            <p className="mt-4 text-white/60">
             Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis dapibus
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <StatPill label="Response" value="24–48h" />
              <StatPill label="Deliverables" value="PSD / Figma" />
              <StatPill label="Scope" value="Brand / UI" />
              <StatPill label="Timezone" value="CET" />
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-2xl" />
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.8)] sm:p-8"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TopProgressBar progress={progress} phase={phase} />

              <AnimatePresence mode="wait">
                {phase !== "success" ? (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    className="mt-6 space-y-4"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field
                        label="First name"
                        placeholder="Alex"
                        value={form.firstName}
                        onChange={(v) => onChange("firstName", v)}
                        disabled={phase !== "idle"}
                      />
                      <Field
                        label="Last name"
                        placeholder="Borrego"
                        value={form.lastName}
                        onChange={(v) => onChange("lastName", v)}
                        disabled={phase !== "idle"}
                      />
                    </div>

                    <Field
                      label="Email"
                      placeholder="alex@email.com"
                      value={form.email}
                      onChange={(v) => onChange("email", v)}
                      disabled={phase !== "idle"}
                      type="email"
                    />

                    <TextArea
                      label="Message"
                      placeholder="Tell me what you need (context, deadline, style)…"
                      value={form.message}
                      onChange={(v) => onChange("message", v)}
                      disabled={phase !== "idle"}
                    />

                    <div className="pt-2">
                      <SubmitButton canSubmit={canSubmit} phase={phase} />
                      <p className="mt-3 text-xs text-white/45">
                        By sending this, you agree to be contacted back.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="mt-6"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
                      <SuccessBurst />
                      <div className="relative">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                          SENT
                        </div>

                        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                          Thanks — message received.
                        </h2>

                        <p className="mt-2 text-white/60">
                          I’ll get back to you soon. If it’s urgent, reply to
                          the confirmation email (if you set it up later).
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={reset}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                          >
                            Send another
                          </button>

                          <a
                            href="/"
                            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90"
                          >
                            Back home
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-white/70">{label}</span>
      <span className="relative mt-1 block">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/25 focus:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
        />
        <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-white/10 transition focus-within:ring-2 focus-within:ring-white/10" />
      </span>
    </label>
  );
}

function TextArea({
  label,
  placeholder,
  value,
  onChange,
  disabled,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-white/70">{label}</span>
      <span className="relative mt-1 block">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/25 focus:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70"
        />
        <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-white/10 transition focus-within:ring-2 focus-within:ring-white/10" />
      </span>
    </label>
  );
}

function SubmitButton({
  canSubmit,
  phase,
}: {
  canSubmit: boolean;
  phase: "idle" | "submitting" | "success";
}) {
  return (
    <button
      type="submit"
      disabled={!canSubmit}
      className="group relative w-full overflow-hidden rounded-xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {phase === "submitting" ? (
          <>
            <Spinner />
            Sending…
          </>
        ) : (
          <>
            Send message
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </>
        )}
      </span>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-neutral-900/10 blur-xl" />
      </span>
    </button>
  );
}

function Spinner() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-900/30 border-t-neutral-900" />
    </span>
  );
}

function TopProgressBar({
  progress,
  phase,
}: {
  progress: number;
  phase: "idle" | "submitting" | "success";
}) {
  const width = `${Math.round(progress * 100)}%`;
  return (
    <div className="relative -mx-6 -mt-6 overflow-hidden border-b border-white/10 bg-white/5 p-4 sm:-mx-8 sm:-mt-8">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-white/70">Contact form</div>
        <div className="text-xs text-white/45">
          {phase === "submitting"
            ? "Submitting…"
            : phase === "success"
              ? "Sent"
              : `${Math.round(progress * 100)}%`}
        </div>
      </div>

      <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
        <motion.div
          className="h-1.5 rounded-full bg-white"
          initial={false}
          animate={{ width }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-xs text-white/50">{label}</div>
      <div className="mt-1 text-sm font-medium text-white/85">{value}</div>
    </div>
  );
}



function SuccessBurst() {
  return (
    <motion.div
      className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/15 blur-3xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1.2, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
}

function AnimatedGeoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="g1" cx="30%" cy="25%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <radialGradient id="g2" cx="75%" cy="70%" r="55%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <linearGradient id="stroke" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <rect width="1200" height="800" fill="url(#g1)" />
        <rect width="1200" height="800" fill="url(#g2)" />

        <g filter="url(#blur)" opacity="0.9">
          <circle cx="220" cy="180" r="110" fill="rgba(255,255,255,0.06)">
            <animate
              attributeName="cx"
              values="220;300;220"
              dur="10s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="180;130;180"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="980" cy="540" r="140" fill="rgba(255,255,255,0.05)">
            <animate
              attributeName="cx"
              values="980;900;980"
              dur="11s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="540;590;540"
              dur="13s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g fill="none" stroke="url(#stroke)" strokeWidth="2" opacity="0.7">
          <path d="M80 640 C 260 520, 360 740, 560 620 S 920 520, 1120 660">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M80 640 C 260 520, 360 740, 560 620 S 920 520, 1120 660;
                M80 610 C 260 690, 360 520, 560 650 S 920 720, 1120 600;
                M80 640 C 260 520, 360 740, 560 620 S 920 520, 1120 660
              "
            />
          </path>
        </g>

        <g opacity="0.55" stroke="url(#stroke)" strokeWidth="2" fill="none">
          <polygon points="820,120 940,170 890,290 760,240">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 850 210"
              to="360 850 210"
              dur="26s"
              repeatCount="indefinite"
            />
          </polygon>

          <rect x="140" y="470" width="130" height="130" rx="22">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 18 -14; 0 0"
              dur="9s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/60 to-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_55%)]" />
    </div>
  );
}
