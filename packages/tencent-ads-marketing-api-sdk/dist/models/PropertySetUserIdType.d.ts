export declare const PropertySetUserIdType: {
    readonly IMEI: "IMEI";
    readonly HASH_IMEI: "HASH_IMEI";
    readonly IDFA: "IDFA";
    readonly HASH_IDFA: "HASH_IDFA";
    readonly GDT_OPENID: "GDT_OPENID";
    readonly HASH_PHONE: "HASH_PHONE";
    readonly MAC: "MAC";
    readonly HASH_MAC: "HASH_MAC";
    readonly OAID: "OAID";
    readonly HASH_OAID: "HASH_OAID";
    readonly WECHAT_OPENID: "WECHAT_OPENID";
    readonly WECHAT_UNIONID: "WECHAT_UNIONID";
    readonly QQ: "QQ";
    readonly HASH_QQ: "HASH_QQ";
    readonly WUID: "WUID";
};
export type PropertySetUserIdType = typeof PropertySetUserIdType[keyof typeof PropertySetUserIdType];
