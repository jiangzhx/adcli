import type { DeriveTemplateConf } from "../v3/index";
export interface UpdateAdgroupDeriveConfItem {
    adgroup_id?: number | string;
    auto_derived_creative_enabled?: boolean;
    derive_template_conf?: DeriveTemplateConf;
    account_id?: number | string;
}
