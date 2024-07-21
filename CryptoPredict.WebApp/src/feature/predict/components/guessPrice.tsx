import { Button, IButtonStyles } from "@fluentui/react";
import { useEffect, useRef, useState } from "react";
import { Score } from "../../../models/score";
import useStoreState from "../../../hooks/useStoreState";
import { Price } from "../../../models/price";
import { useDispatch } from "react-redux";
import { currentScoreActions } from "./currentScoreSlice";

const greenButtonStyles: IButtonStyles = {
    root: {
        backgroundColor: 'green',
        color: 'white',
        marginRight: '10px'
    },
};

const redButtonStyles: IButtonStyles = {
    root: {
        backgroundColor: 'red',
        color: 'white',
        marginLeft: '10px'
    },
};



export const GuessPrice = () => {
    const dispatch = useDispatch();
    const { score } = useStoreState<Score>(state => state.score)
    const { bitcoin } = useStoreState<Price>(state => state.price);
    const prevBtcPrice = useRef<number | undefined>();
    const currentPrice = bitcoin.usd;

    const [lastGuess, setLastGuess] = useState<string | null>(null);
    const [guessTime, setGuessTime] = useState<number | null>(null);

    useEffect(() => {
        prevBtcPrice.current = currentPrice;  
    }, [currentPrice]); 




    useEffect(() => {

        if (guessTime && Date.now() - guessTime >= 60000) {
            if ((lastGuess === 'up' && currentPrice > (prevBtcPrice.current ?? 0)) ||
                (lastGuess === 'down' && currentPrice < (prevBtcPrice.current ?? Infinity))) {  
                    dispatch(currentScoreActions.setCurrentScore(score + 1));

                } else {
                    dispatch(currentScoreActions.setCurrentScore(score - 1));

                }
                setLastGuess(null);
                setGuessTime(null);
            }
       
    }, [lastGuess, guessTime, score, currentPrice, dispatch]);

    const makeGuess = (guess:string) => {
        if (!lastGuess) {
            setLastGuess(guess);
            setGuessTime(Date.now());
        }
    };

    return (
        <div>
            <div>Score: {score}</div>
            <div>BTC Price: {currentPrice}</div>
            <Button disabled={!!lastGuess} styles={greenButtonStyles} onClick={() => makeGuess('up')}>Up</Button>
            <Button disabled={!!lastGuess} styles={redButtonStyles} onClick={() => makeGuess('down')}>Down</Button>
        </div>
    );
};
 
