---
title: 小铃铛创建接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2740&menuId=3473
doc_id: kuaishou_2740
source_id: kuaishou_2740
---
# 小铃铛创建接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2740 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:18:22.375Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/jingleBell/create |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | advertiser_id |  |
| app_desc | String |  |  | 应用描述 创建应用下载小铃铛android应用必填 |  |
| app_type | String |  |  | 应用类型,如 游戏类-角色扮演 创建应用下载小铃铛android应用必填 可以填以下类型： "游戏类":[ "角色扮演", "动作射击", "卡牌棋牌", "体育竞技", "经营类", "综合游戏", "休闲益智", "策略冒险", "音乐", "竞速格斗" ], "电商零售类":[ "综合", "母婴", "IT消电", "医疗", "服饰", "房产家居", "跨境", "快消", "日化", "零售类", "电商商家", "直营电商" ], "资讯类":[ "综合", "团购折扣", "生活健康", "婚恋交友", "招聘" ], "交通类":[ "汽车销售", "汽车服务", "汽车配件", "汽车周边", "汽车资讯", "出行服务" ], "金融服务类":[ "银行保险", "小额贷款", "投资理财" ], "快消类":[ "茶饮酒水", "食品", "餐饮服务" ], "美妆日化类":[ "护肤化妆", "卫浴口腔", "洗涤卫生", "奢侈品类" ], "IT消电类":[ "软件服务", "3C", "家用电器", "办公设备", "运营商" ], "房产类":[ "交易平台", "房产物业" ], "服饰类":[ "运动服饰", "休闲装", "正装", "内衣", "鞋箱包", "饰品配饰" ], "教育类":[ "海外留学", "语言培训", "高等教育", "低龄培训", "职业技能", "教育平台" ], "旅游类":[ "在线旅游", "传统旅行", "旅游局", "航空公司", "景点酒店" ], "医疗类":[ "药品保健", "医疗机构", "美容器械" ], "招商加盟类":[ "招商加盟", "餐饮美食", "汽车", "教育培训", "美容美发" ], "政府组织类":[ "公益组织", "政府机关", "民间团体", "家装建材" ], "家居建材类":[ "装修服务", "家具灯饰", "家装综合", "家纺家饰", "节能环保" ], "面向企业类":[ "工农业", "安全安保", "法律服务", "本地生活", "其他" ] |  |
| app_introduction | String |  |  | 应用介绍 创建应用下载小铃铛android应用必填 |  |
| photo_type | Integer |  |  | 应用截图版式 1横版 2竖版 创建应用下载小铃铛android应用必填 |  |
| android_monitor_url | String |  |  | 第三方点击监测链接 创建应用下载小铃铛android应用选填,如果填写必须以http或者https开头，并且带__CALLBACK__参数 |  |
| android_click_monitor_url | String |  |  | 半屏浮层点击监测链接 创建应用下载小铃铛android应用选填,如果填写必须以http或者https开头，并且带__CALLBACK__参数 |  |
| conversion_button | String |  |  | 行动号召按钮 创建应用下载小铃铛android应用必填，可用： '立即下载','立即安装','立即预约','立即游玩','免费下载','免费安装','免费预约','一键下载','一键预约' |  |
| live_user_id | Long | 是 |  | 主播ID |  |
| conversion_type | Integer | 是 |  | 小铃铛类型 5落地页 2应用下载 |  |
| conversion_image_file | File | 是 |  | 应用图标 小铃铛类型为h5落地页填写 |  |
| conversion_title | String | 是 |  | 落地页标题 或者 弹层标题 |  |
| landing_page_url | String |  |  | h5落地页链接 |  |
| ios_app_id | Long |  |  | ios应用ID |  |
| android_app_id | Long |  |  | android应用ID |  |
| main_app_id | Long |  |  | 主appId,用这个字段代表ios应用和android应用都选的品牌活动宣传图、应用名称具体用哪一个的 |  |
| ios_monitor_url | String |  |  | ios第三方点击监测链接 创建应用下载小铃铛ios应用选填,如果填写必须以http或者https开头，并且带__CALLBACK__参数 |  |
| image_file | File |  |  | 提示卡片信息-卡片配图 满足条件： 图片尺寸：120 * 120 图片格式：JPG/JPEG/PNG 图片大小：不大于200KB |  |
| title | String |  |  | 提示卡片信息-主标题 |  |
| sub_title | String |  |  | 提示卡片信息-副标题 |  |
| button | String |  |  | 提示卡片信息-按钮文案,必须在以下范围内选取： "立即查看", "立即体验", "点击参与", "了解详情", "点击咨询", "点击预约", "点击进入", "抢大红包", "领取红包", "立即下载", "立即安装", "免费下载", "免费安装", "一键下载", "立即提交" |  |
| app_photo_files | File |  |  | 应用截图 创建应用下载小铃铛android应用必填 /** 竖版校验 图片数量：至少上传3图, 最多上传5张图 图片尺寸：360 640 图片格式：JPG/PNG 图片大小：不大于300KB 横版校验 图片数量：至少上传3图, 最多上传5张图 图片尺寸：640 360 图片格式：JPG/PNG 图片大小：不大于300KB / |  |
| series_id | Long |  |  | 短剧id |  |

## 请求样例

### 示例标题 (shell)

```
curl --location --request POST 'https://star-gateway.staging.kuaishou.com/rest/openapi/gw/dsp/jingleBell/create' \
--header 'Access-Token: 6504495241c7c458f0eaebf400746116' \
--header 'trace-context: {"laneId":"STAGING.live_mapi"}' \
--header 'gate-staging-url: https://feat-haichao-test--kuaishou-frontend-dsp.jinx.staging.kuaishou.com' \
--header 'Cookie: apdid=22e3894a-9342-446e-8317-2722ded5b444eaa46fd1e6ff194de8cb193267f33bf1:1697715764:1' \
--form 'advertiser_id="900015364"' \
--form 'conversionType="2"' \
--form 'conversionTitle="弹层标题"' \
--form 'LiveUserId="2190171067"' \
--form 'appDesc="应用描述"' \
--form 'appType="游戏类-角色扮演"' \
--form 'appIntroduction="应用介绍"' \
--form 'photoType="2"' \
--form 'appPhotoFiles=@"/path/to/file"' \
--form 'appPhotoFiles=@"/path/to/file"' \
--form 'appPhotoFiles=@"/path/to/file"' \
--form 'androidAppId="2199123318800"' \
--form 'conversionButton="立即游玩"' \
--form 'imageFile=@"/path/to/file"' \
--form 'title="主标题"' \
--form 'subTitle="副标题"' \
--form 'button="按钮文案"'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 错误信息 |  |
| data | JingleBellCopyViewSnake |  |  | 创建的小铃铛id |  |
| - jingle_bell_id | String |  |  | 小铃铛id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "jingle_bell_id": "905248030812575"
    },
    "message": "OK",
    "request_id": "ELiAgICwxJiOrAEYrwog85WOr8ExKNLojkM="
}
```
