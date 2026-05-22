import type { Conf, LocalStorePackageStruct } from "../v3/index";
export interface LocalStorePackagesGetResponseData {
    list?: LocalStorePackageStruct[];
    page_info?: Conf;
}
