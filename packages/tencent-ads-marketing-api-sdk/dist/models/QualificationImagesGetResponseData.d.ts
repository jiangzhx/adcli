import type { PageInfo, QualificationImageStruct } from "../models";
export interface QualificationImagesGetResponseData {
    list?: QualificationImageStruct[];
    page_info?: PageInfo;
}
