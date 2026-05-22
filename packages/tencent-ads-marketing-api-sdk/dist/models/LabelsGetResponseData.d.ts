import type { LabelsGetLabel, PageInfo } from "../models";
export interface LabelsGetResponseData {
    list?: LabelsGetLabel[];
    page_info?: PageInfo;
}
