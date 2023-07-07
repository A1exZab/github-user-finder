import { LocalGithubUser } from 'types'
import styles from './UserStat.module.scss'

export interface UserStatProps extends Pick<LocalGithubUser, 'repos' | 'followers' | 'following'> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
	<div className={styles.userStat}>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Репозитории</div>
			<div className={styles.infoNumber}>{repos}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Подписки</div>
			<div className={styles.infoNumber}>{following}</div>
		</div>
		<div className={styles.info}>
			<div className={styles.infoTitle}>Подписчики</div>
			<div className={styles.infoNumber}>{followers}</div>
		</div>
	</div>
)
