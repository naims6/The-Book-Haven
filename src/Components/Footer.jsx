// import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoIosSend } from "react-icons/io";
// import { Link } from "react-router";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="bg-surface border-t border-border pb-8 pt-12">
//       <div className="footer flex flex-col lg:flex-row justify-between space-y-7 container2 pb-7 lg:pb-10">
//         <aside className="max-w-[320px]">
//           <Link to={"/"} className="text-2xl font-bold flex items-center">
//             <h1 className="text-3xl text-center whitespace-nowrap">
//               📚 Book.io
//             </h1>
//           </Link>
//           <p className="mt-4">
//             Experience unforgettable journeys with books from every genre and
//             era.
//             <br />
//             Turn every page into a new adventure—start exploring your library
//             today.
//           </p>
//           {/* social icon */}
//           <div className="mt-5 flex gap-3 *:border *:rounded-full *:border-gray-500 *:p-2.5 *:cursor-pointer">
//             <span>
//               <FaFacebookF size={22} />
//             </span>
//             <span>
//               <FaXTwitter size={22} />
//             </span>
//             <span>
//               <FaLinkedin size={22} />
//             </span>
//             <span>
//               <FaInstagram size={22} />
//             </span>
//           </div>
//         </aside>
//         {/* Need Help */}
//         <nav>
//           {/* nav header  */}
//           <div className="relative">
//             <h6 className="font-semibold text-xl">Need Help</h6>
//             <span className="absolute -bottom-1 left-0 w-28 h-0.5 bg-[linear-gradient(90deg,rgba(16,185,129,1)_0%,rgba(52,211,153,0)_100%)] rounded-xl z-10"></span>
//           </div>
//           <div className="space-y-2.5 mt-5">
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Help Center
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Shipping FAQs
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Pick up in Store
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Order Status
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Product Recalls
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Corrections & Updates
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Gift Cards
//             </a>
//           </div>
//         </nav>
//         {/* about us */}
//         <nav>
//           {/* nav header  */}
//           <div className="relative">
//             <h6 className="font-semibold text-xl">About Us</h6>
//             <span className="absolute -bottom-1 left-0 w-28 h-0.5 bg-[linear-gradient(90deg,rgba(16,185,129,1)_0%,rgba(52,211,153,0)_100%)] rounded-xl z-10"></span>
//           </div>

//           <div className="space-y-2.5 mt-5">
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 duration-200">
//               Contact Us
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 duration-200">
//               Track Your Order
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 duration-200">
//               Returns Policy
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 duration-200">
//               Brand Directory
//             </a>
//           </div>
//         </nav>
//         {/* categories */}
//         <nav>
//           {/* nav header  */}
//           <div className="relative">
//             <h6 className="font-semibold text-xl">Categories</h6>
//             <span className="absolute -bottom-1 left-0 w-28 h-0.5 bg-[linear-gradient(90deg,rgba(16,185,129,1)_0%,rgba(52,211,153,0)_100%)] rounded-xl z-10"></span>
//           </div>

//           <div className="space-y-2.5 mt-5">
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Coupons
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               RX Prescription
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Scholarship Program
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Brand Directory
//             </a>
//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               E-Catalogs/Requests
//             </a>

