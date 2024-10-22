import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { useState } from "react";
import { stackItemStyles, stackStyles,buttonStyles } from "./login.css";
interface LoginProps {
    onLogin: (userId: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [userId, setUserId] = useState("");

    const startGame = () => {
        if (userId) {
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
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            startGame();
                        }
                    }}
                />
            </Stack.Item>
            <Stack.Item styles={stackItemStyles}>
                <PrimaryButton styles={buttonStyles} text="Start Game" onClick={startGame} />
            </Stack.Item>
        </Stack>
    );
};

export default Login;
