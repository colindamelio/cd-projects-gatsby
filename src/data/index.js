import saraswati from "../images/saraswati.jpg";
import acura from "../images/acura_homepage.png";
import acuraBap from "../images/acura_bap.png";
import hondaBap from "../images/honda_bap.png";
import dealerLocator from "../images/dealer_locator.png";

export const menuItems = [
  {
    isSubPage: true,
    title: "Projects",
    href: "/projects",
    label: "Internal link to projects page.",
  },
  {
    isSubPage: true,
    title: "Writings",
    href: "/writings",
  },
  {
    title: "GitHub",
    href: "https://www.github.com/colindamelio",
    label: "External link to github profile.",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/colindamelio/",
    label: "External link to linkedin profile.",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/clndml",
    label: "External link to twitter account.",
  },
];

export const projectItems = [
  {
    title: "Saraswati Bali Retreats",
    href: "http://saraswatibali.com/#/",
    src: saraswati,
    alt: "Screen capture of the Saraswati Bali Retreats homepage",
    desc: "Built with React/React-Router, styled-components.",
  },
  {
    title: "Acura Homepage",
    href: "https://www.acura.ca",
    src: acura,
    alt: "Screen capture of the Acura Canada homepage",
    company: "Climax Media",
    desc:
      "A responsive digital transformation and redesign of the premium Acura Canada brand. Built with React/Redux, PostCSS, and AODA compliant.",
  },
  {
    title: "Honda Build & Price",
    href: "https://www.honda.ca/buildyourhonda",
    src: hondaBap,
    alt: "Screen capture of the Honda Build and Price app",
    company: "Climax Media",
    desc:
      "React/Redux application for building & pricing Honda Canada and Acura Canada vehicles. Tooling included React-Router, styled-components, storybook, and a11y. Themed across two product lines.",
  },
  {
    title: "Acura Build & Price",
    href: "https://www.acura.ca/buildyouracura",
    src: acuraBap,
    alt: "Screen capture of the Acura Build and Price app",
    company: "Climax Media",
    desc:
      "React/Redux application for building & pricing Honda Canada and Acura Canada vehicles. Tooling included React-Router, styled-components, storybook, and a11y. Themed across two product lines.",
  },
  {
    title: "Honda Dealer Locator",
    href: "https://www.honda.ca/dealerlocator",
    src: dealerLocator,
    alt: "Screen capture of the Honda Canada dealer locator application",
    company: "Climax Media",
    desc:
      "React/Redux application that integrates geo-location and Google Maps Platform to search for Honda/Acura dealerships.",
  },
];
