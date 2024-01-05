import { useQuery } from "@tanstack/react-query";

import { getBlog, getBlogs } from "apis/blog";
import { blogsKeys } from "queries/keys/blogs";
import { Article } from "types/article";

export const useGetBlogs = () => {
  return useQuery({
    queryKey: blogsKeys.list(),
    queryFn: getBlogs,
    select: (res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
  });
};

export const useGetBlog = (id: string) => {
  return useQuery({
    queryKey: blogsKeys.detail(id),
    queryFn: () => getBlog(id),
    select: (res) => ({ ...(res.data() as Article), id }),
  });
};
