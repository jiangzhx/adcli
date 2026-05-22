import type { AsyncReportLevel, AsyncReportsFilteringStruct, TimeGranularity, TimeLine } from "../model/index";
export interface AsyncReportsAddRequest {
    account_id?: number | string;
    task_name?: string;
    report_fields?: string[];
    level?: AsyncReportLevel;
    filtering?: AsyncReportsFilteringStruct[];
    time_line?: TimeLine;
    group_by?: string[];
    granularity?: TimeGranularity;
    date?: string;
    weixin_official_accounts_upgrade_enabled?: boolean;
    adq_accounts_upgrade_enabled?: boolean;
}
