import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default Object.assign(withMDX(nextConfig), {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
});
