import { useRef } from "react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import { Words, FadeUp } from "./SplitText";
import { EASE } from "../lib/motion";
import { STATS } from "../lib/data";

export default function About() {
  const photoRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="px-6 py-28 md:px-10 md:py-40">
      <SectionHeading index="02" label="About me" title="Behind the code" />

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            ref={photoRef}
            className="relative aspect-4/5 overflow-hidden rounded-2xl bg-panel"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Clip lives on a child: clip-path on the observed element itself zeroes out IntersectionObserver */}
            <motion.div
              className="absolute inset-0"
              variants={{
                hidden: { clipPath: "inset(100% 0% 0% 0%)" },
                show: {
                  clipPath: "inset(0% 0% 0% 0%)",
                  transition: { duration: 1.2, ease: EASE },
                },
              }}
            >
              <motion.img
                src="/itish.jpg"
                alt="Itish Raj Shukla"
                className="h-full w-full scale-120 object-cover object-[43%_center] grayscale transition-[filter] duration-700 hover:grayscale-0"
              />
            </motion.div>
          </motion.div>
          <FadeUp
            delay={0.3}
            y={16}
            className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-fog"
          >
            <span>Itish Raj Shukla</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember" />
              Bengaluru
            </span>
          </FadeUp>
        </div>

        <div>
          <p className="text-2xl font-medium leading-snug md:text-4xl">
            <Words text="I build fast, animated, production-grade web apps. At GigSky I led an 8-month migration of a 428K-line Angular codebase to React and TypeScript — and made every page load almost two seconds faster along the way." />
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
            <Words
              stagger={0.006}
              text="Before that I shipped LLM agents, RAG pipelines and a React Native app for wearable medical hardware at 4good.ai. Computer Science at PES University. I care about the details most people skip — the easing curve, the bundle size, the code review comment nobody asked for."
            />
          </p>

          <div className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-2">
            {STATS.map((stat, i) => (
              <FadeUp
                key={stat.label}
                delay={i * 0.08}
                className={`border-b border-line py-8 sm:px-6 ${i % 2 === 0 ? "sm:border-r sm:pl-0" : ""}`}
              >
                <div className="text-5xl font-bold text-paper md:text-6xl">
                  <Counter
                    to={stat.value}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-fog">
                  {stat.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
