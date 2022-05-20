export const highlighter = (target: string, text: string) => {
  const matches = text.match(new RegExp(target, "ig"));
  let textHighlited = text;

  matches?.forEach((match) => {
    textHighlited = textHighlited.replace(
      match,
      `<span class="highlight">${match}</span>`
    );
  });

  return textHighlited;
};
