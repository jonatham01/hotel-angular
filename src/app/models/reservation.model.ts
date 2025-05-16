export interface Reservation{
    reservationId: bigint;
    reservationStartDate: Date;
    reservationEndDate: Date;
    reservationTotalValue: number;
    reservationCheckinStatus: string;
    reservationCheckoutStatus: string;
    reservationPaymentStatus: string;
}
export interface ReservationRequestDTO {
    reservationStartDate: Date | null;
    reservationEndDate: Date | null;
    reservationTotalValue: number | null;
    reservationHotelId: number | null;
    reservationRoomCategoryId: number | null;
    reservationClientId: bigint | null;
    paymentId:string | null;


}

export interface ReservationResponseDTO extends Omit<Reservation,'reservationPaymentStatus'> {
    reservationHotelId: number;
    reservationRoomId: number;
    reservationPaymentId: string;
    reservationClientId: bigint;
    reservationRoomName:string;
    reservationClientName:string;
}