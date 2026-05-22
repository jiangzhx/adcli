// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_task_type_delete_creative_asset_spec.go
// Do not edit manually.

import type { ComponentCleanStrategy } from "../v3/index";

export interface TaskTypeDeleteCreativeAssetSpec {
  account_id?: number | string;
  component_id_list?: number[];
  image_id_list?: string[];
  video_id_list?: string[];
  component_clean_strategy?: ComponentCleanStrategy;
}

