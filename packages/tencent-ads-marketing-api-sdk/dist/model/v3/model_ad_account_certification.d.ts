import type { AdAccountCertificationFile, AdAccountCertificationImage } from "../v3/index";
export interface AdAccountCertification {
    certification_code?: string;
    certification_id?: number | string;
    certification_file_list?: AdAccountCertificationFile[];
    certification_image_list?: AdAccountCertificationImage[];
}
