import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../gqloperations/queries';
import styles from './userlist.module.css'

const Users = () => {
    const { loading, error, data } = useQuery(GET_USER_BY_ID);
    return (
        <div className={styles.userList}>
            Users list component
            {
                loading ? "Loading" : error ? <p>{error.message}</p> : <p>{data?.user?.name}</p>
            }
        </div>
    )
}
export default Users;