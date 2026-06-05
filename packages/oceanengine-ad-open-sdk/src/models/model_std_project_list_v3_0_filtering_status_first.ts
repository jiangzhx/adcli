// 由 oceanengine/ad_open_sdk_go models/model_std_project_list_v3_0_filtering_status_first.go 生成
// 不要手动编辑。

export const StdProjectListV30FilteringStatusFirst = {
  ALL: "ALL",
  ALL_EXCEPT_DELETE: "ALL_EXCEPT_DELETE",
  PROJECT_STATUS_DELETE: "PROJECT_STATUS_DELETE",
  PROJECT_STATUS_DISABLE: "PROJECT_STATUS_DISABLE",
  PROJECT_STATUS_DONE: "PROJECT_STATUS_DONE",
  PROJECT_STATUS_ENABLE: "PROJECT_STATUS_ENABLE",
  PROJECT_STATUS_FROZEN: "PROJECT_STATUS_FROZEN",
} as const;

export type StdProjectListV30FilteringStatusFirst = typeof StdProjectListV30FilteringStatusFirst[keyof typeof StdProjectListV30FilteringStatusFirst];

