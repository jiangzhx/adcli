import type { ImageType } from "../model/index";
export interface ImagesAddResponseData {
    image_id?: string;
    preview_url?: string;
    description?: string;
    width?: number;
    height?: number;
    file_size?: number;
    type?: ImageType;
    signature?: string;
}
