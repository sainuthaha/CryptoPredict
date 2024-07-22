import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';
import { MarketRange } from '../models/marketRange';
//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

export const useGetBtcMarketRange = (timestamp: number | undefined) => {
    const url = `/btcPrice/${timestamp}`;
    console.log(url);
    const {
        data: btcMarketRange,
        error,
        isLoading,
    } = useSWRImmutable<MarketRange, HttpError<string>>(url, get);
    if (error) {
        throw error;
    }
    return { btcMarketRange, isLoading };
}
