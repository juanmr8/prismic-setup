import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const nav = await client.getSingle("global_nav");
  console.log(nav.data.menu_items);
  return (
    <div className='h-24 flex justify-center items-center font-semibold bg-greenGrey'>
      <div className='container flex justify-between'>
        <span className='text-xl leading-6'>
          <PrismicText field={nav.data.company_name} />
        </span>
        <ul className='flex gap-8'>
          {nav.data.menu_items.map((item) => {
            return (
              <li key={JSON.stringify(item)}>
                <Link href={item.menu_link.url}>{item.menu_label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
