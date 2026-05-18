---
title: 批量修改自定义创意
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2581&menuId=3304
doc_id: kuaishou_2581
source_id: kuaishou_2581
---
# 批量修改自定义创意

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2581 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-08-22T07:47:22.521Z |

## 概述

注： 该接口可实现创意的批量创建&amp;更新，上传creative_id且该creative_id对应创意有效（可以找到创意信息且创意在投）为更新，不上传creative_id或上传的creative_id无效（找不到创意信息、创意已删除等）则为创建。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/creative/batch_update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| high_light_flash | Integer |  |  | 高光智投开关 | 0 - 关闭；1 - 打开 |
| micro_change_switch | Integer |  |  | 微改白盒化开关 | 0 - 关闭；1 - 打开 |
| actionbar_click_url | String |  |  | 第三方点击按钮监测链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） | 1.校验 click_url 必填的广告场景 优选(1)/信息流(2、7)/上下滑（6） 2.优化目标为激活功能必填点击监测链接,但如果安卓应用接入了快手监测 sdk 就不需要填写监测链接了 3.联盟场景检查 click_url 不能为空 4.若广告联盟的转化目标为激活，click_url、actionbar_click_url 和监测 SDK 至少三选一 |
| ad_photo_played_t3s_url | String |  |  | 第三方有效播放监测链接 | 白名单功能，且当广告组 scene_id 为 27（开屏） 时不支持该监测链接；与 impression_url 不可同时使用 |
| click_track_url | String |  |  | 第三方点击检测链接 | 仅当广告组 scene_id 为 1、2、6、7 时，可选填； 广告组优化目标为激活时，该字段必填（下载类广告投放的应用集成快手 Android SDK 时除外） 使用 Marketing API 创建时，监测链接使用以该文档为准 |
| creative_category | Integer |  |  | 创意分类 | 由创意分类查询接口 获得；必须是叶子结点；与创意标签同时传或同时不传 |
| creative_tag | String[] |  |  | 创意标签（选 创意分类必填） | 与创意分类参数，要么都传，要么都不传；且单个创意的创意标签最多 20 个；单个创意标签不能为空且不能超过 10 字符 |
| creatives | MapiCustomizedCreativeUpdateReqSnake[] |  |  | mapi自定义创意编辑请求参数 |  |
| - action_bar_text | String |  |  | 行动号召按钮文案 | 根据计划类型进行设置，详情见 10.1，开屏广告无需上传，直播直投创意不用填写 |
| - actionbar_click_url | String |  |  | 请补充描述详情 |  |
| - ad_photo_played_t3s_url | String |  |  | 请补充描述详情 |  |
| - click_track_url | String |  |  | 请补充描述详情 |  |
| - creative_category | Integer |  |  | 请补充描述详情 |  |
| - creative_id | Long |  |  | 创意 id | 上传该字段为更新，不上传则为创建 更新时传入创意 id 不能重复 需要在对应 unit_id 下 |
| - creative_material_type | Integer |  |  | 素材类型 | 1：竖版视频 2：横版视频 5： 竖版图片（优选/联盟）6：横版图片(优选/联盟/信息流/快看点) 9：小图(优选/信息流/快看点) 10：组图(优选/信息流/快看点) 11-开屏视频 12—开屏图片 14-DPA模板（联盟） |
| - creative_name | String |  |  | 创意名称 | 长度为 1-100 字符，同一个广告组下名称不能重复 |
| - creative_tag | String[] |  |  | 请补充描述详情 |  |
| - description | String |  |  | 广告语 | 长度为 1-30 字符，不支持换行。 如果要使用动态词包，格式如"[地区]的[男性女性]都喜欢"， 联盟广告和程序化创意不支持动态词包，词包名可以通过下方动态词包接口获取；开屏广告无需上传，直播直投创意不用填写 |
| - dpa_style_types | String[] |  |  | 动态商品卡样式ID | 动态商品卡投放必填：14001-区域服务卡 |
| - image_token | String |  |  | 封面图片 token | 通过上传图片接口获得，不传值则直接使用视频的首帧作为封面图片，自定义封面的图片宽高要与视频宽高一致 |
| - image_tokens | String[] |  |  | 便利贴单图图片创意 token | 便利贴创意必填，目前只支持一张图片，详细要求见附录 |
| - impression_url | String |  |  | 请补充描述详情 |  |
| - kol_user_type | Integer |  |  | 原生达人用户类型 | 1普通快手号原生，2服务号原生，3聚星达人原生，当outer_loop_native=1时此项必填。 |
| - live_creative_type | Integer |  |  | 请补充描述详情 |  |
| - live_track_url | String |  |  | 请补充描述详情 |  |
| - new_expose_tag | NewExposeTagSnake[] |  |  | 广告标签 2 期 | 按照相关格式传递两个推荐理由 举例{“text”:"工厂直发"},{"text":"限时专享"}，直播直投创意不用填写 |
| - text | String | 是 |  | 广告标签text |  |
| - url | String | 是 |  | 广告标签url |  |
| - outer_loop_native | Integer |  |  | 是否开启原生 | 1开启，0关闭，不填则默认为0，投放快手信息流广告时（ad_type=0或默认不填，scene_id包含1优选广告位、6上下滑大屏广告、7双列信息流广告），当campaignType=2提升应用安装、5收集销售线索、7提升应用活跃、19推广快手小程序、30快手号-短剧推广时，可开启原生投放。注：投放快手信息流广告且升级白名单账户如果不传递outer_loop_native、kol_user_type、kol_user_id且广告主账户关联快手号存在有效蓝v、普通快手号授权记录，则会默认开启原生outer_loop_native = 1 kol_user_type为对应有效授权类型 kol_user_id为广告主关联快手号id。若主动传递outer_loop_native = 0，则会报错 |
| - photo_id | String |  |  | 视频 id |  |
| - splash_image_tokens | String[] |  |  | 开屏图片 token | creative_material_type 为 12 时必填，使用上传图片接口时返回的 image_token，素材类型是开屏图片时，必须传入全尺寸的 6 张图片，具体参考素材层级接口 |
| - splash_photo_ids | String[] |  |  | 开屏视频 id | creative_material_type 为 11 时必填，使用上传视频接口时返回的 photo_id；即素材类型是开屏视频时，必须传入全尺寸的 4 条视频，具体参考素材层级接口 |
| - unit_id | Long |  |  | 请补充描述详情 |  |
| - dpa_template_id | Long |  | 1 | DPA模板id | creative_material_type = 14 时，必填。通过DPA 模板查询接口获取 |
| - kol_user_id | Long |  |  | 达人id | 开启原生场景下必传，即当outer_loop_native=1时此项必填 |
| - recommendation | String |  |  | plc描述语 | 开启原生场景下可用，直播直投创意不用填写 |
| impression_url | String |  |  | 第三方开始播放监测链接 | 仅当广告组 scene_id 为 3 时，可选填； 广告组优化目标为激活时，该字段必填（下载类广告投放的应用集成快手 Android SDK 时除外） 使用 Marketing API 创建时，监测链接使用以该文档为准 |
| unit_id | Long | 是 |  | 广告组 ID | 一个 unit 最多创建 15 个创意 |
| advertiser_id | Long | 是 |  | 账户id |  |
| material_intelligent_optimize | Integer |  |  | 素材智能优化开关 | 0-关闭，1-开启，不传默认关闭。仅白名单用户可以使用。 |

