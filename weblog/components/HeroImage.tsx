import Image from "next/image";
import IndexImg from "../public/assets/covers/index.jpg";
import AboutImg from "../public/assets/covers/about.jpg";

const HeroImage: React.FC<{ name: string }> = ({ name }) => {
  // const path = `/assets/covers/${name}`;

  // TODO better handler for images.
  let img = IndexImg;
  if (name === "about") {
    img = AboutImg;
  }

  return (
    <section className="mb-12 shadow-lg col-span-3">
      <Image src={img} alt="Image" />
    </section>
  );
};

export default HeroImage;
