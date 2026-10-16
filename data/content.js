/*
 * The site's content, as data.
 *
 * One array drives every section. Renderers pick entries up by `kind`:
 * Timeline → 'experience', List → 'project'. Nothing here is section-specific,
 * so an entry is never authored twice.
 *
 * Ordering is `startYear` descending, with array order breaking within-year
 * ties — so entries must be authored in display order. Year-only dates.
 *
 * Schema, and the rules that go with it, live in TASKS.md ("Content schema").
 * The two that bite here:
 *   - Images never carry links. A destination is either `url` (the heading
 *     becomes the link) or an entry in `links`, rendered as visible text.
 *   - The heading is a link only when `url` is present.
 *
 * Descriptions were migrated verbatim from the old JSX, apart from inline
 * links that now duplicate `url` (removed, since the heading carries them)
 * and JSX `<a>` tags rewritten as markdown. Copy rewrites are deferred to P7.
 */

const content = [
  {
    id: 'microsoft-swe-intern',
    kind: 'experience',
    startYear: '2020',
    endYear: '2020',
    role: 'Software Engineering Intern',
    org: 'Microsoft',
    description:
      'I had a remote internship with Microsoft. I worked with Commerce Mesh team to integrate support for legacy authentication in a .NET Core web service. I used Docker and Kubernetes to test and deploy the service to Azure, creating a solution that allows customers to migrate their legacy services to Azure.',
    tech: ['Docker', 'Kubernetes', '.NET Core'],
    media: [
      {
        type: 'video',
        src: '/cloud.mp4',
        // ⚠️ C10: decide whether this is decorative or meaningful. It is
        // currently an unmuted autoplay loop with no caption, so it very
        // likely never plays. Needs Linda's description — not invented here.
        alt: '',
      },
    ],
  },
  {
    id: 'leat',
    kind: 'project',
    startYear: '2020',
    endYear: '2020',
    name: 'LEAT',
    url: 'https://leat.netlify.app/about',
    // ⚠️ A11: "This time, I joined two teams…" referred to the entry that sat
    // above it in the old timeline. Nothing sits above it now.
    description:
      'This time, I joined two teams: LEAT and a prosecutorial misconduct tracker. The goal was to create sustainable ways to track and convey data about law enforcement and prosecutorial misconduct. I helped design and implement the webpage.',
    tech: ['React'],
  },
  {
    id: 'microsoft-explore-intern',
    kind: 'experience',
    startYear: '2019',
    endYear: '2019',
    role: 'Explore Intern',
    org: 'Microsoft',
    description:
      'I interned as part of the Explore Microsoft program. I worked with two other interns to migrate a chatbot extension used internally by developers to a new platform. This allowed our team to better analyze and improve the chatbot feature on [azure.microsoft.com](https://azure.microsoft.com/en-us/), which can help customers without having to contact a sales representative.',
    tech: ['C#', 'JavaScript', 'Kusto', 'React'],
    media: [
      {
        type: 'image',
        src: '/explore.png',
        alt: 'The contact sales section of azure.microsoft.com, showing the chatbot entry point.',
      },
    ],
    // This was previously the target of the screenshot itself, carrying a
    // mislabelled aria-label="Plastic Free Oceans" (C4). Images can't hold
    // links any more, so the destination is promoted to text.
    links: [
      {
        label: 'Azure contact sales',
        href: 'https://azure.microsoft.com/en-us/overview/contact-azure-sales/',
      },
    ],
  },
  {
    id: 'plastic-free-oceans',
    kind: 'project',
    startYear: '2019',
    endYear: '2019',
    name: 'Plastic Free Oceans',
    // The project's own Dash app is gone (D2). This is the live org page.
    url: 'https://plasticfreeoceans.org/',
    // ⚠️ A9: the final sentence describes a link that no longer exists — the
    // screenshot is no longer clickable. "I joined Plastic Free Oceans…" is
    // also now redundant, since the name is the heading.
    description:
      'I joined Plastic Free Oceans at Hack for Good at Microsoft where we worked on a plastic monitoring tool. This was my first experience seeing computer science applied in a context where the purpose is help others. The picture below links to a Dash application that visualizes the geospatial distribution of plastic debris in rivers, as collected by the river cameras.',
    tech: ['Power BI', 'Python'],
    media: [
      {
        type: 'image',
        src: '/pfo.png',
        alt: 'Map visualisation of plastic debris distribution across rivers.',
      },
    ],
  },
];

export default content;
