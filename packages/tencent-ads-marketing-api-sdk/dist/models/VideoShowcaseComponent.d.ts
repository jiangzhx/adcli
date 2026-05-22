import type { VideoShowcaseStruct } from "../models";
export interface VideoShowcaseComponent {
    component_id?: number | string;
    value?: VideoShowcaseStruct;
    is_deleted?: boolean;
}
