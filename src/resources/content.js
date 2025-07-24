import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ankush",
  lastName: "Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "a227kuma@uwaterloo.ca",
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
  
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ankush7kumar",
  },
 /*
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
  image: "https://ankushkumarr.vercel.app/preview.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From a thought in my head to it happening in real on screen</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Product Specs Extractor</strong></>,
    href: "/work/product-specs-extractor",
  },
  subline: (
    <>
      I'm Ankush, a software engineer, I work mostly on the backend at work. After hours, I build my own projects.
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
        I'm a Software Engineer with experience across startups and R&D environments, including ASAP Data Solutions, BH Frontier Solutions, and ProgramPro. I specialize in full-stack development, web scraping automation, and computer vision. I’ve built scalable APIs, secure authentication systems, and intelligent data extraction tools. My work has improved performance, reliability, and end-user experience across diverse applications.

      </>
    ),
  },
work: {
  display: true, // set to false to hide this section
  title: "Work Experience",
  experiences: [
    {
      company: "ASAP Data Solutions Ltd.",
      timeframe: "December 2024",
      role: "Full Stack Developer - Freelance",
      achievements: [
        <>
          Developed a tool from scratch to extract product specifications from fully rendered HTMLs using Playwright automation.
        </>,
        <>
          Performed dynamic web scraping on client-side pages to collect structured product-related content efficiently.
        </>,
        <>
          Utilized OpenAI’s function calling feature in JSON mode to analyze and understand product descriptions.
        </>,
        <>
          Parsed extracted data into clean, structured specifications for downstream processing or display in applications.
        </>,
      ],
      images: [],
    },
    {
      company: "BH Frontier Solutions Inc",
      timeframe: "July 2024 - November 2024",
      role: "Computer Vision R&D Engineer",
      achievements: [
        <>
          Utilized PyTorch to develop and optimize computer vision models, enhancing accuracy and processing efficiency significantly.
        </>,
        <>
          Implemented data augmentation and pre-processing techniques to improve dataset quality for robust model training outcomes.
        </>,
        <>
          Managed the complete model training pipeline, focusing on hyperparameter tuning and validation for optimal performance.
        </>,
        <>
          Conducted model performance testing and refined approaches, ensuring high reliability and reduced inference time effectively.
        </>,
      ],
      images: [],
    },
    {
      company: "ProgramPro",
      timeframe: "January 2024 - July 2024",
      role: "Software Developer",
      achievements: [
        <>
          Collaborated with the team to design authentication services using role-based access control and OAuth 2.0.
        </>,
        <>
          Incorporated JWT methods with NextAuth, enhancing security protocols, and resulting in faster 20% login speeds.
        </>,
        <>
          Engineered scalable backend solutions with MongoDB, improving system throughput by 15% for course management.
        </>,
        <>
          Optimized 10+ RESTful APIs and integrated Stripe for payments, boosting latency optimization by 23%.
        </>,
      ],
      images: [],
    },
    {
      company: "NexDew Technologies",
      timeframe: "November 2022 - January 2024",
      role: "Software Developer",
      achievements: [
        <>
          Developed and maintained 30 RESTful APIs for ”Sumaitriherp” hospital-based web application, handling CRUD operations, user authentication, patient management, & appointment scheduling.
        </>,
        <>
          Enhanced response time by 15% and significantly improved web functionality by performing detailed reviews.
        </>,
        <>
          Worked with Hibernate ORM and Spring Boot framework in Java using MySQL database.
        </>,
        <>
          Implemented data validation & error handling, reducing errors by 25% & ensuring accurate data processing
        </>,
      ],
      images: [],
    },
    {
      company: "SOCA",
      timeframe: "May 2021 - August 2021",
      role: "Web Developer",
      achievements: [
        <>
          Created an interactive fully responsive website from scratch using React designed for an Ontario Cricket League played by 16 teams.
        </>,
        <>
          Enhanced load time by 15% by implementing website’s state using Redux library and lazy loading pattern for the images.
        </>,
        <>
          Implemented user-centered design, applied multi-page layout, DRY principle using React-Bootstrap and CSS.
        </>,
        <>
          Built a scalable UI capable of handling big traffic load by reducing UI re-renderings which decreased data processing cost by 20%.
        </>,
      ],
      images: [],
    },
    {
      company: "PetroWagon",
      timeframe: "August 2019 - January 2020",
      role: "Software Engineer",
      achievements: [
        <>
          Developed an Android App from scratch using Java and XML for a fuel delivery-based startup allowing simultaneous multiple orders.
        </>,
        <>
          Programmed app’s local database using Android Room and implemented SQL queries to store mutable live data.
        </>,
        <>
          Built onboarding flow to collect user information for customized suggestions.
        </>,
        <>
          Maintained structured code using MVVM architecture to enhance reusability and optimized app performance.
        </>,
      ],
      images: [],
    },
    {
      company: "ICSD Tech Labs",
      timeframe: "May 2018 - August 2018",
      role: "C++ Tutor",
      achievements: [
        <>
          Worked closely with multiple batches of high school computer science students to tutor in Object Oriented Programming.
        </>,
        <>
          Successfully analyzed and debugged code written by many different individuals, provided feedback and helped them with queries.
        </>,
        <>
          Reviewed, evaluated, and resolved technical support requests in a timely and effective manner.
        </>,
        <>
          Helped students meet deadlines.
        </>,
      ],
      images: [],
    },
  ],
}
,
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
