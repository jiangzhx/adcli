// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { DataPlatform } from "../models";

export interface CustomTagsAddRequest {
  account_id?: number | string;
  parent_tag_id?: number | string;
  name?: string;
  description?: string;
  tag_code?: string;
  platform?: DataPlatform;
}

