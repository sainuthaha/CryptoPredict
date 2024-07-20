import { Stack } from "@fluentui/react";
import { stackItemStyles, stackStyles } from "./predict.css";
import { BtcPrice } from "./components/btcPrice";
import { GuessPrice } from "./components/guessPrice";
import { GuessTimer } from "./components/guessTimer";
import { PlayerScore } from "./components/playerScore";

export const Predict = () => {
  return (
    <Stack horizontalAlign="center" styles={stackStyles}>
      <Stack.Item styles={stackItemStyles}><PlayerScore /></Stack.Item>
      <Stack.Item styles={stackItemStyles}><BtcPrice /></Stack.Item>
      <Stack.Item styles={stackItemStyles}><GuessPrice /></Stack.Item>
      <Stack.Item styles={stackItemStyles}><GuessTimer /></Stack.Item>
    </Stack>
  );

};
