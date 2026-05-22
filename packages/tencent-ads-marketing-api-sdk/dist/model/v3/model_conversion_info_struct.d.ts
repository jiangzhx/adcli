import type { ConversionLinkNodeApplicationType, ConversionLinkNodeDataSource, ConversionLinkNodeSeqsType } from "../v3/index";
export interface ConversionInfoStruct {
    conversion_link_node_index?: number;
    data_source?: ConversionLinkNodeDataSource;
    node_seqs_type?: ConversionLinkNodeSeqsType;
    conversion_link_application_type?: ConversionLinkNodeApplicationType;
}
