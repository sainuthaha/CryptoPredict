import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';
import { MarketRange } from '../models/marketRange';
import { useEffect, useState } from 'react';

const refreshGap = 60* 1000;

export const useGetBtcMarketRange =(coin:string)=> {
    const to = Math.floor(Date.now() / 1000);
    const from = to - 60 * 60; // Last 1 hour
    const newUrl = `/crypto/marketRange/${coin}?fromEpoch=${from}&toEpoch=${to}`;

    const [url, setUrl] = useState(newUrl);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const to = Math.floor(Date.now() / 1000);
            const from = to - 60 * 60; // Last 1 hour
            const newUrl = `/crypto/marketRange/${coin}?fromEpoch=${from}&toEpoch=${to}`;
            setUrl(newUrl);
        }, refreshGap);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    console.log(url);
    const {
        data: marketRange,
        error,
        isLoading,
    } = useSWRImmutable<MarketRange, HttpError<string>>(url, get,{ refreshInterval: refreshGap });
    if (error) {
        throw error;
    }
    return { marketRange, isLoading };
}
