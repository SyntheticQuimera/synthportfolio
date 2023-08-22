import React from "react";

interface ButtonProps {
  text: string;
  href: string;
  icon: React.ReactElement;
}

const CarouselButton: React.FC<ButtonProps> = ({ text, href, icon }) => {
  return (
    <a href={href} className="btn btn-circle btn-primary btn-xs lg:btn-md">
      <span className="hidden text-xs font-bold lg:block">{text}</span>
      <span className="lg:hidden">
        {React.cloneElement(icon, { className: "lg:hidden", size: 14 })}
      </span>
    </a>
  );
};

export default CarouselButton;
