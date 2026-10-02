"use client";

import { useState, type FormEvent } from "react";
import { LISTINGS } from "./Listings";

const field =
  "w-full border-0 border-b border-rule bg-transparent py-3 text-lg text-ink placeholder:text-muted/60 transition-colors duration-200 focus:border-ink focus:outline-none";
const label = "text-xs tracking-[0.14em] text-muted uppercase";
const WINDOWS = ["Morning", "Afternoon", "Evening"];

type Status = "idle" | "sending" | "done";

export default function Viewing() {
  const [status, setStatus] = useState<Status>("idle");
  const [summary, setSummary] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const date = new Date(`${d.get("date")}T12:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
    setSummary(`${d.get("residence")} · ${date}, ${String(d.get("window")).toLowerCase()}`);
    setStatus("sending");
    // ponytail: demo only — POST to the brokerage CRM / email / n8n webhook here
    setTimeout(() => setStatus("done"), 800);
  }

  if (status === "done") {
    return (
      <div role="status" className="fade border-t border-ink pt-8">
        <p className="font-display text-4xl">Your viewing is requested.</p>
        <p className="mt-3 text-lg text-muted">{summary}</p>
        <p className="mt-6 max-w-md text-muted">
          An advisor will call within one business day to confirm the time and share the property
          brief. Private viewings are always one party at a time.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 underline decoration-1 underline-offset-4 hover:text-accent"
        >
          Request another viewing
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <label className="grid gap-1">
        <span className={label}>Full name</span>
        <input name="name" required autoComplete="name" placeholder="Elena Ruiz" className={field} />
      </label>
      <label className="grid gap-1">
        <span className={label}>Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={field} />
      </label>
      <label className="grid gap-1">
        <span className={label}>Phone (optional)</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="(305) 555-0123" className={field} />
      </label>
      <label className="grid gap-1">
        <span className={label}>Residence</span>
        <select name="residence" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose a residence
          </option>
          {LISTINGS.map((l) => (
            <option key={l.name}>{l.name}</option>
          ))}
          <option>Not sure yet — advise me</option>
        </select>
      </label>
      <label className="grid gap-1">
        <span className={label}>Preferred date</span>
        <input
          name="date"
          type="date"
          required
          // set on focus, not render, so the static HTML never bakes in a stale "today"
          onFocus={(e) => (e.currentTarget.min = new Date().toLocaleDateString("en-CA"))}
          className={field}
        />
      </label>
      <fieldset className="grid gap-3">
        <legend className={`${label} mb-3`}>Time of day</legend>
        <div className="flex flex-wrap gap-2">
          {WINDOWS.map((w, i) => (
            <label key={w} className="cursor-pointer">
              <input type="radio" name="window" value={w} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-full border border-rule px-4 py-2 text-sm whitespace-nowrap text-muted transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                {w}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-ink px-9 py-4 text-sm tracking-[0.14em] whitespace-nowrap text-paper uppercase transition-[background-color,transform] duration-300 hover:bg-accent active:translate-y-px disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request a viewing"}
        </button>
      </div>
    </form>
  );
}
