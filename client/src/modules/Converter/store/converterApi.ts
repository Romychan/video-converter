import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import io from 'socket.io-client';

export const converterApi = createApi({
  reducerPath: 'api/converter',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/api/video`,
  }),
  endpoints: (builder) => ({
    convertVideo: builder.mutation({
      query(data: FormData) {
        return {
          url: '/convert',
          method: 'POST',
          body: data,
          responseHandler: async (response) =>
            window.URL.createObjectURL(await response.blob()),
          cache: 'no-cache',
        };
      },
    }),
    subscribeToProgress: builder.query<number, void>({
      queryFn: () => ({ data: 0 }),
      keepUnusedDataFor: 0,
      async onCacheEntryAdded(_arg, { updateCachedData, cacheEntryRemoved }) {
        const socket = io(import.meta.env.VITE_SOCKET_URL);

        socket.on('disconnect', (reason) => {
          if (reason === 'io server disconnect') {
            socket.connect();
          }
        });

        socket.on('progress', (event: number) => {
          updateCachedData(() => event);
        });

        await cacheEntryRemoved;
        socket.close();
      },
    }),
  }),
});

export const { useConvertVideoMutation, useSubscribeToProgressQuery } =
  converterApi;
