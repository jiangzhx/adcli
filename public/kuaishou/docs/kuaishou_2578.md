---
title: 创建程序化创意
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2578&menuId=3301
doc_id: kuaishou_2578
source_id: kuaishou_2578
---
# 创建程序化创意

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2578 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2026-03-30T13:09:45.772Z |

## 概述

2026年3月23日起，通过mapi创建广告时，对应的视频会在快手号个人主页默认为单次可见

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/advanced_creative/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| micro_change_switch | Integer |  |  | 微改白盒化开关 | 0 - 关闭；1 - 打开 |
| action_bar | String | 是 |  | 行动号召按钮 |  |
| actionbar_click_url | String |  |  | 第三方 ActionBar 点击监控链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） | 部分客户使用 actionbar_click_url 不为空时，click_url 必填，不能超过 1024 字符 |
| ad_photo_played_t3s_url | String |  |  | 第三方有效播放监测链接 | 白名单功能，且当广告组 scene_id 为 27（开屏） 时不支持该检测链接；与 impression_url 不可同时使用 |
| captions | String[] | 是 |  | 作品广告语 | 每个不超过 30 个字符，英文字符两个算一个字符，最多可传 3 个 |
| click_url | String |  |  | 第三方点击检测链接 | 不能超过 1024 字符 ocpx_action_type 是 180 并且应用没有接入 sdk，监测链接必填； 计划 type 是 2（推广应用安装），ocpx_action_type 是注册（396）、付费（190）、完件（384）、授信（383），并且没有接入 sdk，监测链接必填 |
| cover_slogans | String[] |  |  | 封面广告语 | （仅搜索广告支持） 0-14 字符，最多选择 6 个（每个中文和英文字符都算一个字符）； 当广告组的unit_type = 10 时，不支持该字段 |
| creative_category | Integer |  |  | 创意分类（金融，教育，游戏，小说，电商 如上行业必填） | 由创意分类查询接口 获得；必须是叶子结点；与创意标签同时传或同时不传 可通过工具-功能名单-获取创意分类标签白名单客户接口获取是否必填 |
| creative_tag | String[] |  |  | 创意标签（选创意分类 必填） | 与创意分类参数，要么都传，要么都不传；且单个创意的创意标签最多 10 个；单个创意标签不能为空且不能超过 10 字符 |
| new_expose_tag | NewExposeTagSnake[] |  |  | 广告标签 2 期 | 按照相关格式传递两个推荐理由 举例{“text”:"工厂直发"},{"text":"限时专享"} |
| - text | String | 是 |  | 广告标签text |  |
| - url | String | 是 |  | 广告标签url |  |
| package_name | String | 是 |  | 程序化创意名称 | 不能为空，1-100 字符 |
| photo_list | MapiAdvCreativePhotoBOSnake[] |  |  | 素材列表 | 新创建程序化创意请使用此参数，最多支持 10 组素材(传递后将忽略 horizontal_photo_ids,vertical_photo_ids,cover_image_tokens，7.15 日后老字段下线)；当广告组的unit_type = 10 时，最多支持传入15个素材，素材不能重复传 |
| - cover_image_token | String |  |  | 封面图片 token | 通过上传图片接口获得，不传值则直接使用视频的首帧作为封面图片，自定义封面的图片宽高要与视频宽高一致，使用智能抽帧时不需要传递。 |
| - cover_image_url | String |  |  | 请补充描述详情 |  |
| - creative_material_type | Integer | 是 |  | 素材类型 | 1：竖版视频 2：横版视频 |
| - photo_id | Long | 是 |  | 视频 ID |  |
| pic_list | String[] |  |  | 联盟图片（横版/竖版） | 需要传入image_token列表，image_token通过上传图片接口获取 |
| sticker_styles | String[] |  |  | 封面贴纸 | （仅搜索广告支持）如果使用封面贴纸 sticker_Styles 和 cover_slogans 必须同时传值，最多选择 6 个；当广告组的unit_type = 10 时，不支持该字段 |
| unit_id | Long | 是 |  | 广告组 ID | 一个组下只能有一个程序化创意，广告组的 unit_type 为 7 才能创建程序化创意；广告组的 unit_type 为 10 才能创建智能创意（仅支持全自动投放） |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| material_intelligent_optimize | Integer |  |  | 素材智能优化开关 | 0-关闭，1-开启，不传默认关闭。仅白名单用户支持使用。当广告组的unit_type = 10 时，不支持该字段 |
| outer_loop_native | Integer |  |  | 是否开启原生 | 1开启、0关闭｜不填则默认为0。在投放快手信息流广告（ad_type=0或默认不填，scene_id包含1优选广告位、6上下滑大屏广告、7双列信息流广告）时，【campaignType=2提升应用安装、5收集销售线索、7提升应用活跃、19推广快手小程序、30快手号-短剧推广】可开启原生投放。注：在投放快手信息流广告的场景下，针对「升级白名单账户」支持“不填则默认为1，此时kol_user_id为广告主关联的授权生效快手号id 且 kol_user_type为对应有效授权类型”、“outer_loop_native=1”；针对「“账户二级行业=付费短剧”且“营销目标=快手号推广-短剧推广”的白名单账户」支持“不填则默认为1”、“outer_loop_native=1”；“outer_loop_native=0”时报错。 |
| kol_user_id | Long |  |  | 开启原生，达人id | 开启原生场景下必传，即当outer_loop_native=1时此项必填。计划 campaignType=30 短剧推广时，值为短剧作者ID |
| kol_user_type | Integer |  |  | 开启原生，达人类型 | 1普通快手号原生，2服务号原生，3聚星达人（需加白使用），当outer_loop_native=1时此项必填。 |
| recommendation | String |  |  | 开启原生，plc描述语 | 开启原生时可用 |
| impression_url | String |  |  | 曝光 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 417173,
    "unit_id": 21456613,
    "package_name": "2222",
    "action_bar": "立即下载",
    "captions": [
        "【网红爆款】国妆特证，明星同款，改善头皮环境，控油防脱",
        "【国家认证】这款生姜洗发水，明星同款，实力防脱育发，改善头皮"
    ],
    "click_url": "https://ad.e.kuaishou.com/create?__CALLBACK__",
    "creative_category": 701,
    "creative_tag": [
        "快手",
        "优惠"
    ],
    "photo_list": [
        {
            "photo_id": 520390941748682323,
            "image_token": "7b27744f637d4e06aa15d2fa830d1bb.jpg",
            "creative_material_type": 1
        }
    ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdvancedCreativeEditView |  |  | 创编计划、广告组、创意返回id参数 |  |
| - unit_id | Long |  | 123455676 | 广告组 ID |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "unit_id": 214566138
    },
    "request_id": "366df9d637ff46d8b2e9f9117d66a097"
}
```
