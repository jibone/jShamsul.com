export function genRand(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function polygonPoints(p: number): string {
  // const genRand = () => {
  //   const min = Math.ceil(0);
  //   const max = Math.floor(100);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  const pointPairs = [...Array(p)].map(() => {
    return [genRand(0, 100), genRand(0, 100)];
  });

  const pointsStr = pointPairs.map((p) => {
    return `${p[0]}% ${p[1]}%`;
  });

  return `${pointsStr.join(", ")}`;
}
