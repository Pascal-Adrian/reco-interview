import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AppRows } from "../types/appTypes";
import type GetAppsRequest from "../types/GetAppRequest";

export const appRowsApi = createApi({
  reducerPath: "appRowsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAppRows: builder.query<AppRows, GetAppsRequest>({
      query: ({ appName, category, pageNumber, pageSize }) => ({
        method: "PUT",
        url: `v1/app-service/get-apps`,
        body: { appName, category, pageNumber, pageSize },
      }),
    }),
  }),
});

export const { useGetAppRowsQuery } = appRowsApi;
