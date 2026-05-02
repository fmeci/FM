const signalNodes = [
  { id: "fatjon", label: "Fatjon", x: 0.5, y: 0.5, r: 34, copy: "Builder of systems, teams, and tools. Curious about what changes how people think and create." },
  { id: "ai", label: "AI", x: 0.5, y: 0.18, r: 26, copy: "Less interested in hype, more interested in leverage: how AI changes what one person or one team can create." },
  { id: "growth", label: "Growth", x: 0.22, y: 0.26, r: 21, copy: "Growth is a system, not a campaign. Attribution, efficiency, allocation, and scale." },
  { id: "data", label: "Data", x: 0.78, y: 0.26, r: 21, copy: "Data as a reality check. Measurement gives ideas a chance to fail honestly and survive honestly." },
  { id: "design", label: "Design", x: 0.12, y: 0.5, r: 19, copy: "Making complexity feel usable, elegant, and human. Function first, then beauty." },
  { id: "systems", label: "Systems", x: 0.88, y: 0.5, r: 21, copy: "Everything interesting is a system: markets, teams, code, products, and organizations." },
  { id: "physics", label: "Physics", x: 0.78, y: 0.74, r: 17, copy: "A fascination with hidden structures behind complex systems. First principles over inherited assumptions." },
  { id: "chess", label: "Chess", x: 0.5, y: 0.86, r: 17, copy: "Pattern recognition, trade-offs, pressure, and long-term positioning in a constrained world." },
  { id: "juventus", label: "Juventus", x: 0.18, y: 0.72, r: 15, copy: "A reminder that systems still need emotion, loyalty, and irrational hope." },
  { id: "leadership", label: "Leadership", x: 0.78, y: 0.16, r: 18, copy: "Building teams that can think clearly, move fast, and know when to slow down." },
  { id: "vibe", label: "Vibe coding", x: 0.34, y: 0.16, r: 19, copy: "Using AI as a creative and technical partner to turn vague ideas into prototypes quickly." },
  { id: "building", label: "Building", x: 0.24, y: 0.78, r: 18, copy: "Turning ambiguity into structure, and structure into useful things." }
];

document.documentElement.classList.add("js");

const signalEdges = [
  ["fatjon", "ai"], ["fatjon", "growth"], ["fatjon", "data"], ["fatjon", "systems"],
  ["fatjon", "design"], ["fatjon", "building"], ["fatjon", "leadership"], ["fatjon", "vibe"],
  ["ai", "vibe"], ["ai", "data"], ["ai", "growth"], ["growth", "data"], ["growth", "leadership"],
  ["data", "systems"], ["systems", "physics"], ["physics", "chess"], ["chess", "building"],
  ["design", "building"], ["juventus", "leadership"], ["building", "vibe"]
];

function initNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      menu.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: "0px 0px -40px 0px" });
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("visible");
    } else {
      observer.observe(el);
    }
  });
}

function initBuildItems() {
  document.querySelectorAll(".build-item").forEach((item) => {
    item.addEventListener("click", () => item.classList.toggle("active"));
  });
}

function initStars() {
  const canvas = document.querySelector("[data-stars]");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let stars = [];
  let frame = 0;
  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.5 + 0.05,
      phase: Math.random() * Math.PI * 2
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    frame += 0.012;
    stars.forEach((star) => {
      const alpha = star.o * (0.65 + 0.35 * Math.sin(frame + star.phase));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener("resize", resize);
  draw();
}

function initSignalMap() {
  const canvas = document.querySelector("[data-signal-map]");
  const detail = document.querySelector("[data-signal-detail]");
  if (!canvas || !detail || window.matchMedia("(max-width: 640px)").matches) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let active = signalNodes[0];
  const pulses = Array.from({ length: 10 }, (_, i) => ({ edge: i % signalEdges.length, t: i / 10, speed: 0.002 + Math.random() * 0.0014 }));

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const nodeAt = (x, y) => signalNodes.find((node) => Math.hypot(node.x * width - x, node.y * height - y) < node.r + 8);
  const setActive = (node) => {
    active = node;
    detail.innerHTML = `<span>${node.label === "Fatjon" ? "FM" : node.label.slice(0, 2)}</span><h3>${node.label}</h3><p>${node.copy}</p>`;
  };

  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const hit = nodeAt(event.clientX - rect.left, event.clientY - rect.top);
    canvas.style.cursor = hit ? "pointer" : "default";
    if (hit) setActive(hit);
  });

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const hit = nodeAt(event.clientX - rect.left, event.clientY - rect.top);
    if (hit) setActive(hit);
  });

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(255,255,255,0.025)";
    for (let x = 0; x < width; x += 60) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += 60) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    const map = Object.fromEntries(signalNodes.map((node) => [node.id, node]));
    signalEdges.forEach(([a, b]) => {
      const from = map[a], to = map[b];
      const isActive = active && (active.id === a || active.id === b);
      ctx.beginPath();
      ctx.moveTo(from.x * width, from.y * height);
      ctx.lineTo(to.x * width, to.y * height);
      ctx.strokeStyle = isActive ? "rgba(200,169,110,0.38)" : "rgba(255,255,255,0.075)";
      ctx.lineWidth = isActive ? 1.25 : 0.8;
      ctx.stroke();
    });

    pulses.forEach((pulse) => {
      const [a, b] = signalEdges[pulse.edge];
      const from = map[a], to = map[b];
      pulse.t += pulse.speed;
      if (pulse.t > 1) {
        pulse.t = 0;
        pulse.edge = Math.floor(Math.random() * signalEdges.length);
      }
      const x = (from.x + (to.x - from.x) * pulse.t) * width;
      const y = (from.y + (to.y - from.y) * pulse.t) * height;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, 16);
      glow.addColorStop(0, "rgba(110,200,192,0.75)");
      glow.addColorStop(1, "rgba(110,200,192,0)");
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(x, y, 16, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "rgba(230,245,255,0.9)";
      ctx.beginPath(); ctx.arc(x, y, 2.8, 0, Math.PI * 2); ctx.fill();
    });

    signalNodes.forEach((node) => {
      const x = node.x * width;
      const y = node.y * height;
      const activeNode = active && active.id === node.id;
      const grad = ctx.createRadialGradient(x - node.r * 0.4, y - node.r * 0.4, 2, x, y, node.r);
      grad.addColorStop(0, activeNode ? "#3b3020" : "#252b37");
      grad.addColorStop(1, "#141923");
      ctx.fillStyle = grad;
      ctx.strokeStyle = activeNode ? "rgba(200,169,110,0.85)" : "rgba(255,255,255,0.14)";
      ctx.lineWidth = activeNode ? 1.7 : 0.9;
      ctx.beginPath(); ctx.arc(x, y, node.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = activeNode ? "#c8a96e" : "#aaa397";
      ctx.font = `${node.id === "fatjon" ? 13 : 11}px ui-monospace, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, x, y);
    });

    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  draw();
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initReveal();
  initBuildItems();
  initStars();
  initSignalMap();
});
