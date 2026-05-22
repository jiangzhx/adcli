import type { ElementStoryStruct } from "../v3/index";
export interface ElementStoryComponent {
    component_id?: number | string;
    value?: ElementStoryStruct;
    is_deleted?: boolean;
}
