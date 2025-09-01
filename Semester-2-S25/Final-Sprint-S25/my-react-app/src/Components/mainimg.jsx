import "./mainimg.css";
import "@fontsource/hedvig-letters-serif";
import { motion } from "framer-motion";

export function MainImg() {
  return (
    <div className="main-container">
      {/* Shared logo animation */}
      <motion.h1 layoutId="site-logo" className="main-logo">
        HARRHY'S
      </motion.h1>
      <motion.h2
        className="main-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
      >
        CURATED ANTIQUE JEWELLERY
      </motion.h2>
      <motion.div
        className="main-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
      >
        <img src="./mainimg.jpg" alt="Diamond ring inspected by jeweler" />
      </motion.div>
    </div>
  );
}
