export interface RoomRequest{
    name:string,
    description:string,
    roomCategoryId:number|null;
    roomCategoryHotelId:number
    roomStatus:string
}

export interface RoomResponse extends RoomRequest{
    roomId:number;
     categoryName:string;
    
}