export declare const PayStatus: {
    readonly FREE: "PAY_STATUS_FREE";
    readonly PAID: "PAY_STATUS_PAID";
    readonly MEMBER: "PAY_STATUS_MEMBER";
};
export type PayStatus = typeof PayStatus[keyof typeof PayStatus];
