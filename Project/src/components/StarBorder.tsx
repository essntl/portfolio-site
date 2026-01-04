import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
  paddingx?: number;
  paddingy?: number;
  effectHeight?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  paddingx = 8,
  paddingy = 8,
  effectHeight = 25,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';
  
  const topEffectHeight = effectHeight + 5;
  
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-lg hover:scale-105 transition-all ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style
      }}
    >
      <div
        className="absolute w-[300%] opacity-100 -bottom-2 right-[-250%] rounded-lg animate-star-movement-bottom z-0"
        style={{
          height: `${effectHeight}%`,
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      
      <div
        className="absolute w-[300%] opacity-100 -top-2.5 left-[-250%] rounded-lg animate-star-movement-top z-0"
        style={{
          height: `${topEffectHeight}%`,
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed
        }}
      ></div>
      
      <div 
        className="relative z-1 bg-black/40 text-white text-center text-[16px] rounded-lg hover:cursor-pointer transition-all"
        style={{
          padding: `${paddingy}px ${paddingx}px`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;