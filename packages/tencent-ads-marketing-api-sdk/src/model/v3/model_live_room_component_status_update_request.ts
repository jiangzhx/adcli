// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_live_room_component_status_update_request.go
// Do not edit manually.

import type { CreativeComponentType, SysStatus } from "../v3/index";

export interface LiveRoomComponentStatusUpdateRequest {
  account_id?: number | string;
  component_id?: number | string;
  component_type?: CreativeComponentType;
  status?: SysStatus;
  live_begin_time?: number;
}

