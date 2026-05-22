// Generated from oceanengine/ad_open_sdk_go models/model_file_video_update_v2_data_videos_status_code.go
// Do not edit manually.

export const FileVideoUpdateV2DataVideosStatusCode = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  PARTIAL_FAILURE: "PARTIAL_FAILURE",
  IMAGE_BINDING_EXISTED: "IMAGE_BINDING_EXISTED",
  VIDEO_BINDING_EXISTED: "VIDEO_BINDING_EXISTED",
} as const;

export type FileVideoUpdateV2DataVideosStatusCode = typeof FileVideoUpdateV2DataVideosStatusCode[keyof typeof FileVideoUpdateV2DataVideosStatusCode];

