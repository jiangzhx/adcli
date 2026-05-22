export declare const PaymentType: {
    readonly REALTIME: "PAYMENT_TYPE_REALTIME";
    readonly PREPAID: "PAYMENT_TYPE_PREPAID";
};
export type PaymentType = typeof PaymentType[keyof typeof PaymentType];
