import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import google from "../../assets/icons/google.png";
import { motion } from "motion/react";

const SocialLogin = () => {
  const { signWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signWithGoogle();
  };
  return (
    <div>
      <div className="divider">OR</div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="flex justify-center items-center mb-4"
      >
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-3xl shadow-sm hover:shadow-md transition"
        >
          <img src={google} alt="Google logo" className="w-5 h-5" />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>
      </motion.div>
    </div>
  );
};

export default SocialLogin;
