export declare const WechatChannelsAuthStatus: {
    readonly PENDING: "PENDING";
    readonly AUTHORIZED: "AUTHORIZED";
    readonly CANCELLED: "CANCELLED";
    readonly REFUSED: "REFUSED";
    readonly EXPIRED: "EXPIRED";
    readonly AUDIT_PENDING: "AUDIT_PENDING";
    readonly AUDIT_REFUSED: "AUDIT_REFUSED";
    readonly PENDING_CONFIRM: "PENDING_CONFIRM";
};
export type WechatChannelsAuthStatus = typeof WechatChannelsAuthStatus[keyof typeof WechatChannelsAuthStatus];
