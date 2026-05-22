import type { LandingPagePlatformType, PageSpec, PageType } from "../v3/index";
export interface BackupsJumpinfoStruct {
    page_type?: PageType;
    page_spec?: PageSpec;
    jumpinfo_account_id?: number | string;
    platform_type?: LandingPagePlatformType;
}
