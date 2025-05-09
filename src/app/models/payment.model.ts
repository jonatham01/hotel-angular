export interface Payment{
    id: string;
    paymentTotalAmount: number;
    paymentDate: Date;
    paymentClientId: bigint;
}

export interface PaymentRequestDTO extends Omit<Payment,'id'>{};