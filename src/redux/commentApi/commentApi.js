import { api } from "../api/baseApi";

export const commentApi = api.injectEndpoints({
  overrideExisting: true, //Prevents duplicate endpoint errors
  endpoints: (builder) => ({
    // Login
    getUserComment: builder.query({
      query: ({ id, ...res }) => ({
        url: `/get-comments?post_id=${id}`,
        method: "GET",
        body: res,
      }),
      providesTags: ["comment"],
    }),
    postUserComment: builder.mutation({
      query: ({ id }) => ({
        url: `/create-comment`,
        method: "POST",
        body: id,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

// Export hooks
export const { useGetUserCommentQuery, usePostUserCommentMutation } =
  commentApi;
