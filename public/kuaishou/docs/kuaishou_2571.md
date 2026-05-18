---
title: 修改广告组
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2571&menuId=3293
doc_id: kuaishou_2571
source_id: kuaishou_2571
---
# 修改广告组

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2571 |
| documentType | 2 |
| version | 0.0.7 |
| bizName | 效果广告 |
| createTime | 2026-04-01T07:59:16.480Z |

## 概述

注意事项：修改接口可仅传只需要修改的字段。传null或者不传表示不修改其他字段。传默认值、空列表表示清空某字段。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/unit/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| search_population_retargeting | Integer |  |  | 搜索人群追投开关 | 0：关闭；1:开启； |
| advertiser_id | Long | 是 |  | 广告主id | 在获取 access_token 的时候返回 |
| im_message_mount | Boolean |  |  | 是否挂载私信收集组件 |  |
| series_pay_template_id | Long |  |  | 付费模板 | 仅在计划 campaignType=30快手号-短剧推广时支持使用，需要跟付费模式一起使用 |
| series_pay_mode | Integer |  |  | 付费模式 | 仅在计划 campaignType=30快手号-短剧推广时，需要跟付费模板一起使用，1-打包，2-虚拟币 |
| ad_type | Integer |  |  | 请补充描述详情 |  |
| adv_card_list | Long[] |  |  | 绑定卡片 id | 需要更新的高级创意卡片的id列表 |
| adv_card_option | Integer |  |  | 高级创意开关 | 0：关闭；1:开启； |
| app_download_type | Integer |  |  | 应用下载方式 | 0 - 直接下载；1 - 落地页下载；仅在提升应用活跃（默认是直接下载）、提升应用安装（默认是落地页下载）下白名单生效。 |
| app_icon_url | String |  |  | 请补充描述详情 |  |
| app_id | Long |  |  | 应用 ID | 当计划类型为 提升应用活跃/提升应用安装/商品库推广（campaign.type = 2/7/9） 时必填，可通过应用列表接口「/rest/openapi/v2/file/ad/app/list」获取应用 ID；当计划类型为粉丝直播推广（campaign.type = 16），且组件类型为小铃铛关联了应用时必填； |
| app_store | String[] |  |  | 应用商店列表 | 华为：huawei；OPPO：oppo；VIVO：vivo；小米：xiaomi；魅族：meizu；锤子：smartisan；荣耀：honor。只支持计划类型为 2 且应用是 Android 类型的推广 |
| asset_mining | Boolean |  |  | 程序化创意 2.0 素材挖掘 | unit_type=7 选填；unit_type=10 不支持 |
| auto_create_photo | Boolean |  |  | 请补充描述详情 |  |
| begin_time | String |  |  | 投放开始时间 | 格式为 yyyy-MM-dd，需大于等于当前时间。周期稳投广告组不支持修改begin_time |
| bid | Long |  |  | 出价 | bid_type 为 CPC 时该字段必填，单位：厘，不得低于 0.2 元，不得高于 100 元，不得高于组预算 |
| bid_type | Integer | 是 |  | 优化目标出价类型 | 2：CPC（计划类型为粉丝直播推广、DPA不支持，计划出价为MCB不支持；广告组选择开屏不支持；搜索广告需要添加白名单才可支持）；10：OCPM ；12:最大转化 |
| campaign_id | Long |  |  | 请补充描述详情 |  |
| card_type | Integer |  |  | 请补充描述详情 |  |
| component_id | Long |  |  | 请补充描述详情 |  |
| consult_id | Long |  |  | 咨询组件 id | 1、仅可被用于线索类计划下的 unit；2、仅当落地页使用了建站落地页或者建站程序化落地页时可使用；3、注意本字段不可被更新；4、本属性不可与附加表单组件(component_id)同时使用；通过「/rest/openapi/v2/lp/consult/list」接口获取 |
| conversion_type | Integer |  |  | 转化途径 | 计划 campaignType=16 粉丝直播推广时必填写 6 |
| convert_id | Long |  |  | 请补充描述详情 |  |
| cpa_bid | Long |  |  | 出价 | bid_type 是 OCPM 时该字段必填，单位：厘，ocpx_action_type 为 2 时，不得低于 0.1 元，不得高于 10 元；ocpx_action_type 为 180 时，不得低于 1 元，不得高于 3000 元，ocpx_action_type 为 53 时，不得低于 5 元，不得高于 3000 元；不得高于组预算。计划周期稳投开启时，不支持大于campaign的day_budget；支持每个自然日不限次数调高出价； 投中支持将此处出价下调，每个自然日仅1次；roi系数类出价，支持上调，每个自然日仅1次，限额如下：出价金额类调低后的价格不能低于该计划下所有单元最高出价的0.8倍，roi系数类提高后的系数不能高于该计划下单元最低roi系数出价的1.2倍 |
| custom_mini_app_data | CustomMiniAppInfoSnake |  |  | 推广小程序营销目标小程序信息 | 计划 campaignType=19 推广快手小程序时必填，具体见下方表格。 具体见下方表格 |
| - bootstrap_page | String |  |  | 小程序启动页面 | 当 mini_app_type = 1 时必填，表示跳转小程序时直接进入的页面，当 mini_app_type = 2 时不填。例：page/app/index。 |
| - bootstrap_params | String |  |  | 小程序启动参数 | 启动参数可以追踪页面来源 |
| - mini_app_id_platform | String |  |  | 小程序APPID | 计划 campaignType=19 推广快手小程序时必填，不能超过30个字符。 |
| day_budget | Long |  |  | 分日预算 | 单位：厘，指定 0 表示预算不限，默认为 0；每天不小于 100 元，不超过 100000000 元，仅支持输入数字；修改预算不得低于该广告组当日花费的 120% 和修改前预算的较小者，与 day_budget_schedule 不能同时传，均不能低于组出价。周期稳投组不支持修改day_budget |
| day_budget_schedule | String[] |  |  | 分日预算 | 单位：厘，指定 0 表示预算不限，默认为 0；每天不小于 100 元，不超过 100000000 元，仅支持输入数字；修改预算不得低于该账户当日花费的 120% 和修改前预算的较小者，与 day_budget 不能同时传，优先级高于day_budget |
| deep_conversion_bid | Long |  |  | 深度转化出价 | 单位：厘，仅当 deep_conversion_type 可用且账户满足白名单时选填，出价需大于 cpa_bid，小于 min{组预算，3000 元}，不得高于组预算，不支持从 0 改为其他值，也不支持从其他值改为 0 |
| deep_conversion_type | Long |  |  | 深度转化目标 | 3:付费，7:次日留存，10:完件, 11:授信；13:添加购物车；14:提交订单；15:购买；44：有效线索；92：付费 roi；181：激活后24H次日留存。可通过下方深度转化信息查询接口获取当前账户可选的深度转化目标 |
| download_page_url | String |  |  | 自定义落地页URL | 选择落地页下载方式时的自定义落地页URL，仅在提升应用活跃和提升应用安装下生效，site_id 优先级高于此字段，白名单功能 |
| dpa_unit_param | MapiDpaUnitReqSnake |  |  | DPA 相关商品信息 | 当计划类型为商品库推广时必填。 |
| - detail_unit_type | Integer |  |  | 请补充描述详情 |  |
| - dpa_category_ids | String[] |  |  | DPA商品类目集合 | DPA可用。类目 ID 通过商品库类目信息接口获取。类目之间用 - 分隔，如："一级类目ID-二级类目ID-三级类目ID" 或 "一级类目ID"。与 dpa_outer_ids 二选一，两者皆空则全类目投放 |
| - dpa_unit_actionbar_click_url | String |  |  | 请补充描述详情 |  |
| - dpa_unit_click_url | String |  |  | 请补充描述详情 |  |
| - dpa_unit_sub_type | Integer |  |  | 商品广告类型 | 商品广告必填：1-DPA，2-SDPA，3-动态商品卡（2/3在提升应用安装、提升应用活跃、收集营销线索、小程序推广营销目标下可用） |
| - library_id | Long |  |  | 商品库ID | 商品广告必填 |
| - outer_id | String |  |  | 外部商品ID | SDPA必填 |
| - product_id | String |  |  | 快手商品ID | SDPA必填 |
| - unit_impression_url | String |  |  | 请补充描述详情 |  |
| end_time | String |  |  | 投放结束时间 | 格式为 yyyy-MM-dd，不传值表示从今天开始长期投放，传值表示设置开始时间和结束时间，且投放结束时间需大于等于投放开始时间。想要设置为长期投放时，传空字符串。 |
| enhance_conversion_type | Integer |  |  | 请补充描述详情 |  |
| extend_search | Boolean |  |  | 搜索广告智能扩词开启状态 | 0：关闭，1：开启；为空则为不修改 |
| group_id | Long |  |  | 程序化落地页ID | web_uri_type = 3 时表示程序化落地页ID，必须为数字，通过「/rest/openapi/gw/magicsite/v1/group/list」获取； |
| jingle_bell_id | Long |  |  | 小铃铛组件id | 计划 campaignType=16 粉丝直播推广时必填写 |
| live_user_id | Long |  |  | 主播id | 计划 campaignType=16 粉丝直播推广时必填写 |
| negative_word_param | MapiNegativeWordSnake |  |  | 搜索否词 | 更新否词可填，不更新设置为null |
| - exact_words | String[] |  |  | 精确否定词 | 搜索广告新增，最大数量200，单个词最大长度20，不支持制表符、换行符、Emoji表情等特殊字符 |
| - phrase_words | String[] |  |  | 短语否定词 | 搜索广告新增， 最大数量200，单个词最大长度20，不支持制表符、换行符、Emoji表情等特殊字符 |
| ocpx_action_type | Integer |  |  | 请补充描述详情 |  |
| outer_loop_native | Integer |  |  | 请补充描述详情 |  |
| play_button | String |  |  | 试玩按钮文字内容 | 开启试玩时存在，否则不存在，示例按钮内容如下：1：立即试玩；2：试玩一下；3：立即体验；4：免装试玩；5：免装体验。启用试玩时：默认“立即试玩”，未启用试玩时：内容为空。通过接口「/rest/openapi/gw/dsp/v1/playable/play_buttons」获取 |
| playable_id | Long |  |  | 试玩 ID | 可选字段，开启试玩时存在，否则不存在。当用户上传试玩素材成功时返回，用于之后对于广告组中试玩创意的编辑操作。通过接口「 /rest/openapi/gw/dsp/v1/playable/list 」 获取 |
| playable_orientation | Integer |  |  | 请补充描述详情 |  |
| playable_switch | Integer |  |  | 请补充描述详情 |  |
| playable_url | String |  |  | 请补充描述详情 |  |
| put_status | Long |  |  | 广告组的投放状态 | 1：广告组投放中；2：广告组暂停投放；3：删除广告组（注：请勿使用该接口删除广告组，请使用「修改广告组状态」接口），已删除的广告组不可变更。周期稳投不支持修改广告组put_status，删除广告计划会同步删除广告组 ; |
| quick_search | Integer |  |  | 搜索快投开关 | 0：不开启（默认填充）；1：开启搜索快投； |
| roi_ratio | Double |  |  | 付费 ROI 系数 | 优化目标为「首日 ROI」时必填：ROI 系数取值范围 ( 0,100 ] 最多支持到三位小数（如：0.066） |
| scene_id | String[] |  |  | 资源位置 | 联盟广告不可修改，广告组下有创意也不能修改 |
| schedule_time | String |  |  | 投放时间段 | 格式为 24*7 位字符串，且都为 0 和 1，以一个小时为最小粒度，从周一零点开始至周日 24 点结束；0 为不投放，1 为投放，不传/全传 1/全传 0 视为全时段投放 |
| schema_id | String |  |  | 微信小程序ID | 收集营销线索下，web_uri_type = 4时生效，表示微信小程序ID |
| schema_uri | String |  |  | 调起链接 | 提升应用活跃营销目标的调起链接；应用推广下在已经安装 app 的用户手机上可以拉起 app（需要运营加白），开屏广告如果营销目标是应用活跃，调起链接必须在品牌开屏白名单中；当 web_uri_type = 4 时，该字段必填，表示带归因参数的小程序启动页面链接，当campaign.type=5时，白名单用户可填 |
| show_mode | Integer |  |  | 创意展现方式 | 1 - 轮播；2 - 优选（默认） |
| site_type | Integer |  |  | 预约广告 | 1 - IOS预约；2 - ANDROID 预约；【仅在计划类型为收集营销线索，web_uri_type = 2 时生效】 |
| smart_bid | Integer |  |  | 请补充描述详情 |  |
| smart_cover | Boolean |  |  | 程序化创意 2.0 智能抽帧 | unit_type=7 选填;unit_type= 10 不支持 |
| speed | Integer |  |  | 请补充描述详情 |  |
| splash_ad_switch | Boolean |  |  | 请补充描述详情 |  |
| target | MapiTargetDetail479Snake |  |  | 定向数据 |  |
| - distance_show | DistanceShowSnake[] |  |  | 新商圈 |  |
| - address | String |  |  | address |  |
| - lng | String |  |  | lng |  |
| - lat | String |  |  | lat |  |
| - radius | Long |  |  | radius |  |
| - location_name | String |  |  | location_name |  |
| - poi_id | String |  |  | poi_id |  |
| - android_osv | Integer |  |  | Android 版本 | 3：不限，4：4.x+，5：5.x+，6：6.x+，7：7.x+，8：8.x+，9：9.x+，10：10.x+；当计划类型为 2（提升应用安装），7（提升应用活跃）时，仅当 app_id 表示的是 Android 应用可使用此字段传递版本 |
| - app_ids | String[] |  |  | APP 行为-按 APP 名称 | id 不能重复且必须准确，具体 id 可通过下方应用接口获取，建议不超过 10 个，否则可能出现报错；仅包含安卓数据，若操作系统定向 IOS 则无效；不能同时选择 app_interest。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - app_interest_ids | String[] |  |  | APP 行为-按分类 | id 不能重复且必须准确，具体 id 可通过下方标签接口获取；仅包含安卓数据，若操作系统定向 IOS 则无效；不能同时选择 app_ids（新标签体系字段，替换 app_interest，与 app_interest 同时传递，app_interest 字段失效）。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - app_names | String[] |  |  | 请补充描述详情 |  |
| - behavior_interest | BehaviorInterest765Snake |  |  | 行为兴趣定向 | behavior.keyword 、behavior.label、interest.lable 其中一个必传，具体传值下方表格；仅在 behavior_type = 1 时生效。联盟广告位不支持interest。 |
| - behavior | Behavior482Snake |  |  | 行为定向 | behavior 与 interest 同时不传，则清空行为兴趣定向 |
| - keyword | Keyword[] |  |  | 行为定向关键词 | 根据/rest/openapi/v1/tool/keyword/query 接口获取 |
| - id | Long | 是 |  | 关键词 id | id 与 name 需互相匹配 |
| - name | String | 是 |  | 关键词名称 | id 与 name 需互相匹配 |
| - label | String[] |  |  | 行为定向 类目词 | 根据/rest/openapi/v1/tool/label/behavior_interest 接口获取。将行为类目 id 从最高层类目 id 开始，以“-”连接起来，假如有一个类目 id 为 80202，父类目 id 为 802，最高层类目 id 为 8，则此时应该写"8-802-80202"；如果想全选最高层类目"8"底下的所有子类目，填"8" |
| - scene_type | String[] |  |  | 行为场景 | 1：社区；2：APP；3:电商；4：推广 |
| - strength_type | Integer |  |  | 行为强度 | 0：不限；1：高强度 |
| - time_type | Integer |  |  | 在多少天内发生行为的用户 | 0:7 天；1：15 天；2：30 天；3：90 天；4：180 天 |
| - interest | Interest708Snake |  |  | 兴趣定向 | behavior 与 interest 同时不传，则清空行为兴趣定向 |
| - keyword | Keyword[] |  |  | 行为定向关键词 | 根据/rest/openapi/v1/tool/keyword/query 接口获取 |
| - id | Long | 是 |  | 关键词 id | id 与 name 需互相匹配 |
| - name | String | 是 |  | 关键词名称 | id 与 name 需互相匹配 |
| - label | String[] |  |  | 行为定向 类目词 | 根据/rest/openapi/v1/tool/label/behavior_interest 接口获取。将行为类目 id 从最高层类目 id 开始，以“-”连接起来，假如有一个类目 id 为 80202，父类目 id 为 802，最高层类目 id 为 8，则此时应该写"8-802-80202"；如果想全选最高层类目"8"底下的所有子类目，填"8" |
| - strength_type | Integer |  |  | 兴趣标签强度 | 0：不限 1：高强度 |
| - behavior_type | Integer |  |  | 行为兴趣类型 | 0：默认；1：自定义行为意向；2：行为意向系统优选。联盟广告位不支持后者。 |
| - business_interest | String[] |  |  | 请补充描述详情 |  |
| - celebrity | MapiCelebrity280Snake |  |  | 快手网红 | behaviors、fans_star两个字段必填充。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - behaviors | String[] |  |  | - | 该字段为平台对应快手网红功能中的行为类型，可多选，但不可不选，不选会导致快手网红定向失效，定义如下 0:关注、1:视频互动、2:直播互动 |
| - fans_stars | CelebrityFansStar118Snake[] |  |  | - | 该字段包括平台对应快手网红功能中的网红分类和快手网红两项，数据保证录入顺序，可从【快手网红-网红分类】和【快手网红-搜索快手网红】接口获取对应数据 |
| - category | String[] |  |  | - | 当是快手网红，即type=2时，该字段传值有效，对应当前快手网红的分类，格式为first_label_id,second_label_id，如果second_label_id不存在，则只传入first_label_id，如传入32, 241表示当前快手网红属于影视-影视分类二级网红分类 |
| - id | String |  |  | - | 如使用该功能则必填此项，该字段有两种含义 1、当是网红分类，即type=1时，该字段传入对应网红分类对应的父ID与当前ID的拼接字符串，如传入"33-177"表示一级网红分类"游戏"下的二级网红分类"沙盒游戏"，如选中的是一级网红分类，则直接传入当前ID如"33" 2、当是快手网红，即type=2时，该字段传入对应快手网红的author_id，如传入"1151465119"表示快手网红小脑斧来自N次元 |
| - name | String |  |  | - | 如使用该功能则必填此项，该字段有两种含义 1、当是网红分类，即type=1时，该字段传入对应网红分类对应的父name与当前name的拼接字符串，如传入"游戏-沙盒游戏"表示一级网红分类"游戏"下的二级网红分类"沙盒游戏"，如选中的是一级网红分类，则直接传入当前ID如"游戏"，保证传入的值与传入id对应网红标签name（拼接）一致 2、当是快手网红，即type=2时，该字段传入对应快手网红的kwai_id，如传入"小脑斧来自N次元"表示快手网红小脑斧来自N次元，保证传入的值与传入id对应的快手网红的kwai_id保持一致 |
| - type | Integer |  |  | - | 如使用该功能则必填此项，该字段为平台对应快手网红功能中的网红分类和快手网红两项，可从【快手网红-网红分类】和【快手网红-搜索快手网红】接口获取对应数据 1:网红分类、2:快手网红 |
| - device_brand | String[] |  |  | 请补充描述详情 |  |
| - device_brand_ids | String[] |  |  | 请补充描述详情 |  |
| - device_price | String[] |  |  | 设备价格 | 1：1500元以下（近期下线），新增 11:1000元以下，12:1001~1500，请直接使用新枚举值； 2：1501~2000，3：2001~2500，4：2501~3000，5：3001~3500，6：3501~4000，7：4001~4500（近期下线），新增：13:4001~5000； 8：4501~5000（近期下线），新增：13:4001~5000； 9：5001~5500（近期下线），新增：14:5001~6000； 10：5500元以上（近期下线），新增：15:6000元以上；传值为[]表示不限； |
| - disable_installed_app_switch | Integer |  |  | 过滤已安装人群维度 | 0：过滤（默认），1：不限 |
| - district_ids | String[] |  |  | 商圈定向 | 与 region 字段不能同时传、白名单控制，最多选 100 个。可以通过/rest/openapi/v1/region/district/list 接口获取商圈信息。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - exclude_media | String[] |  |  | 媒体定向排除包 | media 和 exclude_media 只可选其一，若选择使用排除行业优质流量包（media_source_type = 1），此处单选：1 - 超休闲游戏；2 - 重度游戏；4 - 直营电商；5 - 平台电商；若选择使用广告主自定义媒体包（media_source_type = 2），此处多选，填写媒体包 id；【仅联盟广告位生效】 |
| - exclude_population | String[] |  |  | 人群包排除 | 人群包排除 /rest/openapi/v1/dmp/population/list 获取人群包 id。exclude_population 不能重复，不能传付费人群包，付费人群包标识字段：population_type=7 |
| - filter_converted_level | Integer |  |  | 过滤已转化人群纬度 | 搜索广告、联盟广告、小店通不支持。优化目标不支持【封面曝光数】和【封面点击数】非应用下载类推广不支持过滤【APP】纬度。0(默认)：不限；1：广告组 2：广告计划；3：本账户；4：公司主体；5：APP；6:运营自定义产品名；7:企微号(系统过滤此账户对应企微号的已加粉用户，当前仅支持磁力建站投放企微。) |
| - filter_time_range | Integer |  |  | 用户的转化时间范围 | 0：30天；1：60天；2:90天。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - gender | Integer |  |  | 性别 | 1：女性, 2：男性，0 表示不限 |
| - intelli_extend_option | Integer |  |  | 智能定向开关 | 0：智能定向关闭；1：智能定向开启；2：智能定向Pro开启（白名单可用）；和auto_population字段互斥，只能有一个字段开启 |
| - ios_osv | Integer |  |  | IOS 版本 | 6：不限，7：7.x+，8：8.x+，9：9.x+，10：10.x+；11：11.x+；12：12.x+；13：13.x+；14：14.x+；15：15.x+；16：16.x+；当计划类型为 2（提升应用安装），7（提升应用活跃）时，仅当 appId 表示的是 iOS 应用可使用此字段传递版本 |
| - media | String[] |  |  | 媒体定向包 | 若选择使用定向行业优质流量包（media_source_type = 1），此处单选：1 - 超休闲游戏；2 - 重度游戏；4 - 直营电商；5 - 平台电商；若选择使用广告主自定义媒体包（media_source_type = 2），此处多选，填写媒体包 id【仅联盟广告位生效】 |
| - media_source_type | Integer |  |  | 媒体包来源 | 默认为 0，0-不限，未指定，1-行业优质流量包，2-广告主自定义 |
| - network | Integer |  |  | 网络环境 | 1：Wi-Fi，2：移动网络，0：表示不限 |
| - paid_audience | String[] |  |  | 付费人群包 id | /rest/openapi/v1/dmp/population/list 获取人群包 id。1、不能重复，只能传付费人群包，且 third_platform_code 要一样，2、如果传了【population 或 exclude_population】，报错；修改时要也要保证【population 或 exclude_population】不能同时传。3、创建时若已经有了【population 或 exclude_population】修改时只传 paid_audience 也会报错，这时需要把 population 或 exclude_population】设为[]才行，反之也一样。总之，【population 或 exclude_population】与【paid_audience】不能同时存在。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - platform_os | Integer |  |  | 操作系统 | 0：不限，1：Android，2：IOS，3：Android和IOS（营销目标类型为收集营销线索时加白可用，此时 android_osv 和 ios_osv必填），4：鸿蒙；当计划类型为 2（提升应用安装）时该字段可忽略 |
| - population | String[] |  |  | 人群包定向 | /rest/openapi/v1/dmp/population/list 获取人群包 id。population 不能重复，与 exclude_population 不能有交集，不能传付费人群包，付费人群包标识字段：population_type=7 |
| - region | String[] |  |  | 地域 | 传值为[]表示不限；传递上一级 ID 时，childrenID 可以不传；不允许同时传 parentID 和 childrenID；地域信息可通过地域接口获取；仅计划的 campaign_type 为 5 时，支持设置三级地域（例：山西-大同-左云，左云是三级地域） |
| - seed_population | String[] |  |  | 种子人群包 | 当账户开通种子人群包功能后方可使用此功能。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - target_source | Integer |  |  | 请补充描述详情 |  |
| - user_type | Integer |  |  | 用户类型 | 0：实时；1：常驻；2：不限 |
| - ip_type | Integer |  |  | 地域IP | 白名单可用，0-默认IP、1-广协IP |
| - auto_population | Integer |  |  | 智能人群包 | 白名单可用，0-默认、1-智能人群包开启。和 intelli_extend_option 字段互斥，只能有一个字段开启 |
| - behavior_interest_param_show | BehaviorInterestParamShowSnake |  |  | 行为兴趣（升级版） | 白名单可用，白名单后behavior_interest不可使用，仅在behavior_type=1时生效；清空时，需要将结构体内的各个字段设置为空列表或者0进行清空 |
| - category_ids | String[] |  |  | 类目ID | 根据/rest/openapi/gw/dsp/target/option/behavior_interest 接口获取。将行为类目 id 从最高层类目 id 开始，以“-”连接起来，假如有一个类目 id 为 80202，父类目 id 为 802，最高层类目 id 为 8，则此时应该写"8-802-80202"；如果想全选最高层类目"8"底下的所有子类目，填"8" |
| - keyword_ids | Integer[] |  |  | 关键词ID | 根据/rest/openapi/v1/tool/keyword/query 接口获取 |
| - custom_behavior | Integer |  |  | 自定义行为意向 | 0：关闭，1：开启 |
| - scene_types | Integer[] |  |  | 场景类型 | 1：视频；2：APP；4：广告；custom_behaivor为1时必填，不能为空列表。 |
| - time_type | Integer |  |  | 时间范围 | 0:7 天；1：15 天；2：30 天；3：90 天；4：180 天；5：60天；custom_behaivor为1时必填，不能null |
| - filter_converted_wechat_id | String[] |  |  | 过滤已转化-企微号ID |  |
| - operators | Integer[] |  |  | 运营商 | 白名单可用，1: 中国移动,2: 中国电信,3: 中国联通, 格式为一个list数组"[1,2,3]", "[]"空数组表示不限 |
| - harmony_osv | Integer |  | - | 鸿蒙操作系统版本号限制 | 1： 不限（默认1.x+) ， 4 ：1.x - 4.x ， 5: 5.x + |
| - age_v2 | IntegerRange573 |  | - | 自定义年龄段 | 不传值表示不限 ; 年龄区间min最小为 18 岁，需要满足 max-min>=5且 18<=min<=75, 若71<=min<=75, 则max需传入100；年龄区间max最大为 100 岁；与 ages_range_v2 不能同时传。 |
| - max | Integer |  |  | 年龄最大限制 |  |
| - min | Integer |  |  | 年龄最小限制 | - |
| - ages_range_v2 | String[] |  | - | 固定年龄段 | 与 age_v2 不能同时传；【18：表示 18-23 岁】；【24：表示 24-30 岁】；【31：表示 31-35 岁】；【36：表示 36-40 岁】；【41：表示 41-45 岁】 【46：表示 46-49 岁】 【50：表示 50-54 岁】 【55：表示 55-59 岁】 【60：表示 60-64 岁】 【65：表示 65-69 岁】 【70：表示 70-74 岁】 【75：表示 75-100 岁】 |
| - shared_user | Integer |  | - | 过滤共用手机用户 | 过滤共用手机用户 0-默认 1-过滤 |
| target_explore | Integer |  |  | 搜索人群探索 | 0：不开启；1：开启；开启后系统将基于用户搜索行为探索定向人群以外的更多优质人群，仅在 quick_search = 1时生效； |
| template_id | Long |  |  | 定向模板 id | 此字段关联到定向信息后，target 字段失效。会将关联的定向信息填充到广告组中。 |
| unit_id | Long | 是 |  | 广告组 ID |  |
| unit_name | String | 是 |  | 广告组名称 | 长度为 1-100 个字符，同一个计划下的广告组名称不能重复 |
| unit_type | Integer |  |  | 请补充描述详情 |  |
| url | String |  |  | 投放链接 | 长度不超过 1000 字符；计划类型是获取电商下单（campaign.type=3)，url_type = 3 时表示手淘落地页；计划类型是 4（推广品牌活动）：落地页 URL；web_uri_type = 1 时表示客户自有链接必填；web_uri_type = 4 时表示小程序的落地页；「房地产」「家装建材」「招商加盟」三个二级行业【收集销售线索】目标下隐藏客户自有链接填写入口。 |
| url_type | Integer |  |  | url 类型 | 当计划类型为获取电商下单（campaign.type=3）时必填，其它场景下无效；3 - 手淘落地页（深度唤醒手机淘宝，scene_id为5时联盟场景不可用）； |
| use_app_market | Integer |  |  | 优先从系统应用商店下载 | 下载模式：允许值：0，1；1：优先从系统应用商店下载使用，默认 0。仅提升应用安装计划类型且选择的 app 为安卓才支持。 |
| video_landing_page | Boolean |  |  | 请补充描述详情 |  |
| web_uri_type | Integer |  |  | url 类型 | 当计划类型为收集销售线索、提升应用活跃（campaign.type = 5/7 ）且使用建站落地页时必填；1：广告主自有链接，默认填充值； 2：建站落地页，此时siteId_id 需要填充；3：程序化落地页，此时group_id需要填充（仅收集营销线索下可用） ；4：微信小程序调起链接（仅收集营销线索下且scene_id包含5可用）； |
| package_id | Long |  |  | 应用包ID | 新版应用中心，应用包ID；使用新版应用，该字段必填，老版本非必填 |
| u_link | String |  | - | ios系统的ulink链接 | 在计划 campaignType in (7,35) (提升应用活跃，电商下单推广）时使用，输入后IOS将优先调起该链接，不超过2000字符 |
| series_pay_template_id_multi | Long[] |  |  | 短剧付费模版列表 | 最多不超过5个 |
| night_scheduled_tag | Integer |  |  | 夜间投放时段类型 | 0-非夜间投放时段；在所属的计划上的periodic_delivery_put_type =2时，更新单元时必传此字段，传1-表示夜间全时段，schedule_time可以传空；2-表示夜间特定投放时段，schedule_time需要传0~7或18~23内的连续时段，且不少于8小时；举例："111110000000000000011111111110000000000000011111111110000000000000011111111110000000000000011111111110000000000000011111111110000000000000011111111110000000000000011111" |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 20000800,
    "campaign_id": 2342843,
    "unit_id":2960079,
    "day_budget":500000,
    "bid_type":2,
    "cpa_bid": 28900,
    "bid":32266,
    "app_id":202,
    "page": 2,
    "begin_time":"2019-08-09",
    "end_time":"2019-09-09",
    "schedule_time":"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000001",
    "show_mode":1,
    "url":"https://www.kuaishou.com",
    "speed":2,
    "target":{
        "gender":1,
        "network":0
    }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataUnitIdentitySnake |  |  | JSON 返回值 |  |
| - unit_id | Integer |  |  | 广告组 ID |  |
| message | String |  |  | 返回信息 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "unit_id": 2960079
    }
}
```

## 原始内容

```
修改广告组 /rest/openapi/gw/dsp/unit/update { "advertiser_id": 20000800, "campaign_id": 2342843, "unit_id":2960079, "day_budget":500000, "bid_type":2, "cpa_bid": 28900, "bid":32266, "app_id":202, "page": 2, "begin_time":"2019-08-09", "end_time":"2019-09-09", "schedule_time":"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000001", "show_mode":1, "url":"https://www.kuaishou.com", "speed":2, "target":{ "gender":1, "network":0 } } { "code": 0, "message": "OK", "data": { "unit_id": 2960079 } } search_population_retargeting Integer 搜索人群追投开关 advertiser_id Long 广告主id im_message_mount Boolean 是否挂载私信收集组件 series_pay_template_id Long 付费模板 series_pay_mode Integer 付费模式 ad_type Integer 请补充描述详情 adv_card_list Long[] 绑定卡片 id adv_card_option Integer 高级创意开关 app_download_type Integer 应用下载方式 app_icon_url String 请补充描述详情 app_id Long 应用 ID app_store String[] 应用商店列表 asset_mining Boolean 程序化创意 2.0 素材挖掘 auto_create_photo Boolean 请补充描述详情 begin_time String 投放开始时间 bid Long 出价 bid_type Integer 优化目标出价类型 campaign_id Long 请补充描述详情 card_type Integer 请补充描述详情 component_id Long 请补充描述详情 consult_id Long 咨询组件 id conversion_type Integer 转化途径 convert_id Long 请补充描述详情 cpa_bid Long 出价 custom_mini_app_data CustomMiniAppInfoSnake 推广小程序营销目标小程序信息 bootstrap_page String 小程序启动页面 bootstrap_params String 小程序启动参数 mini_app_id_platform String 小程序APPID day_budget Long 分日预算 day_budget_schedule String[] 分日预算 deep_conversion_bid Long 深度转化出价 deep_conversion_type Long 深度转化目标 download_page_url String 自定义落地页URL dpa_unit_param MapiDpaUnitReqSnake DPA 相关商品信息 detail_unit_type Integer 请补充描述详情 dpa_category_ids String[] DPA商品类目集合 dpa_unit_actionbar_click_url String 请补充描述详情 dpa_unit_click_url String 请补充描述详情 dpa_unit_sub_type Integer 商品广告类型 library_id Long 商品库ID outer_id String 外部商品ID product_id String 快手商品ID unit_impression_url String 请补充描述详情 end_time String 投放结束时间 enhance_conversion_type Integer 请补充描述详情 extend_search Boolean 搜索广告智能扩词开启状态 group_id Long 程序化落地页ID jingle_bell_id Long 小铃铛组件id live_user_id Long 主播id negative_word_param MapiNegativeWordSnake 搜索否词 exact_words String[] 精确否定词 phrase_words String[] 短语否定词 ocpx_action_type Integer 请补充描述详情 outer_loop_native Integer 请补充描述详情 play_button String 试玩按钮文字内容 playable_id Long 试玩 ID playable_orientation Integer 请补充描述详情 playable_switch Integer 请补充描述详情 playable_url String 请补充描述详情 put_status Long 广告组的投放状态 quick_search Integer 搜索快投开关 roi_ratio Double 付费 ROI 系数 scene_id String[] 资源位置 schedule_time String 投放时间段 schema_id String 微信小程序ID schema_uri String 调起链接 show_mode Integer 创意展现方式 site_type Integer 预约广告 smart_bid Integer 请补充描述详情 smart_cover Boolean 程序化创意 2.0 智能抽帧 speed Integer 请补充描述详情 splash_ad_switch Boolean 请补充描述详情 target MapiTargetDetail479Snake 定向数据 distance_show DistanceShowSnake[] 新商圈 address String address lng String lng lat String lat radius Long radius location_name String location_name poi_id String poi_id android_osv Integer Android 版本 app_ids String[] APP 行为-按 APP 名称 app_interest_ids String[] APP 行为-按分类 app_names String[] 请补充描述详情 behavior_interest BehaviorInterest765Snake 行为兴趣定向 behavior Behavior482Snake 行为定向 keyword Keyword[] 行为定向关键词 id Long 关键词 id name String 关键词名称 label String[] 行为定向 类目词 scene_type String[] 行为场景 strength_type Integer 行为强度 time_type Integer 在多少天内发生行为的用户 interest Interest708Snake 兴趣定向 keyword Keyword[] 行为定向关键词 id Long 关键词 id name String 关键词名称 label String[] 行为定向 类目词 strength_type Integer 兴趣标签强度 behavior_type Integer 行为兴趣类型 business_interest String[] 请补充描述详情 celebrity MapiCelebrity280Snake 快手网红 behaviors String[] - fans_stars CelebrityFansStar118Snake[] - category String[] - id String - name String - type Integer - device_brand String[] 请补充描述详情 device_brand_ids String[] 请补充描述详情 device_price String[] 设备价格 disable_installed_app_switch Integer 过滤已安装人群维度 district_ids String[] 商圈定向 exclude_media String[] 媒体定向排除包 exclude_population String[] 人群包排除 filter_converted_level Integer 过滤已转化人群纬度 filter_time_range Integer 用户的转化时间范围 gender Integer 性别 intelli_extend_option Integer 智能定向开关 ios_osv Integer IOS 版本 media String[] 媒体定向包 media_source_type Integer 媒体包来源 network Integer 网络环境 paid_audience String[] 付费人群包 id platform_os Integer 操作系统 population String[] 人群包定向 region String[] 地域 seed_population String[] 种子人群包 target_source Integer 请补充描述详情 user_type Integer 用户类型 ip_type Integer 地域IP auto_population Integer 智能人群包 behavior_interest_param_show BehaviorInterestParamShowSnake 行为兴趣（升级版） category_ids String[] 类目ID keyword_ids Integer[] 关键词ID custom_behavior Integer 自定义行为意向 scene_types Integer[] 场景类型 time_type Integer 时间范围 filter_converted_wechat_id String[] 过滤已转化-企微号ID operators Integer[] 运营商 harmony_osv Integer 鸿蒙操作系统版本号限制 age_v2 IntegerRange573 自定义年龄段 max Integer 年龄最大限制 min Integer 年龄最小限制 ages_range_v2 String[] 固定年龄段 shared_user Integer 过滤共用手机用户 target_explore Integer 搜索人群探索 template_id Long 定向模板 id unit_id Long 广告组 ID unit_name String 广告组名称 unit_type Integer 请补充描述详情 url String 投放链接 url_type Integer url 类型 use_app_market Integer 优先从系统应用商店下载 video_landing_page Boolean 请补充描述详情 web_uri_type Integer url 类型 package_id Long 应用包ID u_link String ios系统的ulink链接 series_pay_template_id_multi Long[] 短剧付费模版列表 night_scheduled_tag Integer 夜间投放时段类型 data PageDataUnitIdentitySnake JSON 返回值 unit_id Integer 广告组 ID message String 返回信息 code Integer 返回码
```
