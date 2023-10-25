import { defineDocumentType, makeSource } from "contentlayer/source-files";
// Import Remark packages
import remarkGfm from "remark-gfm";
// Import Rehype packages
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";

// Define document type for blog post
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    summary: { type: "string" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.slice(5),
    },
    path: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
    filePath: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFilePath,
    },
  },
}));

export default makeSource({
  contentDirPath: "contents",
  contentDirInclude: ["blog"],
  documentTypes: [Blog],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeCodeTitles,
      [rehypePrismPlus, { defaultLanguage: "js", ignoreMissing: true }],
    ],
  },
});
