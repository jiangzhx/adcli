import type { AdAccountCertificationFile, AdAccountCertificationImage } from "../models";
export interface AdAccountCertification {
    certification_code?: string;
    certification_id?: number | string;
    certification_file_list?: AdAccountCertificationFile[];
    certification_image_list?: AdAccountCertificationImage[];
}
