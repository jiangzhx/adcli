---
title: 查询自定义创意
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2582&menuId=3305
doc_id: kuaishou_2582
source_id: kuaishou_2582
---
# 查询自定义创意

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2582 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-08-12T13:12:33.288Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/creative/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| campaign_id | Long | 是 |  | 广告计划 ID | 过滤筛选条件，若不传或传空则视为无限制条件 |
| creative_id | Long |  |  | 广告创意 ID | 过滤筛选条件，若不传或传空则视为无限制条件 |
| creative_ids | String[] |  |  | 广告创意 ID 集 | 不超过 100 个 |
| creative_name | String |  |  | 广告创意名称 | 过滤筛选条件，支持模糊搜索 精确查询 |
| end_date | String |  |  | 结束时间 | 与 start_date 同时传或同时不传；过滤筛选条件，格式为"yyyy-MM-dd"，参数值对应 update_time 信息 |
| page | Integer |  |  | 请求的页码数 | 默认为 1 |
| page_size | Integer |  |  | 请求的每页行数 | 默认为 20 |
| put_status_list | String[] |  |  | 创意投放状态 | 1：投放；2：暂停；3：删除。备注：传了该参数会覆盖status参数筛选，因为二者是相同筛选项 |
| start_date | String |  |  | 开始时间 | 与 end_date 同时传或同时不传；过滤筛选条件，格式为"yyyy-MM-dd"，参数值对应 update_time 信息 |
| status | Integer |  |  | 广告创意状态 | 过滤筛选条件； -2:不限,40:只包含已删除 不传：所有不包含已删除 其他值无效 |
| time_filter_type | Integer |  |  | 按创建时间或者更新时间进行筛选 | 1.如传入此字段时不传"start_date"，与"end_date"字段，则不根据时间筛选。2.传入"start_date"，与"end_date"字段，且此字段为 1 时，按照创建时间进行筛选。3.传入"start_date"，与"end_date"字段，此字段不传，或传值为 0 时，则按照更新时间进行筛选 |
| unit_id | Long |  |  | 广告组 ID | 过滤筛选条件，若不传或传空则视为无限制条件 |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (jsonc)

