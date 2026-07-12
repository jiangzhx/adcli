import type { CoverImageSnapshotType, MultiImageCollageAigcStatus, MultiImageCollageStatus } from "../v3/index";
export interface AdvertiserConfigGetResponseData {
    cover_image_snapshot_type?: CoverImageSnapshotType;
    multi_image_collage_status?: MultiImageCollageStatus;
    multi_image_collage_aigc_status?: MultiImageCollageAigcStatus;
}
