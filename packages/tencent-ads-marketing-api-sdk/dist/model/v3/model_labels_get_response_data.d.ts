import type { LabelsGetLabel, PageInfo } from "../v3/index";
export interface LabelsGetResponseData {
    list?: LabelsGetLabel[];
    page_info?: PageInfo;
}
