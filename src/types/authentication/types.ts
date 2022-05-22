export type Field = {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    notes: string;
}

export type UserDetail = {
    id?: number;
    email: string;
    password: string;
    passwordConfirmation?: string; 
}