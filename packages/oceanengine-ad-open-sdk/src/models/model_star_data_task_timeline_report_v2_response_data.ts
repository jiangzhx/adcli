// 由 oceanengine/ad_open_sdk_go models/model_star_data_task_timeline_report_v2_response_data.go 生成
// 不要手动编辑。

import type { StarDataTaskTimelineReportV2ResponseDataProjectDataValue, StarDataTaskTimelineReportV2ResponseDataTaskDataValue } from "../models/index";

export interface StarDataTaskTimelineReportV2ResponseData {
  project_data?: Record<string, StarDataTaskTimelineReportV2ResponseDataProjectDataValue>;
  task_data?: Record<string, StarDataTaskTimelineReportV2ResponseDataTaskDataValue>;
}

