import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
// import { gql } from "graphql-request";

import { BASE_URL } from "../../utils/constants/general";

export const api = createApi({
  reducerPath: "api",
  baseQuery: graphqlRequestBaseQuery({ url: BASE_URL }),
  endpoints: () => ({})
});

// @NOTE example of Graphql requests can be found at the link below
// https://codesandbox.io/s/examples-query-react-graphql-8qwnh?file=/src/app/services/posts.ts:254-618
