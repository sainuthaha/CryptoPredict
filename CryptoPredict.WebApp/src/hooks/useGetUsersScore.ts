import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';
import { UserScoreData } from '../models/score';

export const useGetUserScore = (userId: string) => {
	const url = `/user/scoreData?userId=${userId}`;
	const {
		data: score,
		error,
		isLoading,
	} = useSWRImmutable<UserScoreData, HttpError<string>>(url, get);
	if (error) {
		console.error(error);
		throw error;
	}

	console.log(score);
	return { score, isLoading };
}  
