import useStoreState from "../../../hooks/useStoreState";
import { Price } from "../../../models/price";

export const BtcPrice = () => {

    const { currentPrice } = useStoreState<Price>(state => state.price);

    return (<div>Current BTC price  :  {currentPrice}</div>)

};

