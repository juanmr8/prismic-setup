"use client";

import TextCenter from "@/components/TextCenter";
import CallToActionButton from "@/components/CallToActionButton";
import SplitImageLeft from "@/components/SplitImageLeft";
import SplitButtonLeft from "@/components/SplitButtonLeft";
import Hero from "@/components/Hero";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "slices/.";

import * as prismic from "@prismicio/client";

const queryHomepage = () => {
  const client = createClient();
  return client.getSingle("homepage");
};

export async function generateMetadata() {
  const page = await queryHomepage();

  return {
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      image: prismic.asImageSrc(page.data.meta_image.url),
    },
  };
}

export default async function Home() {
  const page = await queryHomepage();
  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
