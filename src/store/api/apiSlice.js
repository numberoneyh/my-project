import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Posts', 'Orders'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: ({ limit, page, search, category, sort, order, filterValue }) => ({
        url: `/shop`,
        params: {
          _page: page,
          _limit: limit,
          q: search,
          category,
          _sort: sort,
          _order: order,
          price_gte: filterValue[0],
          price_lte: filterValue[1],
        },
      }),
      transformResponse(apiResponse, meta) {
        return { apiResponse, totalCount: Number(meta.response.headers.get('X-Total-Count')) }
      },
      providesTags: result => ['Posts'],
    }),

    getOrders: builder.query({
      query: () => ({
        url: `/orders`,
      }),
      providesTags: result => ['Orders'],
    }),

    getSingleProduct: builder.query({
      query: id => ({
        url: `/shop/${id}`,
      }),
      providesTags: result => ['Posts'],
    }),

    addProduct: builder.mutation({
      query: initialPost => ({
        url: '/shop',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Posts'],
    }),

    deleteProduct: builder.mutation({
      query: id => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),

    addToCartProduct: builder.mutation({
      query: initialPost => ({
        url: '/orders',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useAddToCartProductMutation,
  useGetOrdersQuery,
} = apiSlice
