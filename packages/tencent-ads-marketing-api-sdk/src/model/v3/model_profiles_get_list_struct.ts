// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_profiles_get_list_struct.go
// Do not edit manually.

import type { ProfileType, SysStatus } from "../v3/index";

export interface ProfilesGetListStruct {
  owner_id?: number | string;
  profile_type?: ProfileType;
  profile_id?: number | string;
  head_image_id?: string;
  head_image_url?: string;
  profile_name?: string;
  description?: string;
  created_time?: number;
  last_modified_time?: number;
  profile_url?: string;
  system_status?: SysStatus;
  mdm_id?: number | string;
}

