// Generated from oceanengine/ad_open_sdk_go models/model_dpa_assets_detail_read_v2_response_data_list_inner.go
// Do not edit manually.

import type { DpaAssetsDetailReadV2DataListAssetType, DpaAssetsDetailReadV2DataListAuditStatus, DpaAssetsDetailReadV2DataListSource, DpaAssetsDetailReadV2DataListStatus } from "../models/index";

export interface DpaAssetsDetailReadV2ResponseDataListInner {
  advertiser_id?: number | string;
  asset_create_time?: string;
  asset_id?: number | string;
  asset_modify_time?: string;
  asset_type?: DpaAssetsDetailReadV2DataListAssetType;
  audit_status?: DpaAssetsDetailReadV2DataListAuditStatus;
  platform_id?: number | string;
  product_id?: number | string;
  source?: DpaAssetsDetailReadV2DataListSource;
  status?: DpaAssetsDetailReadV2DataListStatus;
}

