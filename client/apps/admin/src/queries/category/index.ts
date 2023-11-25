import { useMutation, useQuery } from "@tanstack/react-query";

import { deleteCategory, getCategories, postCategory } from "apis/category";
import { categoryKeys } from "queries/category/keys";
import { CategoryWithId } from "types/categories";

export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.list(),
    queryFn: getCategories,
    select: (res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as CategoryWithId[],
  });
};

export const usePostCategory = () => {
  return useMutation({
    mutationFn: postCategory,
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: deleteCategory,
  });
};
