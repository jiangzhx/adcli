// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaAssetV2DetailReadV2DataAssetListAssetType, DpaAssetV2DetailReadV2DataAssetListAuditStatus, DpaAssetV2DetailReadV2DataAssetListSource, DpaAssetV2DetailReadV2DataAssetListStatus } from "../models";

export interface DpaAssetV2DetailReadV2ResponseDataAssetListInner {
  advertiser_id: number;
  asset_create_time: string;
  asset_id: number;
  asset_modify_time: string;
  asset_name: string;
  asset_type: DpaAssetV2DetailReadV2DataAssetListAssetType;
  audit_status: DpaAssetV2DetailReadV2DataAssetListAuditStatus;
  source: DpaAssetV2DetailReadV2DataAssetListSource;
  status: DpaAssetV2DetailReadV2DataAssetListStatus;
  unique_product_id: number;
}

