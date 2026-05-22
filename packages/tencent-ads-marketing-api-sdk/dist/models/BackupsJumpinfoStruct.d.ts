import type { LandingPagePlatformType, PageSpec, PageType } from "../models";
export interface BackupsJumpinfoStruct {
    page_type?: PageType;
    page_spec?: PageSpec;
    jumpinfo_account_id?: number | string;
    platform_type?: LandingPagePlatformType;
}
