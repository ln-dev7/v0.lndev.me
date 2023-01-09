import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "Leonel NGOYA",
  description:
    "Hey, my name is Leonel NGOYA but I am much better known as LN. I am frontend developer and web integrator from Cameroon, I’m passionate about creating beautiful, intuitive and responsive websites.",
  canonical: "https://lndev.me/",
  openGraph: {
    url: "https://lndev.me/",
    title: "Leonel NGOYA",
    description:
      "Hey, my name is Leonel NGOYA but I am much better known as LN. I am frontend developer and web integrator from Cameroon, I’m passionate about creating beautiful, intuitive and responsive websites.",
    images: [
      {
        url: "https://raw.githubusercontent.com/ln-dev7/House/master/public/images/lndev.JPG?token=GHSAT0AAAAAAB4MONJFKGTPHO7YE2UJJ4YUY54U5IA",
        alt: "LN Dev",
        type: "image/jpeg",
        secureUrl:
          "https://raw.githubusercontent.com/ln-dev7/House/master/public/images/lndev.JPG?token=GHSAT0AAAAAAB4MONJFKGTPHO7YE2UJJ4YUY54U5IA",
      },
    ],
    siteName: "Leonel NGOYA",
  },
  twitter: {
    handle: "@ln_dev7",
    site: "@ln_dev7",
    cardType: "summary_large_image",
  },
};
