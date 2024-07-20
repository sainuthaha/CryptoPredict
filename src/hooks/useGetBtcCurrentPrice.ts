import useSWRImmutable from 'swr/immutable';
import { HttpError, get } from '../common/httpClient';
//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
const refreshGap = 3 * 60 * 1000;

export const useGetBtcPrice = () => {
 const {
    data: price,
    error,
    isLoading,
  } = useSWRImmutable<string, HttpError<string>>('/getCurrentPrice', get, { refreshInterval: refreshGap });
  if (error) {
    throw error;
  }
  return { price, isLoading };
}
