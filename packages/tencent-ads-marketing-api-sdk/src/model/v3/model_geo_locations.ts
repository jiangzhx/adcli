// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_geo_locations.go
// Do not edit manually.

import type { CustomLocationsItem } from "../v3/index";

export interface GeoLocations {
  location_types?: string[];
  regions?: number[];
  business_districts?: number[];
  custom_locations?: CustomLocationsItem[];
  geo_location_auto_audience?: boolean;
}

