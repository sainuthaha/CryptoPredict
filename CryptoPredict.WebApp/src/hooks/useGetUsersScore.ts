import useSWR from 'swr';
import { HttpError, get } from '../common/httpClient';
import { UserScoreData } from '../models/score';

export const useGetUserScore = (userId: string) => {
    // Early return if userId is undefined or empty
    const url = `/user/scoreData?userId=${userId}`;
    
    // Using SWR to fetch user score data
    const { data: score, error, isLoading } = useSWR<UserScoreData, HttpError<string>>(url, get);

    // Handle errors by logging and returning them
    if (error) {
        console.error("Error fetching user score:", error);
        return { score: null, isLoading: false, error }; // Return error in response
    }
    
    return { score, isLoading, error: null }; // Return the score and loading state
};
