import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISpecialist } from '../models/getSpecialistList.dto';
import { GetSpecialistsParams } from '../models/getSpecialistsParams.dto';

export const SAFEYOURSELF_API_KEY = "safeYourselfApiKey";

export const safeYourselfApi = createApi({
    reducerPath: SAFEYOURSELF_API_KEY,
    baseQuery: fetchBaseQuery({ baseUrl: "https://freuders-web-api-test-3.azurewebsites.net/api/" }),
    endpoints: (builder) => ({
        getSpecialists: builder.query<ISpecialist[], GetSpecialistsParams>({
            query: (params) => {
                const searchParams = new URLSearchParams();
                for (const key in params) {
                    if (Object.prototype.hasOwnProperty.call(params, key)) {
                        const value = params[key];
                        if (value !== undefined) {
                            if (Array.isArray(value)) {
                                value.forEach((item) => searchParams.append(key, item));
                            } else {
                                searchParams.set(key, String(value));
                            }
                        }
                    }
                }
                return `search/specialists?${searchParams.toString()}`;
            },
            transformResponse: (response: any) => response.data.items,
        }),
        getCategories: builder.query<any, void>({
            query: () => "/subjects"
        }),
    }),
});

export const {
    useGetSpecialistsQuery,
    useGetCategoriesQuery
} = safeYourselfApi;