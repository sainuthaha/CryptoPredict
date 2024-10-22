import useSWRMutation from 'swr/mutation';
import { HttpError, put } from '../common/httpClient';
import { UserScoreData } from '../models/score';
import useStoreState from './useStoreState';

export const useSetUserScore = () => {
    const usersScoreData = useStoreState<UserScoreData>(state => state.score);
    const url = '/user/scoreData';
    const { data, error, isMutating, trigger } = useSWRMutation<
        UserScoreData,
        HttpError<UserScoreData>
    >(url, () => put(url, { arg: usersScoreData }), { revalidate: true });

    return {
    trigger,
    data,
    isMutating,
    error,
  };
}
