// Meta-description helper. Takes the first paragraph of a long description
// and trims it to ~155 chars at a word boundary, adding an ellipsis only when
// something was actually cut (the old slice(0,155)+"..." cut mid-word and
// appended "..." even to short strings).
export function metaDescription(text: string, max = 155): string {
  const firstParagraph = text.split("\n")[0].trim();
  if (firstParagraph.length <= max) return firstParagraph;
  const cut = firstParagraph.slice(0, max);
  const atWord = cut.slice(0, cut.lastIndexOf(" "));
  return `${atWord}...`;
}
