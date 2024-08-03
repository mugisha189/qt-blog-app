import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="h-[2px] bg-gray-300 w-full"></div>
      <div className="flex justify-between items-center p-2 text-xs text-gray-700">
        <div>© {new Date().getFullYear()} QT Blog. All rights reserved.</div>
        <div className="flex items-center gap-2">
          <div className="py-4 flex justify-center space-x-4">
            {[
              {
                to: "www.instagram.com",
                icon: <FaInstagram />,
                name: "Instagram",
              },
              {
                to: "www.facebook.com",
                icon: <FaFacebookF />,
                name: "Facebook",
              },
              { to: "www.twitter.com", icon: <FaTwitter />, name: "Twitter" },
            ].map((route, index) => (
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
          <div>123 Main Street, Kigali, Rwanda</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
