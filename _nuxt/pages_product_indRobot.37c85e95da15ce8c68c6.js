webpackJsonp([8],{"4Jmr":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.site-products{background:#f5f5f5}.site-products .banner .el-carousel__item img{position:absolute;left:50%;top:0;margin-left:-960px}.site-products .el-breadcrumb{margin:20px 0}.site-products .pro-type{float:left;width:270px}.site-products .pro-type .el-collapse{border:1px solid #ebeef5;text-indent:20px}.site-products .pro-type .el-collapse-item__wrap{padding:0 20px}.site-products .jm-product-list{float:right;width:915px;position:relative;left:30px}.site-products .jm-product-list .jm-product-item{float:left;width:275px;font-size:14px;margin-right:30px;text-align:center;margin-bottom:30px;padding-bottom:20px;cursor:pointer}.site-products .jm-product-list .jm-product-item .jm-product-pic{width:275px;height:275px;padding:10px;border:1px solid #dedede;background:#fff;text-align:center;overflow:hidden}.site-products .jm-product-list .jm-product-item .jm-product-pic img{max-width:100%;max-height:100%;vertical-align:middle}.site-products .jm-product-list .jm-product-item .jm-product-pic:after{content:"";height:100%;display:inline-block;vertical-align:middle}.site-products .jm-product-list .jm-product-item .jm-product-pic img{-webkit-transition:transform .3s ease;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.site-products .jm-product-list .jm-product-item .jm-product-pic:hover img{-webkit-transform:scale(1.05);transform:scale(1.05)}.site-products .jm-product-list .jm-product-item p{text-align:left;padding-left:20px;margin-top:15px;color:#6e6e6e;max-height:28px;overflow:hidden}.site-products .jm-product-list .jm-product-item p.product-name{font-size:14px;color:#343434;min-height:33px}.site-products .jm-product-list .jm-product-item p.product-name:hover{color:#31ba9e}.site-products .jm-product-list .jm-product-item p .product-label{margin-right:5px}.site-products .jm-product-list .jm-product-item p .price-count{font-size:14px;color:#31ba9e;letter-spacing:0}.site-products .page-wrap{padding:20px}.pro-type a{display:block;line-height:44px;border:1px solid #dedede;text-indent:20px;background:#fff}.pro-type a+a{border-top:0}.pro-type a.nuxt-link-active{color:#31ba9e}.hjj-indrobot{float:right;width:915px;background:#fff;position:relative;left:30px}.hjj-indrobot table{width:100%;border-collapse:collapse}.hjj-indrobot table td,.hjj-indrobot table th,.hjj-indrobot table tr{padding:15px 10px}.hjj-indrobot table.title th{background:#31ba9e;color:#fff}.hjj-indrobot table.cont{text-align:center}.hjj-indrobot table.cont a{color:#e58c00}.hjj-indrobot table.cont th{background:#eee}.hjj-indrobot table.cont span{display:inline-block}.hjj-indrobot table.cont span p{text-align:left;line-height:18px;margin-bottom:10px}',""])},"4dHQ":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("La0j"),r=a("EhKX"),o=!1;var n=function(t){o||a("xO5j")},s=a("VU/8")(i.a,r.a,!1,n,null,null);s.options.__file="pages\\product\\indRobot.vue",e.default=s.exports},EhKX:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-products"},[a("div",{staticClass:"w1190"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("产品信息")])],1)],1),a("div",{staticClass:"w1190 clearfix"},[a("div",{staticClass:"pro-type"},[a("nuxt-link",{attrs:{to:{path:"/product/softHardware"}}},[t._v("机器视觉软硬件产品")]),a("nuxt-link",{attrs:{to:{path:"/product/indRobot"}}},[t._v("工业机器人")]),a("nuxt-link",{attrs:{to:{path:"/product/indCompcuter"}}},[t._v("工业电脑")]),a("nuxt-link",{attrs:{to:{path:"/product/autoParts"}}},[t._v("自动化零配件")])],1),a("div",{staticClass:"hjj-indrobot"},[t._m(0),t._l(t.pageData,function(e){return a("table",{key:e.id,staticClass:"cont"},[a("thead",[a("th",{attrs:{width:"15%"}}),a("th",{attrs:{width:"10%"}}),a("th",{attrs:{width:"30%"}},[t._v("描述")]),a("th",{attrs:{width:"10%"}},[t._v("最大负重")]),a("th",{attrs:{width:"20%"}},[t._v(t._s(e.type))]),a("th",{attrs:{width:"15%"}},[t._v("应用")])]),a("tbody",[a("tr",[a("td",[a("img",{attrs:{src:e.picPath,alt:""}})]),a("td",[a("a",{attrs:{href:"#"}},[t._v(t._s(e.model))])]),a("td",[a("span",t._l(e.description.split(","),function(e,i){return a("p",{key:i},[t._v(t._s(e))])}))]),a("td",[t._v("\n                            "+t._s(e.bearLoad)+"\n                        ")]),a("td",[a("span",t._l(e.actionRange.split(","),function(e,i){return a("p",{key:i},[t._v(t._s(e))])}))]),a("td",[a("span",t._l(e.useSence.split(","),function(e,i){return a("p",{key:i},[a("a",{attrs:{href:"#"}},[t._v(t._s(e))])])}))])])])])})],2)]),a("div",{staticClass:"text-center page-wrap"},[t.pageData.length?a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:Number(t.accountData.length)},on:{"current-change":t.changePage}}):t._e()],1)])};i._withStripped=!0;var r={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("table",{staticClass:"title"},[e("thead",[e("th",{attrs:{width:"15%"}}),e("th",{attrs:{width:"10%"}},[this._v("型号")]),e("th",{attrs:{width:"75%"}},[this._v("产品概述及相关指标")])])])}]};e.a=r},La0j:function(t,e,a){"use strict";var i=a("xAgA"),r=a.n(i);e.a={data:function(){return{bannerData:[],accountData:r.a.data,filterData:[],pageSize:9,currentPage:1,total:""}},created:function(){},computed:{pageData:function(){return this.accountData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)}},methods:{changePage:function(t){this.currentPage=t,window.scrollTo(0,0)}}}},xAgA:function(t,e){t.exports={data:[{id:21,picPath:"http://www.shanghai-fanuc.com.cn/images/djcatalog/m-2ia_t.jpg",model:"M-2iA",description:"2012年新品机器人,拳头机器人二号,完全密封结构(IP69K)，高压喷流清洗,高速搬运、装配机器人",bearLoad:"3kg-6kg",actionRange:"M-2iA/3S 直径:800mm， 高300mm,M-2iA/3SL直径:1130mm，高400mm,M-2iA/6H/6HL直径:1130mm，高400mm",useSence:"装配,拾取及包装,物流搬运,材料加工",type:"动作范围"},{id:22,picPath:"http://www.shanghai-fanuc.com.cn/images/djcatalog/m-1ia.jpg",model:"M-1iA",description:"2009年新品机器人,拳头机器人一号 ,小型 灵活 高速",bearLoad:"0.50kg-1kg",actionRange:"直径280mm,高度100mm",useSence:"装配,拾取及包装,材料加工",type:"动作范围"},{id:23,picPath:"http://www.shanghai-fanuc.com.cn/images/djcatalog/20120712_112613_m-3ia_t.jpg",model:"M-3iA",description:"2010年新品机器人,拳头机器人三号,大型高速搬运、装配机器人",bearLoad:"6kg-12kg",actionRange:"直径1350mm,高度500mm",useSence:"装配,拾取及包装,物流搬运,材料加工",type:"动作范围"},{id:24,picPath:"http://www.shanghai-fanuc.com.cn/images/djcatalog/lr mate 200ic_t.jpg",model:"LR Mate Series",description:"LR Mate 系列,人手臂大小的万能,迷你智能机器人",bearLoad:"4kg-7kg",actionRange:"704mm-892mm",useSence:"拾取及包装,物流搬运,机床上下料,材料加工,弧焊 点焊",type:"可达半径"},{id:25,picPath:"http://www.shanghai-fanuc.com.cn/images/djcatalog/m-430ia_t.jpg",model:"M-430iA",description:"M 430iA/2F",bearLoad:"2kg",actionRange:"900mm",useSence:"物流搬运,装配,拾取及包装,码垛",type:"可达半径"}]}},xO5j:function(t,e,a){var i=a("4Jmr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("69d4c2ce",i,!1,{sourceMap:!1})}});