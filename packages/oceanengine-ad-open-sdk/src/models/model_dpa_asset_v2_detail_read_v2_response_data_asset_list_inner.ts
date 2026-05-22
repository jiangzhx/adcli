// Generated from oceanengine/ad_open_sdk_go models/model_dpa_asset_v2_detail_read_v2_response_data_asset_list_inner.go
// Do not edit manually.

import type { DpaAssetV2DetailReadV2DataAssetListAssetType, DpaAssetV2DetailReadV2DataAssetListAuditStatus, DpaAssetV2DetailReadV2DataAssetListSource, DpaAssetV2DetailReadV2DataAssetListStatus } from "../models/index";

export interface DpaAssetV2DetailReadV2ResponseDataAssetListInner {
  advertiser_id: number | string;
  asset_create_time: string;
  asset_id: number | string;
  asset_modify_time: string;
  asset_name: string;
  asset_type: DpaAssetV2DetailReadV2DataAssetListAssetType;
  audit_status: DpaAssetV2DetailReadV2DataAssetListAuditStatus;
  source: DpaAssetV2DetailReadV2DataAssetListSource;
  status: DpaAssetV2DetailReadV2DataAssetListStatus;
  unique_product_id: number | string;
}

