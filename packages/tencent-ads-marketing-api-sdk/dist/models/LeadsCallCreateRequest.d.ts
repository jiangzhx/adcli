export interface LeadsCallCreateRequest {
    account_id?: number | string;
    leads_id?: number | string;
    user_id?: number | string;
    callee_number?: string;
    request_id?: string;
    version?: string;
}
