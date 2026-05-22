import type { MiniCardLinkStruct } from "../v3/index";
export interface MiniCardLinkComponent {
    component_id?: number | string;
    value?: MiniCardLinkStruct;
    is_deleted?: boolean;
}
