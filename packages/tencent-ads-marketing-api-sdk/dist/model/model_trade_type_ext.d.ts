export declare const TradeTypeExt: {
    readonly CHARGE: "CHARGE";
    readonly TRANSFER_IN: "TRANSFER_IN";
    readonly PAY: "PAY";
    readonly TRANSFER_BACK: "TRANSFER_BACK";
    readonly EXPIRE: "EXPIRE";
};
export type TradeTypeExt = typeof TradeTypeExt[keyof typeof TradeTypeExt];
