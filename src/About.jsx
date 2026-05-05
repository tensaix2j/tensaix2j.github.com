import React from "react";
import { Braces, Layers, MapPin, Rocket } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="min-h-screen bg-[#f5f1ed] px-6 pb-20 pt-32 text-zinc-900">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#c8713b]/15 px-4 py-2 text-sm font-semibold text-[#8a471f]">
              <MapPin className="h-4 w-4" />
              Singapore
            </p>
            <h1 className="mt-8 text-[clamp(2.7rem,8vw,6rem)] font-black leading-none">
              A developer with a builder's curiosity.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              I make web apps, games, and experiments under TensaiStudio. My work
              sits somewhere between practical software and playful interaction:
              useful enough to ship, expressive enough to remember.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Braces,
                title: "Full stack foundations",
                copy: "React, JavaScript, APIs, routing, state, data, and the practical pieces that turn an idea into a working product.",
              },
              {
                icon: Layers,
                title: "Interface craft",
                copy: "Layouts, motion, visual hierarchy, and small details that make a site feel intentional instead of assembled.",
              },
              {
                icon: Rocket,
                title: "Game-minded thinking",
                copy: "Rapid prototyping, feedback loops, readable systems, and an instinct for making interactions feel responsive.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-lg bg-white p-6 shadow-sm">
                <Icon className="h-7 w-7 text-[#c8713b]" />
                <h2 className="mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-3 leading-7 text-zinc-600">{copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 rounded-lg bg-zinc-950 p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f4b860]">
                How I work
              </p>
              <h2 className="mt-3 text-3xl font-black">Prototype, polish, ship, learn.</h2>
            </div>
            <div className="space-y-5 text-white/80">
              <p>
                I start by getting the core loop working: the main user flow, the
                most important interaction, or the mechanic that has to feel right.
              </p>
              <p>
                From there, I tighten the product with clearer structure, stronger
                visuals, better performance, and the kind of finishing touches that
                make people trust what they are using.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
