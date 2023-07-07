import { UserStat } from 'components/ui/UserCard/UserStat'
import styles from './UserCard.module.scss'
import { GithubError, LocalGithubUser } from 'types'
import { UserTitle } from 'components/ui/UserCard/UserTitle'
import { UserInfo } from 'components/ui/UserCard/UserInfo'
import { NothingFound } from 'components/common/NothingFound'

type UserCardProps = LocalGithubUser | GithubError

export const UserCard = (props: UserCardProps) => {
	if ('message' in props) {
		return <NothingFound />
	}

	return (
		<div className={styles.userCard}>
			<img src={props.avatar} alt={props.login} className={styles.avatar} />
			<UserTitle created={props.created} login={props.login} name={props.name} />
			<p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
				{props.bio || 'У данного профиля нет доп. информации'}
			</p>
			<UserStat repos={props.repos} followers={props.followers} following={props.following} />
			<UserInfo
				blog={props.blog}
				company={props.company}
				location={props.location}
				twitter={props.twitter}
			/>
		</div>
	)
}
