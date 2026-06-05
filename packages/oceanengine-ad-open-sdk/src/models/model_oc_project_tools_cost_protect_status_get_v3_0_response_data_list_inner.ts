// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_cost_protect_status_get_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { OcProjectToolsCostProtectStatusGetV30DataListCompensateEndReasons, OcProjectToolsCostProtectStatusGetV30DataListCompensateInvalidReasons, OcProjectToolsCostProtectStatusGetV30DataListCompensateStatus } from "../models/index";

export interface OcProjectToolsCostProtectStatusGetV30ResponseDataListInner {
  compensate_amount?: number;
  compensate_end_reasons?: OcProjectToolsCostProtectStatusGetV30DataListCompensateEndReasons[];
  compensate_invalid_reasons?: OcProjectToolsCostProtectStatusGetV30DataListCompensateInvalidReasons[];
  compensate_status?: OcProjectToolsCostProtectStatusGetV30DataListCompensateStatus;
  schedule_id?: number | string;
}

