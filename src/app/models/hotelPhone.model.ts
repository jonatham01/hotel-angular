export interface HotelPhone{
    number:string
}

export interface HotelPhoneRequestDTO extends HotelPhone{
    hotelId:number
}

export interface HotelPhoneResponseDTO{
    hotelNumber:string;
    hotelName:string

}