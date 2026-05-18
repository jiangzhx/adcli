---
title: 获取智能托管物料接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2758&menuId=3493
doc_id: kuaishou_2758
source_id: kuaishou_2758
---
# 获取智能托管物料接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2758 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T02:44:13.017Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/hosting/project/material/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page | Integer | 是 | 1 | 当前页 |  |
| page_size | Integer | 是 | 100 | 每页的大小 |  |
| advertiser_id | Long | 是 |  | advertiser_id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | code |  |
| message | String |  |  | message |  |
| data | AdHostingProjectMaterialListForGateway |  |  | data |  |
| - total_count | Integer |  |  | 总数量 |  |
| - details | AdHostingProjectTypeForGateway[] |  |  | 托管项目物料 |  |
| - project_id | Long |  | 10001 | 托管单元id；创建时填写0，更新时填欲更新的项目id |  |
| - name | String |  | 托管单元名称 | 单元名称，90个字符（含）以内 |  |
| - hosting_scene | Integer |  | 0 | 托管场景，0=普通场景，1=小说测书 |  |
| - campaign_type | Integer |  | 2 | 项目所创建的单元类型，保持跟计划类型一致，2=提升应用安装，5=收集销售线索，其他暂不支持 |  |
| - campaign_id | Long |  | 1001 | 输出参数，标识项目所对应的计划id |  |
| - app_id | Long |  | 1001 | 应用id，在campaignType=2即提升应用安装时必填 |  |
| - web_uri | String |  | https://xxx | webUri |  |
| - use_app_market | Boolean |  | false | useAppMarket |  |
| - app_store | String[] |  | ["vivo"] | 直投应用商店 |  |
| - vertical_photo_ids | Long[] |  | [12,34] | 输出参数，程序化2.0竖版视频字段。开放平台不支持创编程序化2.0格式的托管项目，请使用photoInfos字段 |  |
| - horizontal_photo_ids | Long[] |  | [56,78] | 程序化2.0的横版视频字段，输出字段。开放平台不可以创编程序化2.0的托管项目，请使用photoInfos字段 |  |
| - covers | String[] |  | ["https://xxx"] | 程序化2.0的封面字段，输出属性。开放平台不支持创编2.0格式的托管项目，请使用photoInfos字段。 |  |
| - sticker_styles | Integer[] |  | [1,2] | 贴纸id集合。封面广告语，配合coverSlogans使用，当coverSlogans不为空时，本字段不可为空。当本字段不为空时，coverSlogans字段也不允许为空。小说测书不允许使用本字段。 |  |
| - cover_slogans | String[] |  | ["封面广告语"] | 封面广告语，配合stickerStyles使用，当stickerStyles不为空时，本字段不可为空。当本字段不为空时，stickerStyles字段也不允许为空。小说测书不允许使用本字段。 |  |
| - action_bar | String |  | 立即下载 | actionbar文案。小说测书工具不允许填充本字段，小说测书的actionbar文案由小说属性内的actionbar传入。 |  |
| - captions | String[] |  | [“作品广告语”】 | 作品广告语。小说测书不可使用本字段；普通托管场景本字段不允许为空 |  |
| - click_url | String |  | https://xx/click | 第三方点击检测链接。小说测书工具不允许使用本字段。 |  |
| - actionbar_click_url | String |  | https://xx/actionbarClickUrl | actionbar点击检测链接，白名单功能。小说测书不允许使用本字段。 |  |
| - asset_mining | Boolean |  | false | 素材挖掘。本属性不可由开启改为关闭，但可由关闭改为开启。 |  |
| - auto_create_photo | Boolean |  | false | 自动创建视频。仅当小说测书场景可传入true。 |  |
| - begin_time | Long |  | 1627984159709 | 投放开始时间。本属性不应该小于当前时间，快手服务器允许本数值比服务器时间早不超过一小时。 |  |
| - end_time | Long |  | 0 | 投放结束时间，0=长期投放。 |  |
| - schedule | String |  | [[0,1,2],[],[],[],[],[],[]] | 投放计划，不传意味着不选择时间段。当选择时，本字段将被解析为二维数组，切一维长度必须是7代表一种七天。每个子数组的有效值范围是[0,23]，其中设定值的即代表本小时投放，如[[0,1,2],[],[],[18,19],[],[],[]]代表周一的0点、1点、2点投放，以及周四的18点、19点投放。 |  |
| - day_budget | Long |  | 10000000 | 项目预算，单位是厘。0=不设定预算。 |  |
| - ocpx_action_type | Integer |  | 180 | 优化目标 |  |
| - cpa_bid | Long |  | 12000 | ocpxActionType的出价，单位是厘。当ocpxActionType不为roi类目标时本字段必须传入有效值，且需要符合优化目标的出价限制规则。 |  |
| - deep_conversion_type | Integer |  | 3 | 深度优化目标。当ocpxActionType代表的优化目标支持深度时本字段可用。 |  |
| - deep_conversion_bid | Long |  | 15000 | 深度优化目标出价。当deepConversionType不为roi类目标时，本字段可填。0代表不为深度目标设定出价，非0值时遵从创编流程深度目标与浅度目标和预算等的限制关系。 |  |
| - create_time | Long |  | 1627984623410 | 项目创建时间，输出参数，13位毫秒时间戳。 |  |
| - update_time | Long |  | 1627984650903 | 项目更新时间，输出参数，13位毫秒时间戳。 |  |
| - site_id | Long |  | 123 | 建站页面id，本字段在不同场景含义不同。在普通托管场景，当campaign_type=2即提升应用安装时，本字段代表“应用下载中间页”，此时联动downloadPageUrl；当campaign_type=5即收集销售线索时，本字段代表建站落地页页面id，联动webUriType和webUri字段。在小说测书场景下，当campaign_type=2即提升应用安装时，本字段代表“应用下载中间页”，此时联动downloadPageUrl；当campaign_type=5即收集销售线索时，本字段不可传 |  |
| - smart_cover | Boolean |  | false | 是否开启抽帧。在普通托管场景下，本属性会影响程序化2.0格式的covers字段和程序化2.0的photoInfos字段内的coverImageToken参数（开启时不传）；在小说测书场景下，本字段必须是false，小说测书的视频是否开启抽帧需要使用fictionInfos字段内的smartCover属性 |  |
| - download_page_url | String |  | https://xx | 应用下载中间页，输出字段。当campaign_type=2即提升应用安装并且siteId不为0时，本字段代表了中间页的地址。 |  |
| - roi_ratio | Double |  | 12.34 | ROI系数，有效值范围(0,100]。当ocpxActionType或deepConversionType是ROI类目标时，本字段必须填有效值。当非roi类目标时，本字段必须是0。 |  |
| - consult_id | Long |  | 12345 | 咨询组件id。普通托管场景下campaign_type=5时可用 |  |
| - fiction_id | Long |  | 12345 | 小说id。普通托管场景campaign_type=5，且在小说数据白名单中时可用。小说测书场景不可用本字段。 |  |
| - merchandise_id | Long |  | 98765 | 课程库id。普通托管场景下campaign_type=5时，且在课程库白名单中时，本字段可用。小说测试场景不可使用课程库。 |  |
| - merchandise_type | Integer |  | 2 | 商品类型，当merchandiseId非0时，本字段必须填写。目前merchandiseId仅代表课程库，此时merchandiseType请传入2。 |  |
| - ad_dsp_target | AdHostingTargetTypeForGateway |  | ... | 定向属性 |  |
| - age | RangeInt[] |  | [[18,23],[24,56]] | 年龄段，不限或者空数组代表不限定，不可低于18岁 | 、不设定年龄则传入[] 2、设定为自定义年龄区间，则只能传入一个值，最小为18，最大为55，如 { "min": 18, "max": 55 }3、当设定的年龄区间不止一个，则只能在如下区间选择18,23、24,30、31,40、41,49、50,100，如 { "min": 18, "max": 23 }, { "min": 41, "max": 49 } |
| - min | Integer |  | 1 | 下限 |  |
| - max | Integer |  | 100 | 上限 |  |
| - population | Long[] |  | [12,23] | 定向人群id | 不设定，用[]代表；设定定向人群时，定向id需要是可识别的。定向人群id集合不能超过100个。 |
| - exclude_population | Long[] |  | [14,23] | 排除人群id | 不设定，用[]代表。设定时，排除id需要是可识别的。排除人群id集合不能超过100个。 |
| - paid_audience | Long[] |  | [14,98] | 付费人群id | 不设定，用[]代表。设定时，id需要是可识别的。数组个数不能超过100个。另外，population、exclude_population、paid_audience有联合检查规则，如不同存在相同值、定向人群population和paid_audience不可同时设定等。 |
| - gender | String |  | M | 性别，""=不限，M=男性，F=女性 | ""代表不限性别。"F"代表女性、"M"代表男性 |
| - region_ids | Long[] |  | [12,35] | 定向地域id | 不限定地域用[]代表；设定时id需要为可识别值。仅支持设定"指定地区"。若需要设定"城市等级"，请不要传入此字段，并使用region_category_ids |
| - user_type | Integer |  | 0 | 定向地域人群类型，联动regionIds | 见user_type枚举说明 |
| - intelli_extend | IntelliExtendParamForGateway |  | 无 | 智能扩量，注意托管的isOpen必须传true，其他不限 | 格式如下 "no_age_break": false,//是否允许打破年龄带限制 "no_gender_break": false,//是否允许打破性别限制 "no_area_break": false,//是否允许打破地域限制 "is_open": true //是否开启智能扩量，本字段只能是true，可不传，传入false也会被修改为true} |
| - is_open | Boolean |  | true/false | 是否开启智能扩量 |  |
| - no_age_break | Boolean |  | false | 不允许打破年龄定向（是/否） |  |
| - no_gender_break | Boolean |  | false/true | 不允许打破性别定向（是/否） |  |
| - no_area_break | Boolean |  | true/false | 不可打破地域定向（是/否） |  |
| - platform | TargetPlatformMap |  | {"android":{"min":3.0,"max":20.0}}或{"ios":{"min":6.0,"max":20.0}} | 定向参数，注意android和ios参数不可同时存在 | 本属性需要和appId的平台一致；如果是落地页，且落地页内包括了下载组件，则需要和下载组件的平台一致，如果是快应用的落地页，则需要为安卓7.0及以上。合法取值有三种，不限定平台，用{}代表；限定安卓平台：{ "android": { "min": 3 }}注意安卓平台的最小取值为3，最大取值为10、限定ios平台：{ "ios": { "min": 6 }}注意ios平台的最小取值是6，最大取值为14.注意ios和android两个key只能选择一个传入，不能同时传入。 |
| - android | RangeDouble |  | "min": 3.0, "max": 20.0 | 安卓版本限制；注意本参数和ios参数不可同时存在 |  |
| - min | Double |  | 4.0 | 下限 |  |
| - max | Double |  | 10.0 | 上限 |  |
| - filter_converted_level | Integer |  | 0 | 过滤已转化人群 | 见枚举说明filter_converted_level；注意当campaign!=2时，filter_converted_level不可以取5即过滤app。filter_converted_level=6需加白使用仅支持提升应用安装和收集销售线索 |
| - region | String[] |  |  | 输出参数。region_ids的中文描述。 |  |
| - disable_installed_app_switch | Integer |  | 1 | 过滤已安装选项 |  |
| - fiction_infos | AdHostingFictionTypeForGateway[] |  | ... | 小说测书场景代表了小说信息属性。 |  |
| - fiction_id | Long |  | 123 | 小说id |  |
| - photo_infos | AdHostingPhotoTypeForGateway[] |  | 无 | 视频信息 |  |
| - photo_id | Long |  | 123 | 视频id |  |
| - photo_orientation | Integer |  | 1 | 1=竖版，2=横版 |  |
| - cover_image_token | String |  | image1234 | 图片token |  |
| - smart_cover | Boolean |  | false | 是否开启抽帧。本字段对photoInfos所代表的结构体整体生效，为true是，photoInfos的封面参数可不传入。 |  |
| - action_bar | String |  | 立即下载 | 行动号召按钮 |  |
| - captions | String[] |  | ["广告语1", "广告语2"] | 作品广告语 |  |
| - click_url | String |  | https://xxx | 第三方点击检测链接 |  |
| - actionbar_click_url | String |  | https://xxx | 第三方actionbar点击监测链接 |  |
| - web_uri | String |  | https:/// | 当测书工具的计划类型为收集销售线索时，使用了广告主自有落地页时，本字段必填。其代表落地页链接。 |  |
| - site_id | Long |  | 1234 | 当测书工具的计划类型是收集销售线索，且落地页类型使用了自建站时必填，填入建站的页面id，此时webUri字段传入建站的页面url，同时联动webUriType传入2。 |  |
| - web_uri_type | Integer |  | 1 | 当campaign_type!=5时本字段不填写，保持为0。当campaign_type=5时，本字段标志落地页类型，1=自有落地页，此时site_id不允许填值，web_uri字段输入用户落地页链接；2=建站落地页，此时web_uri不需要填值，site_id填入落地页的id。 |  |
| - photo_infos | AdHostingPhotoTypeForGateway[] |  | ... | 程序化3.0视频属性。普通托管场景必填，开放平台只支持3.0的格式。当小说测书场景时本字段不可用，请使用fictionInfos属性内的photoInfos传入每本小说的属性。 |  |
| - photo_id | Long |  | 123 | 视频id |  |
| - photo_orientation | Integer |  | 1 | 1=竖版，2=横版 |  |
| - cover_image_token | String |  | image1234 | 图片token |  |
| - name_rule | AdHostingNameRuleTypeForGateway |  | ... | 命名规则 |  |
| - rule_enable | Boolean |  | true | 是否开启命名规则。a、本属性默认关闭，此时命名规则的详细参数campaignNameRule、unitNameRule、creativeNameRule不可传入值。b、本属性传入true，则campaignNameRule、unitNameRule、creativeNameRule至少有一项需要是非空值。 |  |
| - campaign_name_rule | String |  | 命名规则_计划_[日期] | 计划层级的命名规则。传入空串代表不设置计划的命名规则。 |  |
| - unit_name_rule | String |  | 命名规则_单元 | 单元的命名规则，当ruleEnable=true时可用。单元的命名规则会默认拥有“[日期]”、“[序号]”，如示例值最终的命名形式是“命名规则_单元_[日期]_[序号]”；当用户指定了[日期]、[序号]，则不添加，如“命名规则_[序号]_单元”的最终命名规则是“命名规则_[序号]_单元_[日期]”。 |  |
| - creative_name_rule | String |  | 命名规则_创意 | 创意的命名规则，当ruleEnable=true时可用；本属性传入空代表不设置创意的命名规则。 |  |
| - put_status | Integer |  | 2 | 当前的投放状态 |  |
| - web_uri_type | Integer |  | 1 | 当campaign_type=5时标志落地页的类型，0=非落地页类型，1=自有落地页，2=建站落地页 |  |
| - group_id | Long |  | 1234 | 程序化落地页id |  |
| - scene_ids | Integer[] |  | [1, 6] | 投放场景 |  |
| - bid_type | Integer |  | 10 | 出价方式，10:普通托管、12:最大转化场景 |  |
| - constraint_action_type | Integer |  | 2 | 浅层约束目标，0:无、2:点击、53:表单、180:激活、190:付费 |  |
| - constraint_cpa | Long |  | 10000 | 浅层约束成本，浅层约束目标非0时浅层约束成本也非0，单位厘 |  |
| - pic_infos | AdHostingPicTypeForGateway[] |  | - | 图文信息 |  |
| - image_token | String |  | "123.jpg" | 图片token |  |
| - pic_id | Long |  | 123 | id |  |
| - pic_url | String |  | "123.jpg" | 链接 |  |
| - pic_name | String |  | "测试" | 名称 |  |
| - pic_type | Integer |  | 6 | 横版图片 6 竖版 5 |  |
| - intelli_budget | Boolean |  |  | 跑量优先智能预算优化开关 |  |
| - package_id | Long |  |  | 应用包ID |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 179,
        "details": [
          {/*等同于detail接口的data部分，请参考detail接口*/}
        ]
    },
    "message": "OK"
}
```
