// Generated from tencentad/marketing-api-go-sdk pkg/model/model_single_update_failed_scenes.go
// Do not edit manually.

import type { DataNexusScene, SingleUpdateFailedAssetArray } from "../model/index";

export interface SingleUpdateFailedScenes {
  scene?: DataNexusScene;
  asset_ids?: SingleUpdateFailedAssetArray[];
  fail_reason?: string;
}

