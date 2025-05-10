export interface RoomRequest{
    name:string,
    description:string,
    roomCategoryId:number;
    roomCategoryHotelId:number
    roomStatus:string
}

export interface RoomResponse extends RoomRequest{
    roomId:number;
    
}