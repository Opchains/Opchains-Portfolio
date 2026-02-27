import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-8">
          <span className="text-8xl font-bold text-gradient">404</span>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for seems to have wandered off into the decentralized void.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="shadow-glow">
            <Link to="/">
              <Home className="mr-2" size={18} />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2" size={18} />
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;