# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: **technical interviewers**, meaning engineers checking Javier's depth before or after a first call. They arrive from a CV, LinkedIn or a recruiter hand-off. In a few minutes they want to know two things: can this person build and ship real systems, and is the AI and security knowledge real or just keywords? They read the evidence, open the linked GitHub repos and look at the code.

Recruiters and hiring managers also visit, but the site is judged by whether it holds up to an engineer's scrutiny.

## Product Purpose

A personal portfolio for Javier Sarmiento that positions him for **AI engineering roles, with security as the differentiator**. Success means a technical reader leaves convinced of real depth: production engineering experience, hands-on ML and LLM-agent work, and a security-first mindset. They then make contact or move him forward in the process.

## Positioning

An AI engineer who has shipped production software (3+ years, including enterprise SaaS at Wazoku) and who brings formal security training to AI work. The training comes from a scholarship-funded Master's in Computer Security Engineering and Artificial Intelligence at Universitat Rovira i Virgili, completed in 2026. AI is the headline and security is the edge. Backend and full-stack engineering are the proof that he can ship. The site must not read as a generic "full-stack dev who also does AI" page, and it must not read as a pure security profile.

## Operating Context

- Visitors usually come from a CV, LinkedIn or a job application, often on a desktop during a hiring process, sometimes on a phone.
- Projects link straight to GitHub (`github.com/sarmijavier`), where interviewers check the actual code.
- The project list mirrors his pinned GitHub repos (`src/components/projects.tsx`). Stars and language come from the GitHub API at build time.

## Capabilities and Constraints

- Next.js 15 (App Router) with Tailwind v4, shadcn/Radix primitives and `motion`. Static export (`output: "export"`) deployed to **GitHub Pages** through `.github/workflows/deploy.yml`. Nothing can rely on a server at runtime.
- A single page with these sections: Hero, About, Education, Experience, Skills, Projects, then a footer contact.
- **English only.** No translations are planned.
- **Contact:** the only route today is LinkedIn. An **email contact is required**. *Open: the address to show has not been confirmed yet.*
- Dark theme is currently forced (`forcedTheme="dark"`). This is an implementation fact, not a confirmed product requirement.

## Brand Commitments

- Name: **Javier Sarmiento**. Handle: `sarmijavier` (GitHub, Twitter, Instagram).
- Voice in the current copy: first person, plain and factual, no hype. Claims are grounded in specific employers, stacks and outcomes.

## Evidence on Hand

- Work history with specific responsibilities: Wazoku (Software Engineer, 2023 to 2025), Datarte.art (Full-Stack Developer, 2021 to 2022), Catholic University of Colombia (Research Collaborator, 2020). The content is in `src/components/experience.tsx`.
- Education: the URV Master's (scholarship), a BSc in Computer Science from Universidad Católica de Colombia, and Platzi Master (top 0.1%). The content is in `src/components/education.tsx`.
- Six pinned GitHub repos covering optimization algorithms, ML practice, image segmentation, real vs. AI-generated image detection, supervised learning from scratch, and a homomorphic-encryption privacy app.
- A portrait photo at `public/IMG_4533.jpeg`.
- **Absent. Do not fabricate:** testimonials, employer logos, metrics or impact numbers beyond what the copy states, publications, certifications, a CV PDF, or live project demos.

## Product Principles

1. **Evidence over adjectives.** Every claim should point to something a technical reader can check, such as a role, a repo or a concrete system.
2. **AI first, security as the edge.** Lead with AI engineering. Present security as what makes his AI work more trustworthy, not as a separate career.
3. **Respect the interviewer's time.** They should grasp the depth in minutes and reach the code in one click.
4. **Shipped, not just studied.** Keep production experience visible so the academic work reads as depth added on top of real practice.
