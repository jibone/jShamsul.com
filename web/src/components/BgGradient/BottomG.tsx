import { polygonPoints, genRand } from "./utils";

export default function BottomG() {
  const ppoint = genRand(15, 25);
  return (
    <div
      className="absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath: `polygon(${polygonPoints(ppoint)})`,
        }}
      />
    </div>
  );
}
