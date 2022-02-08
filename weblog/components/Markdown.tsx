const Heading1Tag: React.FC = ({ children }) => {
  return <h1 className="text-4xl tracking-light leading-tight mb-6">{children}</h1>;
};

const Heading2Tag: React.FC = ({ children }) => {
  return <h2 className="text-2xl tracking-light leading-tight mb-6">{children}</h2>;
};

const ParagraphTag: React.FC = ({ children }) => {
  return <p className="mb-4">{children}</p>;
};

const AnchorTag: React.FC = (props) => {
  return (
    <a
      className="border-solid border-b-4 bg-yellow-100 hover:border-black hover:bg-yellow-200 duration-200 transition-color"
      {...props}
    >
      {props.children}
    </a>
  );
};

export { Heading1Tag, Heading2Tag, ParagraphTag, AnchorTag };
