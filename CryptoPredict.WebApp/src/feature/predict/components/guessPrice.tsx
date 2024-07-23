import { Button, IButtonStyles } from "@fluentui/react";
import { useEffect, useState } from "react";
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
    const usersScoreData = useStoreState<UserScoreData>(state => state.score);

    const [lastGuess, setLastGuess] = useState<string | null>(null);
    const [guessTime, setGuessTime] = useState<string |null>(null);
    const price = useStoreState<number>(state => state.price);
    const [btcPrice, setBtcPrice] = useState<number>(price);
    const [countdown, setCountdown] = useState<number | null>(null);
    const { trigger: setUserScore } = useSetUserScore();

    useEffect(() => {
        if (lastGuess && countdown && countdown == 30) {
            setInterval(() => {
                setCountdown(countdown => countdown !== null && countdown > 0 ? countdown - 1 : 0);
            }, 1000);
        }
    }, [countdown, lastGuess]);

    useEffect(() => {
        setBtcPrice(price);
    }, [price])

    useEffect(() => {
      //  usersScoreDataRef.current = usersScoreData;
        if (lastGuess && guessTime && countdown == 0) {

            if ((lastGuess === 'up' && price > usersScoreData.guessPrice) ||
                (lastGuess === 'down' && price < usersScoreData.guessPrice)) {
                dispatch(currentScoreActions.setScore({ "guessPrice": btcPrice, "guessTime": new Date().toISOString(), "score": usersScoreData.score, "userId": usersScoreData.userId }));

            } else {
                dispatch(currentScoreActions.setScore({ "guessPrice": btcPrice, "guessTime": new Date().toISOString(), "score": usersScoreData.score, "userId": usersScoreData.userId }));

            }
            setLastGuess(null);
            setTimeout(() => {
                setUserScore();
            }, 2000);
        }

    }, [lastGuess, guessTime, dispatch, countdown, setUserScore, usersScoreData.score, price, usersScoreData.guessPrice, usersScoreData.userId, usersScoreData.guessTime, usersScoreData, btcPrice]);

    const makeGuess = (guess: string) => {
        if (!lastGuess) {
            console.log(price);
            setLastGuess(guess);
            setGuessTime( new Date().toISOString());
            setBtcPrice(price);
            dispatch(currentScoreActions.setScore({ "guessPrice": btcPrice, "guessTime": new Date().toISOString(), "score": usersScoreData.score, "userId": usersScoreData.userId }));
            //dispatch(currentScoreActions.setGuessTime(guessTime));
          //  dispatch(currentScoreActions.setGuessPrice(price));
            setTimeout(() => {
                setUserScore();
            }, 2000);  // delay of 2 seconds 
           
            setCountdown(30);
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

