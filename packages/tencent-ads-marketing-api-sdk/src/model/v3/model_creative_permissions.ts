// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_creative_permissions.go
// Do not edit manually.

import type { CreativeComponentsPermit } from "../v3/index";

export interface CreativePermissions {
  creative_components?: CreativeComponentsPermit[];
  support_impression_tracking_url?: boolean;
  support_click_tracking_url?: boolean;
  support_page_track_url?: boolean;
}

