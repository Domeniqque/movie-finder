export const highlighter = (target: string, text: string) => {
  const [match] = text.match(new RegExp(target, "ig")) ?? [];

  let textHighlited = text.replace(
    match,
    `<span class="highlight">${match}</span>`
  );

  return textHighlited;
};
