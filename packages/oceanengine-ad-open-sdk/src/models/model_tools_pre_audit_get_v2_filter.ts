// 由 oceanengine/ad_open_sdk_go models/model_tools_pre_audit_get_v2_filter.go 生成
// 不要手动编辑。

import type { ToolsPreAuditGetV2FilterMaterialType } from "../models/index";

export interface ToolsPreAuditGetV2Filter {
  contents?: string[];
  material_type?: ToolsPreAuditGetV2FilterMaterialType;
  pre_audit_ids?: (number | string)[];
}

