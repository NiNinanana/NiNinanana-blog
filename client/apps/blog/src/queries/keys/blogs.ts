export const blogsKeys = {
  all: "blogs",
  list: () => [blogsKeys.all, "list"],
  detail: (id: string) => [blogsKeys.all, "detail", id],
};
