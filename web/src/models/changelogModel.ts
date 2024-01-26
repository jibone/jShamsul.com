import fs from "fs";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";

type ChangelogFrontmatter = {
  date: string;
};

interface ChangelogInterface {
  list(): string[]; // returns array of strings with the list of filenames
  get(
    name: string,
  ): Promise<CompileMDXResult<ChangelogFrontmatter> | undefined>;
}

export default class ChangelogModel implements ChangelogInterface {
  readonly path = `${process.cwd()}/contents/changelogs`;

  constructor() {}

  list() {
    const list = fs.readdirSync(this.path);
    if (list.length === 0 || undefined) return [];

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
    const fileContents = fs.readFileSync(filepath, "utf8");

    const compiledContents = await compileMDX<ChangelogFrontmatter>({
      source: fileContents,
      options: { parseFrontmatter: true },
    });

    return compiledContents;
  }
}
