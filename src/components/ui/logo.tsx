import React from 'react';
import { Label } from '@radix-ui/react-label';

interface LogoProps {
  className: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className="flex w-fit bg-black">
      <Label
        className={className}
        style={{
          fontWeight: 650,
          letterSpacing: '-3.5px',
          textShadow: '2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 5px 4px 0',
          fontFamily: 'poppins',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        copod
      </Label>
    </div>
  );
};

export default Logo;
