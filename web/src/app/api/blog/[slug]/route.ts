import BlogModel, { BlogFrontmatter } from "@/models/blogpostModel";

async function getPageContent(
  pageName: string,
): Promise<BlogFrontmatter | undefined> {
  const blogModel = new BlogModel();
  const pageContent = await blogModel.get(pageName);

  return pageContent?.frontmatter;
}

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const blogfm = await getPageContent(params.slug);
  return Response.json(blogfm);
}
