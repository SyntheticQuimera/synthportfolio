"use client";
import React, { useEffect, useState } from "react";
import {
  PiCaretDoubleLeftBold,
  PiCaretLeftBold,
  PiCaretRightBold,
} from "react-icons/pi";
import WorkCard from "./WorkCard";
import CarouselButton from "./CarouselButton";
import { databases } from "@/appwrite";
import { Models } from "appwrite";
import Loading from "./Loading";

export default function WorksSection() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  async function getWorks() {
    try {
      const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_WORKS_COLLECTION_ID!,
      );

      const appwriteDocuments: Models.Document[] = response.documents;

      // Transform Appwrite documents to Works format
      const transformedWorks: Work[] = appwriteDocuments.map((doc) => ({
        title: doc.title,
        logo: doc.logo,
        desc: doc.desc,
        stack: doc.stack,
        image: doc.image,
        id: doc.$id,
      }));

      setWorks(transformedWorks);
      setLoading(false);
    } catch (error) {
      console.log(error); // Handle error
    }
  }

  useEffect(() => {
    getWorks();
  }, []);

  const chunkSize = 2;
  const chunkedItems: Work[][] = [];

  for (let i = 0; i < works.length; i += chunkSize) {
    chunkedItems.push(works.slice(i, i + chunkSize));
  }

  return (
    <div className="carousel carousel-center h-full w-full">
      {loading ? (
        <Loading />
      ) : (
        <>
          {chunkedItems.map((chunk, index) => (
            <div
              id={`works-${index}`}
              key={index}
              className="carousel-item h-full w-full"
            >
              <div className="p-section !lg:pr-0 !xl:pr-0 w-full !pr-0">
                <div className="flex h-full w-full flex-col gap-4 md:flex-row">
                  {chunk.map((item, itemIndex) => (
                    <WorkCard
                      key={itemIndex}
                      title={item.title}
                      logo={item.logo}
                      desc={item.desc}
                      stack={item.stack}
                      image={item.image}
                      id={item.id}
                    />
                  ))}
                </div>
              </div>

              <div className="p-nav group flex flex-col items-center justify-center gap-y-4">
                <div className="h-16 border-r group-hover:h-24" />
                {index < chunkedItems.length - 1 && (
                  <CarouselButton
                    text="More"
                    icon={<PiCaretRightBold />}
                    href={`#works-${index + 1}`}
                  />
                )}
                {index > 0 && (
                  <CarouselButton
                    text="Back"
                    icon={<PiCaretLeftBold />}
                    href={`#works-${index - 1}`}
                  />
                )}
                {index === chunkedItems.length - 1 && (
                  <CarouselButton
                    text="Start"
                    icon={<PiCaretDoubleLeftBold />}
                    href="#works-0"
                  />
                )}
                <div className="h-16 border-r group-hover:h-24" />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
