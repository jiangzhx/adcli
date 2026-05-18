---
title: 智能托管创建接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2753&menuId=3488
doc_id: kuaishou_2753
source_id: kuaishou_2753
---
# 智能托管创建接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2753 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:19:46.581Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/hosting/project/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| name | String | 是 |  | 单元名称，90个字符（含）以内 |  |
| hosting_scene | Integer | 是 |  | 托管场景，0=普通场景，1=小说测书 | 取值见枚举说明【hosting_scene】 |
| campaign_type | Integer | 是 |  | 项目所创建的单元类型，保持跟计划类型一致，2=提升应用安装，5=收集销售线索，其他暂不支持 | 取值见枚举说明【campaign_type】 |
| app_id | Long |  |  | 应用id，在campaignType=2即提升应用安装时必填 | 当campaign_type=2时必填；当campaign_type=5时只能填0 |
| web_uri | String |  |  | web_uri | 当hosting_scene=0,5时：当campaign_type=2时，代表应用下载链接，取app_id对应的链接，无需传入；当campaign_type=5时，代表落地页地址，此时联动web_uri_type，当web_uri_type=1时代表用户自有落地页，需要传入http或https开头的链接，当web_uri_type=2时使用自建站页面，此时联动site_id，要求site_id非0，此时本字段不需要传入，当web_uri_type=0此时不合法。当campaign_type=7时必填，代表H5链接链接，需要传入http或https开头的链接，当用户调起应用失败或未填调起链接时打开H5链接；当hosting_scene=1时：当campaign_type=2时，代表应用下载链接，取app_id对应的链接，无需传入；当campaign_type=5时，本字段必须保持为0。原因，小说测书场景的落地页跟随每本小说变化，不需要本字段。 |
| use_app_market | Boolean |  |  | useAppMarket | 当campaign_type=2时，只有安卓应用才可以开启本字段；当campaign_type=5时，本字段不做检查，可用。本字段联动app_store |
| app_store | String[] |  |  | 直投应用商店 | 当use_app_market=false时本数组需要为空；当use_app_market=true时，本字段一定不能为空，且有效值需要在app_store的枚举内 |
| sticker_styles | Integer[] |  |  | 贴纸id集合。封面广告语，配合coverSlogans使用，当coverSlogans不为空时，本字段不可为空。当本字段不为空时，coverSlogans字段也不允许为空。小说测书不允许使用本字段。 | 当hosting_scene=0,5时可用，hosting_scene=1不可用，需要保持为空数组。本字段的合法取值见sticker_styles说明。本字段联动cover_slogans，需同时保持为空或者不空。本数组长度最大为6个。 |
| cover_slogans | String[] |  |  | 封面广告语，配合stickerStyles使用，当stickerStyles不为空时，本字段不可为空。当本字段不为空时，stickerStyles字段也不允许为空。小说测书不允许使用本字段。 | 当hosting_scene=0,5时可用，hosting_scene=1不可用，需要保持为空数组。本字段联动cover_slogans，需同时保持为空或者不空。本数组长度最大为12个。本字段每个元素均不能为空，不可以空格开头或结尾、不能包括换行和连续空格，长度最多14字符，且若使用了动态词包必须是可识别的。 |
| action_bar | String |  |  | actionbar文案。小说测书工具不允许填充本字段，小说测书的actionbar文案由小说属性内的actionbar传入。 | 当hosting_scene=0,5时可用，hosting_scene=1不可用。本字段可用值请参考开放平台拉取行动号召按钮的接口。 |
| captions | String[] |  |  | 作品广告语。小说测书不可使用本字段；普通托管场景本字段不允许为空 | 当hosting_scene=0,5时可用，hosting_scene=1不可用。本数组长度最小为1，最大为12。本字段每个元素均不能为空，不可以空格开头或结尾、不能包括换行和连续空格，长度最多30字符，且若使用了动态词包必须是可识别的。 |
| click_url | String |  |  | 第三方点击检测链接。小说测书工具不允许使用本字段。 | 当hosting_scene=0,5时可用，hosting_scene=1不可用。本字段非空的时候，必须以http或https开头。满足以下任一条件时本字段必填：1、优化目标为激活2、当campaign_type=2时，优化目标为注册、付费、完件、授信但是，如果此时选择的应用app_id接入了快手sdk，则可以不填写。 |
| actionbar_click_url | String |  |  | actionbar点击检测链接，白名单功能。小说测书不允许使用本字段。 | 当hosting_scene=0,5时可用，hosting_scene=1不可用。使用本功能需要添加功能白名单。本字段不能和click_url字段相同。本字段非空的时候，click_url必须非空。 |
| auto_create_photo | Boolean |  |  | 自动创建视频。仅当小说测书场景可传入true。 | 仅当hosting_scene=1时可用 |
| begin_time | Long | 是 |  | 投放开始时间。本属性不应该小于当前时间，快手服务器允许本数值比服务器时间早不超过一小时。 | 必填，13位毫秒时间戳，不可小于当前时间往前推一个小时 |
| end_time | Long | 是 |  | 投放结束时间，0=长期投放。 | 必填，13位毫秒时间戳，0=长期投放，非0代表截止投放结束时间 |
| schedule | String |  |  | 投放计划，不传意味着不选择时间段。当选择时，本字段将被解析为二维数组，切一维长度必须是7代表一种七天。每个子数组的有效值范围是[0,23]，其中设定值的即代表本小时投放，如[[0,1,2],[],[],[18,19],[],[],[]]代表周一的0点、1点、2点投放，以及周四的18点、19点投放。 | 投放排期分为两种1、不设定排期，此时本字段请填写'[]'，即空数组2、设定排期，此时数组长度必须为7，且排列顺序是从周一到周日。每个数组元素为一维数组，取值为0,23，设定了哪个就代表投放小时。举例：投放周一的8、9、16点以及周三的21、22点，其他时间不投传值：'[8,9,16,[],21,22,[],[],[],[]]'(注意本字段是一个二维数组格式的string) |
| day_budget | Long | 是 |  | 项目预算，单位是厘。0=不设定预算。 | 必填，单位为厘，不小于500元，不超过1亿 |
| ocpx_action_type | Integer | 是 |  | 优化目标 | 必填，可用优化目标列表可从接口拉取 |
| cpa_bid | Long |  |  | ocpxActionType的出价，单位是厘。当ocpxActionType不为roi类目标时本字段必须传入有效值，且需要符合优化目标的出价限制规则。 | 当hosting_scene=5不填或填0，当hosting_scene!=5规则如下：当ocpx_action_type为roi类目标时必填。单位为厘。需要满足优化目标的出价规范，参考普通创建。 |
| deep_conversion_type | Integer |  |  | 深度优化目标。当ocpxActionType代表的优化目标支持深度时本字段可用。 | 当ocpx_action_type支持深度目标时可用，可用深度目标列表可从接口拉取 |
| deep_conversion_bid | Long |  |  | 深度优化目标出价。当deepConversionType不为roi类目标时，本字段可填。0代表不为深度目标设定出价，非0值时遵从创编流程深度目标与浅度目标和预算等的限制关系。 | 当deep_conversion_type不为0且不为roi类目标时必填。单位为厘。需要满足深度优化目标的出价规范，参考普通创编。 |
| site_id | Long |  |  | 建站页面id，本字段在不同场景含义不同。在普通托管场景，当campaign_type=2即提升应用安装时，本字段代表“应用下载中间页”，此时联动downloadPageUrl；当campaign_type=5即收集销售线索时，本字段代表建站落地页页面id，联动webUriType和webUri字段。在小说测书场景下，当campaign_type=2即提升应用安装时，本字段代表“应用下载中间页”，此时联动downloadPageUrl；当campaign_type=5即收集销售线索时，本字段不可传 | 当hosting_scene=0,5时：当campaign_type=2时，代表应用下载中间页，此时页面包括的app_id必须和选定的应用的app_id保持一致。当campaign_type=5时，代表使用建站落地页作为落地页地址，此时联动web_uri_type，web_uri_type必须是2，此时web_uri字段可不填。当hosting_scene=1时：当campaign_type=2时，代表应用下载中间页，此时页面包括的app_id必须和选定的应用的app_id保持一致。当campaign_type=5时，本字段不可用，需要保持为0. |
| smart_cover | Boolean |  |  | 是否开启抽帧。在普通托管场景下，本属性会影响程序化2.0格式的covers字段和程序化2.0的photoInfos字段内的coverImageToken参数（开启时不传）；在小说测书场景下，本字段必须是false，小说测书的视频是否开启抽帧需要使用fictionInfos字段内的smartCover属性 | 当hosting_scene=0,5时：当smart_cover=false，即不开启抽帧，此时photo_infos属性的image_token如果传入则用传入值获取封面，否则按照首帧获取封面图。当smart_cover=true时，开启抽帧，此时photo_infos属性的image_token不需要传入。当hosting_scene=1时：本字段只能为false |
| roi_ratio | Double |  |  | ROI系数，有效值范围(0,100]。当ocpxActionType或deepConversionType是ROI类目标时，本字段必须填有效值。当非roi类目标时，本字段必须是0。 | 当hosting_scene=5不填或填0，当hosting_scene!=5规则如下：当ocpx_action_type或者deep_conversion_type为roi类目标时，本字段必填。有效范围为(0,100]。本字段如果代表的ocpx_action_type对应的系数，则cpa_bid需要保持为0.本字段如果代表的deep_conversion_type对应的系数，则deep_conversion_bid需要保持为0. |
| consult_id | Long |  |  | 咨询组件id。普通托管场景下campaign_type=5时可用 | 仅当常规推广、最大转化（hosting_scene=0,5）下的收集销售线索（campaign_type=5）使用了建站落地页（site_id!=0）时可用。 |
| merchandise_id | Long |  |  | 课程库id。普通托管场景下campaign_type=5时，且在课程库白名单中时，本字段可用。小说测试场景不可使用课程库。 |  |
| merchandise_type | Integer |  |  | 商品类型，当merchandiseId非0时，本字段必须填写。目前merchandiseId仅代表课程库，此时merchandiseType请传入2。 |  |
| ad_dsp_target | AdHostingTargetTypeForGateway | 是 |  | 定向属性 |  |
| - age | RangeInt[] |  | [[18,23],[24,56]] | 年龄段，不限或者空数组代表不限定，不可低于18岁 | 、不设定年龄则传入[] 2、设定为自定义年龄区间，则只能传入一个值，最小为18，最大为55，如 { "min": 18, "max": 55 }3、当设定的年龄区间不止一个，则只能在如下区间选择18,23、24,30、31,40、41,49、50,100，如 { "min": 18, "max": 23 }, { "min": 41, "max": 49 } |
| - min | Integer | 是 | 1 | 下限 |  |
| - max | Integer | 是 | 100 | 上限 |  |
| - population | Long[] |  | [12,23] | 定向人群id | 不设定，用[]代表；设定定向人群时，定向id需要是可识别的。定向人群id集合不能超过100个。 |
| - exclude_population | Long[] |  | [14,23] | 排除人群id | 不设定，用[]代表。设定时，排除id需要是可识别的。排除人群id集合不能超过100个。 |
| - paid_audience | Long[] |  | [14,98] | 付费人群id | 不设定，用[]代表。设定时，id需要是可识别的。数组个数不能超过100个。另外，population、exclude_population、paid_audience有联合检查规则，如不同存在相同值、定向人群population和paid_audience不可同时设定等。 |
| - gender | String |  | M | 性别，""=不限，M=男性，F=女性 | ""代表不限性别。"F"代表女性、"M"代表男性 |
| - region_ids | Long[] |  | [12,35] | 定向地域id | 不限定地域用[]代表；设定时id需要为可识别值。仅支持设定"指定地区"。若需要设定"城市等级"，请不要传入此字段，并使用region_category_ids |
| - user_type | Integer |  | 0 | 定向地域人群类型，联动regionIds | 见user_type枚举说明 |
| - intelli_extend | IntelliExtendParamForGateway |  | 无 | 智能扩量，注意托管的isOpen必须传true，其他不限 | 格式如下 "no_age_break": false,//是否允许打破年龄带限制 "no_gender_break": false,//是否允许打破性别限制 "no_area_break": false,//是否允许打破地域限制 "is_open": true //是否开启智能扩量，本字段只能是true，可不传，传入false也会被修改为true} |
| - is_open | Boolean | 是 | true/false | 是否开启智能扩量 |  |
| - no_age_break | Boolean | 是 | false | 不允许打破年龄定向（是/否） |  |
| - no_gender_break | Boolean | 是 | false/true | 不允许打破性别定向（是/否） |  |
| - no_area_break | Boolean | 是 | true/false | 不可打破地域定向（是/否） |  |
| - platform | TargetPlatformMap |  | {"android":{"min":3.0,"max":20.0}}或{"ios":{"min":6.0,"max":20.0}} | 定向参数，注意android和ios参数不可同时存在 | 本属性需要和appId的平台一致；如果是落地页，且落地页内包括了下载组件，则需要和下载组件的平台一致，如果是快应用的落地页，则需要为安卓7.0及以上。合法取值有三种，不限定平台，用{}代表；限定安卓平台：{ "android": { "min": 3 }}注意安卓平台的最小取值为3，最大取值为10、限定ios平台：{ "ios": { "min": 6 }}注意ios平台的最小取值是6，最大取值为14.注意ios和android两个key只能选择一个传入，不能同时传入。 |
| - android | RangeDouble |  | "min": 3.0, "max": 20.0 | 安卓版本限制；注意本参数和ios参数不可同时存在 |  |
| - min | Double | 是 | 4.0 | 下限 |  |
| - ios | RangeDouble |  | "min": 6.0, "max": 14.0 | ios版本限制；注意本参数和android参数不可同时存在 |  |
| - min | Double | 是 | 4.0 | 下限 |  |
| - filter_converted_level | Integer |  | 0 | 过滤已转化人群 | 见枚举说明filter_converted_level；注意当campaign!=2时，filter_converted_level不可以取5即过滤app。filter_converted_level=6需加白使用仅支持提升应用安装和收集销售线索 |
| - region | String[] |  |  | 输出参数。region_ids的中文描述。 |  |
| - app_interest_ids | String[] |  | ["1-1001"] | 定向属性APP行为-按APP分类, 仅限提升应用活跃下可用，与按APP名称互斥，即app_interest_ids与package_name不可同时为非空 | 仅限提升应用活跃下可用，与按APP名称互斥，即app_interest_ids与package_name不可同时为非空 |
| - package_name | String[] |  | ["kuaishou.com"] | 定向属性APP行为-按APP名称, 仅限提升应用活跃下可用，与按APP分类互斥，即 app_interest_ids与package_name不可同时为非空 | 仅限提升应用活跃下可用，与按APP分类互斥，即app_interest_ids与package_name不可同时为非空 |
| - device_brand | String[] |  | ["VIVO"] | 设备定向 | 定向属性设备品牌ids对应品牌名称，如："苹果",""VIVO"。与device_brand_ids联动，device_brand_ids非空信任device_brand_ids参数，device_brand_ids为空信任device_brand参数值 |
| - device_brand_ids | Long[] |  | [2] | 设备定向ids | 在提升应用安装和提升应用活跃下当目标应用(app_id)为安卓平台应用时可用 在收集销售线索时与定向平台(platform)联动，当不限定平台或限定ios平台时可以选择苹果(id=1)和其他安卓品牌(id=2、3...)如：1,2，当限定为安卓平台时不可选择设配品牌为苹果(id=1) |
| - filter_time_range | Integer |  | 0、1、2 | 过滤已转化用户时间 | 需加白使用，见枚举说明filter_time_range，提升应用安装和收集销售线索下filter_converted_level!=0时可用枚举值1，2 |
| - region_category_ids | String[] |  | ["1-11", "1-31"] | 定向地域id | 设定"城市等级"时，使用此字段。不限定地域用[]代表；设定时id需要为可识别值 |
| - region_type | Integer |  | 1 | 地区类型 | 见region_type枚举说明 |
| - disable_installed_app_switch | Integer |  | 1 | 过滤已安装选项 |  |
| - ip_type | Integer |  |  | 地域IP | 白名单可用，0-默认IP、1-广协IP |
| fiction_infos | AdHostingFictionTypeForGateway[] |  |  | 小说测书代表小说属性的结构体 | 当hosting_scene=0,5时需要保持为空数组；当hosting_scene=1时必填。属性见下文具体说明 |
| - fiction_id | Long | 是 | 123 | 小说id |  |
| - photo_infos | AdHostingPhotoTypeForGateway[] | 是 | 无 | 视频信息 |  |
| - photo_id | Long | 是 | 123 | 视频id |  |
| - photo_orientation | Integer | 是 | 1 | 1=竖版，2=横版 |  |
| - cover_image_token | String |  | image1234 | 图片token |  |
| - smart_cover | Boolean |  | false | 是否开启抽帧。本字段对photoInfos所代表的结构体整体生效，为true是，photoInfos的封面参数可不传入。 |  |
| - action_bar | String | 是 | 立即下载 | 行动号召按钮 |  |
| - captions | String[] | 是 | ["广告语1", "广告语2"] | 作品广告语 |  |
| - click_url | String |  | https://xxx | 第三方点击检测链接 |  |
| - actionbar_click_url | String |  | https://xxx | 第三方actionbar点击监测链接 |  |
| - web_uri | String |  | https:/// | 当测书工具的计划类型为收集销售线索时，使用了广告主自有落地页时，本字段必填。其代表落地页链接。 |  |
| - site_id | Long |  | 1234 | 当测书工具的计划类型是收集销售线索，且落地页类型使用了自建站时必填，填入建站的页面id，此时webUri字段传入建站的页面url，同时联动webUriType传入2。 |  |
| - web_uri_type | Integer |  | 1 | 当campaign_type!=5时本字段不填写，保持为0。当campaign_type=5时，本字段标志落地页类型，1=自有落地页，此时site_id不允许填值，web_uri字段输入用户落地页链接；2=建站落地页，此时web_uri不需要填值，site_id填入落地页的id。 |  |
| photo_infos | AdHostingPhotoTypeForGateway[] |  |  | 程序化3的视频格式 | 当hosting_scene=0,5时必填；当hosting_scene=1时需要保持为空数组。属性见下文具体说明 |
| - photo_id | Long | 是 | 123 | 视频id |  |
| - photo_orientation | Integer | 是 | 1 | 1=竖版，2=横版 |  |
| - cover_image_token | String |  | image1234 | 图片token |  |
| name_rule | AdHostingNameRuleTypeForGateway |  |  | 命名规则 | 格式如下{"rule_enable": false, //是否开启命名规则"campaign_name_rule": "",//计划命名规则"unit_name_rule": "",//单元命名规则"creative_name_rule": ""//创意命名规则}当rule_enable=false时，具体规则项都不可传入；当rule_enable=true时，规则项必须有一个为非空值。每项命名规则的长度，不能超过100字符，如果包括了宏变量，则取宏变量最长的占位长度。命名规则的可用宏变量可见说明“name_rule宏变量” 本属性可以更新，但只能由关闭改为开启，或者在开启状态下修改具体项，不可由开启改为关闭。 |
| - rule_enable | Boolean |  | true | 是否开启命名规则。a、本属性默认关闭，此时命名规则的详细参数campaignNameRule、unitNameRule、creativeNameRule不可传入值。b、本属性传入true，则campaignNameRule、unitNameRule、creativeNameRule至少有一项需要是非空值。 |  |
| - campaign_name_rule | String |  | 命名规则_计划_[日期] | 计划层级的命名规则。传入空串代表不设置计划的命名规则。 |  |
| - unit_name_rule | String |  | 命名规则_单元 | 单元的命名规则，当ruleEnable=true时可用。单元的命名规则会默认拥有“[日期]”、“[序号]”，如示例值最终的命名形式是“命名规则_单元_[日期]_[序号]”；当用户指定了[日期]、[序号]，则不添加，如“命名规则_[序号]_单元”的最终命名规则是“命名规则_[序号]_单元_[日期]”。 |  |
| - creative_name_rule | String |  | 命名规则_创意 | 创意的命名规则，当ruleEnable=true时可用；本属性传入空代表不设置创意的命名规则。 |  |
| asset_mining | Boolean | 是 | false | 是否开启素材同步 | 必填 注意本属性可有关闭改为开启，但不可由开启改为关闭。 |
| fiction_id | Long |  | 12345 | 小说id | hosting_scene=1时本字段不可用，需要传0.hosting_scene=0时，代表绑定的小说id。本字段需要添加白名单，且如果在强制绑定白名单里，就必须绑定小说 |
| web_uri_type | Integer |  | 2 | 当campaign_type!=5时本字段不填写，保持为0。当campaign_type=5时，本字段标志落地页类型，1=自有落地页，此时site_id不允许填值，web_uri字段输入用户落地页链接；2=建站落地页，此时web_uri不需要填值，site_id填入落地页的id。 | 本属性的有效取值见枚举web_uri_type说明。当hosting_scene=0,5时：当campaign_type=2时本属性需要设定为0；当campaign_type=5时，web_uri_type=1代表自有落地页，此时site_id需要为0，且web_uri需要传入；web_uri_type=2代表建站落地页，此时site_id必须非0，web_uri不需要传入；web_uri_type=3代表程序化落地页，此时group_id需要传入，web_uri不需要传入。当hosting_scene=1时，本属性不可设定 |
| group_id | Long |  |  | 程序化落地页id | 仅当hosting_scene=0,5，且campaign_type=5，且web_uri_type=3时，可传入本属性，须传入有效的group_id。其他场景下传0即可。 |
| scene_ids | Integer[] |  |  | 投放场景 | 本属性的有效取值见枚举scene_id说明。可以支持的场景位组合，仅1、6、10、6,10、1, 10、24、6,24、10、24、6、10、24当scene_ids包含10时：hosting_scene必须为0或者1，且ocpx_action_type不可为774，且deep_conversion_type不可为8、116、117、118、119、137、109、43 |
| bid_type | Integer | 是 | 10 | 出价方式，10:普通托管、12:最大转化场景 | 10=常规推广（成本优先）、小说测书（选填）12=常规推广（跑量优先）、最大转化（必填） |
| constraint_action_type | Integer |  | 2 | 浅层约束目标，0:无、2:点击、53:表单、180:激活、190:付费 | 可选值见constraint_action_type枚举值，仅跑量优先下可用 |
| constraint_cpa | Long |  | 10000 | 浅层约束成本，浅层约束目标非0时浅层约束成本也非0，单位厘 | 当constraint_action_type为非0时必填。单位为厘。需要满足浅层约束目标的出价规范，参考普通创建。 |
| schema_uri | String |  | https:// | 当campaign_type=2时，代表"开启直达链接，点击直接唤起APP"。 当campaign_type=7时，代表调起链接，需要传入http或https开头的链接，填写后优先打开调起链接，可调起应用内详情页，不填(需要加白，未在白名单则必填)则优先打开H5链接(web_uri)； | 当campaign_type=2时，代表"开启直达链接，点击直接唤起APP"。当campaign_type=7时，代表调起链接，需要传入http或https开头的链接，填写后优先打开调起链接，可调起应用内详情页，不填(需要加白，未在白名单则必填)则优先打开H5链接(web_uri)； |
| pic_infos | AdHostingPicTypeForGateway[] |  | - | 图片信息 | 非必传，仅在hosting_scene=0, 且scene_ids包含联盟场景10时，可传属性见下文具体说明 |
| - image_token | String | 是 | "123.jpg" | 图片token |  |
| ad_photo_played_t3s_url | String |  |  | 3s播放监测链接 | 使用本功能需要添加功能白名单。本字段不能和click_url字段相同。 |
| intelli_budget | Boolean |  |  | 跑量优先智能预算优化开关 | 仅跑量优先场景(hosting_scene=0&bid_type=12)且为白名单用户时可用、当intelli_budget=true，即开启智能预算优化、当intelli_budget=false时，即关闭智能预算优化。 |
| dpa_sub_type | Integer |  |  | 关联商品库类型 | 当campaign.type=5且在商品库白名单中时可用。其中枚举为2：SDPA单商品 |
| dpa_library_id | Long |  |  | 关联商品库ID |  |
| dpa_outer_id | String |  |  | 关联商品ID | 当dpa_sub_type = 2时必填 |
| enhance_conversion_type | Integer |  |  | 增强目标 | 仅当优化目标=激活/表单，深度优化目标=自然日次日留存时，支持设定改属性。目前仅支持“自然日七日留存”，即enhance_conversion_type=8 |
| package_id | Long |  |  | 应用包ID | 新版应用中心，应用包ID；使用新版应用，该字段必填，老版本非必填 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | code |  |
| message | String |  |  | message |  |
| data | AdHostingProjectCreateResultForGateway |  |  | data |  |
| - project_id | Long |  | 10001 | 托管项目id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "project_id": 20301 //项目id
    },
    "message": "OK"
}
```
