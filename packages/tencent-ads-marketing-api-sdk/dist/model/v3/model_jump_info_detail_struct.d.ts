import type { PageDetail, PageType } from "../v3/index";
export interface JumpInfoDetailStruct {
    page_type?: PageType;
    page_detail?: PageDetail;
    is_backup?: boolean;
    backup_index?: number;
    disable_code?: number;
    disable_message?: string;
}
