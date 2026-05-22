import type { DestinationType } from "../model/index";
export interface LiveConvComponentSpecStruct {
    page_id?: number | string;
    page_type?: DestinationType;
    title?: string;
    img_url?: string;
    img_id?: string;
    desc?: string;
    button_text?: string;
}
