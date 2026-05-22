// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_live_room_components_update_request.go
// Do not edit manually.

import type { CreativeComponentType, LiveRoomComponentSpecStruct } from "../v3/index";

export interface LiveRoomComponentsUpdateRequest {
  account_id?: number | string;
  component_id?: number | string;
  component_type?: CreativeComponentType;
  component_spec?: LiveRoomComponentSpecStruct;
}

