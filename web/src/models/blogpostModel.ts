import fs from "fs";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";

export type BlogFrontmatter = {
  type: "Blog";
  date: string;
  title: string;
  summary: string;
  slug?: string;
};

interface BlogInterface {
  list(): string[];
  get(name: string): Promise<CompileMDXResult<BlogFrontmatter> | undefined>;
}

export default class BlogModel implements BlogInterface {
  readonly path = `${process.cwd()}/contents/blogposts`;

  constructor() {}

  list() {
    let list;
    try {
      list = fs.readdirSync(this.path);
    } catch (_) {
      return [];
    }

    const listSorted = list
      .sort()
      .reverse()
      .map((item: string) => {
        return item.slice(0, -4);
      });
    return listSorted;
  }

  async get(name: string) {
    const filepath = `${this.path}/${name}.mdx`;
    let fileContents;
    try {
      fileContents = fs.readFileSync(filepath, "utf8");
    } catch (_) {
      return undefined;
    }

    const compiledContents = await compileMDX<BlogFrontmatter>({
      source: fileContents,
      options: { parseFrontmatter: true },
    });

    return compiledContents;
  }
}
