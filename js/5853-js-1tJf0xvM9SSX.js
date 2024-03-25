'use strict';(function(a){'use strict';'function'==typeof define&&define.amd?define('parollerjs',['jquery'],a):'object'==typeof module&&'object'==typeof module.exports?module.exports=a(require('jquery')):a(jQuery)})(function(a){'use strict';var b=Math.round;let c=!1,d=function(){c=!1},e={bgVertical:function(a,b){return a.css({"background-position":'center '+-b+'px'})},bgHorizontal:function(a,b){return a.css({"background-position":-b+'px center'})},vertical:function(a,b,c,d){return'none'===d&&(d=''),a.css({"-webkit-transform":'translateY('+b+'px)'+d,"-moz-transform":'translateY('+b+'px)'+d,transform:'translate(0,'+b+'px)'+d,transition:c,"will-change":'transform'})},horizontal:function(a,b,c,d){return'none'===d&&(d=''),a.css({"-webkit-transform":'translateX('+b+'px)'+d,"-moz-transform":'translateX('+b+'px)'+d,transform:'translate('+b+'px, 0)'+d,transition:c,"will-change":'transform'})}},f={factor:function(a,b,c){let d=a.data('paroller-factor'),e=d?d:c.factor;if(576>b){let b=a.data('paroller-factor-xs'),d=b?b:c.factorXs;return d?d:e}if(768>=b){let b=a.data('paroller-factor-sm'),d=b?b:c.factorSm;return d?d:e}if(1024>=b){let b=a.data('paroller-factor-md'),d=b?b:c.factorMd;return d?d:e}if(1200>=b){let b=a.data('paroller-factor-lg'),d=b?b:c.factorLg;return d?d:e}if(1920>=b){let b=a.data('paroller-factor-xl'),d=b?b:c.factorXl;return d?d:e}return e},bgOffset:function(a,c){return b(a*c)},transform:function(a,c,d,e){return b((a-d/2+e)*c)}},g={background:function(a){return a.css({"background-position":'unset'})},foreground:function(a){return a.css({transform:'unset',transition:'unset'})}};a.fn.paroller=function(h){const i=a(window).height(),j=a(document).height();return h=a.extend({factor:0,factorXs:0,factorSm:0,factorMd:0,factorLg:0,factorXl:0,transition:'transform .1s ease',type:'background',direction:'vertical'},h),this.each(function(){const k=a(this);let l=k.outerHeight(),m=a(window).width(),n=k.offset().top,o=0,p=function(a,b){return a||(o=b),b-o};const q=k.data('paroller-type'),r=k.data('paroller-direction'),s=k.data('paroller-transition'),t=k.css('transform'),u=s?s:h.transition,v=q?q:h.type,w=r?r:h.direction;let x=0,y=f.bgOffset(n,x),z=f.transform(n,x,i,l);'background'===v?'vertical'===w?e.bgVertical(k,y):'horizontal'===w&&e.bgHorizontal(k,y):'foreground'===v&&('vertical'===w?e.vertical(k,z,u,t):'horizontal'===w&&e.horizontal(k,z,u,t)),a(window).on('resize',function(){let o=a(this).scrollTop();m=a(window).width(),n=k.offset().top,l=k.outerHeight(),x=f.factor(k,m,h),y=b(n*x);let q=p(a(document).scrollTop(),b((n-i/2+l)*x));c||(window.requestAnimationFrame(d),c=!0),'background'===v?(g.background(k),'vertical'===w?e.bgVertical(k,y):'horizontal'===w&&e.bgHorizontal(k,y)):'foreground'===v&&o<=j&&(g.foreground(k),'vertical'===w?e.vertical(k,q,u):'horizontal'===w&&e.horizontal(k,q,u))}),a(window).on('load scroll',function(){let g=a(this).scrollTop(),o=a(document).scrollTop();x=f.factor(k,m,h);let q=p(o,b((n-i/2+l-g)*x));c||(window.requestAnimationFrame(d),c=!0),'background'===v?'vertical'===w?e.bgVertical(k,y):'horizontal'===w&&e.bgHorizontal(k,y):'foreground'===v&&g<=j&&('vertical'===w?e.vertical(k,q,u,t):'horizontal'===w&&e.horizontal(k,q,u,t))})})}});