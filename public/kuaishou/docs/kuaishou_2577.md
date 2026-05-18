---
title: 创建自定义创意
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2577&menuId=3300
doc_id: kuaishou_2577
source_id: kuaishou_2577
---
# 创建自定义创意

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2577 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 效果广告 |
| createTime | 2026-03-30T13:09:12.088Z |

## 概述

【注】联盟广告不支持便利贴图片素材，只有联盟广告支持横版竖版图片素材。 当前搜索广告仅支持自定义创意，每个推广组下最多允许创建15个创意 2026年3月23日起，通过mapi创建广告时，对应的视频会在快手号个人主页默认为单次可见

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/creative/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| micro_change_switch | Integer |  |  | 爆款裂变开关 | 0 - 关闭；1 - 打开 |
| advertiser_id | Long | 是 |  | 广告主id |  |
| action_bar_text | String | 是 |  | 行动号召按钮文案 | 根据计划类型进行设置，直播直投创意不用填写 |
| actionbar_click_url | String |  |  | 第三方点击按钮监测链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） | 1.校验 click_url 必填的广告场景 优选(1)/信息流(2、7)/上下滑（6） 2.优化目标为激活功能必填点击监测链接,但如果安卓应用接入了快手监测 sdk 就不需要填写监测链接了 3.联盟场景检查 click_url 不能为空 4.若广告联盟的转化目标为激活，click_url、actionbar_click_url 和监测 SDK 至少三选一 |
| ad_photo_played_t3s_url | String |  |  | 第三方有效播放监测链接 | 白名单功能，且当广告组 scene_id 为 27（开屏） 时不支持该检测链接；与 impression_url 不可同时使用 1、链接必须以 https 开头； 2、链接中至少包含一个占位符，且拼写无误: 'MAC','MAC2','MAC3','ANDROIDID2','ANDROIDID3', 'IMEI2','IMEI3','IDFA2','IDFA3','TS','IP', 'CALLBACK','DID','DNAME','CID','AID' |
| click_track_url | String |  |  | 第三方点击检测链接 | 仅当广告组 scene_id 为 1、2、6、7、10 时，可选填； 广告组优化目标为激活时，该字段必填（下载类广告投放的应用集成快手 Android SDK 时除外） 使用 Marketing API 创建时，监测链接使用以该文档为准 1、链接必须以 https 开头； 2、链接中至少包含一个占位符，且拼写无误: 'MAC','MAC2','MAC3','ANDROIDID2','ANDROIDID3', 'IMEI2','IMEI3','IDFA2','IDFA3','TS','IP', 'CALLBACK','DID','DNAME','CID','AID' |
| creative_category | Integer |  |  | 创意分类 | 金融，教育，游戏，小说，电商 如上行业必填。 由创意分类查询接口 获得；必须是叶子结点；与创意标签同时传或同时不传 可通过工具-功能名单-获取创意分类标签白名单客户接口获取是否必填。注：不可传入负值 |
| creative_material_type | Integer | 是 |  | 素材类型 | 1：竖版视频；2：横版视频；5： 竖版图片（优选/联盟）；6：横版图片(优选/联盟/信息流/快看点)；9：小图(优选/信息流/快看点)；10：组图(优选/信息流/快看点) ；11:开屏视频；12：开屏图片；14：DPA模板（联盟）。搜索广告当前仅支持1、2。直播间直投创意(live_creative_type = 3 或者 (campaign_type = 14 && live_creative_type = 1))时可不传。 |
| creative_name | String | 是 |  | 创意名称 | 长度为 1-100 字符，同一个广告组下名称不能重复 |
| creative_tag | String[] |  |  | 创意标签 | 选创意分类 必填 与创意分类参数，要么都传，要么都不传；且单个创意的创意标签最多 10 个；单个创意标签不能为空且不能超过 10 字符， |
| description | String |  |  | 广告语 | 长度为 1-30 字符，不支持换行。 如果要使用动态词包，格式如"[地区]的[男性女性]都喜欢"， 联盟广告和程序化创意不支持动态词包， 词包名可以通过下方动态词包接口获取。开屏广告不支持广告语，直播直投创意不用填写 |
| dpa_style_types | String[] |  |  | 动态商品卡样式 | 14001-区域服务卡 |
| high_light_flash | Integer |  |  | 高光创意状态 | 0：关闭 1：开启 |
| image_token | String |  |  | 封面图片 token | 通过上传图片接口获得，不传值则直接使用视频的首帧作为封面图片，自定义封面的图片宽高要与视频宽高一致 |
| image_tokens | String[] |  |  | 便利贴单图图片创意 token | 便利贴/图片/小图图片创意必填，目前只支持一张图片；组图图片创意需要上传 3 张图片，详细要求见附录 |
| impression_url | String |  |  | 第三方开始播放监测链接 | 广告组优化目标为激活时，该字段必填（下载类广告投放的应用集成快手 Android SDK 时除外） 使用 Marketing API 创建时，监测链接使用以该文档为准 1、链接必须以 https 开头； 2、链接中至少包含一个占位符，且拼写无误: 'MAC','MAC2','MAC3','ANDROIDID2','ANDROIDID3', 'IMEI2','IMEI3','IDFA2','IDFA3','TS','IP', 'CALLBACK','DID','DNAME','CID','AID' |
| kol_user_type | Integer |  |  | 原生达人用户类型 | 1普通快手号原生，2服务号原生，3聚星达人原生，当outer_loop_native=1时此项必填,当 campaignType=30只能填写1普通快手号 |
| live_creative_type | Integer |  |  | 直播类型（粉丝直播推广计划type=16时必填） | 3 - 直投直播；4 - 视频引流直播 |
| live_track_url | String |  |  | 点击监测链接 | 计划 campaignType=16 粉丝直播推广时可填写，同一广告组下不同创意需要保持一致 |
| new_expose_tag | NewExposeTagSnake[] |  |  | 广告标签 2 期 | 按照相关格式传递两个推荐理由 举例{“text”:"工厂直发"},{"text":"限时专享"}，直播直投创意不用填写 |
| - text | String | 是 |  | 广告标签text |  |
| - url | String | 是 |  | 广告标签url |  |
| outer_loop_native | Integer |  |  | 是否开启原生 | 1开启、0关闭｜不填则默认为0。在投放快手信息流广告（ad_type=0或默认不填，scene_id包含1优选广告位、6上下滑大屏广告、7双列信息流广告）时，【campaignType=2提升应用安装、5收集销售线索、7提升应用活跃、19推广快手小程序、30快手号-短剧推广】可开启原生投放。注：在投放快手信息流广告的场景下，针对「升级白名单账户」支持“不填则默认为1，此时kol_user_id为广告主关联的授权生效快手号id 且 kol_user_type为对应有效授权类型”、“outer_loop_native=1”；针对「“账户二级行业=付费短剧”且“营销目标=快手号推广-短剧推广”的白名单账户」支持“不填则默认为1”、“outer_loop_native=1”；“outer_loop_native=0”时报错。 |
| photo_id | String |  |  | 视频 ID |  |
| site_id | Long |  |  | 请补充描述详情 |  |
| splash_image_tokens | String[] |  |  | 开屏图片 token | creative_material_type 为 12 时必填，使用上传图片接口时返回的 image_token，素材类型是开屏图片时，必须传入全尺寸的 6 张图片，具体参考素材层级接口 |
| splash_photo_ids | String[] |  |  | 开屏视频 id | creative_material_type 为 11 时必填，使用上传视频接口时返回的 photo_id；即素材类型是开屏视频时，必须传入全尺寸的 4 条视频，具体参考素材层级接口 |
| unit_id | Long | 是 |  | 广告组 ID |  |
| dpa_template_id | Long |  | 1 | DPA 模板id | creative_material_type = 14 时，必填。通过DPA 模板信息接口取 |
| recommendation | String |  |  | plc自定义文案 | 直播直投创意不用填写 |
| kol_user_id | Long |  |  | 原生投放目标达人ID | 开启原生场景下必传，即当outer_loop_native=1时此项必填， 计划 campaignType=30 短剧推广时，值为短剧作者ID |
| material_intelligent_optimize | Integer |  |  | 素材智能优化开关 | 0-关闭，1-开启，不传默认关闭。仅白名单用户可以使用。 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 20007185,
    "unit_id": 3834639,
    "ad_type": 1,
    "creative_name": "mapi_信息_创意3",
    "photo_id": "50611102611",
    "image_token": "BMjAyMTExMTExMDM4NDVfMTY4NzU1NzE4NF82MDY0NjgwNjE4NV8xXzM=_B8de7da4c5428428377d184f6a10fb643.jpg",
    "creative_material_type": 1,
    "action_bar_text": "免费咨询",
    "new_expose_tag": [{"text":"安享晚年"},{"text":"安全成长"}],
    "description": "[地点][男人女人]123[年龄][区县]",
    "click_track_url": "https://www.test.com/channel_ad/kuaishou/00754?imei=__IMEI2__&mac=__MAC__&callback_url=__CALLBACK__",
    "actionbar_click_url": "https://www.uri6.com/click?idfa=__IDFA__&callback=__CALLBACK__&csite=__CSITE__a"
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdMarketCreativeUpdateView |  |  | 创编计划、广告组、创意返回id参数 |  |
| - creative_id | Long |  | 231435235 | 创意 ID |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "creative_id": 81810408
    },
    "request_id": "47bd57dafaaa46b38276fec81fb75089"
}
```
