import { useState, useEffect, useRef } from "react";

/* ── Tokens ─────────────────────────────────────────── */
const T = {
  bg:       "#F4F1EC",
  surface:  "#EDEAE3",
  ink:      "#1C1B19",
  inkMid:   "#6B6860",
  inkFaint: "#B0ADA6",
  amber:    "#C8703A",
  amberSoft:"#F2E4D8",
  white:    "#FDFCFA",
};

/* ── Data ────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1, type: "game",
    title: "Puzzle Lab",
    sub: "Phaser.js · Three.js · HTML5",
    desc: "Explore a museum-like space in first person, where every exhibit is a puzzle waiting to be solved. Featuring 22 handcrafted challenges, the collection spans a variety of classic and original designs. Wander the halls, interact with each installation, and uncover solutions at your own pace in a calm, gallery-inspired setting.",
    tags: ["threejs", "3d", "puzzle","first-person", "javascript"],
    complexity: "high",
    thumbnail: "/thumbnails/puzzle_lab.png",
    url: "https://tensaix2j.github.io/puzzle_lab"
  },


  {
    id: 2, type: "game",
    title: "Crystal Maze",
    sub: "Phaser.js · Three.js · HTML5",
    desc: "Retro puzzle adventure: navigate vibrant grid mazes to collect crystals. Solve clever challenges with keys, switches, and strategy while avoiding traps and hazards. Perfect for fans of logic and nostalgic fun. There are 36 levels in total",
    tags: ["threejs", "3d", "puzzle","tiled", "javascript"],
    complexity: "high",
    thumbnail: "/thumbnails/crystal_maze.png",
    url: "https://tensaix2j.github.io/crystal_maze"
  },

  
  {
    id: 3, type: "game",
    title: "Doge Warrior",
    sub: "Phaser.js · Tiled . HTML5",
    desc: "Doge Warrior is a platformer where you control a powerful doge exploring a trap-filled, mysterious labyrinth. It combines action and puzzles, letting you shoot Dogecoin to defeat enemies and solve challenges. As you progress, you unlock upgrades and face tougher obstacles that test your skill and strategy.",
    tags: ["platformer", "action", "puzzle","javascript"],
    complexity: "high",
    thumbnail: "/thumbnails/doge_warrior.png",
    url: "https://tensaix2j.github.io/dogewarrior"
  },

  {
    id: 4, type: "game",
    title: "Horseh Jump",
    sub: "Phaser.js · Three.js . HTML5",
    desc: "Hold to charge, release to leap! Guide the bespectacled horse scientist across precarious floating platforms over a breathtaking mountain chasm. Time your jumps perfectly to avoid the deadly drop—endless thrills await!",
    tags: ["platformer", "3d", "javascript"],
    complexity: "low",
    thumbnail: "/thumbnails/horseh_jump.png",
    url: "https://tensaix2j.itch.io/horseh_jump"
  },

  {
    id: 5, type: "game",
    title: "Horseh Run",
    sub: "Phaser.js · Three.js . HTML5",
    desc: "Race through a fast-paced obstacle course where your character runs nonstop and you must quickly jump or dodge incoming obstacles. As the speed increases over time, sharp reflexes and precise timing determine how long you can survive.",
    tags: ["platformer", "3d", "javascript"],
    complexity: "low",
    thumbnail: "/thumbnails/horseh_run.jpg",
    url: "https://tensaix2j.itch.io/horseh_run"
  },

  
  {
    id: 6, type: "game",
    title: "Roblox Crystal Maze",
    sub: "Roblox . LUA ",
    desc: "This is my attempt to create Crystal Maze in Roblox Game Engine using LUA scripting language",
    tags: ["roblox", "lua"],
    complexity: "low",
    thumbnail: "/thumbnails/roblox_crystal_maze.png",
    url: "https://www.roblox.com/games/93128275517682/Crystal-Maze"
  },


  {
    id: 7, type: "game",
    title: "Pico-8 Tiny Games",
    sub: "Pico-8",
    desc: "PICO-8 is a fantasy console that has only 16 colors and 128x128 pixels that runs LUA scripting language. Here are some of the games i created on Pico-8 published on Lexeloffle.com BBS.",
    tags: ["pico-8", "lua"],
    complexity: "low",
    thumbnail: "/thumbnails/pico_8_games.png",
    url: "https://www.lexaloffle.com/bbs/?uid=146165"
  },
  


  {
    id: 7, type: "web",
    title: "TensaiStudio Portfolio",
    sub: "React.js",
    desc: "This is a reactjs website vibe-coded to showcase a Portfolio of all games and websites created by me",
    tags: ["typeScript", "react.js"],
    complexity: "low",
    thumbnail: "/thumbnails/tensaistudio.png",
    url: "#top"
  },
  
];


const SKILLS = [
  { group: "Game Dev",  items: ["Phaser.js", "Three.js", "LUA", "Unity" ] },
  { group: "Frontend",  items: ["React.js", "TypeScript", "Javascript", "Three.js"] },
  { group: "Backend",   items: ["Node.js", "PostgreSQL", "MongoDb", "WebSockets"] },
  { group: "Craft",     items: ["Blender3D" , "Gimp" ] },
];

/* ── Hooks ───────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [ threshold ]);
  return [ref, vis];
}

/* ── Micro components ────────────────────────────────── */
function Reveal({ children, delay = 0, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(22px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function Tag({ label, muted }) {
  return (
    <span style={{
      fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.04em",
      padding: "3px 9px", borderRadius: "4px",
      background: muted ? "transparent" : T.amberSoft,
      color: muted ? T.inkFaint : T.amber,
      border: `1px solid ${muted ? T.surface : T.amberSoft}`,
    }}>{label}</span>
  );
}

function TypeDot({ type }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "5px",
      fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.07em",
      textTransform: "uppercase", color: type === "game" ? T.amber : T.inkMid,
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: "50%",
        background: type === "game" ? T.amber : T.inkMid,
        display: "inline-block",
      }} />
      {type === "game" ? "Game" : "Web"}
    </span>
  );
}