```
{
   "advertiser_id": 49,
   "page":1,
   "page_size":1
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdMarketCreativeViewForGateway |  |  | 返回数据 |  |
| - details | MapiCustomizedCreativeQueryRespForGateway[] |  | [{}] | 详情 |  |
| - micro_change_switch | Integer |  |  | 微改白盒化开关 | 0 - 关闭； 1 - 打开 |
| - actionbar_click_url | String |  |  | 第三方点击按钮监测链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） |  |
| - ad_photo_played_t3s_url | String |  |  | 第三方有效播放监测链接第三方有效播放监测链接 | 仅历史个别账户使用 |
| - ad_type | Integer |  |  | 广告计划类型 | 0:信息流，1:搜索 |
| - app_grade_type | Integer |  |  | 审核分级类型 | 0：默认；1：审核降级(当创意发生降级时，会限制部分流量无法投放) |
| - auto_deliver_type | Integer |  |  | 请补充描述详情 |  |
| - campaign_id | Long |  |  | 广告计划 ID |  |
| - click_track_url | String |  |  | 点击监测链接 | 若出现与后台显示不一致，以文档为准即可 |
| - cover_height | Long |  |  | 封面图高度 |  |
| - cover_url | String |  |  | 封面 URL |  |
| - cover_width | Long |  |  | 封面图宽度 |  |
| - create_time | String |  |  | 创建时间 | 格式样例："2019-06-11 15:17:25"格式样例："2019-06-11 15:17:25" |
| - creative_category | Integer |  |  | 创意分类 |  |
| - creative_id | Long |  |  | 广告创意 ID |  |
| - creative_material_type | Integer |  |  | 素材类型 | 0：历史创意未作区分 1：竖版视频 2：横版视频 3：后贴片单图图片创意（历史类型，已下线） 11：开屏视频 12：开屏图片 |
| - creative_name | String |  |  | 广告创意名称 |  |
| - creative_tag | String[] |  |  | 创意标签 |  |
| - display_info | AdDspDisplayInfoSnake |  |  | 广告展示信息 |  |
| - action_bar_text | String |  |  | 行动号召按钮文案 |  |
| - description | String |  |  | 广告语 |  |
| - dpa_style_types | String[] |  |  | 动态商品卡样式 | 14001-区域服务卡 |
| - dsp_version | Integer |  |  | 请补充描述详情 |  |
| - expose_tag | String |  |  | 广告标签 |  |
| - high_light_flash | Integer |  |  | 高光创意状态 | 0：关闭 1：开启 |
| - image_token | String |  |  | 视频封面 token | 若创意使用系统自动生成的首帧图片作为封面，该 token 无法复用 |
| - image_tokens | String[] |  |  | 单图创意 image_token |  |
| - impression_url | String |  |  | 第三方开始播放监测链接 | 若出现与后台显示不一致，以文档为准即可 |
| - kol_user_type | Integer |  |  | 原生达人用户类型 | 2服务号原生，3聚星达人原生, 不开启原生时此项为0 |
| - live_creative_type | Integer |  |  | 粉丝直播推广创意类型 | 3：直投直播；4：作品引流 |
| - live_track_url | String |  |  | 点击监测链接 | 计划 campaignType=16 粉丝直播推广时填写 |
| - material_url | String[] |  |  | 单图创意 url |  |
| - merchant_library_id | Long |  |  | 请补充描述详情 |  |
| - merchant_product_id | String |  |  | 请补充描述详情 |  |
| - new_expose_tag | NewExposeTagSnake[] |  |  | 广告标签 2 期 | 广告标签 |
| - text | String |  |  | 广告标签text |  |
| - url | String |  |  | 广告标签url |  |
| - outer_loop_native | Integer |  |  | 是否开启原生 | 0关闭，1开启，不填默认为0 |
| - overlay_bg_image_token | String |  |  | 动态词包原始封面图片 token |  |
| - overlay_bg_url | String |  |  | 动态词包原始封面图片 URL |  |
| - overlay_type | String |  |  | 贴纸样式类型 |  |
| - photo_id | String |  |  | 视频作品 ID |  |
| - pic_id | String |  |  | 图片库图片 |  |
| - put_status | Integer |  |  | 投放状态（操作结果） | 1：投放中；2：暂停 3：删除 |
| - reject_video_snapshot | String[] |  |  | 审核拒绝图片 | list 里面可以包含多个数据 |
| - review_detail | String |  |  | 审核拒绝理由 |  |
| - short_slogan | String |  |  | 便利贴创意短广告语 |  |
| - splash_photos | MapiSplashPhotosInfoSnake[] |  |  | 开屏视频信息 | creative_material_type 为 11 时 |
| - height | Integer |  |  | 视频宽度 |  |
| - photo_id | String |  |  | 视频ID |  |
| - width | Integer |  |  | 视频高度 |  |
| - photo_md5 | String |  | - | 视频的md5 | - |
| - splash_pictures | SplashPicturesParamSnake[] |  |  | 开屏图片 | creative_material_type 为 12 时 |
| - cover_id | Long |  |  | 封面ID |  |
| - cover_url | String |  |  | 封面URL |  |
| - height | Integer |  |  | 图片高度 |  |
| - ky_photo_id | Long |  |  | 请补充描述详情 |  |
| - width | Integer |  |  | 图片宽度 |  |
| - status | Integer |  |  | 广告创意状态（优先先看这个状态,计算结果） | -1：不限，1：计划已暂停，3：计划超预算，6：余额不足，11：组审核中，12：组审核未通过，14：已结束，15：组已暂停，17：组超预算，19：未达投放时间，22:不在投放时段，40：已删除，41：审核中，42：审核未通过，46：已暂停，52：投放中，53：作品异常，54：视频审核通过可投放滑滑场景，55：部分素材审核失败 |
| - sticker_title | String |  |  | 封面广告语标题 |  |
| - unit_id | Long |  |  | 广告组 ID |  |
| - update_time | String |  |  | 最后修改时间 | 格式样例："2019-06-11 15:17:25" |
| - photo_md5 | String |  | - | 视频的md5 | - |
| - dpa_template_id | Long |  | 1 | DPA模板 id |  |
| - recommendation | String |  |  | plc自定义文案 |  |
| - kol_user_id | Long |  |  | 原生投放目标达人ID | 服务于原生a投b功能，返回用户创建创意时传递的kol_user_id数值，若创建创意时未传递该数值，返回结果为0 |
| - material_intelligent_optimize | Integer |  | 1 | 素材智能优化开关 | 0：关闭 1：开启 |
| - creative_mode | Integer |  |  | 创意生成模式 | 0：默认-普通模式 1：AIGC生成 |
| - open_account_native | Integer |  |  | 是否为原生扩量 1-是 0-否 | 0：否 1：是 |
| - total_count | Long |  |  | 创意总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 原始内容

```
查询自定义创意 /rest/openapi/gw/dsp/creative/list { "advertiser_id": 49, "page":1, "page_size":1 } campaign_id Long 广告计划 ID creative_id Long 广告创意 ID creative_ids String[] 广告创意 ID 集 creative_name String 广告创意名称 end_date String 结束时间 page Integer 请求的页码数 page_size Integer 请求的每页行数 put_status_list String[] 创意投放状态 start_date String 开始时间 status Integer 广告创意状态 time_filter_type Integer 按创建时间或者更新时间进行筛选 unit_id Long 广告组 ID advertiser_id Long 广告主 ID data AdMarketCreativeViewForGateway 返回数据 details MapiCustomizedCreativeQueryRespForGateway[] 详情 actionbar_click_url String 第三方点击按钮监测链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） ad_photo_played_t3s_url String 第三方有效播放监测链接第三方有效播放监测链接 ad_type Integer 广告计划类型 app_grade_type Integer 审核分级类型 auto_deliver_type Integer 请补充描述详情 campaign_id Long 广告计划 ID click_track_url String 点击监测链接 cover_height Long 封面图高度 cover_url String 封面 URL cover_width Long 封面图宽度 create_time String 创建时间 creative_category Integer 创意分类 creative_id Long 广告创意 ID creative_material_type Integer 素材类型 creative_name String 广告创意名称 creative_tag String[] 创意标签 display_info AdDspDisplayInfoSnake 广告展示信息 action_bar_text String 行动号召按钮文案 description String 广告语 dpa_style_types String[] 动态商品卡样式 dsp_version Integer 请补充描述详情 expose_tag String 广告标签 high_light_flash Integer 高光创意状态 image_token String 视频封面 token image_tokens String[] 单图创意 image_token impression_url String 第三方开始播放监测链接 kol_user_type Integer 原生达人用户类型 live_creative_type Integer 粉丝直播推广创意类型 live_track_url String 点击监测链接 material_url String[] 单图创意 url merchant_library_id Long 请补充描述详情 merchant_product_id String 请补充描述详情 new_expose_tag NewExposeTagSnake[] 广告标签 2 期 text String 广告标签text url String 广告标签url outer_loop_native Integer 是否开启原生 overlay_bg_image_token String 动态词包原始封面图片 token overlay_bg_url String 动态词包原始封面图片 URL overlay_type String 贴纸样式类型 photo_id String 视频作品 ID pic_id String 图片库图片 put_status Integer 投放状态（操作结果） reject_video_snapshot String[] 审核拒绝图片 review_detail String 审核拒绝理由 short_slogan String 便利贴创意短广告语 splash_photos MapiSplashPhotosInfoSnake[] 开屏视频信息 height Integer 视频宽度 photo_id String 视频ID width Integer 视频高度 photo_md5 String 视频的md5 splash_pictures SplashPicturesParamSnake[] 开屏图片 cover_id Long 封面ID cover_url String 封面URL height Integer 图片高度 ky_photo_id Long 请补充描述详情 width Integer 图片宽度 status Integer 广告创意状态（优先先看这个状态,计算结果） sticker_title String 封面广告语标题 unit_id Long 广告组 ID update_time String 最后修改时间 photo_md5 String 视频的md5 dpa_template_id Long DPA模板 id recommendation String plc自定义文案 kol_user_id Long 原生投放目标达人ID material_intelligent_optimize Integer 素材智能优化开关 creative_mode Integer 创意生成模式 open_account_native Integer 是否为原生扩量 1-是 0-否 total_count Long 创意总数 code Integer 返回码 message String 返回信息
```
