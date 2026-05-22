import type { CityLevel, TagClass } from "../model/index";
export interface TargetingTagsGetListStruct {
    id?: number | string;
    name?: string;
    parent_id?: number | string;
    parent_name?: string;
    city_level?: CityLevel;
    tag_class?: TagClass;
}
