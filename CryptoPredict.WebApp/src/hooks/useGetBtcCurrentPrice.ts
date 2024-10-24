﻿import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';
//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

const refreshGap = 5*1000;

export const useGetBtcPrice = () => {
    const {
        data: price,
        error,
        isLoading,
    } = useSWRImmutable<number, HttpError<string>>('/crypto/currentPrice', get, { refreshInterval: refreshGap });
    if (error) {
        throw error;
    }
    return { price, isLoading };
}
