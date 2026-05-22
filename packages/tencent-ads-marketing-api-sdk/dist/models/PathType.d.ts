export declare const PathType: {
    readonly BM: "PATH_TYPE_BM";
    readonly MDM: "PATH_TYPE_MDM";
    readonly POINT_TO_POINT: "PATH_TYPE_POINT_TO_POINT";
    readonly AGENCY: "PATH_TYPE_AGENCY";
};
export type PathType = typeof PathType[keyof typeof PathType];
