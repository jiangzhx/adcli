import type { CustomLocationsItemWithName } from "../model/index";
export interface GeoLocations {
    location_types?: string[];
    regions?: number[];
    business_districts?: number[];
    custom_locations?: CustomLocationsItemWithName[];
}
