const bookCoverImgs = [
  "https://m.media-amazon.com/images/I/81pIICZO2PL._SY466_.jpg", // Neuromancer
  "https://m.media-amazon.com/images/I/81p4Y+0HzbL._SY466_.jpg", // Snow Crash
  "https://m.media-amazon.com/images/I/91OssggvIKL._SY466_.jpg", // Three-body Problem
  "https://m.media-amazon.com/images/I/813Q+Ds32eL._SY466_.jpg", // Dark Forest
  "https://m.media-amazon.com/images/I/91svsZ609OL._SY466_.jpg", // Death's end
  "https://m.media-amazon.com/images/I/21SDL+t2wlL._SY445_SX342_.jpg", // On Bullshit
  "https://m.media-amazon.com/images/I/91Z6ApocmwL._SY466_.jpg", // How to read a book
  "https://m.media-amazon.com/images/I/71ZHy+J7anL._SY466_.jpg", // Ready Player One
  "https://m.media-amazon.com/images/I/81a-GuXSbwL._SY466_.jpg", // Ready Player Two
  "https://m.media-amazon.com/images/I/61fuQ7f70UL._SY466_.jpg", // Armada
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
