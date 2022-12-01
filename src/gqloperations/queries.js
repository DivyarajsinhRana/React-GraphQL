import { gql } from "@apollo/client";

// {
//     user(id:1){
//         id,
//         name
//     }
// }
export  const GET_USER_BY_ID = gql`
query getUserById{
    user(id:1){
        id,
        name
    }
}
`