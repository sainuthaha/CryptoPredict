import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';
import { Score } from '../models/score';

const refreshGap = 3 * 60 * 1000;

export const useGetUserScore = () => {
  const {
    data: score,
    error,
      isLoading,
  } = useSWRImmutable<Score, HttpError<string>>('/userScore', get, { refreshInterval: refreshGap });
  if (error) {
    throw error;
  }
  return { score, isLoading };
}
