// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_qianchuan_report_today_live_room_config_get_v1_0_response_data_custom_config_datas_inner_dimensions_inner.go
// Do not edit manually.

import type { QianchuanQianchuanReportTodayLiveRoomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig } from "../models/index";

export interface QianchuanQianchuanReportTodayLiveRoomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInner {
  description?: string;
  exclusion_dims?: string[];
  exclusion_metrics?: string[];
  field?: string;
  filter_config?: QianchuanQianchuanReportTodayLiveRoomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig;
  filterable?: boolean;
  is_required?: boolean;
  name?: string;
  sortable?: boolean;
}

