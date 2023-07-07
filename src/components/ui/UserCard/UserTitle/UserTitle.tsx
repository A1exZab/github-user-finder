import { LocalGithubUser } from 'types'
import styles from './UserTitle.module.scss'

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> {}

const localDate = new Intl.DateTimeFormat('ru', {
	day: 'numeric',
	month: 'short',
	year: 'numeric'
})

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
	const joinedDate = localDate.format(new Date(created))

	return (
		<div className={styles.userTitle}>
			<h2>{name ? name : login[0].toUpperCase() + login.slice(1)}</h2>
			<h3>{login}</h3>
			<div>
				<span>Зарегистрирован</span>
				<span>{joinedDate}</span>
			</div>
		</div>
	)
}
