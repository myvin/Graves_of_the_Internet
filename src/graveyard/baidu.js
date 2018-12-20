const graves = [
  {
    name: '百度空间',
    link: 'https://zh.wikipedia.org/wiki/%E7%99%BE%E5%BA%A6%E7%A9%BA%E9%97%B4',
    startAt: '2006.7',
    endAt: '2015.4',
    description: '百度空间是百度公司推出的一项个人博客空间服务。其主要功能有博客、网络相册、网络交友等。现已被百度关闭并迁移至百度云。'
  },
  {
    name: 'baidu.jp 搜索业务',
    link: 'https://zh.wikipedia.org/wiki/%E7%99%BE%E5%BA%A6%E6%97%A5%E6%9C%AC',
    startAt: '2007.3',
    endAt: '2015.3',
    description: '百度日本在2006年12月成立，2007年3月推出本地化的搜索服务“Baidu.jp”。2008年8月1日，雅虎日本负责所有的搜索产品、主管搜索业务的副总裁井上俊一宣布跳槽百度，随后百度宣布任命其担任百度日本总裁。2015年3月，百度日本正式停止在日本的搜索业务。'
  },
  {
    name: '百度有啊',
    link: 'https://zh.wikipedia.org/wiki/%E7%99%BE%E5%BA%A6%E6%9C%89%E5%95%8A',
    startAt: '2008.10.18',
    endAt: '2011.3.31',
    description: '百度有啊是百度创办的C2C电子商务购物网站，主要以免费为主打，对卖家提供的免费装修、免费店铺统计以及个性定制域名等服务。2011年3月31日，百度有啊发布业务调整公告，宣布将在一个月之内关闭百度有啊，并将相关业务迁移到百度两家电子商务合作伙伴：乐酷天商城和耀点100商城。'
  },
  {
    name: '乐酷天',
    link: 'https://www.google.com/search?q=%E4%B9%90%E9%85%B7%E5%A4%A9',
    startAt: '2010.6.9',
    endAt: '2012.4.20',
    description: '2010年6月9日，百度与日本电子商务巨头乐天的合资公司宣布，启用“乐酷天”作为网上商城的品牌名称，正式开始招商。2010年10月19日，“乐酷天”正式上线，同时开放的还有乐酷天的拼音域名。2012年4月20日，乐酷天宣布关闭。'
  },
  {
    name: '百度说吧',
    link: 'https://zh.wikipedia.org/wiki/%E7%99%BE%E5%BA%A6%E8%AF%B4%E5%90%A7',
    startAt: '2010.9',
    endAt: '2011.8.22',
    description: '百度说吧是百度2010年9月初推出的提供微博客服务的类Twitter网站（但百度社会化网络事业部总经理麦田表示：“百度说吧不是微博，不是Twitter。”），已经于2011年8月22日关闭。'
  },
  {
    name: '百伯',
    link: 'https://www.google.com/search?q=%E7%99%BE%E4%BC%AF',
    startAt: '2011.1',
    endAt: '2013.4',
    description: '百伯成立于2011年1月，是百度旗下独立运营子公司。百伯原名为百度人才，2011年9月22日正式更名为百伯。2013年4月，项目组遭裁撤。'
  },
  {
    name: '百度相册',
    link: 'https://www.google.com/search?q=%E7%99%BE%E5%BA%A6%E7%9B%B8%E5%86%8C',
    startAt: '2012.5.8',
    endAt: '2016.5.23',
    description: '2012年5月8日正式上线。用户可以通过百度相册来便利地存储、浏览、分享、管理自己的照片，用照片记录和分享生活中的美好。2016年5月23日停止上传，已有照片迁入百度云。'
  },
  {
    name: '百度云 OS',
    link: 'https://zh.wikipedia.org/wiki/%E7%99%BE%E5%BA%A6%E9%9B%B2OS',
    startAt: '2011.9',
    endAt: '2015.3',
    description: '百度云OS，（又称：百度云ROM）原称百度·易平台、百度·易（英语：Baidu Yi），由中国百度所研发的移动操作系统，根源自谷歌Android操作系统。在2011年首次推出。虽然使用Linux内核，但未依照LGPL发布源代码。2015年三月无限期停止更新，官方论坛也被关闭。'
  },
  {
    name: '百度彩票',
    link: 'https://www.google.com/search?q=%E7%99%BE%E5%BA%A6%E5%BD%A9%E7%A5%A8',
    startAt: '2010.2',
    endAt: '2017.7.31',
    description: '线上彩票业务，2017年7月3日晚间，百度旗下百度彩票发布公告宣布关闭，其PC及无线端于2017年7月31日停止信息更新。'
  },
  {
    name: '百度直达号',
    link: 'https://www.google.com/search?q=%E7%99%BE%E5%BA%A6%E7%9B%B4%E8%BE%BE%E5%8F%B7',
    startAt: '2014.9',
    endAt: '2016.10',
    description: '百度直达号是商家在百度移动平台的官方服务账号 。基于移动搜索、@账号、地图、个性化推荐等多种方式，让亿万客户随时随地直达商家服务 。'
  },
  {
    name: '百度游戏',
    link: 'https://www.google.com/search?q=%E7%99%BE%E5%BA%A6%E6%B8%B8%E6%88%8F',
    startAt: '2014.4',
    endAt: '2017.1',
    description: '百度游戏12亿元出售并更名为多酷游戏。'
  },
  {
    name: '百度外卖',
    link: 'https://zh.wikipedia.org/wiki/%E9%A5%BF%E4%BA%86%E4%B9%88%E6%98%9F%E9%80%89',
    startAt: '2014.5',
    endAt: '2017.8',
    description: '百度外卖，是百度公司于2014年5月正式推出的一款O2O生活服务网站，为客户提供外卖配送服务。2017年8月，百度以5亿美元将百度外卖出售给饿了么，并在2018年10月更名为“饿了么星选”。'
  },
  {
    name: '百度医生',
    link: 'https://www.google.com/search?q=%E7%99%BE%E5%BA%A6%E5%8C%BB%E7%94%9F',
    startAt: '2015.1.8',
    endAt: '2017.4.1',
    description: '从2015年1月8日成立，到2017年2月9日裁撤，百度医疗事业部一共存在了764天。该事业部旗下的产品——“百度医生”在4月1日正式关停，平台上所有数据至此全部清空。'
  },
  {
    name: '百度未来商店',
    link: 'https://www.google.com/search?q=%E7%99%BE%E5%BA%A6%E6%9C%AA%E6%9D%A5%E5%95%86%E5%BA%97',
    startAt: '2015.3',
    endAt: '2016.6.15',
    description: '百度未来商店是由百度公司推出的智能创新产品网上商城，百度未来商店给合作厂商伙伴提供产品曝光、评测、试用、销售等多种渠道市场，给优质产品提供资金流量、技术支持、销售支持、推广支持等全方位扶持。'
  },
  {
    name: '百度 mall',
    link: 'https://www.google.com/search?q=%E7%99%BE%E5%BA%A6%E6%9C%AA%E6%9D%A5%E5%95%86%E5%BA%97',
    startAt: '2015.11',
    endAt: '2017.4',
    description: '百度MALL是百度旗下定位中高端的品质电商，定向邀请1000家国内外中高端知名品牌入驻，且只和品牌官方直接合作。2017年4月，百度MALL网站悄无声息地关闭。'
  }
]

export default graves
