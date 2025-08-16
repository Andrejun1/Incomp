import { useTheme } from "../../contexts/ThemeContext";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

const Logo = ({ showText = true, className = "" }: LogoProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Container */}
      <div className="relative logo-container w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center group">
        {/* Logo Image */}
        <img
          src="/Innovation.png"
          alt="InnovationComputer Logo"
          className={`logo-image ${isDark ? "dark" : "light"}`}
        />

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Logo Text */}
      {showText && (
        <span className="text-xl lg:text-1xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-300">
          Innovation Computer
        </span>
      )}
    </div>
  );
};

export default Logo;
