import {
  terraform,
  MarketingWebsite,
  POS,
  java,
  AWS,
  solidity,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  MySql,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  uridium,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Softwware Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Cloud Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Mysql",
    icon: MySql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Code Concepts UK",
    iconBg: "#ffffff",
    icon: shopify,
    date: "July 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Uridium",
    icon: uridium,
    iconBg: "#E6DEDD",
    date: "July 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "POS System",
    description:
      "A Point Of Sale System for supermarkets. The system allows users to place orders, manage inventory, and generate sales reports. The system is designed to be user-friendly and easy to use. Auto saves and backup data to ensure data integrity.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      
    ],
    image: POS,
    source_code_link: "https://github.com/dejodammy/POS",
  },
  
  {
    name: "Marketing Solution website",
    description:
      "Website for Peach Strides and Pristines marketing solutions agency. The website is designed to be user-friendly and easy to use. With The intention of driving attention ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: MarketingWebsite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Infrastructre as Code",
    description:
      "Terraform configuration scripts to deploy a sample AWS infrastructure, including a Virtual Private Cloud (VPC), EC2 instances, RDS database instances, and associated networking components.",
    tags: [
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/dejodammy/TerraForm-Networking",
  },
  {
    name: "Infrastructre as Code",
    description:
      "Terraform configuration scripts to deploy a sample AWS infrastructure, including a Virtual Private Cloud (VPC), EC2 instances, RDS database instances, and associated networking components.",
    tags: [
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/dejodammy/TerraForm-Networking",
  },
  {
    name: "Infrastructre as Code",
    description:
      "Terraform configuration scripts to deploy a sample AWS infrastructure, including a Virtual Private Cloud (VPC), EC2 instances, RDS database instances, and associated networking components.",
    tags: [
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/dejodammy/TerraForm-Networking",
  },
  {
    name: "Infrastructre as Code",
    description:
      "Terraform configuration scripts to deploy a sample AWS infrastructure, including a Virtual Private Cloud (VPC), EC2 instances, RDS database instances, and associated networking components.                                                                                                                               ",
    tags: [
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/dejodammy/TerraForm-Networking",
  },
];

export { services, technologies, experiences, testimonials, projects };
