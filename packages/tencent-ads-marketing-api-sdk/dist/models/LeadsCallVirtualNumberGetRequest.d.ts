export interface LeadsCallVirtualNumberGetRequest {
    account_id?: number | string;
    leads_id?: number | string;
    caller?: string;
    callee?: string;
    request_id?: string;
}
