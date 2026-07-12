export interface VideoAsrInfoStruct {
    id?: number | string;
    text?: string;
    mark?: string;
    label_list?: string[];
    reason?: string;
    start_time?: number;
    end_time?: number;
    asr_type?: string;
}