//             <a className="link link-hover flex text-sm cursor-pointer gap-1 hover:text-text-muted hover:translate-x-1 transition-all duration-200">
//               Blog
//             </a>
//           </div>
//         </nav>
//         {/* News Later*/}
//         <nav className="max-w-[300px]" data-aos="fade-left">
//           {/* nav header  */}
//           <div className="relative">
//             <h6 className="font-semibold text-xl">Categories</h6>
//             <span className="absolute -bottom-1 left-0 w-28 h-0.5 bg-[linear-gradient(90deg,rgba(16,185,129,1)_0%,rgba(52,211,153,0)_100%)] rounded-xl z-10"></span>
//           </div>
//           <div className=" mt-4">
//             <p>Sign up for our latest news and offers:</p>
//           </div>
//           <div className="flex mt-6">
//             <input
//               type="text"
//               className="py-4 px-4 bg-surface border border-border rounded-l-md"
//               placeholder="Enter Your Email"
//             />
//             <span className="py-4 px-4 bg-primary rounded-r-md">
//               <IoIosSend size={24} color="#fff" />
//             </span>
//           </div>
//         </nav>
//       </div>
//       {/* bottom */}
//       <div className="border-t border-gray-600/40 pt-8 mt-6">
//         <h1 className="text-center text-sm lg:text-base">
//           {" "}
//           Copyright {currentYear} The Book Haven. All Rights Reserved.
//         </h1>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  Heart,
  ChevronRight,
  Send,
  Globe,
  Shield,
  Award,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  // Navigation Links
  const quickLinks = [
    { name: "Browse Books", path: "/books" },
    { name: "Reading Lists", path: "/reading-lists" },
    { name: "Book Clubs", path: "/clubs" },
    { name: "Reading Challenges", path: "/challenges" },
    { name: "Author Interviews", path: "/authors" },
    { name: "Book Reviews", path: "/reviews" },
  ];

  const categories = [
    { name: "Fiction", count: "15,234" },
    { name: "Non-Fiction", count: "8,567" },
    { name: "Science Fiction", count: "4,890" },
    { name: "Fantasy", count: "5,432" },
    { name: "Mystery & Thriller", count: "6,789" },
    { name: "Biographies", count: "3,456" },
    { name: "Self-Help", count: "2,345" },
    { name: "Poetry", count: "1,234" },
  ];

  const resources = [
    { name: "Help Center", path: "/help" },
    { name: "Community Guidelines", path: "/guidelines" },
    { name: "Blog", path: "/blog" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "Events", path: "/events" },
    { name: "Partner Program", path: "/partners" },
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Copyright", path: "/copyright" },
    { name: "Accessibility", path: "/accessibility" },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "https://facebook.com/thebookhaven",
      color: "#1877F2",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/thebookhaven",
      color: "#1DA1F2",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/thebookhaven",
      color: "#E4405F",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      url: "https://youtube.com/thebookhaven",
      color: "#FF0000",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/thebookhaven",
      color: "#0A66C2",
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/thebookhaven",
      color: "#181717",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "support@thebookhaven.com",
      type: "email",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+1 (555) 123-4567",
      type: "phone",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "123 Library Street, Bookville, BK 10001",
      type: "address",
    },
  ];

  const awards = [
    { text: "Best Reading Platform 2024", icon: <Award className="w-4 h-4" /> },
    { text: "Reader's Choice Award", icon: <Heart className="w-4 h-4" /> },
    { text: "Secure & Trusted", icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <footer style={{ backgroundColor: "var(--color-surface)" }}>
      {/* Main Footer Content */}
      <div className="container2 mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <BookOpen
                className="w-8 h-8 mr-3"
                style={{ color: "var(--color-primary)" }}
              />
              <span
                className="text-2xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                The Book Haven
              </span>
            </div>

            <p
              className="mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              A vibrant community of book lovers sharing reviews,
              recommendations, and literary discussions. Join thousands of
              readers in discovering your next favorite book.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="mr-3"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {contact.icon}
                  </div>
                  {contact.type === "email" ? (
                    <a
                      href={`mailto:${contact.text}`}
                      className="hover:opacity-80 transition-opacity"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {contact.text}
                    </a>
                  ) : contact.type === "phone" ? (
                    <a
                      href={`tel:${contact.text.replace(/\D/g, "")}`}
                      className="hover:opacity-80 transition-opacity"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      {contact.text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Awards & Recognition */}
            <div className="space-y-2">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="mr-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {award.icon}
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {award.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-bold mb-6 pb-2"
              style={{
                color: "var(--color-text-primary)",
                borderBottom: "2px solid var(--color-border)",
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center hover:opacity-80 transition-opacity group"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <ChevronRight
                      className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--color-primary)" }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Categories */}
          <div>
            <h3
              className="text-lg font-bold mb-6 pb-2"
              style={{
                color: "var(--color-text-primary)",
                borderBottom: "2px solid var(--color-border)",
              }}
            >
              Popular Categories
            </h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={`/categories/${category.name
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/\s+/g, "-")}`}
                    className="flex items-center justify-between hover:opacity-80 transition-opacity group"
                  >
                    <span style={{ color: "var(--color-text-secondary)" }}>
                      {category.name}
                    </span>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--color-bg-muted)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3
              className="text-lg font-bold mb-6 pb-2"
              style={{
                color: "var(--color-text-primary)",
                borderBottom: "2px solid var(--color-border)",
              }}
            >
              Resources
            </h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.path}
                    className="flex items-center hover:opacity-80 transition-opacity"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="text-lg font-bold mb-6 pb-2"
              style={{
                color: "var(--color-text-primary)",
                borderBottom: "2px solid var(--color-border)",
              }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center hover:opacity-80 transition-opacity"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Language */}
        <div
          className="max-w-6xl mx-auto mt-12 pt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="mb-6 md:mb-0">
              <p
                className="text-sm mb-4 text-center md:text-left"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Connect with us:
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: "var(--color-bg-muted)",
                      color: "var(--color-text-primary)",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-bg-muted)";
                      e.currentTarget.style.color = "var(--color-text-primary)";
                    }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center">
              <Globe
                className="w-4 h-4 mr-2"
                style={{ color: "var(--color-text-muted)" }}
              />
              <select
                className="bg-transparent border-none focus:outline-none cursor-pointer"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
