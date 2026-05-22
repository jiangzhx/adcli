import type { AppDownloadSpec, LinkSpec, MiniProgramSpec, WecomSpec } from "../model/index";
export interface ShelfButtonSpec {
    link_spec?: LinkSpec;
    app_download_spec?: AppDownloadSpec;
    mini_program_spec?: MiniProgramSpec;
    wecom_spec?: WecomSpec;
}