## 请求样例

### 请求样例 (jsonc)

```
{
	"advertiser_id": 4171736,
	"unit_id":22826160,
	"creatives":[
		{
			"creative_name":"测试4",
			"photo_id":5214605445653959402,
			"creative_material_type":1,
			"action_bar_text":"立即下载",
			"description":"支持建站工具的落地页",
			"overlay_type":"6_1",
			"sticker_title":"你好啊[男性女性]"
		},
		{
			"creative_name":"测试5",
			"photo_id":5214605445653959402,
			"creative_material_type":1,
			"action_bar_text":"立即下载",
			"description":"支持建站工具的落地页",
			"overlay_type":"6_1",
			"sticker_title":"你好啊[男性女性]"

		},
		{
			"creative_name":"测试6",
			"photo_id":5214605445653959402,
			"creative_material_type":1,
			"action_bar_text":"立即下载",
			"description":"支持建站工具的落地页",
			"overlay_type":"6_1",
			"sticker_title":"你好啊[男性女性]"
		}
		]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | BatchUpdateData |  |  | 批量更新自定义创意返回id |  |
| - update_creative_ids | Long[] |  | [123123123] | 更新创意ID集合 |  |
| - add_creative_ids | Long[] |  | [ 298846848, 298846846, 298846847 ] | 创建创意ID集合 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "update_creative_ids": [],
        "add_creative_ids": [
            298846848,
            298846846,
            298846847
        ]
    }
}
```

