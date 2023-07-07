import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import styles from './Search.module.scss'
import { Button } from 'components/common/Button'

interface SearchProps {
	onSubmit: (text: string) => void
}

type FormFields = {
	username: HTMLInputElement
}

export const Search = ({ onSubmit }: SearchProps) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
		event.preventDefault()
		const text = event.currentTarget.username.value
		if (text) {
			onSubmit(text.trim())
			event.currentTarget.reset()
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} autoComplete='off'>
				<div className={styles.search}>
					<label htmlFor='search' className={styles.label}>
						<SearchIcon />
					</label>
					<input
						type='text'
						className={styles.textField}
						id='search'
						name='username'
						placeholder='Найти пользователя...'
					/>
					<Button>Найти</Button>
				</div>
			</form>
		</>
	)
}
