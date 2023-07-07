import styles from './Header.module.scss'
import { ThemeSwitcher } from '../ThemeSwitcher'

export const Header = () => (
	<div className={styles.header}>
		<div className={styles.logo}>
			<span className={styles.title}>devFinder</span>
			<span className={styles.title2}>on Github</span>
		</div>

		<ThemeSwitcher />
	</div>
)
