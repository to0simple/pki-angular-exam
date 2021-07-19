export interface Equipment {
    id?: string;
    model?: string;
    brand?: string;
    weight?: string;
    manufactureDate?: string;
    [key: string]: string | undefined;
}
