export interface LeadsCallRecordsGetRequest {
    account_id?: number | string;
    page_size?: number;
    page?: number;
    start_date?: string;
    end_date?: string;
    search_after?: string;
}
