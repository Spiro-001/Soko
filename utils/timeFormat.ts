export const dateFormat = (date: string) => {
  return new Date(date)
    .toLocaleDateString("en-US", {
      dateStyle: "short",
    })
    .replace(/\//g, ".");
};

export const timeFormat = (date: string) => {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};
