import type { AudienceGrantType, GrantSpec } from "../v3/index";
export interface AudienceGrantRelationsAddRequest {
    account_id?: number | string;
    audience_id_list?: number[];
    grant_type?: AudienceGrantType;
    grant_spec?: GrantSpec;
}
