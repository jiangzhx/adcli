// Generated from oceanengine/ad_open_sdk_go models/model_uni_project_list_get_v3_0_response_data_list_inner_audience.go
// Do not edit manually.

import type { UniProjectListGetV30DataListAudienceConvertedTimeDuration, UniProjectListGetV30DataListAudienceDistrict, UniProjectListGetV30DataListAudienceGender, UniProjectListGetV30DataListAudienceHideIfConverted, UniProjectListGetV30DataListAudienceLocationType, UniProjectListGetV30DataListAudiencePlatform, UniProjectListGetV30ResponseDataListInnerAudienceGeolocationInner } from "../models/index";

export interface UniProjectListGetV30ResponseDataListInnerAudience {
  age?: string[];
  city?: number[];
  converted_time_duration?: UniProjectListGetV30DataListAudienceConvertedTimeDuration;
  district?: UniProjectListGetV30DataListAudienceDistrict;
  gender?: UniProjectListGetV30DataListAudienceGender;
  geolocation?: UniProjectListGetV30ResponseDataListInnerAudienceGeolocationInner[];
  hide_if_converted?: UniProjectListGetV30DataListAudienceHideIfConverted;
  location_type?: UniProjectListGetV30DataListAudienceLocationType;
  platform?: UniProjectListGetV30DataListAudiencePlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
}

