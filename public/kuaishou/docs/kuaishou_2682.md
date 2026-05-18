---
title: 创建定向模板
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2682&menuId=3416
doc_id: kuaishou_2682
source_id: kuaishou_2682
---
# 创建定向模板

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2682 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 效果广告 |
| createTime | 2026-01-14T03:28:30.734Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/target/template/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主id |  |
| target | MapiTargetInfoSnake |  |  | 定向信息 | 如下 |
| - distance_show | DistanceShowSnake[] |  |  | 新商圈 |  |
| - address | String |  |  | address |  |
| - lng | String |  |  | lng |  |
| - lat | String |  |  | lat |  |
| - radius | Long |  |  | radius |  |
| - location_name | String |  |  | location_name |  |
| - poi_id | String |  |  | poi_id |  |
| - android_osv | Integer |  |  | Android 版本 | 3：不限，4：4.x+，5：5.x+，6：6.x+，7：7.x+，8：8.x+，9：9.x+，10：10.x+； |
| - app_ids | String[] |  |  | APP 行为-按 APP 名称 | 可通过 /rest/openapi/v1/tool/app/search 查询 1、APP 行为定向，id 不能重复且必须准确； 2、只有「提升应用安装」的计划且 Android 应用支持此定向；其他计划填写无效； 3、iOS 不支持行为定向，填写无效；app_ids 和 app_interest_ids 不能同时选择 |
| - app_interest_ids | String[] |  |  | APP 行为-按分类 | id 不能重复且必须准确，具体 id 可通过下方标签接口获取；仅包含安卓数据，若操作系统定向 IOS 则无效；不能同时选择 app_ids（新标签体系字段，替换 app_interest，与 app_interest 同时传递，app_interest 字段失效） |
| - app_names | String[] |  |  | 请补充描述详情 |  |
| - behavior_interest | BehaviorInterest649Snake |  |  | 行为兴趣定向 |  |
| - behavior | Behavior822Snake223 | 是 |  | 行为定向 | behavior 与 interest 同时不传，则清空行为兴趣定向 |
| - keyword | Keyword[] |  |  | 行为定向关键词 | 根据/rest/openapi/v1/tool/keyword/query 接口获取 |
| - id | Long | 是 |  | 关键词 id | id 与 name 需互相匹配 |
| - name | String | 是 |  | 关键词名称 | id 与 name 需互相匹配 |
| - label | String[] |  |  | 行为定向 类目词 | 根据/rest/openapi/v1/tool/label/behavior_interest 接口获取。将行为类目 id 从最高层类目 id 开始，以“-”连接起来，假如有一个类目 id 为 80202，父类目 id 为 802，最高层类目 id 为 8，则此时应该写["8-802-80202"]；如果想全选最高层类目"8"底下的所有子类目，填["8"] |
| - scene_type | String[] | 是 |  | 行为场景 | 1：社区 2：APP 3：电商 4：推广 |
| - strength_type | Integer | 是 |  | 行为强度 | 0：不限 1：高强度 |
| - time_type | Integer | 是 |  | 在多少天内发生行为的用户 | 0:7 天 1：15 天 2：30 天 3：90 天 4：180 天 |
| - interest | Interest994Snake346 |  |  | 兴趣定向 | behavior 与 interest 同时不传，则清空行为兴趣定向 |
| - keyword | Keyword[] |  |  | 行为定向关键词 | 根据/rest/openapi/v1/tool/keyword/query 接口获取 |
| - id | Long | 是 |  | 关键词 id | id 与 name 需互相匹配 |
| - name | String | 是 |  | 关键词名称 | id 与 name 需互相匹配 |
| - label | String[] |  |  | 行为定向 类目词 | 根据/rest/openapi/v1/tool/label/behavior_interest 接口获取。将行为类目 id 从最高层类目 id 开始，以“-”连接起来，假如有一个类目 id 为 80202，父类目 id 为 802，最高层类目 id 为 8，则此时应该写["8-802-80202"]；如果想全选最高层类目"8"底下的所有子类目，填["8"] |
| - strength_type | Integer | 是 |  | 行为强度 | 0：不限 1：高强度 |
| - behavior_type | Integer |  |  | 行为兴趣类型 | 0：默认；1：自定义行为意向；2：行为意向系统优选 |
| - business_interest | String[] |  |  | 请补充描述详情 |  |
| - celebrity | MapiCelebrity953Snake |  |  | 快手网红 | behaviors、fans_star两个字段必填充 |
| - behaviors | String[] | 是 |  | 行为类型 | 该字段为平台对应快手网红功能中的行为类型，可多选，但不可不选，不选会导致快手网红定向失效，定义如下 0:关注、1:视频互动、2:直播互动 |
| - fans_stars | CelebrityFansStar294Snake264[] | 是 |  | 网红内容 | 该字段包括平台对应快手网红功能中的网红分类和快手网红两项，数据保证录入顺序，可从【快手网红-网红分类】和【快手网红-搜索快手网红】接口获取对应数据 |
| - category | String[] |  |  |  | 当是快手网红，即type=2时，该字段传值有效，对应当前快手网红的分类，格式为[first_label_id,second_label_id]，如果second_label_id不存在，则只传入[first_label_id]，如传入[32, 241]表示当前快手网红属于影视-影视分类二级网红分类 |
| - id | String | 是 |  | 关键词 id | id 与 name 需互相匹配 |
| - name | String | 是 |  | 关键词名称 | id 与 name 需互相匹配 |
| - type | Integer |  |  |  | 如使用该功能则必填此项，该字段为平台对应快手网红功能中的网红分类和快手网红两项，可从【快手网红-网红分类】和【快手网红-搜索快手网红】接口获取对应数据 1:网红分类、2:快手网红 |
| - device_brand_ids | String[] |  |  | 请补充描述详情 |  |
| - device_price | String[] |  |  | 设备价格， | 1：1,500 元以下（近期下线）， 新增：11：1000以下，12：10011500，请直接使用新枚举值； 2：1,5012,000； 3：2,0012,500；4：2,5013,000；5、3,0013,500； 6：3,5014,000；7：4,0014,500； 8：4,5015,000；9：5,0015,500； 10：5,500 元以上；13：4,0015,000；14：5,001~6,000；15：6,000元以上；传值为 [] 表示不限； |
| - disable_installed_app_switch | Integer |  |  | 请补充描述详情 |  |
| - district_ids | String[] |  |  | 商圈定向 | 与 region 字段不能同时传、白名单控制，最多选 100 个。 可以通过/rest/openapi/v1/region/district/list 接口获取商圈信息 |
| - exclude_media | String[] |  |  | 媒体定向排除包 | media 和 exclude_media 只可选其一，若选择使用排除行业优质流量包（media_source_type = 1），此处单选：1 - 超休闲游戏；2 - 重度游戏；4 - 直营电商；5 - 平台电商；若选择使用广告主自定义媒体包（media_source_type = 2），此处多选，填写媒体包 id；【仅联盟广告位生效】 |
| - exclude_population | String[] |  |  | 排除人群包 | 1、排除人群包，人群包 id 不能重复且必须准确；人群包状态必须是已推送状态 2、如果同时传了 population 和 exclude_population，则表示同时定向排除； 3、population 和 exclude_population 这两个字段不能包含交集的 id |
| - filter_converted_level | Integer |  |  | 过滤已转化人群纬度 | 0：不限 1：广告组 2：广告计划 3：本账户 4：公司主体 5：APP 6:运营自定义产品名 7:企微号 |
| - filter_time_range | Integer |  |  | 请补充描述详情 |  |
| - gender | Integer |  |  | 性别 | 1：女性, 2：男性，0 表示不限 |
| - intelli_extend_option | Integer |  |  | 智能定向开关 | 0：表示自定义定向（默认）；1：智能定向 |
| - ios_osv | Integer |  |  | iOS 版本 | 6：不限，7：7.x+，8：8.x+，9：9.x+，10：10.x+；11：11.x+；12：12.x+；13：13.x+；14：14.x+；15：15.x+；16：16.x+； |
| - media | String[] |  |  | 媒体定向包 | 若选择使用定向行业优质流量包（media_source_type = 1），此处单选：1 - 超休闲游戏；2 - 重度游戏；4 - 直营电商；5 - 平台电商；若选择使用广告主自定义媒体包（media_source_type = 2），此处多选，填写媒体包 id【仅联盟广告位生效】 |
| - media_source_type | Integer |  |  | 媒体包来源 | 默认为 0，0-不限，1-行业优质流量包，2-广告主自定义 |
| - network | Integer |  |  | 网络环境 | 1：WI-FI，2：移动网络，0：表示不限 |
| - paid_audience | String[] |  |  | 付费人群包 | 可通过/rest/openapi/v1//dmp/population/list 查询 1、付费人群包，人群包 id 不能重复且必须准确 2、人群包状态必须是已推送状态，与定向、排除人群包互斥 |
| - platform_os | Integer |  |  | 定向的 os 版本 | 应用安装类计划以 app_id 中的 platform_os 为准 1：Android，2：iOS，0 表示不限， 3：Android和IOS（营销目标类型为收集营销线索时加白可用，此时 android_osv 和 ios_osv必填），4：鸿蒙 |
| - population | String[] |  |  | 定向人群包 | 可通过/rest/openapi/v1//dmp/population/list 查询 1、定向人群包，人群包 id 不能重复且必须准确 2、人群包状态必须是已推送状态 |
| - region | String[] |  |  | 地域 | 传值为 [] 表示不限，传递上一级 id 时，children id 可以不传，不允许同时传 parent id 和 children id， 地域信息可通过 [/region/list] 接口获取 |
| - seed_population | String[] |  |  | 种子人群包 | 当账户开通种子人群包功能后方可使用此功能。该定向仅支持快手站内广告位，不支持联盟广告位。 |
| - target_source | Integer |  |  | 请补充描述详情 |  |
| - user_type | Integer |  |  | 用户类型 | 0：实时 1：常驻 2：不限 |
| - ip_type | Integer |  |  | 地域IP类型 | 白名单可用，0-默认IP、1-广协IP |
| - auto_population | Integer |  |  | 智能人群包 |  |
| - behavior_interest_param_show | BehaviorInterestParamShowSnake |  |  | 行为意向4.0 |  |
| - category_ids | String[] |  |  | 类目ID | 根据/rest/openapi/gw/dsp/target/option/behavior_interest 接口获取。将行为类目 id 从最高层类目 id 开始，以“-”连接起来，假如有一个类目 id 为 80202，父类目 id 为 802，最高层类目 id 为 8，则此时应该写"8-802-80202"；如果想全选最高层类目"8"底下的所有子类目，填"8" |
| - keyword_ids | Integer[] |  |  | 关键词ID | 根据/rest/openapi/v1/tool/keyword/query 接口获取 |
| - custom_behavior | Integer |  |  | 自定义行为意向 | 0：关闭，1：开启 |
| - scene_types | Integer[] |  |  | 场景类型 | 1：视频；2：APP；4：广告；custom_behaivor为1时必填，不能为空列表。 |
| - time_type | Integer |  |  | 时间范围 | 0:7 天；1：15 天；2：30 天；3：90 天；4：180 天；5：60天；custom_behaivor为1时必填，不能null |
| - filter_converted_wechat_id | String[] |  |  | 过滤已转化-企微号ID |  |
| - operators | Integer[] |  |  | 运营商 | 白名单可用，1: 中国移动,2: 中国电信,3: 中国联通,格式为一个list数组"[1,2,3]", "[]"空数组表示不限 |
| - harmony_osv | Integer |  | - | 鸿蒙操作系统版本号限制 | 1： 不限（默认1.x+) ， 4 ：1.x - 4.x ， 5: 5.x + |
| - age_v2 | IntegerRange572908 |  | - | 自定义年龄段 | 不传值表示不限 ; 年龄区间min最小为 18 岁，需要满足 max-min>=5且 18<=min<=75, 若71<=min<=75, 则max需传入100；年龄区间max最大为 100 岁；与 ages_range_v2 不能同时传。 |
| - max | Integer |  |  | 可选 | 年龄最大值 |
| - min | Integer |  |  | 可选 | 年龄最小值 |
| - ages_range_v2 | String[] |  | - | 固定年龄段 | 与 age_v2 不能同时传；【18：表示 18-23 岁】；【24：表示 24-30 岁】；【31：表示 31-35 岁】；【36：表示 36-40 岁】；【41：表示 41-45 岁】 【46：表示 46-49 岁】 【50：表示 50-54 岁】 【55：表示 55-59 岁】 【60：表示 60-64 岁】 【65：表示 65-69 岁】 【70：表示 70-74 岁】 【75：表示 75-100 岁】 |
| - shared_user | Integer |  | - | 过滤共用手机用户 | 过滤共用手机用户 0-默认 1-过滤 |
| template_name | String | 是 |  | 定向模板名称 | 名字需要唯一 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 123123,
    "template_name": "这是一个模板",
    "target": {
        "celebrity": {
            "fans_stars": [
                {
                    "name": "生活-亚洲生活",
                    "id": "26-228",
                    "category": null,
                    "type": 1
                },
                {
                    "name": "生活-欧洲生活",
                    "id": "26-118",
                    "category": null,
                    "type": 1
                }
            ],
            "behaviors": [
                1
            ]
        },
        "gender": 2,
        "media": [],
        "network": 0,
        "device_price": [
            5,
            6,
            7
        ],
        "media_source_type": 0,
        "user_type": 0,
        "exclude_population": [
            950011889
        ],
        "device_brand_ids": [],
        "district_ids": null,
        "ages_range": [
            31,
            41,
            50
        ],
        "android_osv": 3,
        "app_ids": null,
        "disable_installed_app_switch": 0,
        "behavior_type": 1,
        "filter_converted_level": 0,
        "filter_time_range": 0,
        "platform_os": 1,
        "population": [
            950012677
        ],
        "behavior_interest": {
            "interest": {
                "strength_type": 1,
                "label": [
                    "1-101",
                    "1-103",
                    "1-104"
                ],
                "keyword": []
            },
            "behavior": {
                "strength_type": 1,
                "time_type": 4,
                "label": [
                    "1-101"
                ],
                "keyword": [],
                "scene_type": [
                    1,
                    2,
                    3,
                    4
                ]
            }
        },
        "seed_population": null,
        "ios_osv": null,
        "app_interest_ids": [],
        "paid_audience": [],
        "intelli_extend_option": 0,
        "region": [
            110101
        ],
        "exclude_media": []
    }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | TemplateIdRespSnake |  |  | json返回信息 |  |
