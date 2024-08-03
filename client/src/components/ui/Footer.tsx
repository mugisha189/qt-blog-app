import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerData = [
  {
    title: "Support",
    routes: [
      { name: "Missionaries", to: "/missionaries" },
      { name: "Ministries", to: "/ministries" },
    ],
  },
  {
    title: "About",
    routes: [
      { name: "Our Mission", to: "/our-mission" },
      { name: "Our Vision", to: "/our-vision" },
      { name: "Our History", to: "/our-history" },
    ],
  },
  {
    title: "Contact",
    routes: [
      { name: "Contact Us", to: "/contact" },
      { name: "Support", to: "/support" },
    ],
  },
  {
    title: "Follow Us",
    routes: [
      { name: "Facebook", to: "https://facebook.com", icon: <FaFacebookF /> },
      { name: "Instagram", to: "https://instagram.com", icon: <FaInstagram /> },
      { name: "Twitter", to: "https://twitter.com", icon: <FaTwitter /> },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="pt-10  px-[8vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
        {footerData.map((section, index) => (
          <div key={index} className="text-center">
            <h3 className="font-bold mb-4 text-sm">{section.title}</h3>
            <ul>
              {section.routes.map((route, routeIndex) => (
                <li key={routeIndex} className="mb-2">
                  <Link to={route.to}>
                    <div className="text-gray-700 hover:text-primary flex items-center justify-center">
                      {route.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="py-4 flex justify-center space-x-4">
        {footerData[3].routes.map((route, index) => (
          <Link key={index} to={route.to}>
            <div
              className="text-gray-700 hover:text-gray-900"
              aria-label={route.name}
            >
              {"icon" in route && route.icon}
            </div>
          </Link>
        ))}
      </div>
      <div className="h-[2px] bg-gray-300 w-full"></div>
      <div className="flex justify-between items-center p-2 text-xs text-gray-700">
        <div>© {new Date().getFullYear()} QT Blog. All rights reserved.</div>
        <div>123 Main Street, Kigali, Rwanda</div>
      </div>
    </div>
  );
};

export default Footer;
