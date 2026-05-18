---
title: 查询广告组
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2572&menuId=3294
doc_id: kuaishou_2572
source_id: kuaishou_2572
---
# 查询广告组

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2572 |
| documentType | 2 |
| version | 0.0.9 |
| bizName | 效果广告 |
| createTime | 2026-04-01T07:49:09.261Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/unit/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id | 在获取 access_token 的时候返回 |
| app_name | String |  |  | 请补充描述详情 |  |
| campaign_id | Long |  |  | 广告计划 ID | 过滤筛选条件，若不传或传空则视为无限制条件 |
| campaign_type | Long |  |  | 请补充描述详情 |  |
| deep_conversion_type_list | String[] |  |  | 请补充描述详情 |  |
| end_date | String |  |  | 结束时间 | 与 start_date 同时传或同时不传；过滤筛选条件，格式为"yyyy-MM-dd"，参数值对应 update_time 信息 |
| ocpx_action_type_list | String[] |  |  | 请补充描述详情 |  |
| page | Integer |  |  | 请求的页码数 | 默认为 1 |
| page_size | Integer |  |  | 请求的每页行数 | 默认为 20 |
| put_status_list | String[] |  |  | 单元投放状态筛选 | 1：投放；2：暂停；3：删除 |
| review_status_list | String[] |  |  | 单元审核状态筛选 | 1：待审核；2：审核通过；3：审核失败；7：待送审 |
| start_date | String |  |  | 开始时间 | 与 end_date 同时传或同时不传；过滤筛选条件，格式为"yyyy-MM-dd"，参数值对应 update_time 信息 |
| status | Integer |  |  | 广告组状态 | 过滤筛选条件；-2：不限(已删除)；10：广告组已删除；40：广告创意已删除.所有不包含已删除 其他值无效 |
| time_filter_type | Integer |  |  | 按创建时间或者更新时间进行筛选 | 1.如传入此字段时不传"start_date"，与"end_date"字段，则不根据时间筛选。2.传入"start_date"，与"end_date"字段，且此字段为 1 时，按照创建时间进行筛选。3.传入"start_date"，与"end_date"字段，此字段不传，或传值为 0 时，则按照更新时间进行筛选 |
| unit_id | Long |  |  | 广告组 ID | 过滤筛选条件，若不传或传空则视为无限制条件 |
| unit_ids | String[] |  |  | 广告组 ID 集 | 不超过 100 个 |
| unit_name | String |  |  | 广告组名称 | 过滤筛选条件，只支持精确查询，暂不支持模糊搜索 |

## 请求样例

### 请求样例 (jsonc)

