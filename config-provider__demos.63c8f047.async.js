"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2317],{99663:function(D,l,a){a.r(l);var s=a(48305),o=a.n(s),e=a(7657),_=a(75271),t=a(46740),d=e.Tabs.TabPane,i=function(){var M=(0,_.useState)("small"),P=o()(M,2),v=P[0],u=P[1];return(0,t.tZ)(_.Fragment,null,(0,t.tZ)(e.Radio.Group,{value:v,onChange:function(m){u(m.target.value)}},(0,t.tZ)(e.Radio.Button,{value:"small"},"Small"),(0,t.tZ)(e.Radio.Button,{value:"middle"},"Middle"),(0,t.tZ)(e.Radio.Button,{value:"large"},"Large")),(0,t.tZ)(e.Divider,null),(0,t.tZ)(e.ConfigProvider,{componentSize:v},(0,t.tZ)(e.Space,{size:[0,16],style:{width:"100%"},direction:"vertical"},(0,t.tZ)(e.Input,null),(0,t.tZ)(e.Tabs,{defaultActiveKey:"1"},(0,t.tZ)(d,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),(0,t.tZ)(d,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),(0,t.tZ)(d,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3")),(0,t.tZ)(e.Input.Search,{allowClear:!0}),(0,t.tZ)(e.Input.TextArea,{allowClear:!0}),(0,t.tZ)(e.Select,{defaultValue:"demo",options:[{value:"demo",label:"demo"}]}),(0,t.tZ)(e.DatePicker,null),(0,t.tZ)(e.DatePicker.RangePicker,null),(0,t.tZ)(e.Button,null,"Button"),(0,t.tZ)(e.Card,{title:"Card"},(0,t.tZ)(e.Table,{columns:[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"}],dataSource:[{key:"1",name:"John Brown",age:32},{key:"2",name:"Jim Green",age:42},{key:"3",name:"Joe Black",age:32}]})))))};l.default=i},84402:function(D,l,a){a.r(l);var s=a(75271),o=a(7657),e=a(16274),_=a(46740),t=function(){return(0,_.tZ)(o.ConfigProvider,{spin:{indicator:(0,_.tZ)(e.LoadingOutlined,{style:{fontSize:24},spin:!0})}},(0,_.tZ)(o.Space,{size:"middle",direction:"vertical"},(0,_.tZ)(o.Spin,null),(0,_.tZ)(o.Spin,{tip:"Loading"},(0,_.tZ)(o.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"}))))};l.default=t},9068:function(D,l,a){a.r(l);var s=a(26068),o=a.n(s),e=a(48305),_=a.n(e),t=a(7657),d=a(75271),i=a(84649),r=a(46740),M={borderRadius:t.token.borderRadius,colorPrimary:t.token.colorPrimary};l.default=function(){var P=t.Form.useForm(),v=_()(P,1),u=v[0],n=d.useState(M),m=_()(n,2),O=m[0],T=m[1];return(0,r.tZ)(t.ConfigProvider,{theme:{token:{colorPrimary:O.colorPrimary,borderRadius:O.borderRadius}}},(0,r.tZ)(t.Form,{form:u,onValuesChange:function(Z,f){var c,E=Z!=null&&Z.colorPrimary?{colorPrimary:f==null||(c=f.colorPrimary)===null||c===void 0?void 0:c.hex}:{};T(o()(o()({},f),E))},name:"theme",initialValues:M,labelCol:{span:4},wrapperCol:{span:20}},(0,r.tZ)(t.Form.Item,{valuePropName:"color",name:"colorPrimary",label:"Primary Color",required:!0},(0,r.tZ)(i.SketchPicker,null)),(0,r.tZ)(t.Form.Item,{name:"borderRadius",label:"Border Radius",required:!0},(0,r.tZ)(t.InputNumber,null)),(0,r.tZ)(t.Form.Item,{name:"submit",wrapperCol:{offset:4,span:20}},(0,r.tZ)(t.Button,{type:"primary"},"Submit"))))}},48656:function(D,l,a){a.r(l);var s=a(75271),o=a(7657),e=a(46740),_={width:200},t=function(){return(0,e.tZ)(o.Space,{direction:"vertical",style:{width:"100%"}},(0,e.tZ)("h4",null,"Select"),(0,e.tZ)(o.Select,{style:_}),(0,e.tZ)("h4",null,"TreeSelect"),(0,e.tZ)(o.TreeSelect,{style:_,treeData:[]}),(0,e.tZ)("h4",null,"Cascader"),(0,e.tZ)(o.Cascader,{style:_,options:[],showSearch:!0}),(0,e.tZ)("h4",null,"Transfer"),(0,e.tZ)(o.Transfer,null),(0,e.tZ)("h4",null,"Table"),(0,e.tZ)(o.Table,{style:{marginTop:8},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}),(0,e.tZ)("h4",null,"List"),(0,e.tZ)(o.List,null))};l.default=t},93612:function(D,l,a){a.r(l);var s=a(48305),o=a.n(s),e=a(7657),_=a(6656),t=a(26600),d=a(16483),i=a.n(d),r=a(81414),M=a.n(r),P=a(92098),v=a.n(P),u=a(75271),n=a(46740);i().locale("en"),i().extend(v());var m=e.Select.Option,O=e.DatePicker.RangePicker,T=[{title:"Name",dataIndex:"name",filters:[{text:"filter1",value:"filter1"}]},{title:"Age",dataIndex:"age"}],A=function(){var c=(0,u.useState)(!1),E=o()(c,2),g=E[0],h=E[1],p=function(){h(!0)},R=function(){h(!1)},b=function(){e.Modal.info({title:"some info",content:"some info"})},C=function(){e.Modal.confirm({title:"some info",content:"some info"})};return(0,n.tZ)(e.Space,{direction:"vertical",size:[0,16],style:{width:"100%",paddingTop:16,borderTop:"1px solid #d9d9d9"}},(0,n.tZ)(e.Pagination,{defaultCurrent:1,total:50,showSizeChanger:!0}),(0,n.tZ)(e.Space,{wrap:!0},(0,n.tZ)(e.Select,{showSearch:!0,style:{width:200}},(0,n.tZ)(m,{value:"jack"},"jack"),(0,n.tZ)(m,{value:"lucy"},"lucy")),(0,n.tZ)(e.DatePicker,null),(0,n.tZ)(e.TimePicker,null),(0,n.tZ)(O,{style:{width:200}})),(0,n.tZ)(e.Space,{wrap:!0},(0,n.tZ)(e.Button,{type:"primary",onClick:p},"Show Modal"),(0,n.tZ)(e.Button,{onClick:b},"Show info"),(0,n.tZ)(e.Button,{onClick:C},"Show confirm"),(0,n.tZ)(e.Popconfirm,{title:"Question?"},(0,n.tZ)("a",null,"Click to confirm"))),(0,n.tZ)(e.Transfer,{dataSource:[],showSearch:!0,targetKeys:[]}),(0,n.tZ)("div",{style:{width:320,border:"1px solid #d9d9d9",borderRadius:8}},(0,n.tZ)(e.Calendar,{fullscreen:!1,value:i()()})),(0,n.tZ)(e.Table,{dataSource:[],columns:T}),(0,n.tZ)(e.Modal,{title:"Locale Modal",open:g,onCancel:R},(0,n.tZ)("p",null,"Locale Modal")))},Z=function(){var c=(0,u.useState)(_.default),E=o()(c,2),g=E[0],h=E[1],p=function(b){var C=b.target.value;h(C),C?i().locale("zh-cn"):i().locale("en")};return(0,n.tZ)(u.Fragment,null,(0,n.tZ)("div",{style:{marginBottom:16}},(0,n.tZ)("span",{style:{marginRight:16}},"Change locale of components:"),(0,n.tZ)(e.Radio.Group,{value:g,onChange:p},(0,n.tZ)(e.Radio.Button,{key:"en",value:_.default},"English"),(0,n.tZ)(e.Radio.Button,{key:"cn",value:t.default},"\u4E2D\u6587"))),(0,n.tZ)(e.ConfigProvider,{locale:g},(0,n.tZ)(A,null)))};l.default=Z}}]);
