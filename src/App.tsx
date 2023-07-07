import { useState } from 'react'

import { Container } from 'components/common/Container'
import { Search } from 'components/ui/Search'
import { Header } from 'components/ui/Header'
import { UserCard } from 'components/ui/UserCard'
import { Loading } from 'components/common/Loading'

import { GithubError, GithubUser, LocalGithubUser } from 'types'

import { isGithuError, isGithubUser } from 'utils/typeguards'
import { extractLocalUser } from 'utils/extract-local-user'

const BASE_URL = 'https://api.github.com/users/'

function App() {
	const [user, setUser] = useState<LocalGithubUser | GithubError | null>(null)
	const [isLoading, setLoading] = useState(false)

	const fetchUser = async (text: string) => {
		setLoading(true)
		try {
			const url = BASE_URL + text
			const res = await fetch(url)
			const data = (await res.json()) as GithubUser | GithubError

			if (isGithubUser(data)) {
				setUser(extractLocalUser(data))
			}
			if (isGithuError(data)) {
				setUser(data)
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message)
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<Container>
			<Header />
			<Search onSubmit={fetchUser} />
			{!isLoading ? user && <UserCard {...user} /> : <Loading />}
		</Container>
	)
}

export default App
