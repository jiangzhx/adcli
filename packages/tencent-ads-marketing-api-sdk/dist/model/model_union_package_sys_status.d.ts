export declare const UnionPackageSysStatus: {
    readonly PASSED: "CHANNEL_PACKAGE_STATUS_PASSED";
    readonly REVIEWING: "CHANNEL_PACKAGE_STATUS_REVIEWING";
    readonly DENIED: "CHANNEL_PACKAGE_STATUS_DENIED";
    readonly DENIED_AGAIN: "CHANNEL_PACKAGE_STATUS_DENIED_AGAIN";
    readonly REVIEWING_AGAIN: "CHANNEL_PACKAGE_STATUS_REVIEWING_AGAIN";
    readonly ON_OFFLINE: "CHANNEL_PACKAGE_STATUS_ON_OFFLINE";
    readonly OFFLINE: "CHANNEL_PACKAGE_STATUS_OFFLINE";
    readonly DRAFT: "CHANNEL_PACKAGE_STATUS_DRAFT";
};
export type UnionPackageSysStatus = typeof UnionPackageSysStatus[keyof typeof UnionPackageSysStatus];
