import type { MiniCardLinkStruct } from "../models";
export interface MiniCardLinkComponent {
    component_id?: number | string;
    value?: MiniCardLinkStruct;
    is_deleted?: boolean;
}
