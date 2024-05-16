import fs from "fs";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export default class MDX {
  static async process<Frontmatter>({
    filepath,
  }: {
    filepath: string;
  }): Promise<CompileMDXResult<Frontmatter>> {
    // read the file contents
    let fileContents;
    try {
      fileContents = fs.readFileSync(filepath);
    } catch {
      throw new Error(`Fail to open file: ${filepath}`);
    }

    const processed = await compileMDX<Frontmatter>({
      source: fileContents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          //@ts-ignore
          rehypePlugins: [rehypeHighlight], // TODO: figure out why ts warning. For now just following this https://code.likeagirl.io/mdx-syntax-highlighting-in-next-js-b1715a4d76e3
        },
      },
    });

    return processed;
  }
}
