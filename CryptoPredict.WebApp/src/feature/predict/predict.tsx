import { Stack,Text } from "@fluentui/react";
import { stackItemStyles, stackStyles, textStyles } from "./predict.css";
import { BtcPrice } from "./components/btcPrice";
import { GuessPrice } from "./components/guessPrice";
import { CurrentScore } from "./components/currentScore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentPriceActions } from "./components/btcPriceSlice";
import { useGetBtcPrice } from "../../hooks/useGetBtcCurrentPrice";

const useSetPrice = () => {
	const dispatch = useDispatch();
	const { price, isLoading } = useGetBtcPrice();

	useEffect(() => {
		console.log(price);
		if (!isLoading) {
			dispatch(currentPriceActions.setCurrentPrice(price));
		}
	}, [price, dispatch, isLoading]);

	return { price, isLoading };
};

interface PredictProps {
	userId: string;
}

export const Predict = ({ userId}: PredictProps) => {
	useSetPrice();

	return (
		<Stack horizontalAlign="center" styles={stackStyles}>
			<Stack.Item styles={stackItemStyles}>
				<Text styles={textStyles}>User ID: {userId}</Text> 
			</Stack.Item>
			<Stack.Item styles={stackItemStyles}><CurrentScore /></Stack.Item>
			<Stack.Item styles={stackItemStyles}><BtcPrice /></Stack.Item>
			<Stack.Item styles={stackItemStyles}><GuessPrice /></Stack.Item> 
		</Stack>
	);
};

