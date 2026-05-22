// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FileRebateMaterialDownloadCreateTaskV2MaterialPolicyType, FileRebateMaterialDownloadCreateTaskV2RequestFiltering } from "../models";

export interface FileRebateMaterialDownloadCreateTaskV2Request {
  agent_id: number | string;
  filtering?: FileRebateMaterialDownloadCreateTaskV2RequestFiltering;
  material_policy_type: FileRebateMaterialDownloadCreateTaskV2MaterialPolicyType;
  period: string;
}

