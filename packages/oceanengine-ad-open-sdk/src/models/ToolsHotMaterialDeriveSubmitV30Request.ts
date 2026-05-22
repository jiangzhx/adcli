// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsHotMaterialDeriveSubmitV30ExcludeStrategies, ToolsHotMaterialDeriveSubmitV30Strategies } from "../models";

export interface ToolsHotMaterialDeriveSubmitV30Request {
  advertiser_id: number;
  element_ids?: number[];
  exclude_strategies?: ToolsHotMaterialDeriveSubmitV30ExcludeStrategies[];
  material_ids: number[];
  remove_ai_watermark?: boolean;
  sticker_element_ids?: number[];
  strategies?: ToolsHotMaterialDeriveSubmitV30Strategies[];
}

