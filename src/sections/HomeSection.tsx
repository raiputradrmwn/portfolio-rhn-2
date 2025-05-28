
'use client';

import { Headline } from "@/components/home/Headline";
import { ProfileActions } from "@/components/home/ProfileActions";
import { ProfileDescription } from "@/components/home/ProfileDescription";
import { ProfileImage } from "@/components/home/ProfileImage";


export default function HomeSection() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[150rem]"
    >
      <div className="flex items-center justify-center mt-6 mb-4">
        <ProfileImage />
      </div>
      <Headline />
      <ProfileActions />
      <ProfileDescription />
    </section>
  );
}
