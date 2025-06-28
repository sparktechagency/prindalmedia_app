import { api } from "../api/baseApi";

export const AuthApiSlice = api.injectEndpoints({
  overrideExisting: true, //Prevents duplicate endpoint errors
  endpoints: (builder) => ({
    // Login
    login: builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    // Sign Up
    signUp: builder.mutation({
      query: (data) => ({
        url: `/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    // Get Username
    getUserName: builder.query({
      query: (data) => ({
        url: `/get-username?query=${data}`,
      }),
    }),

    // Verify OTP
    verifyOTP: builder.mutation({
      query: (data) => ({
        url: `/verify-otp`,
        method: "POST",
        body: data,
      }),
    }),

    // Resend OTP
    resendOTP: builder.mutation({
      query: (data) => ({
        url: `/resend-otp`,
        method: "POST",
        body: data,
      }),
    }),

    // Forget Password (Send OTP/Request)
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: `/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),

    // Change Password (OTP + New Pass)
    changePassword: builder.mutation({
      query: (data) => ({
        url: `/change-password`,
        method: "POST",
        body: data,
      }),
    }),

    // Update Password (inside account)
    updatePassword: builder.mutation({
      query: (data) => ({
        url: `/update-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    // Get Logged-in User Profile
    getProfile: builder.query({
      query: () => ({
        url: `/profile`,
      }),
      providesTags: ["auth"],
    }),

    // Update Profile Info
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/profile-update?_method=PUT`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    // Token Validation
    validateToken: builder.query({
      query: () => ({
        url: `/validate-token`,
      }),
    }),

    // Get Other User Profile
    getOthersProfile: builder.query({
      query: (id) => ({
        url: `/profile/${id}`,
      }),
      providesTags: ["auth"],
    }),
  }),
});

// Export hooks
export const {
  useLoginMutation,
  useSignUpMutation,
  useGetUserNameQuery,
  useVerifyOTPMutation,
  useResendOTPMutation,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useUpdatePasswordMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useValidateTokenQuery,
  useGetOthersProfileQuery,
} = AuthApiSlice;
