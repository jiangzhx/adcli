import type { PageInfo, QualificationImageStruct } from "../v3/index";
export interface QualificationImagesGetResponseData {
    list?: QualificationImageStruct[];
    page_info?: PageInfo;
}
