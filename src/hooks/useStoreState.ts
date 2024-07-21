import { useSelector } from 'react-redux';
import { AppState } from '../app/store';

export default function useStoreState<T>(func: (state: AppState) => T | undefined) {
    const state = useNullableStoreState<T>(func);
    if (typeof state === 'undefined' || state === null) {
        throw { name: 'StateNotFound', message: `Unable to read state func[${func}]` };
    }
    return state;
}

export function useNullableStoreState<T>(func: (state: AppState) => T | undefined) {
    return useSelector<AppState, T | undefined>(func);
}