```
{
   "advertiser_id": 20000146,
   "page":1,
   "page_size":1
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListMapiUnitQueryRespSnake |  |  | 返回数据 |  |
| - details | MapiUnitQueryRespSnake[] |  |  | 详情 |  |
| - search_population_retargeting | Integer |  |  | 是否开启人群追投 | 0：关闭 1:开启 |
| - im_message_mount | Boolean |  |  | 是否挂载私信收集组件 |  |
| - series_pay_template_id | Long |  |  | 付费模板 | 仅在计划 campaignType=30快手号-短剧推广时支持 |
| - series_pay_mode | Integer |  |  | 付费模式 | 仅在计划 campaignType=30快手号-短剧推广时，与付费模板一起返回，1-打包，2-虚拟币 |
| - ad_type | Integer |  |  | 广告计划类型 | 0:信息流，1:搜索 |
| - adv_card_list | MapiAdvCardSnake[] |  |  | 高级创意列表 |  |
| - adv_card_id | Long |  |  | 请补充描述详情 |  |
| - card_type | Integer |  |  | 请补充描述详情 |  |
| - price | Integer |  |  | 请补充描述详情 |  |
| - sale_price | Integer |  |  | 请补充描述详情 |  |
| - sdpa_card_content | String |  |  | 请补充描述详情 |  |
| - subtitle | String |  |  | 请补充描述详情 |  |
| - title | String |  |  | 请补充描述详情 |  |
| - url | String |  |  | 请补充描述详情 |  |
| - adv_card_option | Integer |  |  | 高级创意开关 | 0：关闭 1:开启 |
| - app_download_type | Integer |  |  | 应用下载方式 | 0：直接下载1：落地页下载（仅在提升应用安装计划下生效） |
| - app_icon_url | String |  |  | 请补充描述详情 |  |
| - app_id | Long |  |  | 应用 ID |  |
| - app_store | String[] |  |  | 应用商店列表 |  |
| - asset_mining | Boolean |  |  | 程序化创意 2.0 素材挖掘 | 是否开启历史素材挖掘 |
| - auto_create_photo | Boolean |  |  | 请补充描述详情 |  |
| - backflow_forecast | MapiBackflowForecastSnake |  |  | 回流预估信息 | 回流预估信息 |
| - backflow_cv_lower | Integer |  |  | 回流预估值的下限 |  |
| - backflow_cv_upper | Integer |  |  | 回流预估值的上限 |  |
| - backflow_payment | Double |  |  | 回流预估总金额 |  |
| - backflow_roi | Double |  |  | 回流首日预估 ROI |  |
| - backflow_timestamp | Long |  |  | 本次回流预估数据的时间戳，13 位毫秒时间戳 |  |
| - begin_time | String |  |  | 投放开始时间 | 格式：yyyy-MM-dd |
| - bid | Long |  |  | 出价 | 单位：厘 |
| - bid_type | Long |  |  | 出价类型 | 1：CPM，2：CPC，6：OCPC(使用 OCPC 代表 OCPX)，10：OCPM，20：eCPC |
| - campaign_id | Long |  |  | 请补充描述详情 |  |
| - compensate_status | Integer |  |  | 赔付状态 | 0=不需要赔付(不需要展示赔付标志)，1=成本保障生效中，2=成本保证确认中，3=已赔付完成，4=已失效 |
| - component_id | Long |  |  | 请补充描述详情 |  |
| - consult_id | Long |  |  | 是否使用了咨询组件 | 0=未使用，1=使用；注，咨询组件仅在收集销售线索计划(campaign_type=5)下可用，且使用了咨询组件后，可用的行动号召按钮限于接口返回内容 |
| - convert_id | Long |  |  | 转化目标 |  |
| - cpa_bid | Long |  |  | OCPC 出价 | 单位：厘 |
| - create_channel | Long |  |  | 请补充描述详情 |  |
| - create_time | String |  |  | 请补充描述详情 |  |
| - day_budget | Long |  |  | 单日预算 | 单位：厘 |
| - day_budget_schedule | String[] |  |  | 分日预算 | 单位：厘，单日预算和分日预算同时存在时，以分日预算为准，优先级高于day_budget |
| - deep_conversion_bid | Long |  |  | 深度转化目标出价 | 白名单功能，单位：厘 |
| - deep_conversion_type | Long |  |  | 深度转化目标 | 3:付费，7:次日留存，10:完件, 11:授信；13:添加购物车；14:提交订单；15:购买；44：有效线索；92：付费 roi；181：激活后24H次日留存；0：无； |
| - diverse_data | MapiDiverseDataSnake |  |  | 应用信息 |  |
| - app_name | String |  |  | 应用名称 |  |
| - app_package_name | String |  |  | 应用包名 |  |
| - device_os_type | Integer |  |  | 应用操作系统类型 | 0：未知，1：ANDROID，2：IO |
| - dpa_categories | String[] |  |  | 请补充描述详情 |  |
| - dpa_unit_sub_type | Integer |  |  | 商品广告类型：1-DPA，2-SDPA，3-动态商品卡 |  |
| - dsp_version | Integer |  |  | 请补充描述详情 |  |
| - end_time | String |  |  | 投放结束时间 | 格式：yyyy-MM-dd,排期不限为 null |
| - enhance_conversion_type | Integer |  |  | 增强目标 |  |
| - extend_search | Boolean |  |  | 智能扩词开启状态 | false：关闭，true：开启 |
| - jingle_bell_id | Long |  |  | 小铃铛组件id |  |
| - library_id | Long |  |  | 商品库ID |  |
| - live_user_id | Long |  |  | 粉丝直播推广时，为主播id、 短剧推广时为短剧作者id |  |
| - negative_word_param | MapiNegativeWordSnake |  |  | 搜索广告否词 | 搜索广告新增 |
| - exact_words | String[] |  |  | 精确否定词 | 搜索广告新增，最大数量200，单个词最大长度20，不支持制表符、换行符、Emoji表情等特殊字符 |
| - phrase_words | String[] |  |  | 短语否定词 | 搜索广告新增， 最大数量200，单个词最大长度20，不支持制表符、换行符、Emoji表情等特殊字符 |
| - ocpx_action_type | Long |  |  | 优化目标 | 请参加「创建广告组」接口可传入的ocpx_action_type取值说明 |
| - outer_id | String |  |  | 商品第三方ID |  |
| - page_group_detail | MapiGroupPageSnake |  |  | 程序化落地页信息 | 广告组ID绑定的程序化落地页组信息 |
| - group_id | String |  |  | 程序化落地页组ID |  |
| - group_name | String |  |  | 程序化落地页组名称 |  |
| - page_review_detail | MapiGroupPageReviewSnake[] |  |  | 程序化落地页组下的页面信息 |  |
| - page_id | Long |  |  | 落地页ID |  |
| - review_detail | String |  |  | 落地页的审核拒绝理由 |  |
| - review_status | Integer |  |  | 落地页审核状态 | 1-审核中 2-审核通过 3-审核拒绝 |
| - url | String |  |  | 落地页URL信息 |  |
| - play_button | String |  |  | 试玩按钮文字内容 | 开启试玩时存在，否则不存在，示例按钮内容如下：1：立即试玩；2：试玩一下；3：立即体验；4：免装试玩；5：免装体验。启用试玩时：默认“立即试玩”，未启用试玩时：内容为空。 |
| - playable_file_name | String |  |  | 试玩广告的文件名 |  |
| - playable_id | Long |  |  | 试玩 ID | 可选字段，开启试玩时存在，否则不存在。当用户上传试玩素材成功时返回，用于之后对于广告组中试玩创意的编辑操作。 |
| - playable_orientation | Integer |  |  | 试玩素材的横竖适配 | 默认值为-1；0:横竖均可；1:竖屏；2:横屏 |
| - playable_switch | Integer |  |  | 请补充描述详情 |  |
| - playable_url | String |  |  | 请补充描述详情 |  |
| - product_id | String |  |  | 请补充描述详情 |  |
| - product_image | String |  |  | 商品主图 |  |
| - product_name | String |  |  | 商品名称 |  |
| - product_price | Double |  |  | 商品价格 | 单位：元 |
| - put_status | Long |  |  | 投放状态（操作结果） | 1：投放中；2：暂停 3：删除 |
| - quick_search | Integer |  |  | 是否开启快投 | 0:关闭、1:开启 |
| - review_detail | String |  |  | 审核拒绝理由 |  |
| - roi_ratio | Double |  |  | 付费 ROI 系数 | 优化目标为「首日 ROI」时必填：ROI 系数取值范围 ( 0,100 ] 最多支持到三位小数（如：0.066） |
| - scene_id | String[] |  |  | 广告位 | 1：优选广告位；2：按场景选择广告位-信息流广告（旧广告位，包含上下滑大屏广告）6：上下滑大屏广告；7：双列信息流广告（不包含上下滑大屏广告）24：激励视频；11：快看点场景 |
| - schedule | MapiSchedule |  |  | 投放时段 | 不投放的时段为 null，详请见下方，历史字段，即将废弃 |
| - fri | String[] |  |  | 周五时间段 | 时间段范围0, 23 |
| - mon | String[] |  |  | 周一时间段 | 时间段范围0, 23 |
| - sat | String[] |  |  | 周六时间段 | 时间段范围0, 23 |
| - sun | String[] |  |  | 周日时间段 | 时间段范围0, 23 |
| - thur | String[] |  |  | 周四时间段 | 时间段范围0, 23 |
| - tues | String[] |  |  | 周二时间段 | 时间段范围0, 23 |
| - wed | String[] |  |  | 周三时间段 | 时间段范围0, 23 |
| - schedule_time | String |  |  | 投放时段 | 24*7 的字符串，0 为不投放，1 为投放，例如：0010000000001....0000 ; 注：全0 和 全1 时表示全时段投放 |
| - schema_id | String |  |  | 微信小程序外部调起链接 | 目前只有收集营销线索计划下的联盟广告位该字段才有效 |
| - schema_uri | String |  |  | 调起链接 | 提升应用活跃营销目标的调起链接 |
| - show_mode | Integer |  |  | 创意展现方式 | 0：未知，1：轮播，2：优选 |
| - site_type | Integer |  |  | 预约广告 | 1:IOS 预约 缺省为不传或传 0 |
| - smart_bid | Integer |  |  | 请补充描述详情 |  |
| - smart_cover | Boolean |  |  | 程序化创意 2.0 智能抽帧 | 是否开启智能抽帧 |
| - speed | Integer |  |  | 请补充描述详情 |  |
| - splash_ad_switch | Boolean |  |  | 请补充描述详情 |  |
| - status | Integer |  |  | 广告组状态（优先看看这个状态，计算结果） | -1：不限，1：计划已暂停，3：计划超预算，6：余额不足，10：广告组已删除，11：审核中，12：审核未通过，14：已结束，15：已暂停，17：组超预算，19：未达投放时间，20：有效，22：不在投放时段 |
| - study_status | Integer |  |  | 学习期 | 1:学习中,2:学习成功,3:学习失败 |
| - support_unit_ids | String[] |  |  | 请补充描述详情 |  |
| - target | MapiTargetDetail360Snake |  |  | 定向数据 |  |
| - distance_show | DistanceShowSnake[] |  |  | 新商圈 |  |
| - address | String |  |  | address |  |
| - lng | String |  |  | lng |  |
| - lat | String |  |  | lat |  |
| - radius | Long |  |  | radius |  |
| - location_name | String |  |  | location_name |  |
| - poi_id | String |  |  | poi_id |  |
| - android_osv | Integer |  |  | Android 版本 | 3：不限，4：4.x+，5：5.x+，6：6.x+，7：7.x+，8：8.x+，9：9.x+，10：10.x+；当计划营销目标类型为 2（提升应用安装）、7（提升应用活跃）时，仅当 app_id 表示的是 Android 应用可使用此字段传递版本 |
| - app_ids | String[] |  |  | APP 行为-按 APP 名称 | id 不能重复且必须准确，具体 id 可通过下方应用接口获取，建议不超过 10 个，否则可能出现报错；仅包含安卓数据，若操作系统定向 IOS 则无效；不能同时选择 app_interest。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - app_interest_ids | String[] |  |  | APP 行为-按分类 | id 不能重复且必须准确，具体 id 可通过下方标签接口获取；仅包含安卓数据，若操作系统定向 IOS 则无效；不能同时选择 app_ids（新标签体系字段，替换 app_interest，与 app_interest 同时传递，app_interest 字段失效）。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - app_names | String[] |  |  | 请补充描述详情 |  |
| - behavior_interest | BehaviorInterest965Snake |  |  | 行为兴趣定向 | behavior.keyword 、behavior.label、interest.lable 其中一个必传，具体传值下方表格；仅在 behavior_type = 1 时生效 |
| - behavior | Behavior215Snake |  |  | 行为定向 | behavior 与 interest 同时不传，则清空行为兴趣定向 |
| - keyword | Keyword[] |  |  | 行为定向关键词，详情见下方 |  |
| - id | Long |  |  | 关键词 id | id 与 name 需互相匹配 |
| - name | String |  |  | 关键词名称 | id 与 name 需互相匹配 |
| - label | String[] |  |  | 行为定向，类目词 |  |
| - scene_type | String[] |  |  | 行为场景 | 1：社区 2：APP 4：推广 |
| - strength_type | Integer |  |  | 行为强度 | 0：不限 1：高强度 |
| - time_type | Integer |  |  | 在多少天内发生行为的用户 | 0:7 天 1：15 天 2：30 天 3：90 天 4：180 天 |
| - interest | Interest34Snake |  |  | 兴趣定向 | behavior 与 interest 同时不传，则清空行为兴趣定向 |
| - keyword | Keyword[] |  |  | 行为定向关键词，详情见下方 |  |
| - id | Long |  |  | 关键词 id | id 与 name 需互相匹配 |
| - name | String |  |  | 关键词名称 | id 与 name 需互相匹配 |
| - label | String[] |  |  | 兴趣定向类目词 |  |
| - strength_type | Integer |  |  | 行为强度 | 0：不限 1：高强度 |
| - behavior_type | Integer |  |  | 行为兴趣类型 | 0：默认；1：自定义行为意向；2：行为意向系统优选。联盟广告位不支持后者。 |
| - business_interest | String[] |  |  | 请补充描述详情 |  |
| - celebrity | MapiCelebrity620Snake |  |  | 快手网红 | behaviors、fans_star两个字段必填充。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - behaviors | String[] |  |  | - | 该字段为平台对应快手网红功能中的行为类型，可多选，但不可不选，不选会导致快手网红定向失效，定义如下 0:关注、1:视频互动、2:直播互动 |
| - fans_stars | CelebrityFansStar300Snake[] |  |  | - | 该字段包括平台对应快手网红功能中的网红分类和快手网红两项，数据保证录入顺序，可从【快手网红-网红分类】和【快手网红-搜索快手网红】接口获取对应数据 |
| - category | String[] |  |  | - | 当是快手网红，即type=2时，该字段传值有效，对应当前快手网红的分类，格式为first_label_id,second_label_id，如果second_label_id不存在，则只传入first_label_id，如传入32, 241表示当前快手网红属于影视-影视分类二级网红分类 |
| - id | String |  |  | - | 如使用该功能则必填此项，该字段有两种含义 1、当是网红分类，即type=1时，该字段传入对应网红分类对应的父ID与当前ID的拼接字符串，如传入"33-177"表示一级网红分类"游戏"下的二级网红分类"沙盒游戏"，如选中的是一级网红分类，则直接传入当前ID如"33" 2、当是快手网红，即type=2时，该字段传入对应快手网红的author_id，如传入"1151465119"表示快手网红小脑斧来自N次元 |
| - name | String |  |  | - | 如使用该功能则必填此项，该字段有两种含义 1、当是网红分类，即type=1时，该字段传入对应网红分类对应的父name与当前name的拼接字符串，如传入"游戏-沙盒游戏"表示一级网红分类"游戏"下的二级网红分类"沙盒游戏"，如选中的是一级网红分类，则直接传入当前ID如"游戏"，保证传入的值与传入id对应网红标签name（拼接）一致 2、当是快手网红，即type=2时，该字段传入对应快手网红的kwai_id，如传入"小脑斧来自N次元"表示快手网红小脑斧来自N次元，保证传入的值与传入id对应的快手网红的kwai_id保持一致如使用该功能则必填此项，该字段有两种含义 1、当是网红分类，即type=1时，该字段传入对应网红分类对应的父name与当前name的拼接字符串，如传入"游戏-沙盒游戏"表示一级网红分类"游戏"下的二级网红分类"沙盒游戏"，如选中的是一级网红分类，则直接传入当前ID如"游戏"，保证传入的值与传入id对应网红标签name（拼接）一致 2、当是快手网红，即type=2时，该字段传入对应快手网红的kwai_id，如传入"小脑斧来自N次元"表示快手网红小脑斧来自N次元，保证传入的值与传入id对应的快手网红的kwai_id保持一致 |
| - type | Integer |  |  | - | 如使用该功能则必填此项，该字段为平台对应快手网红功能中的网红分类和快手网红两项，可从【快手网红-网红分类】和【快手网红-搜索快手网红】接口获取对应数据 1:网红分类、2:快手网红 |
| - device_brand | String[] |  |  | 请补充描述详情 |  |
| - device_brand_ids | String[] |  |  | 请补充描述详情 |  |
| - device_price | String[] |  |  | 设备价格 | 1：1500 元以下（11:1000元以下，12:1001~1500），2：1501~2000，3：2001~2500，4：2501~3000，5：3001~3500，6：3501~4000，7：4001~4500（13:4001~5000），8：4501~5000（13:4001~5000），9：5001~5500（14:5001~6000），10：5500 元以上（15:6000元以上） |
| - disable_installed_app_switch | Integer |  |  | 过滤已安装人群维度 | 0：过滤（默认），1：不限 |
| - district_ids | String[] |  |  | 商圈定向 | 与 region 字段不能同时传、白名单控制，最多选 100 个。可以通过/rest/openapi/v1/region/district/list 接口获取商圈信息。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - exclude_media | String[] |  |  | 媒体定向排除包 |  |
| - exclude_population | String[] |  |  | 人群包排除 | /rest/openapi/v1/dmp/population/list 获取人群包 id。exclude_population 不能重复，不能传付费人群包，付费人群包标识字段：population_type=7 |
| - filter_converted_level | Integer |  |  | 过滤已转化人群纬度 | 搜索广告、联盟广告、小店通不支持。优化目标不支持【封面曝光数】和【封面点击数】非应用下载类推广不支持过滤【APP】纬度。0(默认)：不限；1：广告组 2：广告计划；3：本账户；4：公司主体；5：APP；6:运营自定义产品名；7:企微号(系统过滤此账户对应企微号的已加粉用户，当前仅支持磁力建站投放企微。) |
| - filter_time_range | Integer |  |  | 用户的转化时间范围 | 0：30天；1：60天；2:90天。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - gender | Integer |  |  | 性别 | 1：女性, 2：男性，0 表示不限 |
| - intelli_extend_option | Integer |  |  | 智能定向开关 | 0：智能定向关闭；1：智能定向开启；2：智能定向Pro开启（白名单可用）；和auto_population字段互斥，只能有一个字段开启 |
| - ios_osv | Integer |  |  | iOS 版本 | 6：不限，7：7.x+，8：8.x+，9：9.x+，10：10.x+；11：11.x+；12：12.x+；13：13.x+；14：14.x+；15：15.x+；16：16.x+；当计划营销目标类型为 2（提升应用安装）、7（提升应用活跃）时，仅当 appId 表示的是 iOS 应用可使用此字段传递版本 |
| - media | String[] |  |  | 媒体定向包 |  |
| - media_source_type | Integer |  |  | 媒体包来源 | 默认为 0，0-不限，未指定，1-行业优质流量包，2-广告主自定义 |
| - network | Integer |  |  | 网络环境 | 1：Wi-Fi，2：移动网络，0：表示不限 |
| - paid_audience | String[] |  |  | 付费人群包 id | /rest/openapi/v1/dmp/population/list 获取人群包 id。1、不能重复，只能传付费人群包，且 third_platform_code 要一样，2、如果传了【population 或 exclude_population】，报错；修改时要也要保证【population 或 exclude_population】不能同时传。3、创建时若已经有了【population 或 exclude_population】修改时只传 paid_audience 也会报错，这时需要把 population 或 exclude_population】设为[]才行，反之也一样。总之，【population 或 exclude_population】与【paid_audience】不能同时存在。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - platform_os | Integer |  |  | 操作系统 | 0：不限，1：Android，2：IOS，3：Android和IOS（营销目标类型为收集营销线索时加白可用，此时 android_osv 和 ios_osv必填）4：鸿蒙操作系统；当计划类型为 2（提升应用安装）时该字段可忽略 |
| - population | String[] |  |  | 人群包定向 | /rest/openapi/v1/dmp/population/list 获取人群包 id。population 不能重复，与 exclude_population 不能有交集，不能传付费人群包，付费人群包标识字段：population_type=7 |
| - region | String[] |  |  | 地域 | 传值为[]表示不限；传递上一级 ID 时，childrenID 可以不传；不允许同时传 parentID 和 childrenID；地域信息可通过地域接口获取；仅计划的 campaign_type 为 5 时，支持设置三级地域（例：山西-大同-左云，左云是三级地域） |
| - seed_population | String[] |  |  | 种子人群包 | 当账户开通种子人群包功能后方可使用此功能。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - target_source | Integer |  |  | 请补充描述详情 |  |
| - user_type | Integer |  |  | 用户类型 | 0：实时；1：常驻；2：不限 |
| - ip_type | Integer |  |  | 地域IP | 白名单可用，0-默认IP、1-广协IP |
| - auto_population | Integer |  |  | 智能人群包 | 白名单可用，0-默认、1-智能人群包开启。和 intelli_extend_option 字段互斥，只能有一个字段开启 |
| - behavior_interest_param_show | BehaviorInterestParamShowSnake |  |  | 行为意向4.0 | 仅在 behavior_type = 1 时生效 |
| - category_ids | String[] |  |  | 类目ID | 根据/rest/openapi/gw/dsp/target/option/behavior_interest 接口获取。将行为类目 id 从最高层类目 id 开始，以“-”连接起来，假如有一个类目 id 为 80202，父类目 id 为 802，最高层类目 id 为 8，则此时应该写"8-802-80202"；如果想全选最高层类目"8"底下的所有子类目，填"8" |
| - keyword_ids | Integer[] |  |  | 关键词ID | 根据/rest/openapi/v1/tool/keyword/query 接口获取 |
| - custom_behavior | Integer |  |  | 自定义行为意向 | 0：关闭，1：开启 |
| - scene_types | Integer[] |  |  | 场景类型 | 1：视频；2：APP；4：广告；custom_behaivor为1时必填，不能为空列表。 |
| - time_type | Integer |  |  | 时间范围 | 0:7 天；1：15 天；2：30 天；3：90 天；4：180 天；5：60天；custom_behaivor为1时必填，不能null |
| - filter_converted_wechat_id | String[] |  |  | 过滤已转化-企微号ID |  |
| - operators | Integer[] |  |  | 运营商 | 白名单可用，1: 中国移动,2: 中国电信,3: 中国联通,格式为一个list数组"[1,2,3]", "[]"空数组表示不限 |
| - harmony_osv | Integer |  | - | 鸿蒙操作系统版本号限制 | 1： 不限（默认1.x+) ， 4 ：1.x - 4.x ， 5: 5.x + |
| - age_v2 | IntegerRange738252 |  | - | 自定义年龄段 | 年龄区间min，年龄最大限制max |
| - max | Integer |  |  | 年龄最大限制 |  |
| - min | Integer |  |  | 年龄最小限制 | - |
| - ages_range_v2 | String[] |  | - | 固定年龄段 | 【18：表示 18-23 岁】；【24：表示 24-30 岁】；【31：表示 31-35 岁】；【36：表示 36-40 岁】；【41：表示 41-45 岁】 【46：表示 46-49 岁】 【50：表示 50-54 岁】 【55：表示 55-59 岁】 【60：表示 60-64 岁】 【65：表示 65-69 岁】 【70：表示 70-74 岁】 【75：表示 75-100 岁】 |
| - shared_user | Integer |  | - | 过滤共用手机用户 | 过滤共用手机用户 0-默认 1-过滤 |
| - target_explore | Integer |  |  | 是否开启搜索人群探索 | 0:关闭、1:开启 |
| - template_id | Long |  |  | 定向模板ID |  |
| - unit_id | Long |  |  | 广告组 ID |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - unit_source | Integer |  |  | 广告组来源 | 0:常规（非托管）、1:托管 |
| - unit_type | Integer |  |  | 创意制作方式 | 3：DPA 自定义创意（仅在计划类型为商品库推广下使用） 4: 常规自定义创意； 7：程序化创意 2.0; 10:智能创意 |
| - update_time | String |  |  | 最后修改时间 | 格式样例："2019-06-11 15:17:25" |
| - url | String |  |  | 落地页链接 | 计划类型是 2（提升应用安装）：返回应用下载地址；计划类型是 3（获取电商下单）：根据 url_type 返回相应信息；计划类型是 4（推广品牌活动）：返回落地页 url 计划类型是 5（收集销售线索）：返回落地页 url 计划类型是 5（收集销售线索）：建站 idl |
| - url_type | Integer |  |  | url 类型 | 当计划类型为 3 时（获取电商下单）时有返回。1：淘宝商品短链 2：淘宝商品 itemID |
| - use_app_market | Integer |  |  | 优先从系统应用商店下载 | 0：未设置 1：优先从系统应用商店下载使用 |
| - video_landing_page | Boolean |  |  | 请补充描述详情 |  |
| - web_uri_type | Integer |  |  | url 类型 | 当计划类型为 5（收集销售线索）&使用建站时有返回：需使用魔力建站 不传默认 1，2：落地页 |
| - dpa_outer_ids | String[] |  | ["123"] | DPA外部商品id集合 |  |
| - outer_loop_native | Integer |  |  | 是否开启原生 | 0关闭，1开启，不填默认为0仅在计划 campaignType=2提升应用安装、5收集销售线索、7提升应用活跃、19推广快手小程序时，可开启原生投放。 |
| - package_id | Long |  |  | 新版应用中心应用ID |  |
| - site_id | Long |  |  | 建站ID | 当 web_uri_type = 2 时表示建站 ID，必须为数字，通过「/rest/openapi/v2/lp/page/list」 获取。计划类型是2（提升应用安装）且关联应用为安卓时，表示安卓下载中间页ID，通过「/rest/openapi/v2/lp/page/list」 获取 "view_comps = 7" 的建站ID。 |
| - u_link | String |  | - | ios系统的ulink链接 | IOS下优先调起该链接 |
| - series_id | Long |  | - | 短剧ID |  |
| - episode_id | Long |  | - | 剧集ID |  |
| - series_card_type | Integer |  | - | 剧集卡片开关 | 0关闭，1开启 |
| - series_card_info | SeriesCardInfoSnake |  | - | 剧集卡片信息 |  |
| - pic_id | Long |  | - | 封面图片ID |  |
| - label | String[] |  | - | 剧集卡片标签 |  |
| - cover_image | String |  | - | 剧集卡片封面图片url |  |
| - title | String |  | - | 剧集卡片标题 |  |
| - description | String |  | - | 剧集卡片描述 |  |
| - page_audit_status | Integer |  | - | unit关联的落地页的审核状态 | - |
| - custom_mini_app_data | CustomMiniAppInfoSnake |  |  | 小程序相关参数 | 推广快手小程序时必填，具体见下方表格。 |
| - bootstrap_page | String |  |  | 小程序启动页面 | 当 mini_app_type = 1 时必填，表示跳转小程序时直接进入的页面，当 mini_app_type = 2 时不填。例：page/app/index。 |
| - bootstrap_params | String |  |  | 小程序启动参数 | 启动参数可以追踪页面来源 |
| - mini_app_id_platform | String |  |  | 小程序APPID | 计划 campaignType=19 推广快手小程序时必填，不能超过30个字符。 |
| - mini_app_type | Integer |  |  | 小程序类型 | 1 表示小程序；2 表示小游戏。默认为 1 |
| - dpa_dynamic_params | Integer |  |  | 关闭动态参数-0，开启自动参数-1 |  |
| - dpa_dynamic_params_for_dp | String |  |  | 应用直达链接动态参数 | 长度不超过 100 字符 |
| - dpa_dynamic_params_for_uri | String |  |  | 落地页链接动态参数 | 长度不超过 100 字符 |
| - unit_material_type | Integer |  |  | 广告标的物类型。1：快手小程序；2：快手小游戏；3：微信小程序；4：微信小游戏 | campaignType = 19（快手小程序/小游戏推广）时（释义同mini_app_type字段）表示：1：快手小程序；2：快手小游戏；campaignType = 32（微信小程序/小游戏推广）时表示：3：微信小程序；4：微信小游戏；6：淘宝；7：天猫；8：拼多多；9：京东；10：微信商城；11：京东和微信小程序；12：拼多多和微信小程序；20：其他平台； |
| - live_component_type | Integer |  |  | 直播组件类型 | 0：小铃铛（默认）；1：房产 2：团购组件 3：服务号小钥匙 4: 无组件 5：小程序 6：小手柄 14 : 快聘 ；仅营销目标为粉丝直播推广时可用 |
| - kwai_book_id | Long |  |  | 快手号小说id | 快手号-小说推广投放的小说id |
| - series_pay_template_id_multi | Long[] |  |  | 短剧付费模版列表 |  |
| - link_integration_type | Integer |  | - | 投放链路优选 | - |
| - night_scheduled_tag | Integer |  |  | 夜间投放时段类型 | 0-非夜间投放时段；1-表示夜间全时段，即夜间18~次日7点投放；2-表示夜间特定时段，schedule_time表示具体夜间的特定时段范围 |
| - total_count | Long |  |  | 总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 1,
        "details": [
            {
                "site_type": 0,
                "ad_type": 1,
                "bid_type": 10,
                "put_status": 1,
                "smart_cover": false,
                "dsp_version": 3,
                "playable_id": 0,
                "schema_id": "",
                "unit_source": 0,
                "app_id": 0,
                "campaign_id": 609161,
                "day_budget": 0,
                "ocpx_action_type": 2,
                "use_app_market": 0,
                "target_explore": 0,
                "component_id": 0,
                "create_time": "2023-01-29 11:55:32",
                "show_mode": 2,
                "unit_name": "新建广告组_20220822_20:016",
                "quick_search": 0,
                "day_budget_schedule": [],
                "status": 11,
                "unit_type": 4,
                "study_status": 0,
                "update_time": "2023-01-29 11:55:32",
                "library_id": null,
                "unit_id": 2165304,
                "web_uri_type": 2,
                "review_detail": "广告组审核中",
                "end_time": null,
                "compensate_status": 0,
                "scene_id": null,
                "begin_time": "2023-01-29",
                "app_icon_url": null,
                "convert_id": 0,
                "url": "357556928195355642",
                "target": {
                    "gender": null,
                    "media": [],
                    "device_price": [],
                    "media_source_type": 0,
                    "target_source": null,
                    "user_type": 0,
                    "exclude_population": [],
                    "device_brand_ids": [],
                    "ages_range": null,
                    "district_ids": null,
                    "android_osv": 0,
                    "behavior_type": 0,
                    "disable_installed_app_switch": 0,
                    "filter_converted_level": 0,
                    "population": [],
                    "platform_os": 0,
                    "filter_time_range": 0,
                    "device_brand": [],
                    "ios_osv": 0,
                    "app_interest_ids": [],
                    "paid_audience": [],
                    "intelli_extend_option": 1,
                    "region": null,
                    "exclude_media": []
                },
                "schedule_time": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                "cpa_bid": 1000,
                "playable_orientation": -1,
                "bid": 0,
                "adv_card_option": 0
            }
        ]
    },
    "message": "OK",
    "request_id": "EO2AgICglZmOrAEY6QIg56itoOMwKN71w9QP"
}
```

