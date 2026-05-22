import type { CoverImageSnapshotType } from "../v3/index";
export interface AdvertiserConfigAddRequest {
    account_id?: number | string;
    organization_id?: number | string;
    cover_image_snapshot_type?: CoverImageSnapshotType;
}
