import type { AdStatus, ImageSourceType, ImageType, ImageUsage, SimilarityStatus } from "../v3/index";
export interface ImagesGetListStruct {
    image_id?: string;
    width?: number;
    height?: number;
    file_size?: number;
    type?: ImageType;
    signature?: string;
    description?: string;
    source_signature?: string;
    preview_url?: string;
    source_type?: ImageSourceType;
    image_usage?: ImageUsage;
    created_time?: number;
    last_modified_time?: number;
    product_catalog_id?: number | string;
    product_outer_id?: string;
    source_reference_id?: string;
    owner_account_id?: string;
    status?: AdStatus;
    sample_aspect_ratio?: string;
    similarity_status?: SimilarityStatus;
}
