import type { VideoShowcaseStruct } from "../v3/index";
export interface VideoShowcaseComponent {
    component_id?: number | string;
    value?: VideoShowcaseStruct;
    is_deleted?: boolean;
}
