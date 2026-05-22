import type { ElementStoryStruct } from "../models";
export interface ElementStoryComponent {
    component_id?: number | string;
    value?: ElementStoryStruct;
    is_deleted?: boolean;
}
