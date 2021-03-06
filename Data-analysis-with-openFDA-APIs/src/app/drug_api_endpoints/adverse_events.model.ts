export interface AdverseEvents {
    id: string;
    name: string;
    duration: number;
    calories: number;
    date?: Date;
    state?: 'completed' | 'cancelled' | null;
}
