import fs from "fs";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default class MDX {
  static async process({ filepath }: { filepath: string }) {
    // read the file contents
    let fileContents;
    try {
      fileContents = fs.readFileSync(filepath);
    } catch {
      throw new Error(`Fail to open file: ${filepath}`);
    }

    const { data: frontmatter, content } = matter(fileContents);

    const { default: MDXContent } = await evaluate(content, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
      ...runtime,
    });

    return { frontmatter, MDXContent };
  }
}
