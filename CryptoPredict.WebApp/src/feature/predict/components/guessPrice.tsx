import { Button, IButtonStyles } from "@fluentui/react";
import { useEffect, useState } from "react";
import { Score } from "../../../models/score";
import useStoreState from "../../../hooks/useStoreState";
import { useDispatch } from "react-redux";
import { currentScoreActions } from "./currentScoreSlice";
import { useSetUserScore } from "../../../hooks/useSetUsersScore";
import { useGetBtcMarketRange } from "../../../hooks/useGetBtcMarketRange";

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
    const score = useStoreState<Score>(state => state.score)

    const { trigger: setUserScore } = useSetUserScore(score);

    const [lastGuess, setLastGuess] = useState<string | null>(null);
    const [guessTime, setGuessTime] = useState<number | undefined>(undefined);
    const [commitTime, setCommitTime] = useState<number | undefined>(undefined);
    const { btcMarketRange, isLoading } = useGetBtcMarketRange(commitTime);
    const currentPrice = btcMarketRange?.currentPrice ?? 0;
    const previousPrice = btcMarketRange?.previousPrice ?? 0;
    const [countdown, setCountdown] = useState<number | null>(null);

    useEffect(() => {
        if (lastGuess && countdown && countdown == 5) {
            setInterval(() => {
                setCountdown(countdown => countdown !== null && countdown > 0 ? countdown - 1 : 0);
            }, 1000); // Decrease countdown by 1 every second  
        }
    }, [countdown, lastGuess]);

    useEffect(() => {
        if (lastGuess && guessTime && !isLoading && countdown == 0) {
            setCommitTime(Date.now());

            if ((lastGuess === 'up' && currentPrice > previousPrice) ||
                (lastGuess === 'down' && currentPrice < previousPrice)) {
                dispatch(currentScoreActions.setCurrentScore(score.score + 1));
                setUserScore();
            } else {
                dispatch(currentScoreActions.setCurrentScore(score.score - 1));
                setUserScore();
            }
            setLastGuess(null);
        }

    }, [lastGuess, guessTime, score, currentPrice, dispatch, previousPrice, commitTime, countdown, setUserScore, isLoading]);

    const makeGuess = (guess: string) => {
        if (!lastGuess) {
            setLastGuess(guess);
            setGuessTime(Date.now());
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

