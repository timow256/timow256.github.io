(() => {
  const p = PORTFOLIO.profile;
  const $ = (id) => document.getElementById(id);

  if (p.photo) {
    $("profilePhoto").src = p.photo;
    $("profilePhoto").alt = `Portrait of ${p.name}`;
  }
  
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));

  $("heroEyebrow").textContent = p.eyebrow;
  $("heroName").textContent = p.name;
  $("heroTitle").textContent = p.title;
  $("heroIntro").textContent = p.intro;
  $("aboutText").textContent = p.about;
  $("footerName").textContent = `© ${new Date().getFullYear()} ${p.name}`;

const heroActions = [];
heroActions.push(`<a class="btn btn-primary" href="#projects">View projects</a>`);

if (p.resume) {
  heroActions.push(
    `<a class="btn" href="${esc(p.resume)}" download>Download CV</a>`
  );
}

if (p.linkedin) {
  heroActions.push(
    `<a class="btn" href="${esc(p.linkedin)}" target="_blank" rel="noreferrer">LinkedIn ↗</a>`
  );
}

$("heroActions").innerHTML = heroActions.join("");

  const meta = [];
  if (p.location) meta.push(`<span>📍 ${esc(p.location)}</span>`);
  if (p.email) meta.push(`<span>✉ ${esc(p.email)}</span>`);
  $("heroMeta").innerHTML = meta.join("");

  $("focusList").innerHTML = PORTFOLIO.focus.map(item => `
    <div class="focus-item">
      <strong>${esc(item.title)}</strong>
      <span>${esc(item.text)}</span>
    </div>
  `).join("");

  const e = PORTFOLIO.education;
  $("educationCard").innerHTML = `
    <strong>${esc(e.degree)}</strong>
    <span>${esc(e.institution)} • ${esc(e.period)}</span><br>
    <span>${esc(e.details)}</span>
  `;

  $("projectGrid").innerHTML = PORTFOLIO.projects.map((project, index) => {
    const media = project.image
      ? `<img class="project-image" src="${esc(project.image)}" alt="${esc(project.title)} project image">`
      : `<div class="project-placeholder"><span>${String(index + 1).padStart(2, "0")}</span></div>`;
    const tags = project.tools.map(t => `<span class="tag">${esc(t)}</span>`).join("");
    const highlights = project.highlights.map(h => `<li>${esc(h)}</li>`).join("");
    const links = (project.links || []).length
      ? `<div class="project-links">${project.links.map(link => `<a href="${esc(link.url)}" target="_blank" rel="noreferrer">${esc(link.label)} ↗</a>`).join("")}</div>`
      : "";

    return `
      <article class="project-card">
        ${media}
        <div class="project-body">
          <div class="project-topline"><span>${esc(project.category)}</span><span>${esc(project.year)}</span></div>
          <h3>${esc(project.title)}</h3>
          <p class="project-summary">${esc(project.summary)}</p>
          <div class="tags">${tags}</div>
          <details>
            <summary>View case-study details</summary>
            <div class="project-details"><ul>${highlights}</ul>${links}</div>
          </details>
        </div>
      </article>`;
  }).join("");

  $("experienceList").innerHTML = PORTFOLIO.experience.map(item => `
    <article class="timeline-item">
      <div class="timeline-meta">${esc(item.period)}</div>
      <h3>${esc(item.role)}</h3>
      <div class="timeline-org">${esc(item.organization)}</div>
      <ul>${item.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>
    </article>
  `).join("");

  $("skillsGrid").innerHTML = Object.entries(PORTFOLIO.skills).map(([group, values]) => `
    <section class="skill-card">
      <h3>${esc(group)}</h3>
      <div class="skill-list">${values.map(v => `<span class="skill-pill">${esc(v)}</span>`).join("")}</div>
    </section>
  `).join("");

  $("contactText").textContent = `Based in ${p.location}. For opportunities or collaborations, the easiest way to reach me is by email.`;
  const contactButtons = [];
  if (p.email) contactButtons.push(`<a class="btn btn-primary" href="mailto:${esc(p.email)}">Email me</a>`);
  //if (p.github) contactButtons.push(`<a class="btn" href="${esc(p.github)}" target="_blank" rel="noreferrer">GitHub ↗</a>`);
  if (p.linkedin) contactButtons.push(`<a class="btn" href="${esc(p.linkedin)}" target="_blank" rel="noreferrer">LinkedIn ↗</a>`);
  $("contactActions").innerHTML = contactButtons.join("");

  const toggle = $("themeToggle");
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "dark") document.documentElement.dataset.theme = "dark";
  toggle.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme === "dark";
    if (dark) {
      delete document.documentElement.dataset.theme;
      localStorage.setItem("portfolio-theme", "light");
    } else {
      document.documentElement.dataset.theme = "dark";
      localStorage.setItem("portfolio-theme", "dark");
    }
  });
})();
