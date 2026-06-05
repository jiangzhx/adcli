// 由 oceanengine/ad_open_sdk_go models/model_ad_get_v2_data_schedule_type.go 生成
// 不要手动编辑。

export const AdGetV2DataScheduleType = {
  SCHEDULE_FROM_NOW: "SCHEDULE_FROM_NOW",
  SCHEDULE_START_END: "SCHEDULE_START_END",
} as const;

export type AdGetV2DataScheduleType = typeof AdGetV2DataScheduleType[keyof typeof AdGetV2DataScheduleType];

