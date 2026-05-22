import type { AudienceGrantRelationsGetGrantSpec, AudienceGrantType } from "../model/index";
export interface GrantInfo {
    audience_id?: number | string;
    grant_type?: AudienceGrantType;
    grant_spec?: AudienceGrantRelationsGetGrantSpec;
}
