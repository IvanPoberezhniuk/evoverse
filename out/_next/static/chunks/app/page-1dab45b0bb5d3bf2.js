(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{50611:function(e,o,r){Promise.resolve().then(r.bind(r,82185))},82185:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return p}});var t=r(57437),n=r(2265),a=r(2892),i=r(83597),s=r(7349),l=r(93445),d=r(54272),u=r(20345),m=r.n(u);function p(){return(0,n.useEffect)(()=>{!function(){let{environment:e="test"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.n0)({environment:e,models:{movie:a.Hn},seeds(e){e.create("movie",{name:"Inception",year:2010}),e.create("movie",{name:"Interstellar",year:2014}),e.create("movie",{name:"Dunkirk",year:2017})},routes(){this.namespace="auth",this.get("/nonce/:walletAddress",(e,o)=>{let{walletAddress:r}=o.params;return{string:(0,i.z)(20),walletAddress:r}}),this.post("/metamask/sign-in",(e,o)=>{console.log("---request: ",o.requestBody)})}})}({environment:"development"})},[]),(0,t.jsx)(l.Z,{theme:s.default,children:(0,t.jsx)(d.Z,{component:"main",className:m().main})})}},83597:function(e,o,r){"use strict";r.d(o,{s:function(){return t},z:function(){return n}});var t=r(41991);function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r="",t=o.length;for(let n=0;n<e;n++)r+=o.charAt(Math.floor(Math.random()*t));return r}t.setLocale({mixed:{required:"This field is required."},string:{min:"Minimun ${min} characters.",max:"Maximum ${max} characters.",email:"Invalid email, example@email.com."},number:{min:"Minimun ${min}.",max:"Maximum ${max}."}}),t.addMethod(t.object,"atLeastOne",function(){return this.test({name:"atLeastOne",message:"Require at least one.",exclusive:!0,test:function(e){return!!Object.keys(e).some(o=>e[o])||this.createError({path:"atLeastOneRequired",message:"One reason must be set"})}})})},7349:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return a}});var t=r(65658);let n=(0,t.Z)({spacing:4,breakpoints:{values:{xs:0,sm:540,md:900,lg:1200,xl:1536}},palette:{primary:{light:"#edfcf2",main:"#5AE288",dark:"#174943"},secondary:{main:"#174943"},white:{main:"#fffff"},contrastThreshold:3,tonalOffset:.2}});n=(0,t.Z)(n,{typography:{allVariants:n.unstable_sx({color:"secondary.main"}),h1:{fontSize:{xs:"22px",md:"38px"}},h2:{fontSize:{xs:"18px",md:"32px"}},h3:{fontSize:{xs:"18px",md:"24px"},marginBottom:"16px"},body1:{fontSize:"18px"},body2:{fontSize:"14px"}}});var a=n=(0,t.Z)(n,{typography:{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},components:{MuiToggleButton:{styleOverrides:{root:n.unstable_sx({flex:1,color:"secondary.main",transition:n.transitions.create(["background-color"],{duration:n.transitions.duration.short})})}},MuiToggleButtonGroup:{styleOverrides:{root:n.unstable_sx({gap:6,"& .MuiToggleButtonGroup-grouped:not(:last-of-type), .MuiToggleButtonGroup-grouped:not(:first-of-type)":{fontSize:"18px",fontWeight:"500",borderRadius:10,border:"1px solid",borderColor:"secondary.main",textTransform:"none","&:hover":{borderColor:"#24ed68",backgroundColor:"#24ed68"},"&.Mui-selected":{color:"white.main",borderColor:"primary.main",backgroundColor:"primary.main"}}})}},MuiContainer:{defaultProps:{maxWidth:"sm"},styleOverrides:{root:n.unstable_sx({display:"flex",flexDirection:"column",gap:6,pt:6,pb:30,px:4})}},MuiStack:{defaultProps:{spacing:6}},MuiTypography:{defaultProps:{color:"secondary"}},MuiSlider:{styleOverrides:{markLabel:n.unstable_sx({color:"secondary.main",fontSize:20,'&[data-index="0"]':{ml:4.3},'&[data-index="1"]':{ml:-6.7}}),valueLabel:n.unstable_sx({fontSize:18,fontWeight:500,px:6,py:2,color:"primary.main",backgroundColor:"secondary.main"}),rail:n.unstable_sx({opacity:.6,backgroundColor:"secondary.main"})}},MuiButton:{defaultProps:{disableElevation:!0,variant:"contained"},styleOverrides:{root:{height:60,minWidth:150},outlined:n.unstable_sx({color:"primary.dark",borderColor:"primary.dark","&:hover":{color:"white",backgroundColor:"#24ed68"}}),containedPrimary:n.unstable_sx({borderRadius:1,"&:hover":{backgroundColor:"#24ed68"}})}},MuiLink:{defaultProps:{underline:"none",color:"secondary"},styleOverrides:{root:n.unstable_sx({fontWeight:300,"&:hover":{color:"primary.main"}})}},MuiFormLabel:{styleOverrides:{root:n.unstable_sx({fontWeight:400,color:"secondary.main"})}},MuiFormControl:{styleOverrides:{root:n.unstable_sx({gap:6})}},MuiFormControlLabel:{defaultProps:{componentsProps:{typography:{fontSize:"12px",fontWeight:500}}}},MuiInputLabel:{styleOverrides:{root:{fontWeight:400}}},MuiFormHelperText:{styleOverrides:{root:{position:"absolute",bottom:"-1.3rem"}}},MuiTextField:{defaultProps:{fullWidth:!0,errorstyle:{position:"absolute",bottom:"-1rem"}},styleOverrides:{root:n.unstable_sx({"& .MuiOutlinedInput-root":{fontWeight:"400",background:"#fff","&:placeholder":{fontSize:30},"&:active":{borderWidth:1},"& > fieldset":{borderWidth:2},"&:hover > fieldset":{borderColor:"primary.main"}},"& .MuiFormHelperText-root":{minHeight:20}})}},MuiSelect:{defaultProps:{},styleOverrides:{root:n.unstable_sx({borderRadius:0,"& fieldset":{borderColor:"primary.dark"}})}},MuiPopover:{defaultProps:{elevation:2,paperprops:{square:!0}},styleOverrides:{paper:{borderRadius:0}}},MuiAppBar:{styleOverrides:{root:n.unstable_sx({py:2,px:40})}}}})},20345:function(e){e.exports={main:"page_main__GlU4n",description:"page_description__86bsR",code:"page_code__9lUUd",grid:"page_grid__f5Kdy",card:"page_card__QV0Om",center:"page_center__5oHG7",logo:"page_logo__7fc9l",content:"page_content__kDoxQ",vercelLogo:"page_vercelLogo__rOY_u",rotate:"page_rotate__durgN"}}},function(e){e.O(0,[11,504,27,971,69,744],function(){return e(e.s=50611)}),_N_E=e.O()}]);