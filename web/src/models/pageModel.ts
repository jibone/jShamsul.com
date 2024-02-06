import fs from "fs";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";

export type PageFrontmatter = {
  type: "Page";
  title: string;
  description: string;
  ogTitle?: string;
  ogSubtitle?: string;
  ogTitleFont?: number;
  ogSubtitleFont?: number;
};

interface PageInterface {
  list(): string[]; // list of page
  get(name: string): Promise<CompileMDXResult<PageFrontmatter> | undefined>;
}

export default class PageModel implements PageInterface {
  readonly path = `${process.cwd()}/contents/pages`;

  constructor() {}

  list() {
    let list;
    try {
      list = fs.readdirSync(this.path);
    } catch (_) {
      return [];
    }

    return list.map((item: string) => {
      return item.slice(0, -4);
    });
  }

  async get(name: string) {
    const filepath = `${this.path}/${name}.mdx`;
    let fileContents;
    try {
      fileContents = fs.readFileSync(filepath, "utf8");
    } catch (_) {
      return undefined;
    }

    const compiledContents = await compileMDX<PageFrontmatter>({
      source: fileContents,
      options: { parseFrontmatter: true },
    });

    return compiledContents;
  }
}
