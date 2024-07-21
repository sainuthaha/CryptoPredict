import { Stack } from "@fluentui/react";
import { stackItemStyles, stackStyles } from "./predict.css";
import { BtcPrice } from "./components/btcPrice";
import { GuessPrice } from "./components/guessPrice";
import { GuessTimer } from "./components/guessTimer";
import { CurrentScore } from "./components/currentScore";
import { useGetUserScore } from "../../hooks/useGetUsersScore";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentScoreActions } from "./components/currentScoreSlice";
import { currentPriceActions } from "./components/btcPriceSlice";
import { useGetBtcPrice } from "../../hooks/useGetBtcCurrentPrice";

const useSetScore = () => {
    const dispatch = useDispatch();
    const scoreResponse = useGetUserScore();

    useEffect(() => {
        dispatch(currentScoreActions.setScore(scoreResponse.score))
    }, [scoreResponse, dispatch]);
    return scoreResponse;
};

const useSetPrice = () => {  
    const dispatch = useDispatch();  
    const { price, isLoading } = useGetBtcPrice();  
    console.log(price);
    useEffect(() => {  
        if(!isLoading) {  
            dispatch(currentPriceActions.setCurrentPrice(price));  
        }  
    }, [price, dispatch, isLoading]);  
      
    return { price, isLoading };  
};  

export const Predict = () => {

    useSetScore();
    setInterval(() => { useSetPrice },1);

    return (
        <Stack horizontalAlign="center" styles={stackStyles}>
            <Stack.Item styles={stackItemStyles}><CurrentScore /></Stack.Item>
            <Stack.Item styles={stackItemStyles}><BtcPrice /></Stack.Item>
            <Stack.Item styles={stackItemStyles}><GuessPrice /></Stack.Item>
            <Stack.Item styles={stackItemStyles}><GuessTimer /></Stack.Item>
        </Stack>
    );

};
