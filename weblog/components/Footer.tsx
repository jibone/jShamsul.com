const Footer: React.FC = () => {
  const bgImg = {
    backgroundImage: `url("/assets/diagonal-stripes.svg")`,
  };

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col">
          <div className="w-full h-24" style={bgImg} />
          <div className="text-xs mt-6">
            Copyright $copy; 2010-2021 jShamsul.com. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
