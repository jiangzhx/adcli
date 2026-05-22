import type { AudienceGrantType, GrantSpec } from "../models";
export interface GrantInfo {
    audience_id?: number | string;
    grant_type?: AudienceGrantType;
    grant_spec?: GrantSpec;
}
