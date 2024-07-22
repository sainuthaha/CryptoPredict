import useSWRMutation from 'swr/mutation';
import { HttpError, put } from '../common/httpClient';
import { Score } from '../models/score';

export const useSetUserScore = (score: Score) => {
    const url = '/userScore';
    const { data, error, isMutating, trigger } = useSWRMutation<
   Score,
    HttpError<Score>
  >(url, () => put(url, { arg: score }), { revalidate: false });

    return {
    trigger,
    data,
    isMutating,
    error,
  };
}
