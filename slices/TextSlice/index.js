import { PrismicRichText } from "@prismicio/react";
import Button from "@/components/Button";
import CallToActionButton from "@/components/CallToActionButton";

/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */
const TextSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <div
        className={`py-24 gap-16 inline-flex flex-col items-center ${
          slice.primary.text_align || "text-center"
        } w-screen bg-greenGrey`}>
        <div className='container gap-6 flex flex-col items-center'>
          <PrismicRichText field={slice.primary.text_field} />
          {slice.variation === "callToAction" && (
            <Button
              link={slice.primary.button_link.url}
              label={slice.primary.button_label}
              white={false}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TextSlice;
