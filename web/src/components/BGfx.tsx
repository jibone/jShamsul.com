function genRand(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function polygonPoints(p: number): string {
  const pointPairs = [...Array(p)].map(() => {
    return [genRand(0, 100), genRand(0, 100)];
  });

  const pointsStr = pointPairs.map((p) => {
    return `${p[0]}% ${p[1]}%`;
  });

  return `${pointsStr.join(", ")}`;
}

export default function BGfx() {
  const ppoint = genRand(15, 25);
  return (
    <div
      className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f8fafc] to-[#cbd5e1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath: `polygon(${polygonPoints(ppoint)})`,
        }}
      />
    </div>
  );
}
