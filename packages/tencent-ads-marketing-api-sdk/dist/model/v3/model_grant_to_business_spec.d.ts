import type { AccountPermission, AudienceGrantScopeType, GrantBusinessPermission } from "../v3/index";
export interface GrantToBusinessSpec {
    grant_business_id?: number | string;
    grant_scope_type?: AudienceGrantScopeType;
    grant_business_permission?: GrantBusinessPermission;
    grant_account_permission?: AccountPermission[];
}
