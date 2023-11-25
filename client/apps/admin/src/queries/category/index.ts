import { useQuery } from "@tanstack/react-query";

import { getCategories } from "apis/category";
import { categoryKeys } from "queries/category/keys";

export const useGetCategories = () => {
  return useQuery({
    queryKey: categoryKeys.list(),
    queryFn: getCategories,
    select: (res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
  });
};
