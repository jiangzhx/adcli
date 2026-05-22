import type { ChannelPackageInfo, ElementPrereviewResultStruct, FileInfo, UnionChannelPackageInfo } from "../models";
export interface GetAsyncTaskData {
    file_info_list?: FileInfo[];
    channel_package_info_list?: ChannelPackageInfo[];
    union_channel_package_info_list?: UnionChannelPackageInfo[];
    review_element_prereview_result_list?: ElementPrereviewResultStruct[];
}
