// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ComponentCleanStrategy } from "../models";

export interface TaskTypeDeleteCreativeAssetSpec {
  account_id?: number | string;
  component_id_list?: number[];
  image_id_list?: string[];
  video_id_list?: string[];
  component_clean_strategy?: ComponentCleanStrategy;
}

