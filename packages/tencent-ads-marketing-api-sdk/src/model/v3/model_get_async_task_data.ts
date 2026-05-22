// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_get_async_task_data.go
// Do not edit manually.

import type { ChannelPackageInfo, ElementPrereviewResultStruct, FileInfo, UnionChannelPackageInfo } from "../v3/index";

export interface GetAsyncTaskData {
  file_info_list?: FileInfo[];
  channel_package_info_list?: ChannelPackageInfo[];
  union_channel_package_info_list?: UnionChannelPackageInfo[];
  review_element_prereview_result_list?: ElementPrereviewResultStruct[];
}

