import Image from "next/image";

const HeroImage: React.FC<{ name: string }> = ({ name }) => {
  const path = `/assets/covers/${name}`;

  return (
    <section className="mb-12 shadow-lg col-span-3">
      <Image src={path} alt="Image" layout="fill" />
    </section>
  );
};

export default HeroImage;
