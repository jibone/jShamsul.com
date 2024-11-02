const bookCoverImgs = [
  "https://m.media-amazon.com/images/I/81pIICZO2PL._SY466_.jpg",
  "https://m.media-amazon.com/images/I/81p4Y+0HzbL._SY466_.jpg",
  "https://m.media-amazon.com/images/I/91OssggvIKL._SY466_.jpg",
  "https://m.media-amazon.com/images/I/813Q+Ds32eL._SY466_.jpg",
  "https://m.media-amazon.com/images/I/91svsZ609OL._SY466_.jpg",
];

export function getBookCoverImg(count: number): string[] {
  const n = bookCoverImgs.length;

  if (count > n) {
    throw new Error("Not enought element in array");
  }

  const shuffled = [...bookCoverImgs];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
