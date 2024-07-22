import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';
import { Price } from '../models/price';
//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

const refreshGap = 60*1000;

export const useGetBtcPrice = () => {
    const {
        data: price,
        error,
        isLoading,
    } = useSWRImmutable<Price, HttpError<string>>('/currentBtcPrice', get, { refreshInterval: refreshGap });
    if (error) {
        throw error;
    }
    return { price, isLoading };
}
