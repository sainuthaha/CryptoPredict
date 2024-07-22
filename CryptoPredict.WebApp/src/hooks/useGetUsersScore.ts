import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';
import { Score } from '../models/score';

export const useGetUserScore = () => {
  const {
    data: score,
    error,
      isLoading,
  } = useSWRImmutable<Score, HttpError<string>>('/userScore', get);
  if (error) {
    throw error;
  }
  return { score, isLoading };
}