/* ── Project Card ─────────────────────────────────────── */
function Card({ project, delay }) {
  const [hov, setHov] = useState(false);
  const [ref, vis] = useInView();
  const large = project.size === "large";
  
  // Simple click handler
  const handleClick = () => {
    if (project.url && !project.url.startsWith("#") ) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      gridColumn: large ? "span 2" : "span 1",
    }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={handleClick} // Added the click handler here
        style={{
          background: hov ? T.white : T.surface,
          border: `1px solid ${hov ? "#D8D3CB" : T.surface}`,
          borderRadius: "12px",
          padding: large ? "2rem 2.25rem" : "1.6rem 1.75rem",
          cursor: "pointer",
          transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
          boxShadow: hov ? "0 4px 24px rgba(28,27,25,0.07)" : "none",
          height: "100%",
          display: "flex",
          flexDirection: large ? "row" : "column",
          gap: large ? "2rem" : "1rem",
          alignItems: large ? "flex-start" : "stretch",
        }}
      >

        {project.thumbnail && (
        <div style={{
            width: "100%",
            height: large ? "180px" : "140px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#ddd",
            marginBottom: large ? "0" : "0.8rem",
            flexShrink: 0,
        }}>
            <img
            src={project.thumbnail}
            alt={project.title}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
            }}
            />
        </div>
        )}

        {/* Left / main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <TypeDot type={project.type} />
            <span style={{ fontSize: "0.68rem", color: T.inkFaint, fontWeight: 500 }}>{project.stat}</span>
          </div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: large ? "1.55rem" : "1.15rem",
            color: T.ink, letterSpacing: "-0.02em", lineHeight: 1.2,
            transition: "color 0.2s",
          }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "0.75rem", color: T.inkFaint, fontWeight: 500 }}>{project.sub}</p>
          {!large && (
            <p style={{ fontSize: "0.85rem", color: T.inkMid, lineHeight: 1.7, marginTop: "0.25rem" }}>
              {project.desc}
            </p>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "auto", paddingTop: "0.75rem" }}>
            {project.tags.map(t => <Tag key={t} label={t} />)}
          </div>
        </div>

        {/* Large card: description on the right */}
        {large && (
          <div style={{ flex: "0 0 42%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <p style={{ fontSize: "0.9rem", color: T.inkMid, lineHeight: 1.75 }}>
              {project.desc}
            </p>
            <div style={{
              display: "flex", alignItems: "center", gap: "6px", marginTop: "1.5rem",
              color: hov ? T.amber : T.inkFaint, transition: "color 0.2s",
              fontSize: "0.78rem", fontWeight: 600,
            }}>
              View project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Filter Pill ─────────────────────────────────────── */
function Pill({ label, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
      fontSize: "0.78rem", letterSpacing: "0.03em",
      padding: "6px 18px", borderRadius: "20px",
      border: `1px solid ${active ? T.ink : "#D8D3CB"}`,
      background: active ? T.ink : "transparent",
      color: active ? T.bg : T.inkMid,
      cursor: "pointer", transition: "all 0.18s ease",
    }}>
      {label}
    </button>
  );
}

/* ── Main ────────────────────────────────────────────── */
export default function Portfolio() {
  const [scrollY, setScrollY]     = useState(0);
  const [filter, setFilter]       = useState("all");
  const [copied, setCopied]       = useState(false);
  const [activeNav, setActiveNav] = useState("work");

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const ids = ["work", "about", "contact"];
    const h = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveNav(id); break; }
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const filtered = filter === "all" ? PROJECTS
    : PROJECTS.filter(p => p.type === filter);

  const navScrolled = scrollY > 40;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Lora:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${T.bg}; color: ${T.ink}; font-family: 'Space Grotesk', sans-serif; -webkit-font-smoothing: antialiased; }
        ::selection { background: ${T.amberSoft}; color: ${T.amber}; }
        .container { max-width: 960px; margin: 0 auto; padding: 0 2rem; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 680px) {
          .proj-grid { grid-template-columns: 1fr !important; }
          .proj-grid > div { grid-column: span 1 !important; }
          .hero-h1 { font-size: clamp(2.4rem,10vw,3.5rem) !important; }
          .about-cols { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── Nav ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: `1px solid ${navScrolled ? "#E2DED7" : "transparent"}`,
        background: navScrolled ? `${T.bg}f0` : "transparent",
        backdropFilter: navScrolled ? "blur(14px)" : "none",
        transition: "all 0.35s ease",
      }}>
        <div className="container" style={{ height: 58, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "0.95rem", color: T.ink, background: "none", border: "none", cursor: "pointer", letterSpacing: "-0.01em",
          }}>
            <img 
            src="/logo32.png" 
            alt="TensaiStudio Logo" 
            style={{ 
                width: "auto", 
                height: "24px", 
                objectFit: "contain",
                // This nudges the logo down by 2 pixels to visually align with the text
                transform: "translateX(-2px) translateY(6px)" 
            }} 
            />
            TensaiStudio
          </button>
          <div style={{ display: "flex", gap: "6px" }}>
            {[["Work", "work"], ["About", "about"], ["Contact", "contact"]].map(([l, id]) => (
              <button key={id} onClick={() => go(id)} style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.8rem",
                padding: "5px 14px", borderRadius: "6px", border: "none",
                background: activeNav === id ? T.surface : "transparent",
                color: activeNav === id ? T.ink : T.inkMid,
                cursor: "pointer", transition: "all 0.15s",
              }}>{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "80px", position: "relative", overflow: "hidden" }}>
        {/* Subtle background circle */}
        <div style={{ position: "absolute", top: "15%", right: "-6%", width: "480px", height: "480px", borderRadius: "50%", background: T.amberSoft, opacity: 0.5, pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.05s forwards" }}>
            <span style={{
              fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: T.amber, display: "block", marginBottom: "1.6rem",
            }}>
                Game/WebDev from Singapore
            </span>
          </div>

          <h1 className="hero-h1" style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "clamp(2.8rem, 7vw, 5.2rem)", lineHeight: 1.06,
            letterSpacing: "-0.03em", color: T.ink,
            maxWidth: "720px", marginBottom: "2rem",
            opacity: 0, animation: "fadeUp 0.7s ease 0.15s forwards",
          }}>
            I build{" "} 
            <em style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontStyle: "italic", color: T.amber }}>
                games,<br />
                websites
            </em>,
            {" "}and<br />whatever's interesting.
          </h1>

          <p style={{
            fontSize: "1.02rem", color: T.inkMid, lineHeight: 1.75,
            maxWidth: "480px", marginBottom: "2.8rem", fontWeight: 400,
            opacity: 0, animation: "fadeUp 0.7s ease 0.25s forwards",
          }}>
            Software engineer and maker. I spend my time writing games, building useful web tools, and exploring ideas that sit somewhere between the two.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", opacity: 0, animation: "fadeUp 0.7s ease 0.35s forwards" }}>
            <button onClick={() => go("work")} style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.85rem",
              padding: "11px 26px", background: T.ink, color: T.bg, border: `1px solid ${T.ink}`,
              borderRadius: "8px", cursor: "pointer", letterSpacing: "0.01em",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              See my work
            </button>
            <button onClick={() => go("contact")} style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem",
              padding: "11px 26px", background: "transparent", color: T.inkMid,
              border: `1px solid #D8D3CB`, borderRadius: "8px", cursor: "pointer",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.ink; e.currentTarget.style.color = T.ink; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#D8D3CB"; e.currentTarget.style.color = T.inkMid; }}>
              Get in touch
            </button>
          </div>
        </div>

        {/* Scroll nudge */}
        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", opacity: 0, animation: "fadeUp 0.6s ease 1s forwards" }}>
          <div style={{ width: 1, height: 44, background: `linear-gradient(to bottom, ${T.inkFaint}, transparent)`, margin: "0 auto" }} />
        </div>
      </header>

      {/* ── Work ── */}
      <section id="work" style={{ padding: "6rem 0" }}>
        <div className="container">
          <Reveal>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.amber, marginBottom: "0.5rem" }}>Selected Work</p>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.6rem)", letterSpacing: "-0.025em" }}>
                  Projects
                </h2>
              </div>
              {/* Filter */}
              <div style={{ display: "flex", gap: "6px" }}>
                {[["All", "all"], ["Games", "game"], ["Web", "web"]].map(([l, v]) => (
                  <Pill key={v} label={l} active={filter === v} onClick={() => setFilter(v)} />
                ))}
              </div>
            </div>
          </Reveal>

          <div className="proj-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginTop: "1.5rem",
          }}>
            {filtered.map((p, i) => (
              <Card key={p.id} project={p} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" style={{ padding: "6rem 0", borderTop: `1px solid #E2DED7` }}>
        <div className="container">
          <div className="about-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <Reveal>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.amber, marginBottom: "0.75rem" }}>About</p>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.4rem)", letterSpacing: "-0.025em", marginBottom: "2rem" }}>
                Explorer by nature,<br />
                <em style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontStyle: "italic" }}>engineer by trade.</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontSize: "0.93rem", color: T.inkMid, lineHeight: 1.8 }}>
                  I'm a software engineer based in Singapore with a hobby of creating casual games. About 60% of my projects are games — I love the design constraints and real-time feel of game development. The other 40% are web tools, experiments, and apps that scratch some itch I couldn't ignore.
                </p>
                <p style={{ fontSize: "0.93rem", color: T.inkMid, lineHeight: 1.8 }}>
                  I care about craft: games that feel tight to control, interfaces that get out of the way, and code that's a pleasure to revisit. I work solo but think in teams — most of what I know I learned from open source and game jams.
                </p>
                <p style={{ fontSize: "0.93rem", color: T.inkMid, lineHeight: 1.8 }}>
                  Outside work: long walks, gym, animes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              
              {/* Skills */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="skills-grid">
                {SKILLS.map(s => (
                  <div key={s.group}>
                    <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.inkFaint, marginBottom: "0.7rem" }}>{s.group}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      {s.items.map(item => (
                        <li key={item} style={{ fontSize: "0.82rem", color: T.inkMid, fontWeight: 500 }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: "6rem 0", borderTop: `1px solid #E2DED7` }}>
        <div className="container">
          <div style={{ maxWidth: "560px" }}>
            <Reveal>
              <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.amber, marginBottom: "0.75rem" }}>Contact</p>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.6rem)", letterSpacing: "-0.025em", marginBottom: "1.2rem" }}>
                Let's build something<br />
                <em style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontStyle: "italic", color: T.amber }}>worth playing.</em>
              </h2>
              <p style={{ fontSize: "0.93rem", color: T.inkMid, lineHeight: 1.8, marginBottom: "2.2rem" }}>
                Open to freelance projects, collabs, and interesting conversations — whether it's a game, a tool, or something that doesn't have a category yet.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <button onClick={() => { navigator.clipboard.writeText("tensaix2j@gmail.com"); setCopied(true); setTimeout(() => setCopied(false), 2500); }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.83rem",
                    padding: "11px 22px", background: T.ink, color: T.bg, border: `1px solid ${T.ink}`,
                    borderRadius: "8px", cursor: "pointer", transition: "opacity 0.2s", letterSpacing: "0.01em",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  {copied ? "Copied ✓" : "Copy email"}
                </button>
              </div>

              {/* Social links */}
              <div style={{ display: "flex", gap: "1.5rem", borderTop: `1px solid #E2DED7`, paddingTop: "1.75rem" }}>
                {[["GitHub", "https://github.com/tensaix2j"], ["Itch.io", "https://tensaix2j.itch.io/"], ["Pico-8", "https://www.lexaloffle.com/bbs/?uid=146165"] ].map(([l, h]) => (
                  <a key={l} href={h} style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8rem", fontWeight: 600,
                    color: T.inkFaint, textDecoration: "none", transition: "color 0.15s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = T.ink}
                    onMouseLeave={e => e.currentTarget.style.color = T.inkFaint}>
                    {l}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid #E2DED7`, padding: "1.75rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.75rem", color: T.inkFaint, fontWeight: 500 }}>© 2026 TensaiStudio</span>
          <span style={{ fontSize: "0.75rem", color: T.inkFaint, fontWeight: 500 }}>Built with React</span>
        </div>
      </footer>
    </>
  );
}
