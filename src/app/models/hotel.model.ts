import { HotelPhoneResponseDTO } from "./hotelPhone.model";

export interface Hotel{
    hotelId: number;
    hotelName: string;
    hotelAddress: string;
    hotelCity: string;
    hotelState: string;
    hotelCountry: string;
    //hotelPhones: HotelPhone[];
    //roomCategories: RoomCategory[];
}

export interface HotelRequestDTO{
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
}

export interface HotelResponseDTO extends HotelRequestDTO{
    id: number;
    hotelPhones: HotelPhoneResponseDTO[];

}