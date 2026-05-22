// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_jumpinfo_struct.go
// Do not edit manually.

import type { BackupsJumpinfoStruct, LandingPagePlatformType, PageSpec, PageType } from "../v3/index";

export interface JumpinfoStruct {
  page_type?: PageType;
  page_spec?: PageSpec;
  backups?: BackupsJumpinfoStruct[];
  jumpinfo_account_id?: number | string;
  platform_type?: LandingPagePlatformType;
}

