export interface UserScoreData{
    userId: string;
    score: number;
    guessTime: string|null;
    guessPrice: number;
    rowkey?: string | null;
    partitionKey?: string | null;
    eTag?: string | null;
    timestamp?: string | null;
}