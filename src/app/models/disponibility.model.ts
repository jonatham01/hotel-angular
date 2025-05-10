import { DisponibilityRoom } from "./disponibilityRoom.model";

export interface Disponibility {
    id: bigint;
    categoryId: number;
    categoryName: string;
    date: Date;
    quantity: number;
    occupancy: number;
    disponibilityLevel: number;
    dontAvailableRooms: DisponibilityRoom[];
  }

export interface DisponibilityRequestDTO {
    categoryId: number;
    categoryName: string;
    date: Date;
    quantity: number;
    occupancy: number;
    disponibilityLevel: number;
  }