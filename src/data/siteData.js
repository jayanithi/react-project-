import CodeIcon from "@mui/icons-material/Code";
import PaletteIcon from "@mui/icons-material/Palette";
import DevicesIcon from "@mui/icons-material/Devices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";

export const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build fast, scalable, and responsive websites that help businesses grow online.",
    icon: CodeIcon,
    number: "01"
  },
  {
    id: 2,
    title: "UI / UX Design",
    description:
      "We create intuitive digital experiences with thoughtful layouts and modern visual design.",
    icon: PaletteIcon,
    number: "02"
  },
  {
    id: 3,
    title: "Responsive Design",
    description:
      "Your website will look and work beautifully across desktops, tablets, and mobile devices.",
    icon: DevicesIcon,
    number: "03"
  },
  {
    id: 4,
    title: "AI Solutions",
    description:
      "We integrate intelligent automation and AI-powered features into digital products.",
    icon: AutoAwesomeIcon,
    number: "04"
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description:
      "We help businesses build reliable, scalable, and efficient cloud-based applications.",
    icon: CloudIcon,
    number: "05"
  },
  {
    id: 6,
    title: "Cybersecurity",
    description:
      "We focus on secure development practices to protect applications and digital assets.",
    icon: SecurityIcon,
    number: "06"
  }
];

export const projects = [
  {
    id: 1,
    title: "Finora Finance",
    category: "Web Application",
    description:
      "A modern finance dashboard concept with analytics, transactions, and account insights.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000",
    tags: ["React", "Material UI", "Dashboard"]
  },
  {
    id: 2,
    title: "Luma Creative",
    category: "Brand Website",
    description:
      "A clean and expressive website concept for a creative design studio.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000",
    tags: ["UI Design", "React", "Responsive"]
  },
  {
    id: 3,
    title: "NexCommerce",
    category: "E-commerce",
    description:
      "A product-focused shopping experience designed for simple and smooth browsing.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000",
    tags: ["E-commerce", "Frontend", "UX"]
  }
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" }
];

export const values = [
  {
    title: "Innovation",
    description:
      "We explore better ideas and modern technologies to create meaningful digital solutions."
  },
  {
    title: "Collaboration",
    description:
      "We work closely with clients, keeping communication clear throughout every project."
  },
  {
    title: "Quality",
    description:
      "We care about details, performance, usability, and reliable results."
  }
];