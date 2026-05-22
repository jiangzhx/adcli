import type { ImageType } from "../v3/index";
export interface ImagesAddResponseData {
    image_id?: string;
    image_width?: number;
    image_height?: number;
    image_file_size?: number;
    image_type?: ImageType;
    image_signature?: string;
    outer_image_id?: string;
    preview_url?: string;
    description?: string;
}
