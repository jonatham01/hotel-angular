export interface PaymentTransaction{
    paymentCashId: number;
    paymentCashTotal: number;
    paymentCashKind: string;
    paymentCashDateTime: Date;


}
export interface PaymentTransactionRequestDTO extends Omit<PaymentTransaction,'paymentCash'>{}

export interface PaymentTransactionResponseDTO{
    id: number;
    total: number;
    kind: string;
    dateTime: Date;
    paymentId: string;
    clientId: bigint;

}