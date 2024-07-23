import { PrimaryButton, Stack,Text } from "@fluentui/react";
import { stackItemStyles, stackStyles } from "./predict.css";
import { BtcPrice } from "./components/btcPrice";
import { GuessPrice } from "./components/guessPrice";
import { CurrentScore } from "./components/currentScore";
import { useGetUserScore } from "../../hooks/useGetUsersScore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentScoreActions } from "./components/currentScoreSlice";
import { currentPriceActions } from "./components/btcPriceSlice";
import { useGetBtcPrice } from "../../hooks/useGetBtcCurrentPrice";

const useSetScore = (userId: string) => {
	const dispatch = useDispatch();
	//const userId = "sainu1";
	const scoreResponse = useGetUserScore(userId);
	useEffect(() => {
		dispatch(currentScoreActions.setScore({ "guessPrice": scoreResponse.score?.guessPrice ?? 0, "guessTime": new Date().toISOString(), "score": scoreResponse.score?.score ?? 0, "userId": scoreResponse.score?.userId ?? userId }));
	}, [scoreResponse, dispatch, userId]);
	return scoreResponse;
};

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
	onChange: () => void;
}

export const Predict = ({ userId, onChange }: PredictProps) => {

	useSetScore(userId);
	useSetPrice();

	return (
		<Stack horizontalAlign="center" styles={stackStyles}>
			<Stack.Item styles={stackItemStyles}>
				<Text>User ID: {userId}</Text> 
			</Stack.Item>
			<Stack.Item styles={stackItemStyles}><CurrentScore /></Stack.Item>
			<Stack.Item styles={stackItemStyles}><BtcPrice /></Stack.Item>
			<Stack.Item styles={stackItemStyles}><GuessPrice /></Stack.Item>
			<Stack.Item styles={stackItemStyles}><PrimaryButton text="Change User" onClick={onChange} /></Stack.Item>
		</Stack>
	);
};

