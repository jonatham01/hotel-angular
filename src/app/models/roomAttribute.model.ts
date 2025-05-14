import { SafeResourceUrl } from "@angular/platform-browser";

export interface RoomAttribute{
    roomAttributeId: number;
    roomAttributeName: string;
    roomAttributeDescription: string;
    roomAttributePhotoUrl: string;
}
export interface RoomAttributeRequestDTO{
    roomAttributeName: string;
    roomAttributeDescription: string;
    roomCategoryId:number |null;
}
export interface RoomAttributeResponseDTO{
    roomAttributeId: number;
    roomAttributeName: string;
    roomAttributeDescription: string;
    roomAttributePhotoUrl: string;
    roomCategoryId:number
    image: SafeResourceUrl|null;
}