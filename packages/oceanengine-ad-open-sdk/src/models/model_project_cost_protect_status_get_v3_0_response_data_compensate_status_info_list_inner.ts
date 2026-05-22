// Generated from oceanengine/ad_open_sdk_go models/model_project_cost_protect_status_get_v3_0_response_data_compensate_status_info_list_inner.go
// Do not edit manually.

import type { ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateEndReasons, ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateInvalidReasons, ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateStatus } from "../models/index";

export interface ProjectCostProtectStatusGetV30ResponseDataCompensateStatusInfoListInner {
  compensate_amount?: number;
  compensate_end_reasons?: ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateEndReasons[];
  compensate_invalid_reasons?: ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateInvalidReasons[];
  compensate_status?: ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateStatus;
  compensate_url?: string;
  project_id?: number | string;
}

