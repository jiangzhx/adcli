// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_advertiser_config_add_request.go
// Do not edit manually.

import type { CoverImageSnapshotType, MultiImageCollageAigcStatus, MultiImageCollageStatus } from "../v3/index";

export interface AdvertiserConfigAddRequest {
  account_id?: number | string;
  organization_id?: number | string;
  cover_image_snapshot_type?: CoverImageSnapshotType;
  multi_image_collage_status?: MultiImageCollageStatus;
  multi_image_collage_aigc_status?: MultiImageCollageAigcStatus;
}

