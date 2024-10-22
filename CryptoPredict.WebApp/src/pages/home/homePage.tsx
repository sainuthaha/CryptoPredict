import { useEffect, useState } from "react";
import Login from "../../feature/login/login";
import AppDetails from "../../feature/appDetails/appDetails";
import { useGetUserScore } from "../../hooks/useGetUsersScore";
import { currentScoreActions } from "../../feature/predict/components/currentScoreSlice";
import { useDispatch } from "react-redux";
import Graph from "../../feature/graph/graph";

export const HomePage = () => {
    const [userId, setUserId] = useState("");
    const [isGameStarted, setIsGameStarted] = useState(false);
    
    const { score } = useGetUserScore(userId); 
    const dispatch = useDispatch();

    const onLogin = (userId: string) => {
        setUserId(userId);
        console.log("Logged in user ID:", userId); // Log user ID for debugging
    };

    useEffect(() => {
            const stableScore = {
                guessPrice: score?.guessPrice ?? 0,
                guessTime: new Date().toISOString(),
                score: score?.score ?? 0,
                userId: score?.userId ?? userId,
            };
            console.log("Setting score:", stableScore);
            dispatch(currentScoreActions.setScore(stableScore)); 
            if (userId ) {
            setIsGameStarted(true);}// Dispatch action to set score
        
    }, [userId, score, dispatch]); // Dependencies include userId and score

    const changeUser = () => {
        setIsGameStarted(false);
        setUserId("");
        window.location.reload();
    };

    return (
        <>
            <AppDetails />
            {!isGameStarted ? (
                <Login onLogin={onLogin} />
            ) : (
                <Graph userId={userId} />
            )}
        </>
    );
};
