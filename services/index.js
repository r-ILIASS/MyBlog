import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              categories {
                name
                slug
              }
            }
          }
        }
}`;

  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges;
}
