import { useMutation, useQuery } from "@tanstack/react-query";

import { deleteTag, getTags, postTag } from "apis/tag";
import { tagKeys } from "queries/tag/keys";
import { TagWithId } from "types/tags";

export const useGetTags = () => {
  return useQuery({
    queryKey: tagKeys.list(),
    queryFn: getTags,
    select: (res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as TagWithId[],
  });
};

export const usePostTag = () => {
  return useMutation({
    mutationFn: postTag,
  });
};

export const useDeleteTag = () => {
  return useMutation({
    mutationFn: deleteTag,
  });
};
