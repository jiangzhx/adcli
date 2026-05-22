// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const ChannelTaskStatus = {
  PENDING: "CHANNEL_TASK_STATUS_PENDING",
  PROCESSING: "CHANNEL_TASK_STATUS_PROCESSING",
  ERROR: "CHANNEL_TASK_STATUS_ERROR",
  COMPLETED: "CHANNEL_TASK_STATUS_COMPLETED",
} as const;

export type ChannelTaskStatus = typeof ChannelTaskStatus[keyof typeof ChannelTaskStatus];

