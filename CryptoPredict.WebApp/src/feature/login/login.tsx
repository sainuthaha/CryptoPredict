import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { stackItemStyles, stackStyles } from "../predict/predict.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { currentScoreActions } from "../predict/components/currentScoreSlice";
import { useGetUserScore } from "../../hooks/useGetUsersScore";

interface LoginProps {
    onLogin: (userId: string) => void;
}

const useSetScore = (userId: string) => {
    const dispatch = useDispatch();
    const scoreResponse = useGetUserScore(userId);

    useEffect(() => {
        if (userId && scoreResponse?.score) {
            const stableScore = {
                guessPrice: scoreResponse.score.guessPrice ?? 0,
                guessTime: new Date().toISOString(),
                score: scoreResponse.score.score ?? 0,
                userId: scoreResponse.score.userId ?? userId,
            };
            console.log("Setting score:", stableScore);
            dispatch(currentScoreActions.setScore(stableScore));
        }
    }, [userId, scoreResponse, dispatch]);

    return scoreResponse;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [userId, setUserId] = useState("");

    // Fetch the score only when a valid user ID is set

    const startGame = () => {
        console.log("hello");
        if (userId) {
            console.log("User ID entered:", userId); // Debug line
            onLogin(userId);  // Proceed to the game
        } else {
            alert("Please enter your user ID");
        }
    };

    return (
        <Stack horizontalAlign="center" styles={stackStyles}>
            <Stack.Item styles={stackItemStyles}>
                <TextField
                    placeholder="Enter your user ID"
                    onChange={(_, value) => {
                        setUserId(value || "");
                        console.log("Updated userId:", value); // Debug line
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            startGame();
                        }
                    }}
                />
            </Stack.Item>
            <Stack.Item styles={stackItemStyles}>
                <PrimaryButton text="Start Game" onClick={startGame} />
            </Stack.Item>
        </Stack>
    );
};

export default Login;
