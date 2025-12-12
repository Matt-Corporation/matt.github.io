import type { MDXComponents } from "mdx/types";
import { ImageProps } from "next/image";
import { Button } from "./components/ui/button";
import { Typography } from "./components/ui/typography";
import Image from "next/image";
import Link from "next/link";

const components: MDXComponents = {
  h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
  h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
  h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
  h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
  p: ({ children }) => <Typography>{children}</Typography>,
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
  a: ({ children, href }) => (
    <Link
      className="active:opacity-50 font-medium underline underline-offset-4"
      href={href}
      draggable={false}
    >
      {children}
    </Link>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
