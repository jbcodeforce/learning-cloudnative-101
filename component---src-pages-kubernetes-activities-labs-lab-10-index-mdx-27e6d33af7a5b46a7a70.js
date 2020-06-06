(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"X/gb":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),l=a("013z");a("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},r={_frontmatter:i},o=l.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(n.b)(o,b({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Problem"),Object(n.b)("p",null,"The death star plans can’t be lost no matter what happens so we need to make sure we protect them at all costs."),Object(n.b)("p",null,"In order to do that you will need to do the following:"),Object(n.b)("p",null,"Create a ",Object(n.b)("inlineCode",{parentName:"p"},"PersistentVolume"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The PersistentVolume should be named ",Object(n.b)("inlineCode",{parentName:"p"},"postgresql-pv"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The volume needs a capacity of ",Object(n.b)("inlineCode",{parentName:"p"},"1Gi"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use a storageClassName of ",Object(n.b)("inlineCode",{parentName:"p"},"localdisk"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use the accessMode ",Object(n.b)("inlineCode",{parentName:"p"},"ReadWriteOnce"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Store the data locally on the node using a ",Object(n.b)("inlineCode",{parentName:"p"},"hostPath")," volume at the location ",Object(n.b)("inlineCode",{parentName:"p"},"/mnt/data"),"."))),Object(n.b)("p",null,"Create a ",Object(n.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The PersistentVolumeClaim should be named ",Object(n.b)("inlineCode",{parentName:"p"},"postgresql-pv-claim"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set a resource request on the claim for ",Object(n.b)("inlineCode",{parentName:"p"},"500Mi")," of storage.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use the same storageClassName and accessModes as the PersistentVolume so that this claim can bind to the PersistentVolume."))),Object(n.b)("p",null,"Create a ",Object(n.b)("inlineCode",{parentName:"p"},"Postgresql")," Pod configured to use the ",Object(n.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The Pod should be named ",Object(n.b)("inlineCode",{parentName:"p"},"postgresql-pod"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use the image ",Object(n.b)("inlineCode",{parentName:"p"},"bitnami/postgresql"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Expose the containerPort ",Object(n.b)("inlineCode",{parentName:"p"},"5432"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set an ",Object(n.b)("inlineCode",{parentName:"p"},"environment variable")," called ",Object(n.b)("inlineCode",{parentName:"p"},"MYSQL_ROOT_PASSWORD")," with the value ",Object(n.b)("inlineCode",{parentName:"p"},"password"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add the ",Object(n.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," as a volume and mount it to the container at the path ",Object(n.b)("inlineCode",{parentName:"p"},"/bitnami/postgresql/"),"."))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-10-index-mdx-27e6d33af7a5b46a7a70.js.map