// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateEndReasons, ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateInvalidReasons, ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateStatus } from "../models";

export interface ProjectCostProtectStatusGetV30ResponseDataCompensateStatusInfoListInner {
  compensate_amount?: number;
  compensate_end_reasons?: ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateEndReasons[];
  compensate_invalid_reasons?: ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateInvalidReasons[];
  compensate_status?: ProjectCostProtectStatusGetV30DataCompensateStatusInfoListCompensateStatus;
  compensate_url?: string;
  project_id?: number;
}