## 原始内容

```
查询广告组 /rest/openapi/gw/dsp/unit/list { "advertiser_id": 20000146, "page":1, "page_size":1 } { "code": 0, "data": { "total_count": 1, "details": [ { "site_type": 0, "ad_type": 1, "bid_type": 10, "put_status": 1, "smart_cover": false, "dsp_version": 3, "playable_id": 0, "schema_id": "", "unit_source": 0, "app_id": 0, "campaign_id": 609161, "day_budget": 0, "ocpx_action_type": 2, "use_app_market": 0, "target_explore": 0, "component_id": 0, "create_time": "2023-01-29 11:55:32", "show_mode": 2, "unit_name": "新建广告组_20220822_20:016", "quick_search": 0, "day_budget_schedule": [], "status": 11, "unit_type": 4, "study_status": 0, "update_time": "2023-01-29 11:55:32", "library_id": null, "unit_id": 2165304, "web_uri_type": 2, "review_detail": "广告组审核中", "end_time": null, "compensate_status": 0, "scene_id": null, "begin_time": "2023-01-29", "app_icon_url": null, "convert_id": 0, "url": "357556928195355642", "target": { "gender": null, "media": [], "device_price": [], "media_source_type": 0, "target_source": null, "user_type": 0, "exclude_population": [], "device_brand_ids": [], "ages_range": null, "district_ids": null, "android_osv": 0, "behavior_type": 0, "disable_installed_app_switch": 0, "filter_converted_level": 0, "population": [], "platform_os": 0, "filter_time_range": 0, "device_brand": [], "ios_osv": 0, "app_interest_ids": [], "paid_audience": [], "intelli_extend_option": 1, "region": null, "exclude_media": [] }, "schedule_time": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "cpa_bid": 1000, "playable_orientation": -1, "bid": 0, "adv_card_option": 0 } ] }, "message": "OK", "request_id": "EO2AgICglZmOrAEY6QIg56itoOMwKN71w9QP" } advertiser_id Long 广告主id app_name String 请补充描述详情 campaign_id Long 广告计划 ID campaign_type Long 请补充描述详情 deep_conversion_type_list String[] 请补充描述详情 end_date String 结束时间 ocpx_action_type_list String[] 请补充描述详情 page Integer 请求的页码数 page_size Integer 请求的每页行数 put_status_list String[] 单元投放状态筛选 review_status_list String[] 单元审核状态筛选 start_date String 开始时间 status Integer 广告组状态 time_filter_type Integer 按创建时间或者更新时间进行筛选 unit_id Long 广告组 ID unit_ids String[] 广告组 ID 集 unit_name String 广告组名称 data PageDataListMapiUnitQueryRespSnake 返回数据 details MapiUnitQueryRespSnake[] 详情 search_population_retargeting Integer 是否开启人群追投 im_message_mount Boolean 是否挂载私信收集组件 series_pay_template_id Long 付费模板 series_pay_mode Integer 付费模式 ad_type Integer 广告计划类型 adv_card_list MapiAdvCardSnake[] 高级创意列表 adv_card_id Long 请补充描述详情 card_type Integer 请补充描述详情 price Integer 请补充描述详情 sale_price Integer 请补充描述详情 sdpa_card_content String 请补充描述详情 subtitle String 请补充描述详情 title String 请补充描述详情 url String 请补充描述详情 adv_card_option Integer 高级创意开关 app_download_type Integer 应用下载方式 app_icon_url String 请补充描述详情 app_id Long 应用 ID app_store String[] 应用商店列表 asset_mining Boolean 程序化创意 2.0 素材挖掘 auto_create_photo Boolean 请补充描述详情 backflow_forecast MapiBackflowForecastSnake 回流预估信息 backflow_cv_lower Integer 回流预估值的下限 backflow_cv_upper Integer 回流预估值的上限 backflow_payment Double 回流预估总金额 backflow_roi Double 回流首日预估 ROI backflow_timestamp Long 本次回流预估数据的时间戳，13 位毫秒时间戳 begin_time String 投放开始时间 bid Long 出价 bid_type Long 出价类型 campaign_id Long 请补充描述详情 compensate_status Integer 赔付状态 component_id Long 请补充描述详情 consult_id Long 是否使用了咨询组件 convert_id Long 转化目标 cpa_bid Long OCPC 出价 create_channel Long 请补充描述详情 create_time String 请补充描述详情 day_budget Long 单日预算 day_budget_schedule String[] 分日预算 deep_conversion_bid Long 深度转化目标出价 deep_conversion_type Long 深度转化目标 diverse_data MapiDiverseDataSnake 应用信息 app_name String 应用名称 app_package_name String 应用包名 device_os_type Integer 应用操作系统类型 dpa_categories String[] 请补充描述详情 dpa_unit_sub_type Integer 商品广告类型：1-DPA，2-SDPA，3-动态商品卡 dsp_version Integer 请补充描述详情 end_time String 投放结束时间 enhance_conversion_type Integer 增强目标 extend_search Boolean 智能扩词开启状态 jingle_bell_id Long 小铃铛组件id library_id Long 商品库ID live_user_id Long 粉丝直播推广时，为主播id、 短剧推广时为短剧作者id negative_word_param MapiNegativeWordSnake 搜索广告否词 exact_words String[] 精确否定词 phrase_words String[] 短语否定词 ocpx_action_type Long 优化目标 outer_id String 商品第三方ID page_group_detail MapiGroupPageSnake 程序化落地页信息 group_id String 程序化落地页组ID group_name String 程序化落地页组名称 page_review_detail MapiGroupPageReviewSnake[] 程序化落地页组下的页面信息 page_id Long 落地页ID review_detail String 落地页的审核拒绝理由 review_status Integer 落地页审核状态 url String 落地页URL信息 play_button String 试玩按钮文字内容 playable_file_name String 试玩广告的文件名 playable_id Long 试玩 ID playable_orientation Integer 试玩素材的横竖适配 playable_switch Integer 请补充描述详情 playable_url String 请补充描述详情 product_id String 请补充描述详情 product_image String 商品主图 product_name String 商品名称 product_price Double 商品价格 put_status Long 投放状态（操作结果） quick_search Integer 是否开启快投 review_detail String 审核拒绝理由 roi_ratio Double 付费 ROI 系数 scene_id String[] 广告位 schedule MapiSchedule 投放时段 fri String[] 周五时间段 mon String[] 周一时间段 sat String[] 周六时间段 sun String[] 周日时间段 thur String[] 周四时间段 tues String[] 周二时间段 wed String[] 周三时间段 schedule_time String 投放时段 schema_id String 微信小程序外部调起链接 schema_uri String 调起链接 show_mode Integer 创意展现方式 site_type Integer 预约广告 smart_bid Integer 请补充描述详情 smart_cover Boolean 程序化创意 2.0 智能抽帧 speed Integer 请补充描述详情 splash_ad_switch Boolean 请补充描述详情 status Integer 广告组状态（优先看看这个状态，计算结果） study_status Integer 学习期 support_unit_ids String[] 请补充描述详情 target MapiTargetDetail360Snake 定向数据 distance_show DistanceShowSnake[] 新商圈 address String address lng String lng lat String lat radius Long radius location_name String location_name poi_id String poi_id android_osv Integer Android 版本 app_ids String[] APP 行为-按 APP 名称 app_interest_ids String[] APP 行为-按分类 app_names String[] 请补充描述详情 behavior_interest BehaviorInterest965Snake 行为兴趣定向 behavior Behavior215Snake 行为定向 keyword Keyword[] 行为定向关键词，详情见下方 id Long 关键词 id name String 关键词名称 label String[] 行为定向，类目词 scene_type String[] 行为场景 strength_type Integer 行为强度 time_type Integer 在多少天内发生行为的用户 interest Interest34Snake 兴趣定向 keyword Keyword[] 行为定向关键词，详情见下方 id Long 关键词 id name String 关键词名称 label String[] 兴趣定向类目词 strength_type Integer 行为强度 behavior_type Integer 行为兴趣类型 business_interest String[] 请补充描述详情 celebrity MapiCelebrity620Snake 快手网红 behaviors String[] - fans_stars CelebrityFansStar300Snake[] - category String[] - id String - name String - type Integer - device_brand String[] 请补充描述详情 device_brand_ids String[] 请补充描述详情 device_price String[] 设备价格 disable_installed_app_switch Integer 过滤已安装人群维度 district_ids String[] 商圈定向 exclude_media String[] 媒体定向排除包 exclude_population String[] 人群包排除 filter_converted_level Integer 过滤已转化人群纬度 filter_time_range Integer 用户的转化时间范围 gender Integer 性别 intelli_extend_option Integer 智能定向开关 ios_osv Integer iOS 版本 media String[] 媒体定向包 media_source_type Integer 媒体包来源 network Integer 网络环境 paid_audience String[] 付费人群包 id platform_os Integer 操作系统 population String[] 人群包定向 region String[] 地域 seed_population String[] 种子人群包 target_source Integer 请补充描述详情 user_type Integer 用户类型 ip_type Integer 地域IP auto_population Integer 智能人群包 behavior_interest_param_show BehaviorInterestParamShowSnake 行为意向4.0 category_ids String[] 类目ID keyword_ids Integer[] 关键词ID custom_behavior Integer 自定义行为意向 scene_types Integer[] 场景类型 time_type Integer 时间范围 filter_converted_wechat_id String[] 过滤已转化-企微号ID operators Integer[] 运营商 harmony_osv Integer 鸿蒙操作系统版本号限制 age_v2 IntegerRange738252 自定义年龄段 max Integer 年龄最大限制 min Integer 年龄最小限制 ages_range_v2 String[] 固定年龄段 shared_user Integer 过滤共用手机用户 target_explore Integer 是否开启搜索人群探索 template_id Long 定向模板ID unit_id Long 广告组 ID unit_name String 广告组名称 unit_source Integer 广告组来源 unit_type Integer 创意制作方式 update_time String 最后修改时间 url String 落地页链接 url_type Integer url 类型 use_app_market Integer 优先从系统应用商店下载 video_landing_page Boolean 请补充描述详情 web_uri_type Integer url 类型 dpa_outer_ids String[] DPA外部商品id集合 outer_loop_native Integer 是否开启原生 package_id Long 新版应用中心应用ID site_id Long 建站ID u_link String ios系统的ulink链接 series_id Long 短剧ID episode_id Long 剧集ID series_card_type Integer 剧集卡片开关 series_card_info SeriesCardInfoSnake 剧集卡片信息 pic_id Long 封面图片ID label String[] 剧集卡片标签 cover_image String 剧集卡片封面图片url title String 剧集卡片标题 description String 剧集卡片描述 page_audit_status Integer unit关联的落地页的审核状态 custom_mini_app_data CustomMiniAppInfoSnake 小程序相关参数 bootstrap_page String 小程序启动页面 bootstrap_params String 小程序启动参数 mini_app_id_platform String 小程序APPID mini_app_type Integer 小程序类型 dpa_dynamic_params Integer 关闭动态参数-0，开启自动参数-1 dpa_dynamic_params_for_dp String 应用直达链接动态参数 dpa_dynamic_params_for_uri String 落地页链接动态参数 unit_material_type Integer 广告标的物类型。1：快手小程序；2：快手小游戏；3：微信小程序；4：微信小游戏 live_component_type Integer 直播组件类型 kwai_book_id Long 快手号小说id series_pay_template_id_multi Long[] 短剧付费模版列表 link_integration_type Integer 投放链路优选 night_scheduled_tag Integer 夜间投放时段类型 total_count Long 总数 code Integer 返回码 message String 返回信息
```
