// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_material_get_v1_0_response_data_ad_material_infos_inner.go 生成
// 不要手动编辑。

import type { QianchuanAdMaterialGetV10DataAdMaterialInfosAuditStatus, QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialDeliveryType, QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfo } from "../models/index";

export interface QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInner {
  audit_status?: QianchuanAdMaterialGetV10DataAdMaterialInfosAuditStatus;
  creative_ids?: (number | string)[];
  is_auto_generate?: number;
  is_del: boolean;
  material_delivery_type?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialDeliveryType;
  material_info: QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfo;
}

