import { useQuery } from 'react-query'
import axios, { AxiosError } from 'axios'

type User = {
  id: number
  name: string
  email: string
  phone: string
}

export default function Home(): JSX.Element {
  const { isLoading, error, data } = useQuery<User[]>('users', () =>
    axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
      res.data
    )
  )

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>An error has occurred: {(error as AxiosError).message}</p>

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
