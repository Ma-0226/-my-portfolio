export const sectionLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Toolkit" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", logo: "/-my-portfolio/logos/typescript.svg" },
      { name: "JavaScript", logo: "/-my-portfolio/logos/javascript.svg" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", logo: "/-my-portfolio/logos/react.svg" },
            { name: "React native", logo: "/-my-portfolio/logos/react.svg" },

      { name: "Next.js", logo: "/-my-portfolio/logos/nextjs.svg" },
      { name: "Node.js", logo: "/-my-portfolio/logos/nodejs.svg" },
      { name: "Express.js", logo: "/-my-portfolio/logos/express.svg" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDb", logo: "/-my-portfolio/logos/mongodb-svgrepo-com.svg" },
      { name: "MySQL", logo: "/-my-portfolio/logos/mysql.svg" },
      { name: "Redis", logo: "/-my-portfolio/logos/redis.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Git", logo: "/-my-portfolio//logos/git.svg" },
            { name: "GitHub", logo: "/-my-portfolio//logos/github-6.svg" },
      { name: "GitHub Actions", logo: "/-my-portfolio/logos/githubactions.svg" },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "postman", logo: "/-my-portfolio//logos/postman.svg" },
      { name: "k6", logo: "/-my-portfolio//logos/k6.svg" },
    ],
  },
];

export const experience = [
  {
    id: "product",
    role: "Product engineer",
    company: "Your team or company",
    dates: "2025 — present",
    location: "Remote",
    summary:
      "A sample role summary. Replace this with the kind of product you helped build and the part you owned.",
    details: [
      "Describe a shipped feature",
      "Add a measurable result",
      "Name the tools that mattered",
    ],
  },
  {
    id: "full-stack",
    role: "Full-stack developer",
    company: "Another team",
    dates: "2023 — 2025",
    location: "Your city",
    summary:
      "Use this space to explain the problem, your contribution, and what changed after the work shipped.",
    details: [
      "Add a key responsibility",
      "Show a useful outcome",
      "Mention a collaboration",
    ],
  },
  {
    id: "independent",
    role: "Independent builder",
    company: "Selected projects",
    dates: "2022 — 2023",
    location: "Anywhere",
    summary:
      "A short introduction to your independent work, experiments, or early projects.",
    details: [
      "Feature a project",
      "Share what you learned",
      "Link to a case study",
    ],
  },
];

