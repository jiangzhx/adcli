import type { CustomLocationsItem } from "../models";
export interface GeoLocations {
    location_types?: string[];
    regions?: number[];
    business_districts?: number[];
    custom_locations?: CustomLocationsItem[];
    geo_location_auto_audience?: boolean;
}
