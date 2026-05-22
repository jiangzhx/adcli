// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_targeting_tags_get_list_struct.go
// Do not edit manually.

import type { CityLevel, TagClass } from "../v3/index";

export interface TargetingTagsGetListStruct {
  id?: number | string;
  city_level?: CityLevel;
  parent_name?: string;
  parent_id?: number | string;
  name?: string;
  tag_class?: TagClass;
  available_for_individual?: boolean;
}

