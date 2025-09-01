import "./LogoHeader.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LogoHeader() {
  return (
    <div className="logo-header">
      <Link to="/home">
        <motion.h1 layoutId="site-logo" className="cursor-pointer">
          HARRHY'S
        </motion.h1>
      </Link>
    </div>
  );
}
