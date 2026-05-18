---
title: 修改自定义创意
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2579&menuId=3302
doc_id: kuaishou_2579
source_id: kuaishou_2579
---
# 修改自定义创意

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2579 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-08-12T13:12:28.427Z |

## 概述

【注】联盟广告不支持便利贴图片素材。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/creative/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| micro_change_switch | Integer |  |  | 微改白盒化开关 | 0 - 关闭；1 - 打开 |
| action_bar_text | String |  |  | 行动号召按钮文案 | 直播直投创意不用填写 |
| actionbar_click_url | String |  |  | 第三方点击按钮监测链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） | 1.校验 click_url 必填的广告场景 优选(1)/信息流(2、7)/上下滑（6） 2.优化目标为激活功能必填点击监测链接,但如果安卓应用接入了快手监测 sdk 就不需要填写监测链接了 3.联盟场景检查 click_url 不能为空 4.若广告联盟的转化目标为激活，click_url、actionbar_click_url 和监测 SDK 至少三选一 |
| ad_photo_played_t3s_url | String |  |  | 第三方有效播放监测链接 | 白名单功能，且当广告组 scene_id 为 27（开屏） 时不支持该检测链接；与 impression_url 不可同时使用 |
| click_track_url | String |  |  | 第三方点击检测链接 | 仅当广告组 scene_id 为 1、2、6、7 时，可选填； 广告组优化目标为激活时，该字段必填（下载类广告投放的应用集成快手 Android SDK 时除外） 使用 Marketing API 修改时，监测链接的使用以该文档为准 1、链接必须以 https 开头； 2、链接中至少包含一个占位符，且拼写无误: 'MAC','MAC2','MAC3','ANDROIDID2','ANDROIDID3', 'IMEI2','IMEI3','IDFA2','IDFA3','TS','IP', 'CALLBACK','DID','DNAME','CID','AID' |
| creative_category | Integer |  |  | 创意分类 | 由创意分类查询接口获得； 必须是叶子结点；与创意标签同时传或同时不传 |
| creative_id | Long | 是 |  | 广告创意 ID |  |
| creative_material_type | Integer |  |  | 素材类型 | 1：竖版视频；2：横版视频；5： 竖版图片（优选/联盟）；6：横版图片(优选/联盟/信息流/快看点)；9：小图(优选/信息流/快看点)；10：组图(优选/信息流/快看点) ；11:开屏视频；12：开屏图片。搜索广告当前仅支持1、2 |
| creative_name | String |  |  | 广告创意名称 | 不能修改为空，长度为 1-100 个字符，创意名称不能重复 |
| creative_tag | String[] |  |  | 创意标签（选创意分类 必填） | 与创意分类参数，要么都传，要么都不传；且单个创意的创意标签最多 20 个；单个创意标签不能为空且不能超过 10 字符 |
| description | String |  |  | 广告语 | 长度为 1-30 字符，不支持换行 如果要使用动态词包，格式如"[地区]的[男性女性]都喜欢"， 联盟广告和程序化创意不支持动态词包， 词包名可以通过动态词包接口获取，直播直投创意不用填写 |
| image_token | String |  |  | 封面图片 token | 通过上传图片接口获得，不传值则直接使用视频的首帧作为封面图片，自定义封面的图片宽高要与视频宽高一致 如果原封面未自定义无法使用视频首帧作为封面。 |
| image_tokens | String[] |  |  | 便利贴单图图片创意 token | 便利贴/图片/小图图片创意必填，目前只支持一张图片；组图图片创意需要上传 3 张图片，详细要求见附录 |
| impression_url | String |  |  | 第三方开始播放监测链接 | 仅当广告组 scene_id 为 3 时，可选填； 广告组优化目标为激活时，该字段必填（下载类广告投放的应用集成快手 Android SDK 时除外） 使用 Marketing API 修改时，监测链接的使用以该文档为准 1、链接必须以 https 开头； 2、链接中至少包含一个占位符，且拼写无误: 'MAC','MAC2','MAC3','ANDROIDID2','ANDROIDID3', 'IMEI2','IMEI3','IDFA2','IDFA3','TS','IP', 'CALLBACK','DID','DNAME','CID','AID' |
| live_track_url | String |  |  | 点击监测链接 | 计划 campaignType=16 粉丝直播推广时可填写 |
| new_expose_tag | NewExposeTagSnake[] |  |  | 广告标签 2 期 | 按照相关格式传递两个推荐理由 举例{“text”:"工厂直发"},{"text":"限时专享"}，直播直投创意不用填写 |
| - text | String | 是 |  | 广告标签text |  |
| - url | String | 是 |  | 广告标签url |  |
| photo_id | String |  |  | 视频 ID | 支持 Marketing API 上传的视频 |
| site_id | Long |  |  | 请补充描述详情 |  |
| splash_image_tokens | String[] |  |  | 开屏图片 token | creative_material_type 为 12 时必填，使用上传图片接口时返回的 image_token，素材类型是开屏图片时，必须传入全尺寸的 6 张图片，具体参考素材层级接口 |
| splash_photo_ids | String[] |  |  | 开屏视频 id | creative_material_type 为 11 时必填，使用上传视频接口时返回的 photo_id；即素材类型是开屏视频时，必须传入全尺寸的 4 条视频，具体参考素材层级接口 |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| dpa_template_id | Long |  | 1 | DPA模板id | 通过DPA 模板信息接口获取 |
| material_intelligent_optimize | Integer |  |  | 素材智能优化开关 | 0-关闭，1-开启，不传默认关闭。仅白名单用户可以使用。 |
| recommendation | String |  |  | 原生plc广告语 | 开启原生场景下可用，直播直投创意不用填写 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 20007185,
    "creative_id": 81810408,
    "creative_name":"修改搜索创意2",
    "photo_id": "49242450755",
    "action_bar_text": "立即咨询",
    "new_expose_tag": [{"text":"安享晚年"},{"text":"幸福一生"}],
    "description": "12[地区][节日][地点][男人女人]123[年龄][区县]",    
    "click_track_url": "https://adcore.aidalan.com/channel_ad/kuaishou/pf/1/junhai_adid/65067/game_id/U200000754?imei=__IMEI__&mac=__MAC__&callback_url=__CALLBACK__",
    "actionbar_click_url":"http://gad.netease.com/mmad/click?idfa=__IDFA__"
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiCreativeUpdateResp |  |  | 创编计划、广告组、创意返回id参数 |  |
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
    "request_id": "332921b68e094274b58319ddb9230353"
}
```

## 原始内容

```
修改自定义创意 /rest/openapi/gw/dsp/creative/update { "advertiser_id": 20007185, "creative_id": 81810408, "creative_name":"修改搜索创意2", "photo_id": "49242450755", "action_bar_text": "立即咨询", "new_expose_tag": [{"text":"安享晚年"},{"text":"幸福一生"}], "description": "12[地区][节日][地点][男人女人]123[年龄][区县]", "click_track_url": "https://adcore.aidalan.com/channel_ad/kuaishou/pf/1/junhai_adid/65067/game_id/U200000754?imei=__IMEI__&mac=__MAC__&callback_url=__CALLBACK__", "actionbar_click_url":"http://gad.netease.com/mmad/click?idfa=__IDFA__" } { "code": 0, "message": "OK", "data": { "creative_id": 81810408 }, "request_id": "332921b68e094274b58319ddb9230353" } action_bar_text String 行动号召按钮文案 actionbar_click_url String 第三方点击按钮监测链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） ad_photo_played_t3s_url String 第三方有效播放监测链接 click_track_url String 第三方点击检测链接 creative_category Integer 创意分类 creative_id Long 广告创意 ID creative_material_type Integer 素材类型 creative_name String 广告创意名称 creative_tag String[] 创意标签（选创意分类 必填） description String 广告语 image_token String 封面图片 token image_tokens String[] 便利贴单图图片创意 token impression_url String 第三方开始播放监测链接 live_track_url String 点击监测链接 new_expose_tag NewExposeTagSnake[] 广告标签 2 期 text String 广告标签text url String 广告标签url photo_id String 视频 ID site_id Long 请补充描述详情 splash_image_tokens String[] 开屏图片 token splash_photo_ids String[] 开屏视频 id advertiser_id Long 广告主 ID dpa_template_id Long DPA模板id material_intelligent_optimize Integer 素材智能优化开关 recommendation String 原生plc广告语 data MapiCreativeUpdateResp 创编计划、广告组、创意返回id参数 creative_id Long 创意 ID code Integer 返回码 message String 返回信息
```
