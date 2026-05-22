import type { AdStatus, CreativeComponentType } from "../model/index";
export interface CreativeComponentsUpdateStatusRequest {
    account_id?: number | string;
    component_id?: number | string;
    component_type?: CreativeComponentType;
    status?: AdStatus;
    live_begin_time?: number;
}
