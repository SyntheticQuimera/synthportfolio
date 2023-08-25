import Link from "next/link";
import React from "react";
import {
  PiEnvelopeSimpleOpenFill,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";

interface ContactCardProps {
  user: string;
  service: string;
  icon: React.ReactElement;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  service,
  user,
  icon,
  href,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group card w-full border backdrop-blur-md"
    >
      <div className="card-body w-full justify-center py-4 lg:gap-4 lg:py-8">
        <div className="card-actions justify-center">
          <div className="rounded-full border p-4">
            {React.cloneElement(icon, { size: 26 })}
          </div>
        </div>
        <div className="card-title justify-center text-base md:text-xl">
          {user}
        </div>
        <div className="card-actions justify-center text-sm">{service}</div>
      </div>
    </Link>
  );
};

export default function ContactSection() {
  return (
    <div className="p-section h-full w-full">
      <div className="flex h-full flex-col items-center justify-center gap-4 lg:flex-row">
        <ContactCard
          user="/SyntheticQuimera"
          href="https://github.com/SyntheticQuimera"
          service="Github"
          icon={<PiGithubLogoFill />}
        />
        <ContactCard
          user="jaimeroschupkin@gmail.com"
          href="mailto:jaimeroschupkin@gmail.com"
          service="Email"
          icon={<PiEnvelopeSimpleOpenFill />}
        />
        <ContactCard
          user="/jaime-roschupkin"
          href="https://www.linkedin.com/in/jaime-roschupkin/"
          service="Linkedin"
          icon={<PiLinkedinLogoFill />}
        />
      </div>
    </div>
  );
}
