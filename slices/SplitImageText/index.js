import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import ButtonPrismic from "@/components/ButtonPrismic";
import Button from "@/components/Button";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.SplitImageTextSlice} SplitImageTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SplitImageTextSlice>} SplitImageTextProps
 * @param {SplitImageTextProps}
 */

const backgroundColor = {
  Grey: "bg-grey",
  Green: "bg-greenGrey",
};
const SplitImageText = ({ slice }) => {
  console.log(slice.primary.image);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <div
        className={`${
          slice.variation === "heroSection" ? "pt-12 pb-24" : ""
        } flex justify-center items-center w-screen ${
          slice.primary.background_color
            ? backgroundColor[slice.primary.background_color]
            : backgroundColor.Grey
        }`}>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[512px] py-24'>
          <Image
            src={slice.primary.image.url}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
            className={`w-full h-auto rounded-3xl ${
              ["default"].includes(slice.variation) ? "" : "md:order-last"
            }`.trim()}
          />
          <div className='flex flex-col gap-4 items-start'>
            {["heroSection"].includes(slice.variation) ? (
              <div>
                <PrismicRichText field={slice.primary.title} />
                <PrismicRichText field={slice.primary.paragraph} />
              </div>
            ) : (
              <PrismicRichText field={slice.primary.text} />
            )}
            <Button
              link={slice.primary.button_link.url}
              label={slice.primary.button_label}
              white={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitImageText;
