import type { AudienceGrantType, GrantSpec } from "../v3/index";
export interface GrantInfo {
    audience_id?: number | string;
    grant_type?: AudienceGrantType;
    grant_spec?: GrantSpec;
}
