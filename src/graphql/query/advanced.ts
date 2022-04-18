import {gql} from '@apollo/client'

export const GET_ALL_ADVANCED = gql`
    query {
        getAllAdvanced{
            id, rus, eng
        }
    }    

`
