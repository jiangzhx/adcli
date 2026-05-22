import type { Conf, LocalStoresSearchInfoGetListStruct } from "../models";
export interface LocalStoresSearchInfoGetResponseData {
    list?: LocalStoresSearchInfoGetListStruct[];
    page_info?: Conf;
}
