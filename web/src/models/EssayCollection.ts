import type { PostProps } from "@/components";
import fs from "fs";
import { format, parseISO } from "date-fns";
import { MDX } from "@/utils";

export type EssayFrontmatter = {
  title: string;
  type: string;
  date: string;
  summary: string;
  ogTitle: string;
  ogSubtitle: string;
  mirror?: string;
  bookshelf?: string[];
  codecodex?: string;
  fleeting?: string;
  coverImg?: string;
  nostrNoteId?: string;
};

export default class EssayCollection {
  static readonly essaypath = `${process.cwd()}/contents/essays`;

  static async list() {
    // get all the file list.
    let fileList;
    try {
      fileList = fs.readdirSync(this.essaypath).reverse();
    } catch {
      throw new Error(`Fail to read directory ${this.essaypath}`);
    }

    // read to get the frontmatter
    let essaylist: PostProps[] = [];

    for (const file of fileList) {
      const filepath = `${this.essaypath}/${file}`;
      const { frontmatter } = await MDX.process({ filepath });

      essaylist.push({
        date: format(parseISO(frontmatter.date), "yyyy-MM-dd"),
        url: `/essays/${file.slice(0, -4)}`,
        title: frontmatter.title,
        mirror: frontmatter.mirror,
        codex: frontmatter.codecodex,
        fleeting: frontmatter.fleeting,
      });
    }

    return essaylist;
  }

  static slugList() {
    // get all the file list.
    let fileList;
    try {
      fileList = fs.readdirSync(this.essaypath).reverse();
    } catch {
      throw new Error(`Fail to read directory ${this.essaypath}`);
    }

    return fileList.map((f) => {
      return f.slice(0, -4);
    });
  }
}
