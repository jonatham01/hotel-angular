export interface Client{
    idNumber: bigint;
    typeIdentifier: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    status: string;
    originCountry: string;
    liveCountry: string;
    kind: string;
    birthDate: Date;
}

export interface ClientResponseDTO extends Client{
    reservationCount: number;
}