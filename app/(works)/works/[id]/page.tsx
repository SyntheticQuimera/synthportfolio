"use client";
import Heading from "@/app/components/Heading";
import Loading from "@/app/components/Loading";
import { databases } from "@/appwrite";
import { Models } from "appwrite";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiGithubLogoBold, PiPlanetBold } from "react-icons/pi";

export default function WorkPage({ params }: { params: { id: string } }) {
  const [work, setWork] = useState<Models.Document | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWorks() {
      try {
        const response = await databases.getDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID!,
          process.env.NEXT_PUBLIC_WORKS_COLLECTION_ID!,
          params.id,
        );

        setWork(response);
        setLoading(false);
      } catch (error) {
        console.log(error); // Handle error
      }
    }

    getWorks();
  }, [params.id]);

  return (
    <>
      <Heading title={work?.title} />

      <main className="flex h-screen items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="p-section grid h-screen w-full grid-flow-col grid-cols-none grid-rows-3 gap-4 overflow-auto lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-none lg:overflow-hidden">
              <div className="card row-span-2 border bg-transparent backdrop-blur-md lg:col-span-2 lg:row-auto">
                <div className="card-body p-5 lg:p-8">
                  <div className="card-title text-lg uppercase lg:text-2xl">
                    Showcase
                  </div>
                  {work?.video ? (
                    <div className="relative m-auto overflow-hidden rounded-xl border">
                      <video
                        controls
                        className="max-h-fit invert sm:max-h-60 lg:max-h-fit"
                      >
                        <source src={work?.video} />
                      </video>
                    </div>
                  ) : (
                    <div className="relative h-full w-full overflow-hidden rounded-xl border">
                      <Image
                        fill
                        src={work?.image}
                        alt={work?.title}
                        className="object-cover invert"
                      />
                    </div>
                  )}
                  <div className="card-actions">
                    {work?.stack.map((t: string, index: any) => (
                      <div
                        key={index}
                        className="badge badge-primary rounded-badge text-xs font-semibold"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card row-span-1  border bg-transparent backdrop-blur-md lg:col-span-1 lg:row-auto">
                <div className="card-body p-5 lg:p-8">
                  <div className="card-title text-lg uppercase lg:text-2xl">
                    Information
                  </div>
                  <div className="card-actions text-sm">
                    <p>{work?.desc}</p>
                  </div>
                  <div className="card-actions mt-auto flex-row justify-end lg:flex-col">
                    <Link
                    target="_blank"
                      href={work?.repository}
                      className="btn btn-primary btn-sm w-fit lg:btn-md lg:w-full"
                    >
                      <PiGithubLogoBold size={18} />
                      Repository
                    </Link>
                    <Link
                    target="_blank"
                      href={work?.demo}
                      className="btn btn-primary btn-sm w-fit lg:btn-md lg:w-full"
                    >
                      <PiPlanetBold size={18} />
                      Web Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
