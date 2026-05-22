// Generated from oceanengine/ad_open_sdk_go models/model_file_rebate_material_download_create_task_v2_request.go
// Do not edit manually.

import type { FileRebateMaterialDownloadCreateTaskV2MaterialPolicyType, FileRebateMaterialDownloadCreateTaskV2RequestFiltering } from "../models/index";

export interface FileRebateMaterialDownloadCreateTaskV2Request {
  agent_id: number | string;
  filtering?: FileRebateMaterialDownloadCreateTaskV2RequestFiltering;
  material_policy_type: FileRebateMaterialDownloadCreateTaskV2MaterialPolicyType;
  period: string;
}

