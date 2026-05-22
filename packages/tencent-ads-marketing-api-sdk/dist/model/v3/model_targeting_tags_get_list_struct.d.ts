import type { CityLevel, TagClass } from "../v3/index";
export interface TargetingTagsGetListStruct {
    id?: number | string;
    city_level?: CityLevel;
    parent_name?: string;
    parent_id?: number | string;
    name?: string;
    tag_class?: TagClass;
    available_for_individual?: boolean;
}
