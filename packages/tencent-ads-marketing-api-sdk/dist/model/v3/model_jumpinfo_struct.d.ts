import type { BackupsJumpinfoStruct, LandingPagePlatformType, PageSpec, PageType } from "../v3/index";
export interface JumpinfoStruct {
    page_type?: PageType;
    page_spec?: PageSpec;
    backups?: BackupsJumpinfoStruct[];
    jumpinfo_account_id?: number | string;
    platform_type?: LandingPagePlatformType;
}
