// Generated from tencentad/marketing-api-go-sdk pkg/model/model_unbreakable_targeting_setting.go
// Do not edit manually.

import type { AgeStruct, ExcludedConvertedAudience, GeoLocations } from "../model/index";

export interface UnbreakableTargetingSetting {
  age?: AgeStruct[];
  gender?: string[];
  geo_location?: GeoLocations;
  user_os?: string[];
  app_install_status?: string[];
  excluded_converted_audience?: ExcludedConvertedAudience;
}

