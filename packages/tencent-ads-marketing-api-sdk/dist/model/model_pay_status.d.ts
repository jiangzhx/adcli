export declare const PayStatus: {
    readonly PENDING: "PAY_PENDING";
    readonly OK: "PAY_OK";
    readonly REFUND: "PAY_REFUND";
    readonly STATUS_FREE: "PAY_STATUS_FREE";
    readonly STATUS_PAID: "PAY_STATUS_PAID";
    readonly STATUS_MEMBER: "PAY_STATUS_MEMBER";
};
export type PayStatus = typeof PayStatus[keyof typeof PayStatus];
