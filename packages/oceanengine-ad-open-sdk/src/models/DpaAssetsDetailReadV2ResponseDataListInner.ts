// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaAssetsDetailReadV2DataListAssetType, DpaAssetsDetailReadV2DataListAuditStatus, DpaAssetsDetailReadV2DataListSource, DpaAssetsDetailReadV2DataListStatus } from "../models";

export interface DpaAssetsDetailReadV2ResponseDataListInner {
  advertiser_id?: number;
  asset_create_time?: string;
  asset_id?: number;
  asset_modify_time?: string;
  asset_type?: DpaAssetsDetailReadV2DataListAssetType;
  audit_status?: DpaAssetsDetailReadV2DataListAuditStatus;
  platform_id?: number;
  product_id?: number;
  source?: DpaAssetsDetailReadV2DataListSource;
  status?: DpaAssetsDetailReadV2DataListStatus;
}

