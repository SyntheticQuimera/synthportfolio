import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiArrowRightLight } from "react-icons/pi";

export default function WorkCard({
  title,
  logo,
  desc,
  stack,
  image,
  id,
}: Work) {
  return (
    <Link
      href={`${"/works/" + id}`}
      className="cursor-button-card card w-full flex-1 border bg-transparent text-start text-secondary-content backdrop-blur-md"
    >
      <div className="card-body p-5 lg:p-8">
        <div className="card-title lg:text-3xl">
          {logo && <Image src={logo} alt="logo" width={40} height={40} />}
          {title}
        </div>
        <div className="card-actions">
          {stack?.map((t) => (
            <div className="badge badge-primary rounded-badge text-xs font-semibold">
              {t}
            </div>
          ))}
        </div>
        <div>
          <small>{desc}</small>
        </div>
        <div className="relative hidden h-full w-full overflow-hidden rounded-xl md:flex">
          {image && (
            <Image
              fill
              src={image}
              alt={title}
              className="object-cover object-center"
            />
          )}
        </div>
        <div className="card-actions mt-auto justify-center md:hidden">
          <a href="" className="flex items-center space-x-2 text-xs uppercase">
            <span>read more</span> <PiArrowRightLight size={16} />
          </a>
        </div>
      </div>
    </Link>
  );
}
