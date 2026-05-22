// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpMaterialAuthCreateV30AccountType, ToolsEbpMaterialAuthCreateV30MaterialType, ToolsEbpMaterialAuthCreateV30RequestTargetEbpsInner } from "../models";

export interface ToolsEbpMaterialAuthCreateV30Request {
  account_id: number;
  account_type?: ToolsEbpMaterialAuthCreateV30AccountType;
  material_type?: ToolsEbpMaterialAuthCreateV30MaterialType;
  target_ebps: ToolsEbpMaterialAuthCreateV30RequestTargetEbpsInner[];
}

