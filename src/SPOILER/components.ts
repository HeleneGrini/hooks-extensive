/**
 *  Fetch users
 */

// const [data, setData] = useState<User[]>([]);
// const [loading, setLoading] = useState<boolean>(false);
// const [error, setError] = useState<boolean>(false);

// const getUsers = () => {
//   setLoading(true);
//   fetch("http://localhost:3334/users")
//     .then((r) => r.json())
//     .then((r) => setData(r))
//     .catch(() => setError(true))
//     .finally(() => setLoading(false));
// };

// useEffect(() => {
//   getUsers();
// }, []);

// {loading ? (
//     <h2>Loading.....</h2>
//   ) : error ? (
//     <h2>Error ¯\_(ツ)_/¯</h2>
//   ) : () }

/**
 * Fetch user
 */

// const [user, setUser] = useState<t.User | undefined>();
// const [loading, setLoading] = useState<boolean>(false);
// const [error, setError] = useState<boolean>(false);

// const getUser = () => {
//   setLoading(true);
//   fetch(`http://localhost:3334/users/${userId}`)
//   .then((r) => r.json())
//   .then((r) => setUser(r))
//   .catch(() => setError(true))
//   .finally(() => setLoading(false));
// };
// useEffect(() => {
//   getUser();
// }, []);

// if (loading) return <h2>Loading.....</h2>;
// if (error) return <h2>Error ¯\_(ツ)_/¯</h2>;
// if (!user) return null;

// export type SharedProps = {
//     registerUser: (user: User) => void;
//     unregisterUser: (user: User) => void;
//     unregisteredUsers: User[];
//     registeredUsers: User[];
//     data: User[];
//   };
