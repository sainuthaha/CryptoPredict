import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';

const refreshGap = 3 * 60 * 1000;

export const useGetBtcPrice = () => {
  const {
    data: score,
    error,
    isLoading,
  } = useSWRImmutable<string, HttpError<string>>('/getUsersScore', get, { refreshInterval: refreshGap });
  if (error) {
    throw error;
  }
  return { score, isLoading };
}
