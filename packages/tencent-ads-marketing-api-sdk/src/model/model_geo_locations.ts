// Generated from tencentad/marketing-api-go-sdk pkg/model/model_geo_locations.go
// Do not edit manually.

import type { CustomLocationsItemWithName } from "../model/index";

export interface GeoLocations {
  location_types?: string[];
  regions?: number[];
  business_districts?: number[];
  custom_locations?: CustomLocationsItemWithName[];
}

