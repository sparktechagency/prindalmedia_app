import { api } from "../api/baseApi";

export const commentApi = api.injectEndpoints({
  overrideExisting: true, //Prevents duplicate endpoint errors
  endpoints: (builder) => ({
    // Login
    getUserComment: builder.query({
      query: ({ id }) => ({
        url: `/get-comments-with-replay-like?post_id=${id}`,
        method: "GET",
      }),
      providesTags: ["comment"],
    }),

    postUserComment: builder.mutation({
      query: (id) => ({
        url: `/create-comment`,
        method: "POST",
        body: id,
      }),
      invalidatesTags: ["comment"],
    }),
    postLinkCount: builder.mutation({
      query: ({ id }) => ({
        url: `/like?comment_id=${id}`,
        method: "POST",
        body: { comment_id: id },
      }),
      invalidatesTags: ["comment"],
    }),
    replyComments: builder.mutation({
      query: ({ comment_id, reply }) => ({
        url: `/replay?comment_id=${comment_id}&replay=${encodeURIComponent(
          reply
        )}`,
        method: "POST",
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

// Export hooks
export const {
  useGetUserCommentQuery,
  usePostUserCommentMutation,
  usePostLinkCountMutation, //
  useReplyCommentsMutation, //
} = commentApi;
