import { User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

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
            <Image 
              src="/SunshareLogo.png" 
              alt="SunShare Logo" 
              width={80} 
              height={80}
              className="w-8 h-8 md:w-auto md:h-10"
            />
            <span className='font-extrabold text-2xl'>Sunshare</span>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="w-5 h-5 text-foreground" />
        </Button>
      </div>
    </nav>
  );
}
