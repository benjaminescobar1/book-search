import gql from 'graphql-tag';

// mutation to get information about logged in user
export const GET_ME = gql`
     {
        me {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;