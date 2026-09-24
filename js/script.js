const projects = [
  {
    id: 1,
    name: "CampusCart",
    category: ["web", "python"],
    type: "Web Application",
    repo: "https://github.com/sushantcdy734/campuscart",
    demo: "https://campuscart-yn8p.onrender.com/",
    description: "A student marketplace built with Flask, SQLite for local development and PostgreSQL support for production deployment.",
    details: "CampusCart is an online marketplace for students. The public repository includes a Flask application, database support, uploads, authentication-related flows and deployment configuration.",
    tech: ["Python", "Flask", "SQLite", "PostgreSQL"],
    accent: "01"
  },
  {
    id: 2,
    name: "Nepal Data Assistant — AI Agent",
    category: ["ai", "python"],
    type: "AI / Streamlit",
    repo: "https://github.com/sushantcdy734/nepal-ai-agent",
    demo: "https://nepal-ai-agent.streamlit.app/",
    description: "An AI agent that can search the web, perform calculations and keep conversation context across messages.",
    details: "The project uses tool calling so the agent can decide when to answer directly or use tools such as web search and a calculator.",
    tech: ["Python", "Groq", "Streamlit", "DuckDuckGo"],
    accent: "02"
  },
  {
    id: 3,
    name: "Nepal Rainfall Analysis",
    category: ["data", "python"],
    type: "Data Analysis",
    repo: "https://github.com/sushantcdy734/nepal-rainfall-analysis",
    demo: "https://nepal-rainfall-analysis.streamlit.app/",
    description: "An interactive analysis of long-term rainfall data across Nepal with an interactive dashboard.",
    details: "The repository documents rainfall analysis, seasonal patterns and regional variation using Python data-analysis and visualization tools, with Streamlit used for the interactive dashboard.",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter", "Streamlit"],
    accent: "03"
  },
  {
    id: 4,
    name: "Nepal Crop Yield Prediction",
    category: ["data", "python"],
    type: "Machine Learning",
    repo: "https://github.com/sushantcdy734/nepal-crop-yield",
    demo: "https://nepal-crop-yield.streamlit.app/",
    description: "An end-to-end machine-learning project predicting crop yields in Nepal from rainfall patterns.",
    details: "The project combines data preparation, SQL queries and a machine-learning pipeline using Python, pandas, SQLite, scikit-learn and Streamlit.",
    tech: ["Python", "Pandas", "SQLite", "Scikit-learn", "Streamlit"],
    accent: "04"
  },

];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const projectGrid = $("#projectGrid");
const modal = $("#projectModal");
const modalContent = $("#modalContent");

function renderProjects(filter = "all") {
  const visible = projects.filter(p => filter === "all" || p.category.includes(filter));
  projectGrid.innerHTML = visible.map(p => `
    <article class="project-card reveal visible">
      <div class="project-cover">
        <div class="project-index">${p.accent}</div>
        <div class="project-type">${p.type}</div>
      </div>
      <div class="project-body">
        <h3>${escapeHTML(p.name)}</h3>
        <p>${escapeHTML(p.description)}</p>
        <div class="tech-list">${p.tech.map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div>
        <div class="project-actions">
          ${p.demo ? `<a class="project-live" href="${p.demo}" target="_blank" rel="noopener noreferrer">Visit Project ↗</a>` : ""}
          <a href="${p.repo}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <button type="button" data-project="${p.id}">Details</button>
        </div>
      </div>
    </article>
  `).join("");

  $$("[data-project]", projectGrid).forEach(btn => {
    btn.addEventListener("click", () => openProject(Number(btn.dataset.project)));
  });
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[char]));
}

function openProject(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;
  modalContent.innerHTML = `
    <p class="eyebrow">${escapeHTML(p.type)}</p>
    <h3 id="modalTitle">${escapeHTML(p.name)}</h3>
    <p>${escapeHTML(p.details)}</p>
    <div class="tech-list">${p.tech.map(t => `<span>${escapeHTML(t)}</span>`).join("")}</div>
    <div class="modal-actions">
      ${p.demo ? `<a class="btn btn-primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">Visit Project ↗</a>` : ""}
      <a class="btn btn-secondary" href="${p.repo}" target="_blank" rel="noopener noreferrer">Open GitHub ↗</a>
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

renderProjects();

$$(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

$("#modalClose").addEventListener("click", closeProject);
$$("[data-close-modal]").forEach(el => el.addEventListener("click", closeProject));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProject(); });

const menuToggle = $("#menuToggle");
const navMenu = $("#navMenu");
menuToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});
$$(".nav-link").forEach(link => link.addEventListener("click", () => {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}));

const siteHeader = $("#siteHeader");
const backToTop = $("#backToTop");
const scrollProgress = $("#scrollProgress");
const navLinks = $$(".nav-link");
const sections = $$("main section[id]");

function onScroll() {
  const y = window.scrollY;
  siteHeader.classList.toggle("scrolled", y > 15);
  backToTop.classList.toggle("show", y > 600);
  const height = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = `${height > 0 ? (y / height) * 100 : 0}%`;

  let current = "home";
  sections.forEach(section => {
    if (y >= section.offsetTop - 150) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
backToTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

const themeToggle = $("#themeToggle");
const savedTheme = localStorage.getItem("sushant-theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.dataset.theme = savedTheme || (systemDark ? "dark" : "light");
themeToggle.textContent = document.documentElement.dataset.theme === "dark" ? "☀" : "☾";

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("sushant-theme", next);
  themeToggle.textContent = next === "dark" ? "☀" : "☾";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
$$(".reveal").forEach(el => observer.observe(el));

const typingWords = ["Aspiring Software Developer", "BSc CSIT Student", "Web Development Learner", "Problem Solver"];
let wordIndex = 0, charIndex = 0, deleting = false;
const typingText = $("#typingText");

function typeLoop() {
  const word = typingWords[wordIndex];
  typingText.textContent = deleting ? word.slice(0, --charIndex) : word.slice(0, ++charIndex);
  if (!deleting && charIndex === word.length) {
    deleting = true;
    setTimeout(typeLoop, 1500);
    return;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
  }
  setTimeout(typeLoop, deleting ? 45 : 80);
}
setTimeout(typeLoop, 700);

const toast = $("#toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

$$(".copy-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      showToast("Email copied to clipboard.");
    } catch {
      showToast("Copy is unavailable in this browser.");
    }
  });
});

$("#contactForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Stop the page from reloading
  
  const form = event.currentTarget;
  
  // Keep your existing validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const submitBtn = form.querySelector("button[type='submit']");
  const originalBtnText = submitBtn.innerHTML;
  
  // Give the user visual feedback
  submitBtn.innerHTML = "Sending...";
  submitBtn.disabled = true;

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      showToast("Thanks! Your message has been sent successfully.");
      form.reset(); // Clear the form
    } else {
      showToast("Oops! There was a problem sending your message.");
    }
  } catch (error) {
    showToast("Network error. Please check your connection and try again.");
  } finally {
    // Restore the button state
    submitBtn.innerHTML = originalBtnText;
    submitBtn.disabled = false;
  }
});
$("#year").textContent = new Date().getFullYear();
window.addEventListener("load", () => setTimeout(() => $("#loader").classList.add("hidden"), 450));
