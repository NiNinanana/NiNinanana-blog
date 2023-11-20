import { useMutation, useQuery } from "@tanstack/react-query";

import { getBlogs, postBlog } from "apis/blog";
import { blogsKeys } from "queries/keys/blogs";

export const useGetBlogs = () => {
  return useQuery({
    queryKey: blogsKeys.list(),
    queryFn: getBlogs,
    select: (res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
  });
};

export const usePostBlog = () => {
  return useMutation({
    mutationFn: postBlog,
  });
};
