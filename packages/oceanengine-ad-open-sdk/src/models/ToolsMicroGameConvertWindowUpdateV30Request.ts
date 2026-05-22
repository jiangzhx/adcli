// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsMicroGameConvertWindowUpdateV30AccountType, ToolsMicroGameConvertWindowUpdateV30AssetType, ToolsMicroGameConvertWindowUpdateV30ConvertWindow } from "../models";

export interface ToolsMicroGameConvertWindowUpdateV30Request {
  account_id: number | string;
  account_type: ToolsMicroGameConvertWindowUpdateV30AccountType;
  asset_id: string;
  asset_type: ToolsMicroGameConvertWindowUpdateV30AssetType;
  convert_window: ToolsMicroGameConvertWindowUpdateV30ConvertWindow;
}

