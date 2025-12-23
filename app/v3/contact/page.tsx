"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function ContactPageV3() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [phase, setPhase] = useState<"idle" | "submitting" | "success">("idle");

  const canSubmit =
    phase === "idle" &&
    form.firstName.trim().length > 1 &&
    form.lastName.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    form.message.trim().length > 8;

  const progress = useMemo(() => {
    const parts = [
      form.firstName.trim().length > 1,
      form.lastName.trim().length > 1,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
      form.message.trim().length > 8,
    ];
    return clamp(parts.filter(Boolean).length / parts.length, 0, 1);
  }, [form]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setPhase("submitting");
    await new Promise((r) => setTimeout(r, 1100));
    setPhase("success");
  }

  function reset() {
    setPhase("idle");
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  }

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-cyan-950 text-white">
      <V3Background />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-2xl items-center px-6 py-16">
        <motion.div
          className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.95)]"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <TopBarV3 progress={progress} phase={phase} />

          <div className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              CONTACT
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Send a quick message.
            </h1>

            <p className="mt-3 text-sm text-white/60">
              Brief is fine. If you have references or a moodboard, mention it.
            </p>

            <div className="mt-6 perspective-[1200px]">
              <motion.div
                className="relative"
                initial={false}
                animate={
                  phase === "success"
                    ? { rotateX: 180, scale: 1 }
                    : { rotateX: 0, scale: 1 }
                }
                transition={{ duration: 0.65, ease: [0.2, 0.9, 0.2, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <FieldV3
                          label="First name"
                          placeholder="Alex"
                          value={form.firstName}
                          onChange={(v) => onChange("firstName", v)}
                          disabled={phase !== "idle"}
                        />
                        <FieldV3
                          label="Last name"
                          placeholder="Borrego"
                          value={form.lastName}
                          onChange={(v) => onChange("lastName", v)}
                          disabled={phase !== "idle"}
                        />
                      </div>

                      <FieldV3
                        label="Email"
                        placeholder="alex@email.com"
                        value={form.email}
                        onChange={(v) => onChange("email", v)}
                        disabled={phase !== "idle"}
                        type="email"
                      />

                      <TextAreaV3
                        label="Message"
                        placeholder="What do you need? Timeline, style, deliverables…"
                        value={form.message}
                        onChange={(v) => onChange("message", v)}
                        disabled={phase !== "idle"}
                      />

                      <div className="pt-1">
                        <SubmitV3 canSubmit={canSubmit} phase={phase} />
                        <div className="mt-3 text-xs text-white/45">
                          {progress < 1 ? "Complete the fields to enable send." : "Ready to send."}
                        </div>
                      </div>
                    </motion.form>
                  </AnimatePresence>
                </div>

                <div
                  className="absolute inset-0"
                  style={{
                    transform: "rotateX(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-7">
                    <SuccessScan />
                    <div className="relative">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                        MESSAGE SENT
                      </div>

                      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                        Thanks! I’ve got it.
                      </h2>

                      <p className="mt-2 text-white/60">
                        I’ll reply soon. If it’s time-sensitive, send a follow-up with “URGENT” in the subject later.
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
                </div>
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TopBarV3({
  progress,
  phase,
}: {
  progress: number;
  phase: "idle" | "submitting" | "success";
}) {
  const width = `${Math.round(progress * 100)}%`;

  return (
    <div className="relative border-b border-white/10 bg-white/5 px-6 py-4 sm:px-8">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-white/70">Contact</div>
        <div className="text-xs text-white/45">
          {phase === "submitting" ? "Submitting…" : phase === "success" ? "Sent" : `${Math.round(progress * 100)}%`}
        </div>
      </div>

      <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
        <motion.div
          className="h-1.5 rounded-full bg-white"
          initial={false}
          animate={{ width }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function FieldV3({
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

function TextAreaV3({
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

function SubmitV3({
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
      className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-white text-neutral-950 transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <span className="relative z-10 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold">
        {phase === "submitting" ? (
          <>
            <SpinnerDark />
            Sending…
          </>
        ) : (
          <>
            Send message
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </>
        )}
      </span>

      {phase === "submitting" && (
        <motion.span
          className="absolute inset-0 z-0"
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
        >
          <span className="absolute inset-y-0 left-0 w-1/3 bg-neutral-950/10 blur-xl" />
        </motion.span>
      )}
    </button>
  );
}

function SpinnerDark() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-950/25 border-t-neutral-950" />
    </span>
  );
}

function SuccessScan() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-xl"
        initial={{ x: 0 }}
        animate={{ x: "260%" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
    </motion.div>
  );
}

function V3Background() {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        x: Math.round((i * 73) % 100),
        y: Math.round((i * 41) % 100),
        s: 10 + ((i * 7) % 22),
        d: 6 + ((i * 3) % 10),
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 opacity-90">
        <motion.div
          className="absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, 120, -40, 0], y: [0, 60, 140, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-56 top-10 h-[620px] w-[620px] rounded-full bg-white/8 blur-3xl"
          animate={{ x: [0, -160, 60, 0], y: [0, 140, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 -bottom-56 h-[680px] w-[680px] rounded-full bg-white/7 blur-3xl"
          animate={{ x: [0, 90, -120, 0], y: [0, -120, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ln" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>

        <g stroke="url(#ln)" strokeWidth="2" fill="none" filter="url(#soft)" opacity="0.7">
          <motion.path
            d="M-40 180 C 240 90, 420 250, 620 170 S 980 60, 1260 200"
            animate={{
              d: [
                "M-40 180 C 240 90, 420 250, 620 170 S 980 60, 1260 200",
                "M-40 220 C 240 280, 420 90, 620 230 S 980 320, 1260 180",
                "M-40 180 C 240 90, 420 250, 620 170 S 980 60, 1260 200",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M-60 620 C 260 520, 420 740, 640 600 S 980 520, 1280 640"
            animate={{
              d: [
                "M-60 620 C 260 520, 420 740, 640 600 S 980 520, 1280 640",
                "M-60 580 C 260 700, 420 520, 640 640 S 980 720, 1280 590",
                "M-60 620 C 260 520, 420 740, 640 600 S 980 520, 1280 640",
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {dots.map((p) => (
          <motion.circle
            key={p.id}
            cx={(p.x / 100) * 1200}
            cy={(p.y / 100) * 800}
            r={p.s}
            fill="rgba(255,255,255,0.06)"
            animate={{
              cx: [(p.x / 100) * 1200, ((p.x + 12) / 100) * 1200, (p.x / 100) * 1200],
              cy: [(p.y / 100) * 800, ((p.y + 10) / 100) * 800, (p.y / 100) * 800],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-neutral-950/55 to-neutral-950" />
    </div>
  );
}
