import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Project } from "@/types/Project";

export const projectsApi = createApi({
  reducerPath: "projects",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_ADRIAN_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (build) => ({
    getProjects: build.query<Project[], void>({
      query: () => "/notion/projects",
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;