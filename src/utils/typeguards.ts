import { GithubError, GithubUser } from 'types'

export const isGithubUser = (user: any): user is GithubUser => 'id' in user
export const isGithuError = (user: any): user is GithubError => 'message' in user
