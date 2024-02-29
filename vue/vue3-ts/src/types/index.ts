export interface Star {
    id: string;
    name: string;
    age: number;
    info?: string;
}

export type stars = Array<Star>;