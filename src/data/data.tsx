import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Perrin\'s Portfolio',
  description: "Life story and resume of Perrin Myerson",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Perrin Myerson`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Seattle based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Amazon</strong> helping find innovative and impactful solutions to complex problems
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me volunteering for the<strong className="text-stone-100"> Crisis Line</strong>,
        running rampant in <strong className="text-stone-100">Poker</strong>, or fostering{' '}
        <strong className="text-stone-100">dogs</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm always looking to meet new faces and discuss opportunities in the tech world. My work and research has focused on machine learning and quantitative modeling but I am always looking 
  to learn and embrace challenge.`,
  aboutItems: [
    {label: 'Location', text: 'Seattle, WA', Icon: MapIcon},
    {label: 'Age', text: '19', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Cooking, Mental Health, Eating, Dinosaurs', Icon: SparklesIcon},
    {label: 'Study', text: 'Duke University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Amazon', Icon: OfficeBuildingIcon},
  ],
};
/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2021 - May 2024',
    location: 'Duke University',
    title: 'Bachelors in Computer Science and Electrical and Computer Engineering, Minor in Mathematics',
    content: <p>Part of the Applied Machine learning group, Student Founders Program, Innovation Studio, Dukeline and Theta Tau</p>,
  },
  
];

export const experience: TimelineItem[] = [
  {
    date: 'Late Summer 2023',
    location: 'Amazon',
    title: 'Software Engineering Intern',
    content: (
      <ul>
        <li>Developed lambda to read active pipeline deployment metadata and approve steps automatically as appropriate</li> 
        <li>Added wave deployments and bake times to pipelines to allow quick rollbacks for emergent bug fixes</li>    
        <li>Created scaling failure detection and alert mechanism for all AWS codePipelines </li>
      </ul>
    ),
  },
  {
    date: 'Early Summer 2023',
    location: 'Truveta',
    title: 'Software Engineering Intern',
    content: (
      <p>
        I did things
      </p>
    ),
  },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'C++',
        level: 5,
      },
    ],
  },
  {
    
    name: 'Machine Learning',
    skills: [
      {
        name: 'PyTorch',
        level: 8,
      },
      {
        name: 'Tensorflow',
        level: 5,
      },
      {
        name: 'Keras',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 3,
      },
      {
        name: 'Ruby',
        level: 3,
      },
    ],
  },
  
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 8,
      },
      {
        name: 'Hebrew',
        level: 3,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Crisis Line Webscraper',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage1,
  },
  {
    title: 'Duke Resource Aggregator',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://perrin-myerson.com',
    image: porfolioImage11,
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Marcus Ortiz',
      text: 'Innovative, hard working and empathetic, Perrin brings strong assertive yet respectful opinions to meetings ',
      image: 'https://clarkscholars.duke.edu/sites/clarkscholars.duke.edu/files/u67/Marcus%20Ortiz.png',   
    },
    {
      name: 'Javier Martinez ',
      text: 'I had the pleasure of working under Perrin for 3 years, and loved how he was able to find different ways to being value no matter where he applied himself.',
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHbyx5BVWDwCQ/profile-displayphoto-shrink_400_400/0/1633577555494?e=1672272000&v=beta&t=TtQjnC_6s1cwiV3SJrutco9ctop-czANqOpcxQ4CCu0',
     },
    {
      name: 'Abenezer Gelaw',
      text: 'A unique and inspiring leader. Goes the extra mile in showing passion when it comes to his work and team.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'perrin.myerson@duke.edu',
      href: 'mailto:perrin.myerson@tduke.edu',
    },
    {
      type: ContactType.Location,
      text: 'Seattle, Washington',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@perrinmyerson',
      href: 'https://www.instagram.com/perrinmyerson/',
    },
    {
      type: ContactType.Github,
      text: 'perrinmyerson',
      href: 'https://github.com/perrinmyerson',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/perrinmyerson'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/perrinm/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/perrinmyerson/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/perrinmyerson'},
];
