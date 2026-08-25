# Timotius William Wuisang — Portfolio Website

This is a lightweight static portfolio website. It uses only HTML, CSS, and JavaScript, so there is **no framework, no paid hosting requirement, and no build process**.

## 1. Preview it on your computer

The easiest method:

1. Extract the ZIP.
2. Open the folder.
3. Double-click `index.html`.

For a more realistic local preview, if Python is installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

---

## 2. The only file you usually need to edit: `data.js`

Most portfolio content is stored in `data.js`.

Open it using Visual Studio Code, Notepad++, or standard Notepad.

### Change your name, headline, introduction, email, GitHub, LinkedIn, or CV

Find:

```js
profile: {
  name: "...",
  title: "...",
  intro: "...",
  email: "...",
  github: "...",
  linkedin: "...",
  resume: "..."
}
```

Edit the text inside the quotation marks.

If you later have a LinkedIn URL, replace:

```js
linkedin: "",
```

with:

```js
linkedin: "https://www.linkedin.com/in/YOUR-USERNAME/",
```

---

## 3. Add a new project

In `data.js`, find the `projects: [` section.

Copy one complete project block:

```js
{
  title: "Project title",
  year: "2026",
  category: "Category",
  summary: "Short explanation.",
  highlights: [
    "What you did.",
    "How you did it.",
    "What the result was."
  ],
  tools: ["Python", "Excel"],
  image: "",
  links: []
},
```

Paste it before the closing `]` of the projects list, then edit the content.

**Important:** separate projects with commas.

---

## 4. Remove a project

Delete the project's whole block from the opening `{` to the closing `},`.

Do not delete the `projects: [` or its final `]`.

---

## 5. Add a project image

1. Put the image in:

```text
assets/images/
```

Example:

```text
assets/images/transparent-wood.jpg
```

2. In that project's block in `data.js`, change:

```js
image: "",
```

to:

```js
image: "assets/images/transparent-wood.jpg",
```

Recommended image ratio: **16:9**. JPG, PNG, and WebP are all fine.

### What images are worth adding?

Prefer:
- your experimental setup,
- a prototype you personally built,
- a dashboard screenshot,
- a chart you created,
- a non-confidential lab/project photo,
- an architecture/system diagram you are allowed to publish.

Avoid uploading confidential company drawings, internal documents, credentials, customer data, or unpublished information you are not authorized to share.

---

## 6. Add or remove a skill

Find the `skills` section in `data.js`.

Example:

```js
"Data & Programming": [
  "Python",
  "Pandas",
  "Microsoft Excel"
],
```

Add or delete an item. Keep commas between items.

---

## 7. Change the colors

Open `styles.css` and look at the first lines:

```css
:root {
  --bg: ...;
  --surface: ...;
  --ink: ...;
  --accent: ...;
}
```

Changing `--accent` and `--accent-strong` changes most of the visual identity without editing the rest of the CSS.

---

## 8. Replace the CV

The current downloadable CV is:

```text
assets/CV_Timotius_William_Wuisang.docx
```

To replace it:

1. Delete the old file.
2. Add the new CV to `assets/`.
3. Either keep the same filename, or edit `profile.resume` in `data.js`.

For recruiter-facing use, a PDF version is usually more convenient. If you create one later, for example:

```text
assets/CV_Timotius_William_Wuisang.pdf
```

change:

```js
resume: "assets/CV_Timotius_William_Wuisang.pdf"
```

---

# FREE DEPLOYMENT: GitHub Pages

If your GitHub username is `timow256`, the cleanest personal-site repository name is:

```text
timow256.github.io
```

If your username is different, use:

```text
YOUR-USERNAME.github.io
```

## A. Create the repository

1. Sign in to GitHub.
2. Click **New repository**.
3. Repository name: `timow256.github.io`.
4. Choose **Public** for the GitHub Free route.
5. Create the repository.

## B. Upload the website

Upload the **contents** of this folder to the repository root:

```text
index.html
styles.css
data.js
script.js
README.md
assets/
```

Do not upload only the ZIP file.

Commit the files to the `main` branch.

## C. Enable GitHub Pages

1. Open the repository.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`.
6. Save.

After deployment, your site should be available at:

```text
https://timow256.github.io/
```

GitHub may take a short time to publish the first deployment.

---

# EDIT THE LIVE WEBSITE LATER

## Option 1 — Edit directly on GitHub

For small text changes:

1. Open the repository.
2. Click `data.js`.
3. Click the pencil/edit icon.
4. Make the change.
5. Click **Commit changes**.

GitHub Pages will redeploy automatically.

This is the simplest method for changing project descriptions, skills, links, contact information, and experience.

## Option 2 — Edit locally with VS Code

Better for larger changes:

1. Clone/download the repository.
2. Open the folder in VS Code.
3. Edit the files.
4. Preview locally.
5. Commit and push to GitHub.

---

# Recommended portfolio strategy

Do not turn every activity into a project card. A strong engineering portfolio is curated.

For each major project, try to show:

1. **Problem** — What engineering problem existed?
2. **Your role** — What were you responsible for?
3. **Approach** — What did you build/test/analyze?
4. **Tools** — Hardware, software, measurement methods.
5. **Evidence** — Chart, prototype, test setup, code, result.
6. **Outcome** — What did the project demonstrate or improve?
7. **Reflection** — What would you improve next?

Your strongest candidates for detailed portfolio case studies are currently:
- Thermochromic transparent wood research
- IoT automated window ventilation / YKK AP R&D
- Conveyor monitoring and safety control
- E-commerce shipping prediction & EDA
- PSoC–ESP32 security/communication prototype

If applying specifically for Reliability Engineering, put the most relevant case studies first and emphasize troubleshooting, process monitoring, abnormal-condition thinking, instrumentation, data analysis, performance evaluation, documentation, and system integration.

---

## File structure

```text
.
├── index.html
├── styles.css
├── data.js          <-- edit this most often
├── script.js
├── README.md
└── assets
    ├── CV_Timotius_William_Wuisang.docx
    └── images
```
