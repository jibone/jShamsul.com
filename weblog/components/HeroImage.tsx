const HeroImage: React.FC<{ name: string }> = ({ name }) => {
  const path = `/assets/covers/${name}`;

  // TODO better handler for images.
  let altText = "Random Image";
  if (name === "index") {
    altText = "Black and white image of a person walking in the snow";
  }
  if (name === "about") {
    altText = "Black and white image of Macbook";
  }

  return (
    <section className="mb-12 shadow-lg col-span-3">
      <img src={path} alt={altText} />
    </section>
  );
};

export default HeroImage;
