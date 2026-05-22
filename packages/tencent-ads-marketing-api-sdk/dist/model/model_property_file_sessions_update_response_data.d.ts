export interface PropertyFileSessionsUpdateResponseData {
    session_id?: number | string;
    session_status?: string;
    success_list?: string[];
    failed_list?: string[];
    uploading_list?: string[];
}
