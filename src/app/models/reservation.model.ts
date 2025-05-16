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
    reservationStartDate: Date;
    reservationEndDate: Date;
    reservationTotalValue: number;
    reservationHotelId: number;
    reservationRoomCategoryId: number;
    reservationClientId: bigint;
    paymentId:string;


}

export interface ReservationResponseDTO extends Omit<Reservation,'reservationPaymentStatus'> {
    reservationHotelId: number;
    reservationRoomId: number;
    reservationPaymentId: string;
    reservationClientId: bigint;
}