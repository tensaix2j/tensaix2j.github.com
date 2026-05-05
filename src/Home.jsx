import React from "react";
import ScrollIndicator from "./ScrollIndicator";
import Particles from "./Particles";
import HeroModels from "./HeroModels";
import { ArrowRight, Code2, Gamepad2, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <>
      <section className="h-screen overflow-hidden flex items-center justify-center text-black bg-[#f5f1ed]">
        
        <div className="flex z-10 w-full max-w-6xl px-6 pt-24 ">

			<div className="">
				<div className="inline-flex items-center rounded-full border border-[#c8713b]/30 bg-white/60 px-4 py-2 text-sm font-medium text-[#7a3f20] shadow-sm backdrop-blur">
				Open to work - Singapore
				</div>
				<ScrollIndicator />

				<h1 className="mt-8 max-w-4xl text-[clamp(3rem,7vw,5rem)] font-black leading-[0.95] tracking-normal md:max-w-[58%]">
				I build games, websites, and whatever's interesting.
				</h1>

				<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 md:max-w-[52%]">
				TensaiStudio is the portfolio of a Singapore-based full stack developer
				making playful web experiences, polished interfaces, and small games
				with memorable interactions.
				</p>

				<div className="mt-8 flex flex-wrap gap-3">
					<a
						href="/projects"
						className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]"
					>
						View projects <ArrowRight className="h-4 w-4" />
					</a>
				</div>
			</div>
		    <div className="pointer-events-none relative">
				<div className="absolute -translate-x-[50vw] -translate-y-[6vw]  w-[50vw] h-[50vw]  z-[-4000]">
          			<HeroModels />
				</div>
        	</div>
		</div>
		
      </section>

      <section className="bg-[#c8713b] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Web apps",
              copy: "Responsive React experiences with clean flows, fast feedback, and UI that feels good to use.",
            },
            {
              icon: Gamepad2,
              title: "Game prototypes",
              copy: "Small playable ideas, systems experiments, and interactive builds shaped around feel first.",
            },
            {
              icon: Sparkles,
              title: "Creative tools",
              copy: "Odd little utilities, visual experiments, and digital toys for learning by making.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur"
            >
              <Icon className="h-7 w-7" />
              <h2 className="mt-5 text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-white/85">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f1ed] px-6 py-20 text-zinc-900">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c8713b]">
              Current focus
            </p>
            <h2 className="mt-3 text-4xl font-black">Building sharper every release.</h2>
          </div>
          <p className="text-lg leading-8 text-zinc-700">
            I like projects where engineering and taste meet: a page that loads
            cleanly, an interaction with the right timing, a mechanic that clicks,
            or a tool that makes a messy task easier. The work here is growing
            in public, one shipped thing at a time.
          </p>
        </div>
      </section>
    </>
  );
};


export default Home;
