// Generated from tencentad/marketing-api-go-sdk pkg/model/model_async_tasks_get_data.go
// Do not edit manually.

import type { AsyncTasksGetFileInfo, ChannelPackageInfo, ElementPrereviewResultStruct, UnionChannelPackageInfo } from "../model/index";

export interface AsyncTasksGetData {
  file_info_list?: AsyncTasksGetFileInfo[];
  channel_package_info_list?: ChannelPackageInfo[];
  union_channel_package_info_list?: UnionChannelPackageInfo[];
  review_element_prereview_result_list?: ElementPrereviewResultStruct[];
}

