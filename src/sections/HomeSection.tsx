'use client';

import { Headline } from "@/components/home/Headline";
import { ProfileActions } from "@/components/home/ProfileActions";
import { ProfileDescription } from "@/components/home/ProfileDescription";
import { ProfileImage } from "@/components/home/ProfileImage";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="max-w-[50rem] mx-auto px-4 sm:px-6 lg:px-8 text-center sm:mb-0"
    >
      <div className="flex items-center justify-center mt-10 mb-6 sm:mb-8">
        <ProfileImage />
      </div>
      <Headline />
      <ProfileActions />
      <ProfileDescription />
    </section>
  );
}
