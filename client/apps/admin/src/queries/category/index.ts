import { useMutation, useQuery } from "@tanstack/react-query";

import { getCategories, postCategory } from "apis/category";
import { categoryKeys } from "queries/category/keys";

export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.list(),
    queryFn: getCategories,
    select: (res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
  });
};

export const usePostCategory = () => {
  return useMutation({
    mutationFn: postCategory,
  });
};
