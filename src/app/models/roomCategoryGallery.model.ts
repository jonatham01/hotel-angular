import { SafeResourceUrl } from "@angular/platform-browser";

export interface RoomCategoryGallery{
    id: bigint;
    tittle: string;
    description: string;
    imageUrl: string;
    categoryId: number;
    categoryName:string;
    image: SafeResourceUrl|null;



}
export interface RoomCategoryGalleryRequestDTO{
    tittle: string;
    description: string;
    categoryId: number | null;
}
