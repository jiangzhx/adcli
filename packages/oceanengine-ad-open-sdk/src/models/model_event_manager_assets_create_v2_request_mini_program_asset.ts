// 由 oceanengine/ad_open_sdk_go models/model_event_manager_assets_create_v2_request_mini_program_asset.go 生成
// 不要手动编辑。

import type { EventManagerAssetsCreateV2MiniProgramAssetMiniProgramType } from "../models/index";

export interface EventManagerAssetsCreateV2RequestMiniProgramAsset {
  instance_id: number | string;
  mini_program_id: string;
  mini_program_name: string;
  mini_program_type: EventManagerAssetsCreateV2MiniProgramAssetMiniProgramType;
}

