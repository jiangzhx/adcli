// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { CreativeComponentType, SysStatus } from "../models";

export interface LiveRoomComponentStatusUpdateRequest {
  account_id?: number | string;
  component_id?: number | string;
  component_type?: CreativeComponentType;
  status?: SysStatus;
  live_begin_time?: number;
}

