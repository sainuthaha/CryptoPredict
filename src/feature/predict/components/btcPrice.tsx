import { useGetBtcPrice } from "../../../hooks/useGetBtcCurrentPrice";

export const BtcPrice = () => {

    const { price,isLoading } = useGetBtcPrice();

    return (
        isLoading ? <div>Loading...</div> :
            <div>Bitcoin price  :  {price?.bitcoin.usd}</div>
    )

};

