import type { AsyncTasksGetFileInfo, ChannelPackageInfo, ElementPrereviewResultStruct, UnionChannelPackageInfo } from "../models";
export interface AsyncTasksGetData {
    file_info_list?: AsyncTasksGetFileInfo[];
    channel_package_info_list?: ChannelPackageInfo[];
    union_channel_package_info_list?: UnionChannelPackageInfo[];
    review_element_prereview_result_list?: ElementPrereviewResultStruct[];
}
