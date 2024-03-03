import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Playlist } from "@/types/Playlist";

export const onRepeatApi = createApi({
  reducerPath: "onRepeat",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_ADRIAN_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (build) => ({
    getPlaylist: build.query<Playlist, void>({
      query: () => "/spotify/onRepeat",
    }),
  }),
});

export const { useGetPlaylistQuery } = onRepeatApi;
