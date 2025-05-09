export interface RoomAttribute{
    roomAttributeId: number;
    roomAttributeName: string;
    roomAttributeDescription: string;
    roomAttributePhotoUrl: string;
}
export interface RoomAttributeRequestDTO{
    roomAttributeName: string;
    roomAttributeDescription: string;
    roomCategoryId:number
}
export interface RoomAttributeResponseDTO{
    roomAttributeId: number;
    roomAttributeName: string;
    roomAttributeDescription: string;
    roomAttributePhotoUrl: string;
    roomCategoryId:number
}