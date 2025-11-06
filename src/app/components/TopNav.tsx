import { Sun, User, Menu } from 'lucide-react';
import { Button } from './ui/button';

interface TopNavProps {
  onMenuClick: () => void;
}

export function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <nav className="bg-card border-b border-border px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5 text-foreground" />
          </Button>
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <span className="text-xl md:text-2xl text-foreground tracking-tight">SunShare</span>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="w-5 h-5 text-foreground" />
        </Button>
      </div>
    </nav>
  );
}
