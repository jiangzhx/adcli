import type { ApiErrorStruct, FinderAdObjectListGetResponseData } from "../v3/index";
export interface FinderAdObjectListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FinderAdObjectListGetResponseData;
}
