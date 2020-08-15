const HeroImage: React.FC<{ name: string }> = ({ name }) => {
  const path = `/assets/covers/${name}`;

  return (
    <section className="mb-12 shadow-lg col-span-3">
      <img className="w-full" src={path} />
    </section>
  );
};

export default HeroImage;
