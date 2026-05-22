// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaAssetV2ListV2DataAssetListAssetType, DpaAssetV2ListV2DataAssetListAuditStatus, DpaAssetV2ListV2DataAssetListSource, DpaAssetV2ListV2DataAssetListStatus } from "../models";

export interface DpaAssetV2ListV2ResponseDataAssetListInner {
  advertiser_id: number;
  asset_create_time: string;
  asset_id: number;
  asset_modify_time: string;
  asset_name: string;
  asset_type: DpaAssetV2ListV2DataAssetListAssetType;
  audit_status: DpaAssetV2ListV2DataAssetListAuditStatus;
  source: DpaAssetV2ListV2DataAssetListSource;
  status: DpaAssetV2ListV2DataAssetListStatus;
  unique_product_id: number;
}

