// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_live_room_components_add_request.go
// Do not edit manually.

import type { CreativeComponentType, LiveRoomComponentSpecStruct } from "../v3/index";

export interface LiveRoomComponentsAddRequest {
  account_id?: number | string;
  component_name?: string;
  component_type?: CreativeComponentType;
  finder_username?: string;
  component_spec?: LiveRoomComponentSpecStruct;
  wechat_channels_account_id?: string;
}

