// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsHotMaterialDeriveSubmitV30ExcludeStrategies, ToolsHotMaterialDeriveSubmitV30Strategies } from "../models";

export interface ToolsHotMaterialDeriveSubmitV30Request {
  advertiser_id: number | string;
  element_ids?: number | string[];
  exclude_strategies?: ToolsHotMaterialDeriveSubmitV30ExcludeStrategies[];
  material_ids: number | string[];
  remove_ai_watermark?: boolean;
  sticker_element_ids?: number | string[];
  strategies?: ToolsHotMaterialDeriveSubmitV30Strategies[];
}

