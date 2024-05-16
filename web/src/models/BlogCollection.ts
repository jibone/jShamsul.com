import type { PostProps } from "@/components";
import fs from "fs";
import { format, parseISO } from "date-fns";
import { MDX } from "@/utils";

export type BlogFrontmatter = {
  title: string;
  type: string;
  date: string;
  summary: string;
  ogTitle: string;
  ogSubtitle: string;
};

export default class BlogCollection {
  static readonly blogpath = `${process.cwd()}/contents/blog`;

  static async list() {
    // get all the file list.
    let fileList;
    try {
      fileList = fs.readdirSync(this.blogpath).reverse();
    } catch {
      throw new Error(`Fail to read directory ${this.blogpath}`);
    }

    // read to get the frontmatter
    let bloglist: PostProps[] = [];

    for (const file of fileList) {
      const filepath = `${this.blogpath}/${file}`;
      const { frontmatter } = await MDX.process<BlogFrontmatter>({ filepath });

      bloglist.push({
        date: format(parseISO(frontmatter.date), "yyyy, LLL do"),
        url: `/blog/${file.slice(0, -4)}`,
        title: frontmatter.title,
      });
    }

    return bloglist;
  }

  static slugList() {
    // get all the file list.
    let fileList;
    try {
      fileList = fs.readdirSync(this.blogpath).reverse();
    } catch {
      throw new Error(`Fail to read directory ${this.blogpath}`);
    }

    return fileList.map((f) => {
      return f.slice(0, -4);
    });
  }
}
