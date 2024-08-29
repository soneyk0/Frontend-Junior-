import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type CardType = {
    id: number;
    title: string;
    body: string;
}

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getPosts: builder.query<CardType[], void>({
            query: () => 'posts',
        }),
        getUserByUsername: builder.query({
            query: (username) => `users?username=${username}`,
        })
    }),
});

export const {useGetPostsQuery, useGetUserByUsernameQuery} = cardsApi;