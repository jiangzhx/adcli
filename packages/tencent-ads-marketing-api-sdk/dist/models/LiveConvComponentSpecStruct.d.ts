import type { PageType } from "../models";
export interface LiveConvComponentSpecStruct {
    page_id?: number | string;
    page_type?: PageType;
    title?: string;
    img_url?: string;
    img_id?: string;
    desc?: string;
    button_text?: string;
}
