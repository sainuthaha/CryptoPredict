import { Button, IButtonStyles } from "@fluentui/react";
import { useEffect, useRef, useState } from "react";
import { UserScoreData } from "../../../models/score";
import useStoreState from "../../../hooks/useStoreState";
import { useDispatch } from "react-redux";
import { currentScoreActions } from "./currentScoreSlice";
import { useSetUserScore } from "../../../hooks/useSetUsersScore";

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
    const usersScoreData = useStoreState<UserScoreData>(state => state.score)
    console.log(usersScoreData);
    const [lastGuess, setLastGuess] = useState<string | null>(null);
    const [guessTime, setGuessTime] = useState<string | undefined>(undefined);
    const price = useStoreState<number>(state => state.price.currentPrice);
    const [countdown, setCountdown] = useState<number | null>(null);
    const usersScoreDataRef = useRef(usersScoreData);
    const { trigger: setUserScore } = useSetUserScore(usersScoreDataRef.current);


    useEffect(() => {
        if (lastGuess && countdown && countdown == 5) {
            setInterval(() => {
                setCountdown(countdown => countdown !== null && countdown > 0 ? countdown - 1 : 0);
            }, 1000);
        }
    }, [countdown, lastGuess]);

    useEffect(() => {
        usersScoreDataRef.current = usersScoreData;
        if (lastGuess && guessTime && countdown == 0) {

            if ((lastGuess === 'up' && price > usersScoreDataRef.current.guessPrice) ||
                (lastGuess === 'down' && price < usersScoreDataRef.current.guessPrice)) {
                dispatch(currentScoreActions.setCurrentScore(usersScoreDataRef.current.score + 1));

            } else {
                dispatch(currentScoreActions.setCurrentScore(usersScoreDataRef.current.score - 1));

            }
            setLastGuess(null);
            setUserScore();
        }

    }, [lastGuess, guessTime, dispatch, countdown, setUserScore, usersScoreData.score, price, usersScoreData.guessPrice, usersScoreData.userId, usersScoreData.guessTime, usersScoreData]);

    const makeGuess = (guess: string) => {
        if (!lastGuess) {
            setLastGuess(guess);
            setGuessTime(Date.now().toString());
            console.log("guessTime", guessTime);
            dispatch(currentScoreActions.setGuessTime(guessTime));
            setUserScore();
            setCountdown(5);
        }
    };

    return (
        <>
            <div>
                {countdown !== null ? `Countdown: ${countdown}` : 'Waiting for guess...'}
            </div>
            <br>
            </br>
            <div>
                <Button disabled={!!lastGuess} styles={greenButtonStyles} onClick={() => makeGuess('up')}>Up</Button>
                <Button disabled={!!lastGuess} styles={redButtonStyles} onClick={() => makeGuess('down')}>Down</Button>
            </div>
        </>
    );
};

