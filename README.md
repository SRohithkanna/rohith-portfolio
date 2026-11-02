# Rohith Kanna S — Portfolio

A responsive, minimalist, black-and-white personal portfolio built with React and Vite. No profile photo, backend, database, or paid API required.

## Requirements
- Node.js (LTS recommended)
- npm
- Optional: Git

## Run locally
1. Extract the ZIP.
2. Open the `rohith-portfolio` folder in VS Code.
3. Open a terminal in that folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

The production-ready website is generated in `dist/`.

## Before publishing
Please review `src/main.jsx`:
- Replace the LinkedIn placeholder with your actual LinkedIn profile URL.
- In the `projects` array, replace placeholder GitHub links with each exact repository URL.
- The Computer Vision Image Search Engine link currently points to the Yolo_Image_Search repository provided in your profile context.
- Verify dates, CGPA, certifications, internship descriptions, and project claims before making the site public.
- The resume download button is intentionally not shown yet because a resume PDF has not been copied into `public/`. To add it, copy your chosen resume to `public/Rohith-Kanna-Resume.pdf` and add a link with `href="/Rohith-Kanna-Resume.pdf"` and the `download` attribute.

## Deploy on Netlify
1. Push this project to a GitHub repository.
2. Sign in to Netlify and choose **Add new site / Import an existing project**.
3. Connect GitHub and choose the repository.
4. Set build command to `npm run build`.
5. Set publish directory to `dist`.
6. Deploy. Netlify will provide a public URL.

The project is a static single-page application and does not require environment variables.
