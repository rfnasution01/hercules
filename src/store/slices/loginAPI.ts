import { LoginType, ResponseLoginType } from '@/libs/types/login-type'
import { Res, api } from '../api'

export const LoginEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    createLogin: builder.mutation<Res<ResponseLoginType>, { data: LoginType }>({
      query: ({ data }) => ({
        url: `api/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['biodata', 'ujian'],
    }),
  }),
})

export const { useCreateLoginMutation } = LoginEndpoints
