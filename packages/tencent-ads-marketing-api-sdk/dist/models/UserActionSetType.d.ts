export declare const UserActionSetType: {
    readonly WEB: "USER_ACTION_SET_TYPE_WEB";
    readonly IOS: "USER_ACTION_SET_TYPE_IOS";
    readonly ANDROID: "USER_ACTION_SET_TYPE_ANDROID";
    readonly WECHAT: "USER_ACTION_SET_TYPE_WECHAT";
    readonly WECHAT_MINI_PROGRAM: "USER_ACTION_SET_TYPE_WECHAT_MINI_PROGRAM";
    readonly WECHAT_MINI_GAME: "USER_ACTION_SET_TYPE_WECHAT_MINI_GAME";
};
export type UserActionSetType = typeof UserActionSetType[keyof typeof UserActionSetType];