export const projects = [
 
{
  number: "01",
  slug: "wasiny",
  title: "Wasiny",
  type: "Ecommerce",
  year: "2026",

tag: "Fresh groceries, delivered to your door",
description:
"A modern grocery delivery platform that makes it easy for customers to discover products, place orders, and get their groceries delivered.",
stack: [
"React Native",
"Node.js",
"Express.js",
"MongoDB",
'TypeScript',
"Nativewind",
"REST API",
'Redis',
'google maps API',
],


  layout: "side",

  image:         "/-my-portfolio/wasiny/wasiny-mimg1.png",

  images: [
        "/-my-portfolio/wasiny/device-shot (4).jpeg",  

        "/-my-portfolio/wasiny/device-shot.jpeg",

    "/-my-portfolio/wasiny/device-shot (1).jpeg",
    "/-my-portfolio/wasiny/device-shot (2).jpeg",
    "/-my-portfolio/wasiny/device-shot (3).jpeg",
    "/-my-portfolio/wasiny/device-shot (5).jpeg",  
 "/-my-portfolio/wasiny/device-shot (6).jpeg", 
   "/-my-portfolio/wasiny/device-shot (7).jpeg",
      "/-my-portfolio/wasiny/device-shot (8).jpeg",  
       "/-my-portfolio/wasiny/device-shot (9).jpeg",  

  ],

highlights: [
"Lets customers browse and explore available grocery products.",
"Allows users to add products to their cart and place grocery orders.",
"Provides a simple checkout flow for completing purchases.",
"Helps customers track their orders from purchase to delivery.",
"Connects customers with delivery riders to get their groceries delivered to their door.",
],

},
{
  number: "02",
  slug: "wasiny-riders",
  title: "Wasiny riders",
  type: "Delivery & Logistics",
  year: "2026",
  tag: "Deliver orders, make every journey count.",
  description:
    "A dedicated grocery delivery application designed to simplify the delivery process for riders. Delivery partners can go online, receive and manage customer orders, view delivery locations on an interactive map, access order details, track delivery information, and complete deliveries seamlessly through an intuitive mobile experience.",
  stack: [
    "React Native",
    "Node.js",
    "Express.js",
        "MongoDB",
    "Websockets",
    "REST API",
    "Google Maps API"
  ],
  theme: "green",
    layout: "side",

  image: "/-my-portfolio/wasiny-riders/wasiny-riders-mimg.png",
  images: [
        "/-my-portfolio/wasiny-riders/device-shot.jpeg",

    "/-my-portfolio/wasiny-riders/device-shot (1).jpeg",
    "/-my-portfolio/wasiny-riders/device-shot (2).jpeg",
    "/-my-portfolio/wasiny-riders/device-shot (3).jpeg",
    "/-my-portfolio/wasiny-riders/device-shot (4).jpeg",  
    "/-my-portfolio/wasiny-riders/device-shot (5).jpeg",  
 "/-my-portfolio/wasiny-riders/device-shot (6).jpeg", 
   "/-my-portfolio/wasiny-riders/device-shot (7).jpeg",

  ],
  highlights: [
    "Riders can go online and receive and manage customer orders.",
    "View delivery locations on an interactive map and access order details.",
    "Track delivery information and complete deliveries in the app.",
  ],
},

  
{
  number: "03",
  slug: "wasiny-dashboard",
  title: "Wasiny Dashboard",
  type: "Web Application",
  year: "2026",
  tag: "Complete grocery management system",
  description:
    "A web dashboard for managing products, categories, orders, customers, and delivery operations, with full control over the grocery platform.",
  award: "",
  stack: ["React", "TypeScript"],
    layout: "full",

  theme: "rose",
  image:     "/-my-portfolio/wasiny-admin-images/1.jpeg",

  images: [

    "/-my-portfolio/wasiny-admin-images/1.jpeg",
    "/-my-portfolio/wasiny-admin-images/2.jpeg",
    "/-my-portfolio/wasiny-admin-images/3.jpeg",
    "/-my-portfolio/wasiny-admin-images/4.jpeg",  
    "/-my-portfolio/wasiny-admin-images/5.jpeg",  
 "/-my-portfolio/wasiny-admin-images/6.jpeg", 
   "/-my-portfolio/wasiny-admin-images/7.jpeg",
      "/-my-portfolio/wasiny-admin-images/8.jpeg",
   "/-my-portfolio/wasiny-admin-images/9.jpeg",
         "/-my-portfolio/wasiny-admin-images/10.jpeg",
            "/-my-portfolio/wasiny-admin-images/11.jpeg",
  ],
  highlights: [
    "Manage products, categories, orders, and customers from one dashboard.",
    "Oversee delivery operations for the grocery platform.",
    "Built as an administrative web application.",
  ],
},
{
  number: "04",
  slug: "rentcarz",
  title: "RentCarz",
  type: "Car Rental",
  year: "2023",
    layout: "full",

  tag: "Drive more. Pay less.",
  description:
    "A modern car rental platform that allows customers to explore vehicles, compare prices and specifications, and book cars based on their preferred rental dates. Includes a comprehensive admin dashboard for managing cars, bookings, customers, and rental operations.",
  award: "Complete Car Rental Management System",
  stack: [
    "Laravel",
    "PHP",
    "MySQL"
  ],
  theme: "blue",
  image: "/-my-portfolio/car-rental-imgs/1.jpeg",
  images: [

    "/-my-portfolio/car-rental-imgs/1.jpeg",
    "/-my-portfolio/car-rental-imgs/2.jpeg",
    "/-my-portfolio/car-rental-imgs/3.jpeg",
    "/-my-portfolio/car-rental-imgs/4.jpeg",  
    "/-my-portfolio/car-rental-imgs/5.jpeg",  
 "/-my-portfolio/car-rental-imgs/6.jpeg", 

      "/-my-portfolio/car-rental-imgs/8.jpeg",
   "/-my-portfolio/car-rental-imgs/9.jpeg",
         "/-my-portfolio/car-rental-imgs/10.jpeg",
            "/-my-portfolio/car-rental-imgs/11.jpeg",
                        "/-my-portfolio/car-rental-imgs/12.jpeg",
            "/-my-portfolio/car-rental-imgs/13.jpeg",
            "/-my-portfolio/car-rental-imgs/14.jpeg",
            "/-my-portfolio/car-rental-imgs/15.jpeg",
            "/-my-portfolio/car-rental-imgs/16.jpeg",
            "/-my-portfolio/car-rental-imgs/17.jpeg",
            "/-my-portfolio/car-rental-imgs/18.jpeg",
            "/-my-portfolio/car-rental-imgs/19.jpeg",
            "/-my-portfolio/car-rental-imgs/20.jpeg",
            "/-my-portfolio/car-rental-imgs/21.jpeg",
            "/-my-portfolio/car-rental-imgs/22.jpeg",
            "/-my-portfolio/car-rental-imgs/23.jpeg",
            "/-my-portfolio/car-rental-imgs/24.jpeg",
            "/-my-portfolio/car-rental-imgs/25.jpeg",
            "/-my-portfolio/car-rental-imgs/26.jpeg",
            "/-my-portfolio/car-rental-imgs/27.jpeg",
            "/-my-portfolio/car-rental-imgs/28.jpeg",
            "/-my-portfolio/car-rental-imgs/29.jpeg",
                        "/-my-portfolio/car-rental-imgs/30.jpeg",
            "/-my-portfolio/car-rental-imgs/31.jpeg",
            "/-my-portfolio/car-rental-imgs/32.jpeg",
            "/-my-portfolio/car-rental-imgs/33.jpeg",
            "/-my-portfolio/car-rental-imgs/34.jpeg",
            "/-my-portfolio/car-rental-imgs/35.jpeg",


  ],
  highlights: [
    "Explore vehicles and compare their prices and specifications.",
    "Book cars based on preferred rental dates.",
    "Manage cars, bookings, customers, and rental operations through an admin dashboard.",
  ],
},

];

export const education = [
  {
    title: "Degree or program",
    detail: "School or institution",
    note: "Dates · optional detail",
  },
  {
    title: "Course or certification",
    detail: "Learning platform",
    note: "Dates · optional detail",
  },
];

export const awards = [
  { title: "Award or recognition", detail: "Organization · year" },
  { title: "Community contribution", detail: "Organization · year" },
  { title: "Another highlight", detail: "Organization · year" },
];

export const writing = [
  { title: "An article you wrote", detail: "A short description · 5 min" },
  { title: "Notes on a project", detail: "A short description · 3 min" },
];
