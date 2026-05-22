import type { CustomLocationsItem } from "../v3/index";
export interface GeoLocations {
    location_types?: string[];
    regions?: number[];
    business_districts?: number[];
    custom_locations?: CustomLocationsItem[];
    geo_location_auto_audience?: boolean;
}
