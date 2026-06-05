// 由 oceanengine/ad_open_sdk_go models/model_std_project_list_v3_0_response_data_list_inner_audience.go 生成
// 不要手动编辑。

import type { StdProjectListV30DataListAudienceAndroidOsv, StdProjectListV30DataListAudienceConvertedTimeDuration, StdProjectListV30DataListAudienceDistrict, StdProjectListV30DataListAudienceGender, StdProjectListV30DataListAudienceHarmonyOsv, StdProjectListV30DataListAudienceHideIfConverted, StdProjectListV30DataListAudienceHideIfExists, StdProjectListV30DataListAudienceIosOsv, StdProjectListV30DataListAudienceLocationType, StdProjectListV30DataListAudiencePlatform, StdProjectListV30ResponseDataListInnerAudienceGeolocation } from "../models/index";

export interface StdProjectListV30ResponseDataListInnerAudience {
  age?: string[];
  android_osv?: StdProjectListV30DataListAudienceAndroidOsv;
  audience_type?: string;
  city?: number[];
  converted_time_duration?: StdProjectListV30DataListAudienceConvertedTimeDuration;
  district?: StdProjectListV30DataListAudienceDistrict;
  gender?: StdProjectListV30DataListAudienceGender;
  geolocation?: StdProjectListV30ResponseDataListInnerAudienceGeolocation;
  harmony_osv?: StdProjectListV30DataListAudienceHarmonyOsv;
  hide_if_converted?: StdProjectListV30DataListAudienceHideIfConverted;
  hide_if_exists?: StdProjectListV30DataListAudienceHideIfExists;
  ios_osv?: StdProjectListV30DataListAudienceIosOsv;
  location_type?: StdProjectListV30DataListAudienceLocationType;
  platform?: StdProjectListV30DataListAudiencePlatform[];
  region_version?: string;
  retargeting_tags_exclude?: number[];
  retargeting_tags_include?: number[];
}

