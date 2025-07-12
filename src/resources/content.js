import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Kush",
  lastName: "Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "7kushkumar@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

/*
const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};
*/

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ankush7kumar",
  },
  /*
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
 
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
   */
 
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>To a thought in my head and to it happening in real on screen</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Product Specs Extractor</strong></>,
    href: "/work/product-specs-extractor",
  },
  subline: (
    <>
      I'm Kush, a software engineer, I work mostly on the backend at work. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Software Engineer with experience at BMO, Autodesk, and startups, skilled in building scalable APIs, secure authentication, and full-stack apps using Java, Spring Boot, React, and AWS. I’ve improved performance, reliability, and developer efficiency across domains.

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "BMO Financial Group",
        timeframe: "November 2023 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and maintained 30+ RESTful APIs using Java, Spring Boot, Spring MVC, Spring Security, and MySQL, optimizing internal financial operations.
          </>,
          <>
            Implemented secure OAuth 2.0 & JWT-based authentication to enforce robust user access control across services.
          </>,
          <>
            Deployed scalable services on AWS using EC2, S3, and RDS, improving system reliability & deployment efficiency.
          </>,
          <>
            Refactored APIs and optimized SQL queries, improving response times by 15% and reducing processing load.
          </>,
          <>
            Built centralized error handling and data validation layers, reducing client-side data issues by 25%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ],
      },
      {
        company: "Autodesk",
        timeframe: "September 2022 - October 2023",
        role: "Software Engineer",
        achievements: [
  <>
    Developed an n8n-powered AI workflow to post summaries and risk scores for merge requests, reducing code
    review prep time by 30% per sprint and boosting overall developer efficiency.
  </>,
  <>
    Built Account Portal features using React and Playwright with 100% test coverage and optimized performance.
  </>,
  <>
    Improved homepage responsiveness across 25+ repos and increased user engagement on homepage by 30%.
  </>,
  <>
    Led Subscription Renewal project, increasing early renewals through experiments and dashboard analytics.
  </>,
],
        images: [],
      },
      {
  company: "PointClickCare",
  timeframe: "May 2021 - August 2021",
  role: "Software Engineer - Intern",
  achievements: [
    <>
      Built an application to simplify doctors’ documentation and integrated it with existing company healthcare products.
    </>,
    <>
      Designed, built, and tested end-to-end MVP features using React, Redux, Spring Boot, and testing suites.
    </>,
    <>
      Worked on schema design using SQL in accordance with US and Canadian health data protection laws, and created rollback scripts.
    </>,
    <>
      Refactored monolithic code into modular components using React hooks and Redux, enhancing code scalability.
    </>,
  ],
  images: [
    // optional: leave the array empty if you don't want to display images
  ],
},
{
  company: "Arctic Wolf Networks",
  timeframe: "May 2020 - August 2020",
  role: "Software Developer - Intern",
  achievements: [
    <>
      Led development of a schema parser, code generator, and ML-based predictor to standardize third-party data schemas using Python and Java.
    </>,
    <>
      Built algorithms to automate integration, optimized workflows by 40% and reduced manual overhead.
    </>,
    <>
      Engineered a real-time log ingestion and processing tool for Microsoft Office accounts.
    </>,
    <>
      Enhanced security coverage across systems by enabling faster and more accurate log analysis.
    </>,
  ],
  images: [
    // optional: leave the array empty if you don't want to display images
  ],
},


    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Waterloo",
        description: <>Honours Bachelor of Computer Science</>,
      },
    
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Python, C++, Java, XML, Kotlin, C, JavaScript, Typescript, SQL, Bash, Scheme, CSS</>,
        // optional: leave the array empty if you don't want to display images
        images: [
       
        ],
      },
      {
        title: "Databases and Tools",
        description: <>MySQL, Oracle DB, Firebase Realtime, MongoDB, Redis, SQLLite, PostgreSQL, Git, Docker,
Maven, Tomcat, Postman, Jupyter Notebook, JSON, CI/CD using GitHub Actions, Microsoft Azure Cloud, AWS</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Framework and Libraries",
        description: <>React, Redux, Node.js, Spring Boot, Android, Prisma, PyTorch, Django, ReactJS</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "Architecture Styles",
        description: <>Client-Server, MVC, MVVM, Microservices, HTTP</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about code and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