| - template_id | Long |  |  | 模板ID |  |
| message | String |  |  | 错误详情 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "template_id": 2959088
    }
}
```

## 原始内容

```
创建定向模板 /rest/openapi/gw/dsp/target/template/create { "advertiser_id": 123123, "template_name": "这是一个模板", "target": { "celebrity": { "fans_stars": [ { "name": "生活-亚洲生活", "id": "26-228", "category": null, "type": 1 }, { "name": "生活-欧洲生活", "id": "26-118", "category": null, "type": 1 } ], "behaviors": [ 1 ] }, "gender": 2, "media": [], "network": 0, "device_price": [ 5, 6, 7 ], "media_source_type": 0, "user_type": 0, "exclude_population": [ 950011889 ], "device_brand_ids": [], "district_ids": null, "ages_range": [ 31, 41, 50 ], "android_osv": 3, "app_ids": null, "disable_installed_app_switch": 0, "behavior_type": 1, "filter_converted_level": 0, "filter_time_range": 0, "platform_os": 1, "population": [ 950012677 ], "behavior_interest": { "interest": { "strength_type": 1, "label": [ "1-101", "1-103", "1-104" ], "keyword": [] }, "behavior": { "strength_type": 1, "time_type": 4, "label": [ "1-101" ], "keyword": [], "scene_type": [ 1, 2, 3, 4 ] } }, "seed_population": null, "ios_osv": null, "app_interest_ids": [], "paid_audience": [], "intelli_extend_option": 0, "region": [ 110101 ], "exclude_media": [] } } { "code": 0, "message": "OK", "data": { "template_id": 2959088 } } advertiser_id Long 广告主id target MapiTargetInfoSnake 定向信息 distance_show DistanceShowSnake[] 新商圈 address String address lng String lng lat String lat radius Long radius location_name String location_name poi_id String poi_id android_osv Integer Android 版本 app_ids String[] APP 行为-按 APP 名称 app_interest_ids String[] APP 行为-按分类 app_names String[] 请补充描述详情 behavior_interest BehaviorInterest649Snake 行为兴趣定向 behavior Behavior822Snake223 行为定向 keyword Keyword[] 行为定向关键词 id Long 关键词 id name String 关键词名称 label String[] 行为定向 类目词 scene_type String[] 行为场景 strength_type Integer 行为强度 time_type Integer 在多少天内发生行为的用户 interest Interest994Snake346 兴趣定向 keyword Keyword[] 行为定向关键词 id Long 关键词 id name String 关键词名称 label String[] 行为定向 类目词 strength_type Integer 行为强度 behavior_type Integer 行为兴趣类型 business_interest String[] 请补充描述详情 celebrity MapiCelebrity953Snake 快手网红 behaviors String[] 行为类型 fans_stars CelebrityFansStar294Snake264[] 网红内容 category String[] id String 关键词 id name String 关键词名称 type Integer device_brand_ids String[] 请补充描述详情 device_price String[] 设备价格， disable_installed_app_switch Integer 请补充描述详情 district_ids String[] 商圈定向 exclude_media String[] 媒体定向排除包 exclude_population String[] 排除人群包 filter_converted_level Integer 过滤已转化人群纬度 filter_time_range Integer 请补充描述详情 gender Integer 性别 intelli_extend_option Integer 智能定向开关 ios_osv Integer iOS 版本 media String[] 媒体定向包 media_source_type Integer 媒体包来源 network Integer 网络环境 paid_audience String[] 付费人群包 platform_os Integer 定向的 os 版本 population String[] 定向人群包 region String[] 地域 seed_population String[] 种子人群包 target_source Integer 请补充描述详情 user_type Integer 用户类型 ip_type Integer 地域IP类型 auto_population Integer 智能人群包 behavior_interest_param_show BehaviorInterestParamShowSnake 行为意向4.0 category_ids String[] 类目ID keyword_ids Integer[] 关键词ID custom_behavior Integer 自定义行为意向 scene_types Integer[] 场景类型 time_type Integer 时间范围 filter_converted_wechat_id String[] 过滤已转化-企微号ID operators Integer[] 运营商 harmony_osv Integer 鸿蒙操作系统版本号限制 age_v2 IntegerRange572908 自定义年龄段 max Integer 可选 min Integer 可选 ages_range_v2 String[] 固定年龄段 shared_user Integer 过滤共用手机用户 template_name String 定向模板名称 data TemplateIdRespSnake json返回信息 template_id Long 模板ID message String 错误详情 code Integer 返回码
```
