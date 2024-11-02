import fs from "fs";
import { MDX } from "@/utils";

export type BookFrontmatter = {
  title: string;
  subtitle: string;
  author: string;
  translator: string;
  coverImage: string;
  filedUnder: string[];
};

type BookProps = {
  title: string;
  author: string;
  url: string;
  coverImage: string;
  read: boolean;
};

export default class BookCollection {
  static readonly bookpath = `${process.cwd()}/contents/books`;

  static async list() {
    // get all the file list.
    let fileList;
    try {
      fileList = fs.readdirSync(this.bookpath).reverse();
    } catch {
      throw new Error(`File to read directory ${this.bookpath}`);
    }

    // read to get the frontmatter
    let booklist: BookProps[] = [];

    for (const file of fileList) {
      const filepath = `${this.bookpath}/${file}`;
      const { frontmatter } = await MDX.process({ filepath });

      booklist.push({
        title: frontmatter.title,
        author: frontmatter.author,
        url: `/bookshelf/${file.slice(0, -4)}`,
        coverImage: frontmatter.cover_img,
        read: frontmatter.read || false,
      });
    }

    return booklist;
  }

  static slugList() {
    // get all the file list.
    let fileList;
    try {
      fileList = fs.readdirSync(this.bookpath).reverse();
    } catch {
      throw new Error(`Fail to read directory ${this.bookpath}`);
    }

    return fileList.map((f) => {
      return f.slice(0, -4);
    });
  }
}
