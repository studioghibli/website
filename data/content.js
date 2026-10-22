/* Site content data driving Experience and Projects sections. */

const content = [
  {
    id: 'la-niao',
    kind: 'project',
    startYear: '2026',
    name: 'lā niào',
    url: 'https://github.com/studioghibli/la-niao',
    description:
      'Inspired by hydration apps like Waterllama, I built a small app to track bathroom visits. It was also my first time experimenting with AI tools to help bring a new project to life.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Claude Code'],
  },
  {
    id: 'microsoft-swe-ii',
    kind: 'experience',
    startYear: '2024',
    endYear: '2026',
    role: 'Software Engineer II',
    org: 'Microsoft',
    description:
      'I owned a new compliance-focused consent service end-to-end, from design and implementation to testing and production rollout. Working with compliance stakeholders and partner teams taught me how to navigate complex requirements and build solutions that meet diverse needs.',
  },
  {
    id: 'microsoft-swe',
    kind: 'experience',
    startYear: '2021',
    endYear: '2024',
    role: 'Software Engineer',
    org: 'Microsoft',
    description:
      'I worked on backend systems powering subscriptions across Microsoft products, where reliability, data accuracy, and customer privacy were essential. I modernized a legacy revenue-recognition process, reducing delays from days to seconds, and improved data workflows and deployment reliability.',
  },
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
  },
  {
    id: 'leat',
    kind: 'project',
    startYear: '2020',
    endYear: '2020',
    name: 'LEAT',
    url: 'https://leat.netlify.app/about',
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
      'I interned as part of the Explore Microsoft program. I worked with two other interns to migrate a chatbot extension used internally by developers to a new platform. This allowed our team to better analyze and improve the chatbot feature on azure.microsoft.com, which can help customers without having to contact a sales representative.',
    tech: ['C#', 'JavaScript', 'Kusto', 'React'],
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
    url: 'https://plasticfreeoceans.org/',
    description:
      'I joined Plastic Free Oceans at Hack for Good at Microsoft, where I worked on improving a tool that uses to identify plastic debris more accurately in river camera footage.',
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
