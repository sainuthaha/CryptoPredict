import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { stackItemStyles, stackStyles } from "../predict/predict.css";
import { useState } from "react";
interface LoginProps {
    onLogin: (userId: string) => void;
}  

const Login: React.FC<LoginProps>= ({ onLogin }) => {
    const [userId, setUserId] = useState("");

    const startGame = () => {
        if (userId) {
            onLogin(userId);
        } else {
            alert("Please enter your user ID");
        }
    };

    return (
        <Stack horizontalAlign="center" styles={stackStyles}>
            <Stack.Item styles={stackItemStyles}>
                <TextField placeholder="Enter your user ID" onChange={(_, value) => setUserId(value || "")} />
            </Stack.Item>
            <Stack.Item styles={stackItemStyles}>
                <PrimaryButton text="Start Game" onClick={startGame} />
            </Stack.Item>
        </Stack>
    );
};

export default Login;  
