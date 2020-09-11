import { MDXProvider } from "@mdx-js/react";
import ContentAbout from "../contents/pages/about.mdx";
import {
  Heading1Tag,
  Heading2Tag,
  ParagraphTag,
  AnchorTag,
} from "../components/markdown";

const components = {
  h1: Heading1Tag,
  h2: Heading2Tag,
  p: ParagraphTag,
  a: AnchorTag,
};

const Test: React.FC = () => {
  return (
    <MDXProvider components={components}>
      <ContentAbout />
    </MDXProvider>
  );
};

export default Test;
