export declare const WechatChannelsAdAccountStatus: {
    readonly PENDING: "PENDING";
    readonly CREATED: "CREATED";
    readonly EXPIRED: "EXPIRED";
    readonly AUDIT_PENDING: "AUDIT_PENDING";
    readonly AUDIT_REFUSED: "AUDIT_REFUSED";
    readonly FROZEN: "FROZEN";
    readonly BANNED: "BANNED";
    readonly DEACTIVATED: "DEACTIVATED";
    readonly CHECK_FAIL: "CHECK_FAIL";
    readonly PROCESSING_LOGOUT: "PROCESSING_LOGOUT";
};
export type WechatChannelsAdAccountStatus = typeof WechatChannelsAdAccountStatus[keyof typeof WechatChannelsAdAccountStatus];
