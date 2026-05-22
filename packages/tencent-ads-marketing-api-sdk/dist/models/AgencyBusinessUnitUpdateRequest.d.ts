export interface AgencyBusinessUnitUpdateRequest {
    organization_id?: number | string;
    business_unit_name?: string;
    business_unit_remark?: string;
    add_account_id_list?: number[];
    delete_account_id_list?: number[];
}
