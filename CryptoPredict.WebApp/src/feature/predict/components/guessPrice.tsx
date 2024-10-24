﻿

import { Button, IButtonStyles } from "@fluentui/react";
import { useEffect, useState } from "react";
import { UserScoreData } from "../../../models/score";
import useStoreState from "../../../hooks/useStoreState";
import { useDispatch } from "react-redux";
import { currentScoreActions } from "./currentScoreSlice";
import { useSetUserScore } from "../../../hooks/useSetUsersScore";
import { styles } from "../predict.css";

const greenButtonStyles: IButtonStyles = {
    root: {
        backgroundColor: '#4CAF50', // Darker green
        color: '#E0E0E0', // Light color for contrast
        marginRight: '10px',
        border: '1px solid #333', // Add a border to match the dark theme
        borderRadius: '5px', // Rounded corners
        transition: 'background-color 0.3s',
    },
    rootHovered: {
        backgroundColor: '#388E3C', // Slightly darker green on hover
    },
};

const redButtonStyles: IButtonStyles = {
    root: {
        backgroundColor: '#F44336', // Darker red
        color: '#E0E0E0', // Light color for contrast
        marginLeft: '10px',
        border: '1px solid #333', // Add a border to match the dark theme
        borderRadius: '5px', // Rounded corners
        transition: 'background-color 0.3s',
    },
    rootHovered: {
        backgroundColor: '#D32F2F', // Slightly darker red on hover
    },
};

export const GuessPrice = () => {
	const dispatch = useDispatch();
	const usersScoreData = useStoreState<UserScoreData>(state => state.score);
	const [lastGuess, setLastGuess] = useState<string | null>(null);
	const [guessTime, setGuessTime] = useState<string | null>(null);
	const price = useStoreState<number>(state => state.price);
	const [btcPrice, setBtcPrice] = useState<number>(price);
	const [countdown, setCountdown] = useState<number | null>(null);
	const { trigger: setUserScore } = useSetUserScore();
    let countdownInterval: NodeJS.Timeout;
	
	useEffect(() => {
		if (lastGuess && countdown && countdown >0) {
			countdownInterval=setInterval(() => {
				setCountdown(countdown => countdown !== null && countdown > 0 ? countdown - 1 : 0);
			}, 1000);
            
		}
        return () => clearInterval(countdownInterval);
	}, [countdown, lastGuess]);

	useEffect(() => {
		setBtcPrice(price);
	}, [price])

	useEffect(() => {
		if (lastGuess && guessTime && countdown == 0) {
			if ((lastGuess === 'up' && price > usersScoreData.guessPrice) ||
				(lastGuess === 'down' && price < usersScoreData.guessPrice)) {
				dispatch(currentScoreActions.setScore({ "guessPrice": btcPrice, "guessTime": new Date().toISOString(), "score": usersScoreData.score + 1, "userId": usersScoreData.userId }));
			}
			else if ((lastGuess === 'up' && price < usersScoreData.guessPrice) ||
				(lastGuess === 'down' && price > usersScoreData.guessPrice)) {
				dispatch(currentScoreActions.setScore({ "guessPrice": btcPrice, "guessTime": new Date().toISOString(), "score": usersScoreData.score - 1, "userId": usersScoreData.userId }));
			}
			else {
				
				dispatch(currentScoreActions.setScore({ "guessPrice": btcPrice, "guessTime": new Date().toISOString(), "score": usersScoreData.score, "userId": usersScoreData.userId }));

			}
			setLastGuess(null);
			setTimeout(() => {
				setUserScore();
			}, 1000);
		}

	}, [lastGuess, guessTime, dispatch, countdown, setUserScore, usersScoreData.score, price, usersScoreData.guessPrice, usersScoreData.userId, usersScoreData.guessTime, usersScoreData, btcPrice]);

	const makeGuess = (guess: string) => {
		
		if (!lastGuess) {
			setLastGuess(guess);
			setGuessTime(new Date().toISOString());
			setBtcPrice(price);
			dispatch(currentScoreActions.setScore({ "guessPrice": price, "guessTime": new Date().toISOString(), "score": usersScoreData.score, "userId": usersScoreData.userId }));

			setTimeout(() => {
				setUserScore();
			}, 2000);

			setCountdown(5);
		}
	};

	return (
		<>
		  <div style={styles.countdownContainer}>
			{countdown !== null ? (
			  <h2>⏳ Countdown: {countdown}</h2>
			) : (
			  <h2>🤔 Waiting for guess...</h2>
			)}
		  </div>
	  
		  {lastGuess !== null && (
			<div style={styles.resultContainer}>
			  <div style={styles.resultItem}>
				<span style={styles.label}>Selection:</span> 
				<span style={styles.value}>{lastGuess}</span>
			  </div>
			  <div style={styles.resultItem}>
				<span style={styles.label}>Guess Price:</span> 
				<span style={styles.value}>{usersScoreData.guessPrice}</span>
			  </div>
			</div>
		  )}
	  
		  <div style={styles.buttonContainer}>
			<Button
			  disabled={!!lastGuess}
			  styles={greenButtonStyles}
			  onClick={() => makeGuess('up')}
			>
			  ⬆ Up
			</Button>
			<Button
			  disabled={!!lastGuess}
			  styles={redButtonStyles}
			  onClick={() => makeGuess('down')}
			>
			  ⬇ Down
			</Button>
		  </div>
		</>
	  );
	  
};

