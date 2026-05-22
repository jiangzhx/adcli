// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdMaterialGetV10DataAdMaterialInfosAuditStatus, QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialDeliveryType, QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfo } from "../models";

export interface QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInner {
  audit_status?: QianchuanAdMaterialGetV10DataAdMaterialInfosAuditStatus;
  creative_ids?: number[];
  is_auto_generate?: number;
  is_del: boolean;
  material_delivery_type?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialDeliveryType;
  material_info: QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfo;
}

