import useSWRMutation from 'swr/mutation';
import { HttpError, put } from '../common/httpClient';
import { UserScoreData } from '../models/score';

export const useSetUserScore = (usersScoreData: UserScoreData) => {
    const url = '/userScore';
    const { data, error, isMutating, trigger } = useSWRMutation<
        UserScoreData,
        HttpError<UserScoreData>
    >(url, () => put(url, { arg: usersScoreData }), { revalidate: false });

    return {
    trigger,
    data,
    isMutating,
    error,
  };
}
