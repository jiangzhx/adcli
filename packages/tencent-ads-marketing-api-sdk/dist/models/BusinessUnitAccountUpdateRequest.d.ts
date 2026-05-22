export interface BusinessUnitAccountUpdateRequest {
    organization_id?: number | string;
    add_account_id_list?: number[];
    delete_account_id_list?: number[];
}
