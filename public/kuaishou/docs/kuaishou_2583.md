---
title: 查询程序化创意
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2583&menuId=3306
doc_id: kuaishou_2583
source_id: kuaishou_2583
---
# 查询程序化创意

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2583 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-08-12T13:13:56.659Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/advanced_creative/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| end_date | String |  |  | 结束时期 | 格式如 yyyy-MM-dd |
| package_name | String |  |  | 程序化创意包名称 | 非空，0 到 100 字符 |
| page | Integer |  |  | 页数 | 默认为 1 |
| page_size | Integer |  |  | 每页行数 | 默认为 20 |
| put_status_list | String[] |  |  | 创意投放状态 | 1：投放；2：暂停；3：删除。备注：传了该参数会覆盖status参数筛选，因为二者是相同筛选项 |
| start_date | String |  |  | 起始日期 | 格式如 yyyy-MM-dd |
| status | Integer |  |  | 程序化创意状态 | -2：所有（包含已删除）、40：只包含已删除 不传：所有（不包含已删除） |
| time_filter_type | Integer |  |  | 按创建时间或者更新时间进行筛选 | 1.如传入此字段时不传"start_date"，与"end_date"字段，则不根据时间筛选。2.传入"start_date"，与"end_date"字段，且此字段为 1 时，按照创建时间进行筛选。3.传入"start_date"，与"end_date"字段，此字段不传，或传值为 0 时，则按照更新时间进行筛选 |
| unit_ids | String[] |  |  | 广告组 ID 集 | 不超过一百个 |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListMapiAdvancedCreativeQueryRespSnake |  |  | 返回数据 |  |
| - details | MapiAdvancedCreativeQueryRespSnake[] |  |  | 详情 |  |
| - micro_change_switch | Integer |  |  | 微改白盒化开关 | 0 - 关闭；1 - 打开 |
| - action_bar | String |  |  | 行动号召按钮 |  |
| - actionbar_click_url | String |  |  | 第三方 ActionBar 点击监控链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） |  |
| - ad_photo_played_t3s_url | String |  |  | 第三方有效播放监测链接 |  |
| - app_grade_type | Integer |  |  | 审核分级类型 | 0：默认；1：审核降级(当创意发生降级时，会限制部分流量无法投放) |
| - captions | String[] |  |  | 作品广告语 | 只能是 1-3 个 |
| - click_url | String |  |  | 第三方点击检测链接 |  |
| - cover_image_tokens | String[] |  |  | 封面 image_token | 只能是 1-4 个 |
| - cover_image_urls | String[] |  |  | 封面链接地址 |  |
| - cover_slogans | String[] |  |  | 封面广告语 |  |
| - create_time | String |  |  | 创建时间 | 格式样例："2019-06-11 15:17:25" |
| - creative_category | Integer |  |  | 创意分类 |  |
| - creative_tag | String[] |  |  | 创意标签 |  |
| - creatives | MapiAdvancedCombineCreativeInfoSnake[] |  |  | 创建后生成的程序化创意 ID |  |
| - creative_id | Long |  |  | 创意 ID |  |
| - unit_id | Long |  |  | 广告组 ID |  |
| - horizontal_photo_ids | String[] |  |  | 横版视频 id list | 横版视频和竖版视频加起来只能 1-5 个 |
| - new_expose_tag | NewExposeTagSnake[] |  |  | 广告标签 2 期 | 举例：{“text”:"工厂直发"},{"text":"限时专享"} |
| - text | String |  |  | 广告标签text |  |
| - url | String |  |  | 广告标签url |  |
| - package_name | String |  |  | 程序化创意包名称，1-100 字符， |  |
| - photo_list | MapiAdvCreativePhotoBOSnake[] |  |  | 素材列表 |  |
| - cover_image_token | String |  |  | 封面图片 token | 通过上传图片接口获得，不传值则直接使用视频的首帧作为封面图片，自定义封面的图片宽高要与视频宽高一致，使用智能抽帧时不需要传递。 |
| - cover_image_url | String |  |  | 请补充描述详情 |  |
| - creative_material_type | Integer |  |  | 素材类型 | 1：竖版视频 2：横版视频 |
| - photo_id | Long |  |  | 视频 ID |  |
| - pic_ids | String[] |  |  | 图片库图片ID |  |
| - pic_list | String[] |  |  | 联盟图片（横版/竖版） | 联盟图片imageToken |
| - pic_url_list | String[] |  |  | 联盟图片url（横版/竖版） | 联盟图片url |
| - put_status | Integer |  |  | 程序化创意操作状态 | 1：投放，2：暂停，3：删除 |
| - sticker_styles | String[] |  |  | 封面贴纸 |  |
| - unit_id | Long |  |  | 广告组 ID | 一个组下只能有一个程序化创意 |
| - update_time | String |  |  | 更新时间 | 格式样例："2019-06-11 15:17:25" |
| - vertical_photo_ids | String[] |  |  | 竖版视频 id list |  |
| - view_status | Integer |  |  | 程序化创意状态 | -1：不限，1：计划已暂停，3：计划超预算，5：计划已删除，6：余额不足，11：组审核中，12：组审核未通过，14：已结束，15：组已暂停，17：组超预算，19：未达投放时间，22：不在投放时段，40：创意已删除，41：审核中，42：审核未通过，46：已暂停，52：投放中，53：作品异常，55：部分素材审核通过，56：部分审核失败，62：待送审 |
| - view_status_reason | String |  |  | 程序化创意状态描述 |  |
| - material_intelligent_optimize | Integer |  | 1 | 素材智能优化开关 | 0：关闭 1：开启 |
| - outer_loop_native | Integer |  |  | 是否开启原生 | 0：关闭 1：开启 |
| - kol_user_type | Integer |  |  | 开启原生，达人类型 | 2服务号原生，3聚星达人原生, 不开启原生时此项为0 |
| - kol_user_id | Long |  |  | 开启原生，达人id | 服务于原生a投b功能，返回用户创建创意时传递的kol_user_id数值，若创建创意时未传递该数值，返回结果为0 |
| - recommendation | String |  |  | 开启原生，plc描述语 |  |
| - open_account_native | Integer |  |  | 是否为原生扩量 1-是 0-否 | 0：否 1：是 |
| - impression_url | String |  |  | 第三方曝光检测链接 |  |
| - total_count | Long |  |  | 总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "message": "OK",
  "data": {
    "total_count": 0,
    "details": [
      {
        "captions": [
          "无参数1133"
        ],
        "creatives": [
          {
            "unit_id": 3048974,
            "creative_id": 80626044
          }
        ],
        "unit_id": 3048974,
        "horizontal_photo_ids": null,
        "vertical_photo_ids": [
          "5238249354922787996"
        ],
        "cover_image_tokens": [
          "market8a364f5e50f24657a63dba9dc8e7d93d.jpg"
        ],
        "photo_list": null,
        "cover_image_urls": [
          "http://static.yximgs.com/udata/pkg/market8a364f5e50f24657a63dba9dc8e7d93d.jpg"
        ],
        "sticker_styles": null,
        "cover_slogans": null,
        "action_bar": "立即投保",
        "create_time": "2020-12-17 19:02:18",
        "update_time": "2020-12-17 19:02:18",
        "click_url": "https://open.snssdk.com/ug/ad/display/clicks?ad_platform=kuaishou&app_platform=android&surl_token=h5qx&idfa_md5=__IDFA2__&imei_md5=__IMEI2__&ip=__IP__&timestamp=__TS__&adid=__AID__&creativeid=__CID__&campaignid=__DID__&androidid_md5=__ANDROIDID2__&callback=__CALLBACK__&ua=__UA__&oaid=__OAID__&csite=__CSITE__&pass_through=0-0-0-0-0-6794635432647724046",
        "actionbar_click_url": "",
        "package_name": "测试程序化创意过滤创建",
        "put_status": 1,
        "view_status": 41,
        "view_status_reason": "审核中",
        "creative_category": 0,
        "creative_tag": null,
        "new_expose_tag": null
      }
    ]
  },
  "request_id": "a9b3485ccbb4413fbddc84e8fc525d30"
}
```

## 原始内容

```
查询程序化创意 /rest/openapi/gw/dsp/advanced_creative/list { "code": 0, "message": "OK", "data": { "total_count": 0, "details": [ { "captions": [ "无参数1133" ], "creatives": [ { "unit_id": 3048974, "creative_id": 80626044 } ], "unit_id": 3048974, "horizontal_photo_ids": null, "vertical_photo_ids": [ "5238249354922787996" ], "cover_image_tokens": [ "market8a364f5e50f24657a63dba9dc8e7d93d.jpg" ], "photo_list": null, "cover_image_urls": [ "http://static.yximgs.com/udata/pkg/market8a364f5e50f24657a63dba9dc8e7d93d.jpg" ], "sticker_styles": null, "cover_slogans": null, "action_bar": "立即投保", "create_time": "2020-12-17 19:02:18", "update_time": "2020-12-17 19:02:18", "click_url": "https://open.snssdk.com/ug/ad/display/clicks?ad_platform=kuaishou&app_platform=android&surl_token=h5qx&idfa_md5=__IDFA2__&imei_md5=__IMEI2__&ip=__IP__&timestamp=__TS__&adid=__AID__&creativeid=__CID__&campaignid=__DID__&androidid_md5=__ANDROIDID2__&callback=__CALLBACK__&ua=__UA__&oaid=__OAID__&csite=__CSITE__&pass_through=0-0-0-0-0-6794635432647724046", "actionbar_click_url": "", "package_name": "测试程序化创意过滤创建", "put_status": 1, "view_status": 41, "view_status_reason": "审核中", "creative_category": 0, "creative_tag": null, "new_expose_tag": null } ] }, "request_id": "a9b3485ccbb4413fbddc84e8fc525d30" } end_date String 结束时期 package_name String 程序化创意包名称 page Integer 页数 page_size Integer 每页行数 put_status_list String[] 创意投放状态 start_date String 起始日期 status Integer 程序化创意状态 time_filter_type Integer 按创建时间或者更新时间进行筛选 unit_ids String[] 广告组 ID 集 advertiser_id Long 广告主 ID data PageDataListMapiAdvancedCreativeQueryRespSnake 返回数据 details MapiAdvancedCreativeQueryRespSnake[] 详情 action_bar String 行动号召按钮 actionbar_click_url String 第三方 ActionBar 点击监控链接，命中有效触点白名单表示有效触点监测链接（限：快手主站/极速版场景） ad_photo_played_t3s_url String 第三方有效播放监测链接 app_grade_type Integer 审核分级类型 captions String[] 作品广告语 click_url String 第三方点击检测链接 cover_image_tokens String[] 封面 image_token cover_image_urls String[] 封面链接地址 cover_slogans String[] 封面广告语 create_time String 创建时间 creative_category Integer 创意分类 creative_tag String[] 创意标签 creatives MapiAdvancedCombineCreativeInfoSnake[] 创建后生成的程序化创意 ID creative_id Long 创意 ID unit_id Long 广告组 ID horizontal_photo_ids String[] 横版视频 id list new_expose_tag NewExposeTagSnake[] 广告标签 2 期 text String 广告标签text url String 广告标签url package_name String 程序化创意包名称，1-100 字符， photo_list MapiAdvCreativePhotoBOSnake[] 素材列表 cover_image_token String 封面图片 token cover_image_url String 请补充描述详情 creative_material_type Integer 素材类型 photo_id Long 视频 ID pic_ids String[] 图片库图片ID pic_list String[] 联盟图片（横版/竖版） pic_url_list String[] 联盟图片url（横版/竖版） put_status Integer 程序化创意操作状态 sticker_styles String[] 封面贴纸 unit_id Long 广告组 ID update_time String 更新时间 vertical_photo_ids String[] 竖版视频 id list view_status Integer 程序化创意状态 view_status_reason String 程序化创意状态描述 material_intelligent_optimize Integer 素材智能优化开关 outer_loop_native Integer 是否开启原生 kol_user_type Integer 开启原生，达人类型 kol_user_id Long 开启原生，达人id recommendation String 开启原生，plc描述语 open_account_native Integer 是否为原生扩量 1-是 0-否 impression_url String 第三方曝光检测链接 total_count Long 总数 code Integer 返回码 message String 返回信息
```
