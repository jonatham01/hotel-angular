export interface RoomCategoryGallery{
    id: bigint;
    tittle: string;
    roomGalleryDescription: string;
    roomGalleryImageUrl: string;
    roomCategoryId: number;
}
export interface RoomCategoryGalleryRequestDTO{
    tittle: string;
    description: string;
    categoryId: number;
    image: File;
}
