// 由 oceanengine/ad_open_sdk_go models/model_file_rebate_material_download_create_task_v2_request.go 生成
// 不要手动编辑。

import type { FileRebateMaterialDownloadCreateTaskV2MaterialPolicyType, FileRebateMaterialDownloadCreateTaskV2RequestFiltering } from "../models/index";

export interface FileRebateMaterialDownloadCreateTaskV2Request {
  agent_id: number | string;
  filtering?: FileRebateMaterialDownloadCreateTaskV2RequestFiltering;
  material_policy_type: FileRebateMaterialDownloadCreateTaskV2MaterialPolicyType;
  period: string;
}

