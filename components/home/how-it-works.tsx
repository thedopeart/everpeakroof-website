import { CalendarCheck, ClipboardList, HardHat, BadgeCheck } from "lucide-react";

const STEPS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book a Free Inspection",
    desc: "Call or fill out the form. We'll get you on the schedule fast, usually within a day. No commitment, no charge.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Get a Written Quote",
    desc: "We look at the roof, document what we find, and hand you a detailed written quote. No surprises on the bill.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "We Do the Work",
    desc: "Same crew that quoted it does the job. We clean up each day and keep you in the loop throughout.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Walk It With You",
    desc: "We walk the finished job together, answer your questions, and hand over your warranty docs before we leave.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-[#2D5A47] relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="reveal text-center mb-16">
          <p className="text-[#D4883E] font-bold text-sm uppercase tracking-wider mb-2">From Call to Complete</p>
          <h2
            className="text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontFamily: "var(--font-display)" }}
          >
            Four Steps. No Runaround.
          </h2>
          <p className="mt-3 text-white/75 text-base max-w-xl mx-auto">
            Here&apos;s exactly what happens when you call Everpeak.
          </p>
        </div>

        {/* Connected timeline */}
        <div className="relative">
          {/* horizontal connector line, desktop only, sits behind the nodes */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 px-[12.5%] pointer-events-none">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#D4883E]/0 via-[#D4883E]/40 to-[#D4883E]/0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="reveal relative flex flex-col items-center text-center"
                >
                  {/* node */}
                  <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-[#E8A85E] to-[#D4883E] flex items-center justify-center ring-8 ring-[#2D5A47] shadow-[0_8px_20px_rgba(212,136,62,0.4)]">
                    <Icon size={26} className="text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#1E3D30] border border-white/20 text-white text-[11px] font-black flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-6 font-bold text-white text-lg">{step.title}</h3>
                  <p className="mt-2 text-white/75 text-sm leading-relaxed max-w-[17rem]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
