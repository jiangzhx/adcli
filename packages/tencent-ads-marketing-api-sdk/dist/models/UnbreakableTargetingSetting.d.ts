import type { AgeStruct, ExcludedConvertedAudience, GeoLocations } from "../models";
export interface UnbreakableTargetingSetting {
    age?: AgeStruct[];
    gender?: string[];
    geo_location?: GeoLocations;
    user_os?: string[];
    app_install_status?: string[];
    excluded_converted_audience?: ExcludedConvertedAudience;
}
