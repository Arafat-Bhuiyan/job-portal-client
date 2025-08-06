import { easeInOut, motion } from "motion/react";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";

export const Banner = () => {
  return (
    <div className="p-4 min-h-96 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [50, 70, 50] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-[#0BF4EC] shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [130, 150, 130] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-[#0BF4EC] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Find Your{" "}
            <motion.span
              animate={{ color: ["#8FFAF6", "#0BF4EC"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Dream
            </motion.span>{" "}
            Job, Today!
          </motion.h1>
          <p className="py-6">
            Explore thousands of job opportunities. Connect with top employers.
            Start your career journey with confidence.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
