import useStoreState from "../../../hooks/useStoreState";
import { UserScoreData } from "../../../models/score";

export const CurrentScore = () => {

    const { score } = useStoreState<UserScoreData>(state => state.score)
    return (
            <div>Score :{score}</div>
    )

};
