// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_report_today_live_room_config_get_v1_0_response_data_custom_config_datas_inner_dimensions_inner.go 生成
// 不要手动编辑。

import type { QianchuanReportTodayLiveRoomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig } from "../models/index";

export interface QianchuanReportTodayLiveRoomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInner {
  description?: string;
  exclusion_dims?: string[];
  exclusion_metrics?: string[];
  field?: string;
  filter_config?: QianchuanReportTodayLiveRoomConfigGetV10ResponseDataCustomConfigDatasInnerDimensionsInnerFilterConfig;
  filterable?: boolean;
  is_required?: boolean;
  name?: string;
  sortable?: boolean;
}

