export async function OGFont() {
  const fontNormal = await fetch(
    new URL(
      `../../../public/assets/iAWriterQuattroS-Regular.ttf`,
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  const fontItalic = await fetch(
    new URL(
      `../../../public/assets/iAWriterQuattroS-Italic.ttf`,
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  const fontBold = await fetch(
    new URL(
      `../../../public/assets/iAWriterQuattroS-Bold.ttf`,
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return { fontNormal, fontItalic, fontBold };
}
