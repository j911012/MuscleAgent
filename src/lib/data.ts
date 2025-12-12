export const formatDateLabel = (rawDate: string) => {
  const parsedDate = new Date(rawDate);
  console.log(parsedDate);

  // 不正な日付の場合、元の文字列をそのまま返す
  if (Number.isNaN(parsedDate.getTime())) return rawDate;

  return parsedDate.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
