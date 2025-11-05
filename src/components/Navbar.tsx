import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FairFound
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/fairness-demo" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Fairness Demo
            </Link>
            <Link to="/pricing-advisor" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:block">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg hover:bg-muted transition-colors"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Link to="/dashboard">
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Get Started
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