## 原始内容

```
批量修改自定义创意 /rest/openapi/gw/dsp/creative/batch_update { "advertiser_id": 4171736, "unit_id":22826160, "creatives":[ { "creative_name":"测试4", "photo_id":5214605445653959402, "creative_material_type":1, "action_bar_text":"立即下载", "description":"支持建站工具的落地页", "overlay_type":"6_1", "sticker_title":"你好啊[男性女性]" }, { "creative_name":"测试5", "photo_id":5214605445653959402, "creative_material_type":1, "action_bar_text":"立即下载", "description":"支持建站工具的落地页", "overlay_type":"6_1", "sticker_title":"你好啊[男性女性]" }, { "creative_name":"测试6", "photo_id":5214605445653959402, "creative_material_type":1, "action_bar_text":"立即下载", "description":"支持建站工具的落地页", "overlay_type":"6_1", "sticker_title":"你好啊[男性女性]" } ] } { "code": 0, "message": "OK", "data": { "update_creative_ids": [], "add_creative_ids": [ 298846848, 298846846, 298846847 ] } } micro_change_switch Integer 微改白盒化开关 actionbar_click_url String 第三方点击按钮监测链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） ad_photo_played_t3s_url String 第三方有效播放监测链接 click_track_url String 第三方点击检测链接 creative_category Integer 创意分类 creative_tag String[] 创意标签（选 创意分类必填） creatives MapiCustomizedCreativeUpdateReqSnake[] mapi自定义创意编辑请求参数 action_bar_text String 行动号召按钮文案 actionbar_click_url String 请补充描述详情 ad_photo_played_t3s_url String 请补充描述详情 click_track_url String 请补充描述详情 creative_category Integer 请补充描述详情 creative_id Long 创意 id creative_material_type Integer 素材类型 creative_name String 创意名称 creative_tag String[] 请补充描述详情 description String 广告语 dpa_style_types String[] 动态商品卡样式ID high_light_flash Integer 请补充描述详情 image_token String 封面图片 token image_tokens String[] 便利贴单图图片创意 token impression_url String 请补充描述详情 kol_user_type Integer 原生达人用户类型 live_creative_type Integer 请补充描述详情 live_track_url String 请补充描述详情 new_expose_tag NewExposeTagSnake[] 广告标签 2 期 text String 广告标签text url String 广告标签url outer_loop_native Integer 是否开启原生 photo_id String 视频 id splash_image_tokens String[] 开屏图片 token splash_photo_ids String[] 开屏视频 id unit_id Long 请补充描述详情 dpa_template_id Long DPA模板id kol_user_id Long 达人id recommendation String plc描述语 impression_url String 第三方开始播放监测链接 unit_id Long 广告组 ID advertiser_id Long 账户id material_intelligent_optimize Integer 素材智能优化开关 data BatchUpdateData 批量更新自定义创意返回id update_creative_ids Long[] 更新创意ID集合 add_creative_ids Long[] 创建创意ID集合 code Integer 返回码 message String 返回信息
```
