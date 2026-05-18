---
title: 修改程序化创意
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2580&menuId=3303
doc_id: kuaishou_2580
source_id: kuaishou_2580
---
# 修改程序化创意

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2580 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-08-12T13:13:48.956Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/advanced_creative/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| micro_change_switch | Integer |  |  | 微改白盒化开关 | 0 - 关闭；1 - 打开 |
| advertiser_id | Long | 是 |  | 广告主id |  |
| action_bar | String |  |  | 行动号召按钮 |  |
| actionbar_click_url | String |  |  | 第三方 ActionBar 点击监控链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） | 部分客户使用 actionbar_click_url 不为空时，click_url 必填，不能超过 1024 字符 |
| ad_photo_played_t3s_url | String |  |  | 第三方有效播放监测链接 | 白名单功能，且当广告组 scene_id 为 27（开屏） 时不支持该检测链接；与 impression_url 不可同时使用 |
| captions | String[] |  |  | 作品广告语 | 每个不超过 30 个字符，英文字符两个算一个字符，最多可传 3 个 |
| click_url | String |  |  | 第三方点击检测链接 | 不能超过 1024 字符 ocpx_action_type 是 180 并且应用没有接入 sdk，监测链接必填； 计划 type 是 2（推广应用安装），ocpx_action_type 是注册（396）、付费（190）、完件（384）、授信（383），并且没有接入 sdk，监测链接必填 |
| cover_slogans | String[] |  |  | 封面广告语 | 0-14 字符，最多选择 6 个（每个中文和英文字符都算一个字符）；当广告组的unit_type = 10 时，不支持该字段 |
| creative_category | Integer |  |  | 创意分类 | 由创意分类查询接口获得； 必须是叶子结点；与创意标签同时传或同时不传 |
| creative_tag | String[] |  |  | 创意标签 | 与创意分类参数，要么都传，要么都不传；且单个创意的创意标签最多 20 个；单个创意标签不能为空且不能超过 10 字符 |
| new_expose_tag | NewExposeTagSnake[] |  |  | 广告标签 2 期 | 按照相关格式传递两个推荐理由 举例{“text”:"工厂直发"},{"text":"限时专享"} |
| - text | String | 是 |  | 广告标签text |  |
| - url | String | 是 |  | 广告标签url |  |
| package_name | String |  |  | 程序化创意名称 | 1-100 字符 |
| photo_list | MapiAdvCreativePhotoBOSnake[] |  |  | 素材列表 | 新创建程序化创意请使用此参数，最多支持 10 组素材(传递后将忽略 horizontal_photo_ids,vertical_photo_ids,cover_image_tokens，7.15 日后老字段下线)；当广告组的unit_type = 10 时，最多支持传入15个素材 |
| - cover_image_token | String |  |  | 封面图片 token | 通过上传图片接口获得，不传值则直接使用视频的首帧作为封面图片，自定义封面的图片宽高要与视频宽高一致，使用智能抽帧时不需要传递。 |
| - cover_image_url | String |  |  | 请补充描述详情 |  |
| - creative_material_type | Integer | 是 |  | 素材类型 | 1：竖版视频 2：横版视频 |
| - photo_id | Long | 是 |  | 视频 ID |  |
| pic_list | String[] |  |  | 联盟图片（横版/竖版） | 需要传入image_token列表，image_token通过上传图片接口获取 |
| sticker_styles | String[] |  |  | 封面贴纸 | 如果使用封面贴纸 sticker_Styles 和 cover_slogans 必须同时传值，最多选择 6 个；当广告组的unit_type = 10 时，不支持该字段 |
| unit_id | Long | 是 |  | 广告组 ID | 一个组下只能有一个程序化创意 |
| material_intelligent_optimize | Integer |  |  | 素材智能优化开关 | 0-关闭，1-开启，不传默认关闭。仅白名单用户可以使用。当广告组的unit_type = 10 时，不支持该字段 |
| recommendation | String |  |  | 原生plc广告语 | 开启原生场景下可用 |
| impression_url | String |  |  | 曝光 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdvancedCreativeEditView |  |  | 创编计划、广告组、创意返回id参数 |  |
| - unit_id | Long |  | 123455676 | 广告组 ID |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 原始内容

```
修改程序化创意 /rest/openapi/gw/dsp/advanced_creative/update advertiser_id Long 广告主id action_bar String 行动号召按钮 actionbar_click_url String 第三方 ActionBar 点击监控链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） ad_photo_played_t3s_url String 第三方有效播放监测链接 captions String[] 作品广告语 click_url String 第三方点击检测链接 cover_slogans String[] 封面广告语 creative_category Integer 创意分类 creative_tag String[] 创意标签 new_expose_tag NewExposeTagSnake[] 广告标签 2 期 text String 广告标签text url String 广告标签url package_name String 程序化创意名称 photo_list MapiAdvCreativePhotoBOSnake[] 素材列表 cover_image_token String 封面图片 token cover_image_url String 请补充描述详情 creative_material_type Integer 素材类型 photo_id Long 视频 ID pic_list String[] 联盟图片（横版/竖版） sticker_styles String[] 封面贴纸 unit_id Long 广告组 ID material_intelligent_optimize Integer 素材智能优化开关 recommendation String 原生plc广告语 impression_url String 曝光 data AdvancedCreativeEditView 创编计划、广告组、创意返回id参数 unit_id Long 广告组 ID code Integer 返回码 message String 返回信息
```
