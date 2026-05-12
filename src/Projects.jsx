import React, { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [

  {
    id: 9,
    type: "web",
    title: "TensaiGrocer",
    sub: "Next.js · MongoDB · TailwindCSS" ,
    desc: "A website I made with Next.js and MongoDb hosted on Vercel. It features catalogues of over 22,000 items scraped from local groceries store websites. The database is indexed for search optimization. The catalogues are incrementally loaded for each category of items. Dark and Light Visual Theme modes are also implemented along with Responsive design NavBar and Sidebar. It was created as an exercise to use Next.js, MongoDB, TailwindCSS, JWT.",
    tags: ["next.js", "react.js", "tailwindcss"],
    complexity: "high",
    thumbnail: "/thumbnails/tensaigrocer.jpg",
    url: "https://tensaigrocer.vercel.app",
  },


  {
    id: 10,
    type: "web",
    title: "FindPathSG",
    sub: "React.js · Mapbox.js",
    desc: "This project I created as an experiment to implement the A* pathfinding algorithm to Singapore’s bus network. It calculates paths between a selected start and end point. It also provides information on which buses # to transfer between along the route.",
    tags: ["javascript", "react.js", "tailwindcss", "mapbox", "geojson"],
    complexity: "high",
    thumbnail: "/thumbnails/findpathsg.jpg",
    url: "https://tensaix2j.github.io/findpathsg",
  },
  
  
  {
    id: 1,
    type: "game",
    title: "Puzzle Lab",
    sub: "Phaser.js · Three.js · HTML5",
    desc: "This is a game I created using Three.js and Javascript. The game is about exploring a museum-like space in first person, where every exhibit is a puzzle waiting to be solved. Featuring 22 handcrafted challenges, the collection spans a variety of classic and original designs. Wander the halls, interact with each installation, and uncover solutions at your own pace in a calm, gallery-inspired setting.",
    tags: ["threejs", "3d", "puzzle", "first-person", "javascript"],
    complexity: "high",
    thumbnail: "/thumbnails/puzzle_lab.jpg",
    url: "https://tensaix2j.github.io/puzzle_lab",
  },
  {
    id: 2,
    type: "game",
    title: "Crystal Maze",
    sub: "Phaser.js · Three.js · HTML5",
    desc: "This is another complex games I created using Three.js and Javascript. It is a retro puzzle adventure based on an old Windows game, Chip Challenge. Players have to navigate vibrant grid mazes to collect crystals. Solve clever challenges with keys, switches, and strategy while avoiding traps and hazards. Perfect for fans of logic and nostalgic fun. There are 36 levels in total.",
    tags: ["threejs", "3d", "puzzle", "tiled", "javascript"],
    complexity: "high",
    thumbnail: "/thumbnails/crystal_maze.jpg",
    url: "https://tensaix2j.github.io/crystal_maze",
  },
  {
    id: 3,
    type: "game",
    title: "Doge Warrior",
    sub: "Phaser.js · Tiled · HTML5",
    desc: "This is a game I created using Phaser.js. Doge Warrior is a platformer where you control a powerful doge exploring a trap-filled, mysterious labyrinth. It combines action and puzzles, letting you shoot Dogecoin to defeat enemies and solve challenges. As you progress, you unlock upgrades and face tougher obstacles that test your skill and strategy.",
    tags: ["platformer", "action", "puzzle", "javascript"],
    complexity: "high",
    thumbnail: "/thumbnails/doge_warrior.jpg",
    url: "https://tensaix2j.github.io/dogewarrior",
  },
  {
    id: 4,
    type: "game",
    title: "Horseh Jump",
    sub: "Phaser.js · Three.js · HTML5",
    desc: "This is another mini game I created using Phaser and Three.js. Phaser for the UI, Three.js for the 3D. Hold to charge, release to leap. Guide the bespectacled horse scientist across precarious floating platforms over a breathtaking mountain chasm. Time your jumps perfectly to avoid the deadly drop, with endless thrills awaiting every run.",
    tags: ["three.js", "3d", "javascript", "phaser.js"],
    complexity: "low",
    thumbnail: "/thumbnails/horseh_jump.jpg",
    url: "https://tensaix2j.itch.io/horseh_jump",
  },
  {
    id: 5,
    type: "game",
    title: "Horseh Run",
    sub: "Phaser.js · Three.js · HTML5",
    desc: "This is also another mini game I created using Phaser and Three.js. Phaser for the UI, Three.js for the 3D. Race through a fast-paced obstacle course where your character runs nonstop and you must quickly jump or dodge incoming obstacles. As the speed increases over time, sharp reflexes and precise timing determine how long you can survive.",
    tags: ["three.js", "3d", "javascript", "phaser.js"],
    complexity: "low",
    thumbnail: "/thumbnails/horseh_run.jpg",
    url: "https://tensaix2j.itch.io/horseh_run",
  },
  {
    id: 6,
    type: "game",
    title: "Roblox Crystal Maze",
    sub: "Roblox · Lua",
    desc: "This is my attempt to create Crystal Maze in Roblox Game Engine using the Lua scripting language.",
    tags: ["roblox", "lua"],
    complexity: "low",
    thumbnail: "/thumbnails/roblox_crystal_maze.jpg",
    url: "https://www.roblox.com/games/93128275517682/Crystal-Maze",
  },
  {
    id: 7,
    type: "game",
    title: "Pico-8 Tiny Games",
    sub: "Pico-8 · Lua",
    desc: "PICO-8 is a fantasy console that has only 16 colors and 128x128 pixels and runs the Lua scripting language. Here are some of the games I created on Pico-8, published on the Lexaloffle BBS.",
    tags: ["pico-8", "lua"],
    complexity: "low",
    thumbnail: "/thumbnails/pico_8_games.jpg",
    url: [
        [ "Lucky Stack", "https://www.lexaloffle.com/bbs/?tid=156436" ],
        [ "Lucky Jump", "https://www.lexaloffle.com/bbs/?tid=156424" ],
        [ "Trap The Cat", "https://www.lexaloffle.com/bbs/?tid=156402" ],
    ]
  },
  {
    id: 8,
    type: "web",
    title: "TensaiStudio Portfolio",
    sub: "React.js · TailwindCSS",
    desc: "This is a React.js website I semi vibe-coded to showcase a portfolio of all games and websites created by me. The project was initially hand-coded for some basic ReactJS web structures before being fully vibe coded using Codex to fill up the flesh of the site.",
    tags: ["typescript", "react.js", "tailwindcss" , "github pages"],
    complexity: "low",
    thumbnail: "/thumbnails/tensaistudio.jpg",
    url: "https://tensaix2j.github.io",
  },

  


  {
    id: 20,
    type: "Game",
    title: "Telegram Minigames",
    sub: "Telegram Bot API · Phaser.js",
    desc: "I made over 40 telegram minigames using Phaser.js on comissioned work for a company known as LuckyMiuuu games. ",
    tags: ["javascript", "phaser.js", "three.js", "telegram"],
    complexity: "low",
    thumbnail: "/thumbnails/luckymiuuu_games.jpg",
    url: [
        [ "Lucky Angler", "https,//molecule-dev.muaverse.build/muaton/public/games/angler/output/" ],
        [ "Lucky Blast", "https,//molecule-dev.muaverse.build/muaton/public/games/blast/output/" ],
        [ "Lucky Bomber", "https,//molecule-dev.muaverse.build/muaton/public/games/bomber/output/" ],
        [ "Lucky Pile", "https,//molecule-dev.muaverse.build/muaton/public/games/boxstaking/output/" ],
        [ "Lucky Bubble", "https,//molecule-dev.muaverse.build/muaton/public/games/bubble/output/" ],
        [ "Lucky Trump", "https,//molecule-dev.muaverse.build/muaton/public/games/bulletdodger/output/" ],
        [ "Lucky Catcher", "https,//molecule-dev.muaverse.build/muaton/public/games/catcher/output/" ],
        [ "Lucky Climber", "https,//molecule-dev.muaverse.build/muaton/public/games/climber/output/" ],
        [ "Lucky Coin", "https,//molecule-dev.muaverse.build/muaton/public/games/coin/output/" ],
        [ "Lucky Combine", "https,//molecule-dev.muaverse.build/muaton/public/games/combine/output/" ],
        [ "Lucky Crosser", "https,//molecule-dev.muaverse.build/muaton/public/games/crossy/output/" ],
        [ "Lucky Cutter", "https,//molecule-dev.muaverse.build/muaton/public/games/cutter/output/" ],
        [ "Lucky Drop", "https,//molecule-dev.muaverse.build/muaton/public/games/drop/output/" ],
        [ "Lucky Fighter", "https,//molecule-dev.muaverse.build/muaton/public/games/fighter/output/" ],
        [ "Lucky Fish", "https,//molecule-dev.muaverse.build/muaton/public/games/fish/output/" ],
        [ "Lucky Flap", "https,//molecule-dev.muaverse.build/muaton/public/games/flappy/output/" ],
        [ "Gaia Shooter", "https,//molecule-dev.muaverse.build/muaton/public/games/gaia_shooter/output/" ],
        [ "Lucky Jump", "https,//molecule-dev.muaverse.build/muaton/public/games/just-jump/output/" ],
        [ "Lucky Kisser", "https,//molecule-dev.muaverse.build/muaton/public/games/kisser/output/" ],
        [ "Lucky Lumberjack", "https,//molecule-dev.muaverse.build/muaton/public/games/lumberjack/output/" ],
        [ "Lucky Match", "https,//molecule-dev.muaverse.build/muaton/public/games/match/output/" ],
        [ "Lucky Pacman", "https,//molecule-dev.muaverse.build/muaton/public/games/pacman/output/" ],
        [ "Lucky Tap", "https,//molecule-dev.muaverse.build/muaton/public/games/pianokey/output/" ],
        [ "Lucky Pinball", "https,//molecule-dev.muaverse.build/muaton/public/games/pinball/output/" ],
        [ "Lucky Platformer", "https,//molecule-dev.muaverse.build/muaton/public/games/platformer/output/" ],
        [ "Lucky Plumber", "https,//molecule-dev.muaverse.build/muaton/public/games/plumber/output/" ],
        [ "Lucky Racer", "https,//molecule-dev.muaverse.build/muaton/public/games/racer/output/" ],
        [ "Lucky Runner", "https,//molecule-dev.muaverse.build/muaton/public/games/runner/output/" ],
        [ "Lucky Shooter", "https,//molecule-dev.muaverse.build/muaton/public/games/shooter/output/" ],
        [ "Lucky Sketch", "https,//molecule-dev.muaverse.build/muaton/public/games/sketch/output/" ],
        [ "Lucky Slicer", "https,//molecule-dev.muaverse.build/muaton/public/games/slicer/output/" ],
        [ "Lucky Slide", "https,//molecule-dev.muaverse.build/muaton/public/games/slide/output/" ],
        [ "Lucky Eater", "https,//molecule-dev.muaverse.build/muaton/public/games/snake/output/" ],
        [ "Lucky Split", "https,//molecule-dev.muaverse.build/muaton/public/games/split/output/" ],
        [ "Lucky Step", "https,//molecule-dev.muaverse.build/muaton/public/games/step/output/" ],
        [ "Lucky Tetris", "https,//molecule-dev.muaverse.build/muaton/public/games/tetris/output/" ],
        [ "Lucky Throw", "https,//molecule-dev.muaverse.build/muaton/public/games/throw/output/" ],
        [ "Lucky Towerstacker", "https,//molecule-dev.muaverse.build/muaton/public/games/towerstacker/output/" ],
        [ "Trap The Cat", "https,//molecule-dev.muaverse.build/muaton/public/games/trapthecat/output/" ],
        [ "Lucky Defense", "https,//molecule-dev.muaverse.build/muaton/public/games/turretdefense/output/" ],
        [ "Lucky Rise", "https,//molecule-dev.muaverse.build/muaton/public/games/up/output/" ],
        [ "Lucky Walk", "https,//molecule-dev.muaverse.build/muaton/public/games/walk/output/" ]
    ],
  },
];

const normalizeUrl = (url) => url?.replace("https,//", "https://");

const getProjectLinks = (project) => {
  if (Array.isArray(project.url)) {
    return project.url.map(([label, url]) => ({
      label,
      url: normalizeUrl(url),
    }));
  }

  if (project.url?.startsWith("http")) {
    return [{ label: "Visit live site", url: project.url }];
  }

  return [];
};

const complexityStyles = {
  high: "bg-[#c8713b] text-white",
  low: "bg-zinc-900 text-white",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="top"
        className="min-h-screen bg-[#f5f1ed] px-6 pb-20 pt-32 text-zinc-900"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c8713b]">
                Selected work
              </p>
              <h1 className="mt-3 text-[clamp(2.7rem,8vw,6rem)] font-black leading-none">
                My Web and Game projects.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
                A growing portfolio of my web designs, experiments, algorithms, 3D web games,
                platformers, puzzle games, Roblox builds, Telegram Minigames, Pico-8 releases, and the portfolio
                site that brings them together.
              </p>
            </div>
            <a
              href="https://github.com/tensaix2j"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group overflow-hidden rounded-lg bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#c8713b] focus:ring-offset-4 focus:ring-offset-[#f5f1ed]"
              >
                <div className="aspect-[16/9] overflow-hidden bg-zinc-200">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#c8713b]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8a471f]">
                        {project.type}
                      </span>
                      
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-zinc-400 transition group-hover:text-[#c8713b]" />
                  </div>

                  <h2 className="mt-5 text-2xl font-black">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-[#8a471f]">
                    {project.sub}
                  </p>
                  <p className="mt-4 line-clamp-3 leading-7 text-zinc-600">
                    {project.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-[#f5f1ed] text-zinc-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-200">
              <img
                src={selectedProject.thumbnail}
                alt={`${selectedProject.title} thumbnail`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#c8713b] focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#c8713b]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8a471f]">
                  {selectedProject.type}
                </span>
                
              </div>

              <h2
                id="project-modal-title"
                className="mt-5 text-[clamp(2rem,6vw,4rem)] font-black leading-none"
              >
                {selectedProject.title}
              </h2>
              <p className="mt-3 text-sm font-semibold text-[#8a471f]">
                {selectedProject.sub}
              </p>
              <p className="mt-6 text-lg leading-8 text-zinc-700">
                {selectedProject.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-300 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {getProjectLinks(selectedProject).length > 0 ? (
                  <div className="w-full">
                    {getProjectLinks(selectedProject).length > 1 && (
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#8a471f]">
                        Playable links
                      </h3>
                    )}
                    <div className="grid max-h-64 gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
                      {getProjectLinks(selectedProject).map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-between gap-3 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="h-4 w-4 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <span className="rounded-full border border-[#c8713b]/30 bg-[#fff8f1] px-5 py-3 text-sm font-semibold text-[#8a471f]">
                    Live site coming soon
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#c8713b] hover:text-[#c8713b]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
