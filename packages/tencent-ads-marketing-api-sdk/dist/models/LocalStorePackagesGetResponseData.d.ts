import type { Conf, LocalStorePackageStruct } from "../models";
export interface LocalStorePackagesGetResponseData {
    list?: LocalStorePackageStruct[];
    page_info?: Conf;
}
