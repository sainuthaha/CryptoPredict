import { Score } from "../../../models/score";
import useStoreState from "../../../hooks/useStoreState";

export const CurrentScore = () => {

    const { score } = useStoreState<Score>(state => state.score)
    return (
            <div>Score :{score}</div>
    )

};
