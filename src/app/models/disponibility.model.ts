import { DisponibilityRoom } from "./disponibilityRoom.model";

export interface disponibility {
    id: bigint;
    categoryId: number;
    categoryName: string;
    date: Date;
    quantity: number;
    occupancy: number;
    disponibilityLevel: number;
    dontAvailableRooms: DisponibilityRoom[];
  }

export interface disponibilityRequestDTO {
    categoryId: number;
    categoryName: string;
    date: Date;
    quantity: number;
    occupancy: number;
    disponibilityLevel: number;
  }