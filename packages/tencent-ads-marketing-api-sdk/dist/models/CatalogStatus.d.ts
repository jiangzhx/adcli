export declare const CatalogStatus: {
    readonly PREPARE: "PRODUCT_CATALOG_STATUS_PREPARE";
    readonly NORMAL: "PRODUCT_CATALOG_STATUS_NORMAL";
    readonly SUSPEND: "PRODUCT_CATALOG_STATUS_SUSPEND";
    readonly DELETED: "PRODUCT_CATALOG_STATUS_DELETED";
};
export type CatalogStatus = typeof CatalogStatus[keyof typeof CatalogStatus];
