import { Hotel } from "./hotel.model";
import { RoomAttribute } from "./roomAttribute.model";
import { RoomCategoryGallery } from "./roomCategoryGallery.model";

export interface RoomCategory{
    roomCategoryId: number;
    roomCategoryName: string;
    roomCategoryPrice: number;
    roomCategoryDescription: string;

}
export interface RoomCategoryRequestDTO {
    roomCategoryName: string;
    roomCategoryPrice:  number | null;
    roomCategoryDescription: string;
    roomCategoryHotelId: number;

}
export interface RoomCategoryResponseDTO extends RoomCategory{
    hotel: Hotel;
    roomAttributes:RoomAttribute[];
    roomCategoryGalleries: RoomCategoryGallery[];

}