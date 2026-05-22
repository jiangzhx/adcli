// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalProjectListV30DataProjectListPoiInfoAllPoiMode, LocalProjectListV30DataProjectListPoiInfoAutoUpdatePois } from "../models";

export interface LocalProjectListV30ResponseDataProjectListInnerPoiInfo {
  all_poi_mode?: LocalProjectListV30DataProjectListPoiInfoAllPoiMode;
  auto_update_pois?: LocalProjectListV30DataProjectListPoiInfoAutoUpdatePois;
  multi_poi_num?: number;
  poi_id?: number | string;
  poi_image_url?: string;
  poi_name?: string;
}

