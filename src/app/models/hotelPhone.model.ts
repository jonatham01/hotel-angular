export interface HotelPhone{
    id:number,
    number:string
}

export interface HotelPhoneRequestDTO {
    number:string
    hotelId:number
}

export interface HotelPhoneResponseDTO{
    id:number,
    hotelNumber:string;
    hotelName:string

}