import useStoreState from "../../../hooks/useStoreState";

export const BtcPrice = () => {

    const price = useStoreState<number>(state => state.price);
    return (<div>Current price  :  {price}</div>)

};