import type { CatalogIndustry, CatalogScale, CatalogType } from "../model/index";
export interface ProductCatalogsAddRequest {
    account_id?: number | string;
    catalog_name?: string;
    catalog_scale_type?: CatalogScale;
    catalog_type?: CatalogType;
    industry_type?: CatalogIndustry;
}
