export interface VideoOcrInfoStruct {
    id?: number | string;
    text?: string;
    mark?: string;
    label_list?: string[];
    reason?: string;
    time?: number;
    frame_bbox?: number[];
    frame_url?: string;
}
