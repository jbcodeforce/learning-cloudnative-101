(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{tHNa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},s={_frontmatter:r},l=i.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(l,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"Provided that you have been working mainly with CloudFoundry based application and had just learned on what Kubernetes is, this module tries to bridge the concept of what is happening in Kubernetes world that would correspond to the familiar thing in CloudFoundry application. This module assumes that you are very familar with CloudFoundry and have some basic understanding of Kubernetes objects and resources."),Object(n.b)("p",null,"The discussion in this module comes in two sub-sections:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Application execution environment comparison for CloudFoundry and Kubernetes and OpenShift"),Object(n.b)("li",{parentName:"ul"},"Application staging process comparison for CloudFoundry")),Object(n.b)("h2",null,"Application execution environment"),Object(n.b)("p",null,"The application execution environment diagram for CloudFoundry below demonstrates the components that runs CloudFoundry applications."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZUlEQVQoz5VSa2+DMAzs//+BU1VNXddCeRZCyPvBzU431O3bIhnF2D6ffTng5WzbVoxPTBnKeriY4dOGqmnxdjzheHqHWBW0C1iNg1QGIQRYa5FzxoEBmqaB934HTjGVAq0N7nWN5t7g83zG2LZw60qd8567KI2+69D3ffELYPf9YxgGTLOE4qRJ4t5OGEeBZVFouxEhbsScGqaEGCM8MRsmji8QQjwZlvEoqLWGlBLXW0OMO1xuPdmzgbWmFEgq7AjYOQ+tFOZZYHjMJb4S8x2Qk8dxLLZITb5E3U2UvFCRJH9GVVWo6woflyuMsXhQbksrYECebB+ZP7w/ZrcssjDizlXzgKZCpZ7LTum5N+dSESHnRHdXRmZBdoY/qu6CUCGLweq5EAvjWaxkipqtEOQnblBsI8AZisCY0A74auX5UIDvhpS2PsKGFyNf8w6LBRhix+P+GvnvW/zPYUGNMbQaVRh+ATyEuRe9D9yFAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cf",title:"cf",src:"/static/64f0075ab29649f8c61eb7b2e2e309fb/3cbba/cf.png",srcSet:["/static/64f0075ab29649f8c61eb7b2e2e309fb/7fc1e/cf.png 288w","/static/64f0075ab29649f8c61eb7b2e2e309fb/a5df1/cf.png 576w","/static/64f0075ab29649f8c61eb7b2e2e309fb/3cbba/cf.png 1152w","/static/64f0075ab29649f8c61eb7b2e2e309fb/0b124/cf.png 1728w","/static/64f0075ab29649f8c61eb7b2e2e309fb/d831a/cf.png 1960w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"In CloudFoundry, application runs within a Diego cell (used to be a DEA node) which runs a Garden container.\nThe cell is constructed from Droplet image that is stored in CloudFoundry BLOB store.\nCloudFoundry provides router (Go router) for accessing the application running in the cell so that external access is enabled for the application.\nFor the application to access the backend services, it facilitates an environment variable called VCAP_SERVICES, which contains the credentials and access information for those backend services."),Object(n.b)("p",null,"In Kubernetes application runs in the Kubernetes cluster as demonstrated below:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1124px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACc0lEQVQoz21SaW8SURSdP9q4VJb6RZOiSW2MrUDtoq2JsUmjJhpNqrExphqpSBcpdNFaoQxYaAiUaYDSoQWGWRiGOb77Ukwb+5LLG2bOu++ce45gGAYuKrPdhtJooHFygka9Dl3XYVnWOUyr1YJt27xo1RlOUFUVZ6vZbHJgOp3Gu4/zmAsEMTv3AV6vD/OfPsM0TY7RNA2KovD/3cUb0s30UWO7qulQWFOr00F0NYKZDRETfw7xajOBy1cc8Pr8sNk3VdU4Y2rcZkq6q8EUCcSGiiTYhs5KY4csLK1tIrq+jh1RxLfFJVztu4l7o4/R1E3ojIBBBE5VUSPaS6USBEk6wIEk4ej4BOEjFaFiHbJp48tCEB7PbQwNezEwMAiXy42R0QnIigFJZg2MFlelKM1/snO5HAQxmcJuUkRSKqH/lwRnZA8pHVgOfkVPzyW4rjnhdvfB4bqOsbFxgLEXY3Esswt3EzuoVCqIx+PIZrPI5/MQUqkUxEQC+WIJ7/eP8XrvEEWjg2BoEeNPpvH0zVtMTs/A5XTBzxiS5HR2H2s/f6NULHJjiFm5XEahUIAQDq8iFArhkL3otE20dI2RsBDd+IGX2xlMZWTMbu+i130DQ6NTqDLJNUVjsbK4MdSQPKDFGdZqNVCRKdw5NtwOc3Jl5TvC4TDisRgCgQX0OtzwjzwAbNZIU7kx5HI3JbTLsgyBfmgORUafAOQWBTUSjaLfcwvD9314+GgSdwbv4tnzFzzwhOHsLopNlB3c2tric+jeqJ9GgsKdZDNOZzLsOYNqtcqVECPaCf9fsIkZAWkONI+zRe/oQDerdMl5TJOP52zDvzsAXCl/TgXzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Kube",title:"Kube",src:"/static/7f0b001a80b6a0e88515891ad4b7c1c8/3447d/kube.png",srcSet:["/static/7f0b001a80b6a0e88515891ad4b7c1c8/7fc1e/kube.png 288w","/static/7f0b001a80b6a0e88515891ad4b7c1c8/a5df1/kube.png 576w","/static/7f0b001a80b6a0e88515891ad4b7c1c8/3447d/kube.png 1124w"],sizes:"(max-width: 1124px) 100vw, 1124px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Kubernetes applications run in Pods, which are similar to Cloud Foundry Diego cells."),Object(n.b)("li",{parentName:"ul"},"There is a Kubernetes Service that performs load balancing for all the pod instances."),Object(n.b)("li",{parentName:"ul"},"External access to the Service is received from either a NodePort, a LoadBalancer service or an Ingress entry."),Object(n.b)("li",{parentName:"ul"},"The combination of Kubernetes Service and Ingress entry serves a similar function to the Go Router in CloudFoundry."),Object(n.b)("li",{parentName:"ul"},"Backend services binding in Kubernetes must be defined by the developer, the system does not provide a binding."),Object(n.b)("li",{parentName:"ul"},"Typically the information on where the service is located can be found in ConfigMaps and the credentials to access the service is stored in Secrets."),Object(n.b)("li",{parentName:"ul"},"So you can ended up with multiple configurations that are provided by the backend environment that you must bind to each of the applications that uses them."),Object(n.b)("li",{parentName:"ul"},"These ConfigMaps and Secrets are comparable to CloudFoundry’s provided VCAP_SERVICES environment variable.")),Object(n.b)("p",null,"For OpenShift, which is derived from Kubernetes, the architecture is very similar. However, OpenShift has provided some functionality for the cluster that allows a more simple configuration of a cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"One of the example is OpenShift router, which provides a combined way to develop an Ingress entry with a setting of DNS resources, this function is very similar to CloudFoundry Go Router."),Object(n.b)("li",{parentName:"ul"},"OpenShift uses a DeploymentConfig, which has more capabilities than a Kubernetes Deployment, it supports the definition of triggers, which allow the pods to be modified when a certain situation (such as image or configuration is updated).")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACQUlEQVQoz2VSWW+SURD9fqZGrdGIpSgvDT6LW5RGX9RYo9EXMCgNGmNqabEJZf8iCVspW1spSxDKDt/GdrxzUwjEm5zkLmdmzp05AtgajUaQZfk/KIqCbreL0skxygwn+TzOisUljiRJPJ7WdDqFQBsKHAwGCySZnYk4hOfAi+ffXHhz8BuWV5sw6NcQi8cxHo95sn6/z+NniydUNW2uiKAqMlR2HrJ7T0iEM5HHTqmJ947vuLxyC4FgiAdLTAQJoZjJZMKV8oRUqdfrQaGkDD1VQ09RIY/GcP7YxpbNhu2vTmxYNnBdZ4DLE2JvUy5EVdUlpQIpS6fTOEyl0Gg00JJVPE2UYY4WUdGm+GS14dKVFehWDVi7Y4Reb0AgEET1vIXDoyyq5TI6nQ7q9TqazSYEkpzL5ZDJZvG3fo7aQMHjRAX3Y2UUlTE+2+1YXzfBbH4Ak+kebq/qEQqFUKtW4f7pQjIaR6vVQiaTQTKZhEByY7EYIpEIr6KxL9QHMofMvr7r9eO1L4oPR2W8tH7B1Zt67HnDaMsjVJpd9Fm8dAGNtUCgaZVKJZye/uENpktNXhiK14f9WArB4zO8s9px7YYO/mCYD4WGJy0kpPYJMx9SU9vtNodMNmIE8pXDsYUXzyz4uPkWTx4+gvGuEWJY5G/EIRE0mCXb0KUoigiHwygy4xKBqpEPC4UC3DsuePbc8P3ah+jz854Rh6ZKymY+nBubFFYqFdRqNU6kAtJFdWoBJzNMWMCY+Y2KLXKGw+E84T88ihgwyJr/sgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"oc",title:"oc",src:"/static/55aabf6946f418b9d1fab1d00ce6096f/3cbba/oc.png",srcSet:["/static/55aabf6946f418b9d1fab1d00ce6096f/7fc1e/oc.png 288w","/static/55aabf6946f418b9d1fab1d00ce6096f/a5df1/oc.png 576w","/static/55aabf6946f418b9d1fab1d00ce6096f/3cbba/oc.png 1152w","/static/55aabf6946f418b9d1fab1d00ce6096f/7febd/oc.png 1196w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Application Staging"),Object(n.b)("p",null,"The staging of application, from the source repository into a runnable image differs greatly from one platform to another.\nThe staging is performed after the build artifact is collected, this include performing maven, gradle or other build mechanism.\nApplication is then staged into the Cloud platform; this staging process is typically split into: application container image creation and application container deployment."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABFUlEQVQoz4VRW07DMBDs/W9T7oAEoqifERQqWoiTNnEetmM7D2fYuKFKo5autB5rPLv2rBcYo+97j5xzBEGAOf9fDJo/3WJOvK5WeFgukWXZWVw3Leq2u550Nm18bkgLuq7DTxjiffMBpaQX5VLjWChkhFxUF5nJCilhWio4N77wmqVuxIZEXJq7llOh0bqJZUcvMzlHIyX2n3usX9YwdKtIE8RRjPg7wtPjMxJ2JD6HKTIIXnguorOIxdCjo1ND51CJElpIsB3D9m1LzQqUeY6QHcBZgt3mC0l4gKVCqwRsqT0nksJrdFXdtjwNTrPLKwtlW5S6RqHtCZWBJE7Qfpjx6Pjyl+fp59k5aNvA1Ldz0MDXAL+gVm0DHf/q0QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"staging",title:"staging",src:"/static/5860fb432becba12cd1423b7ad4e955a/3cbba/staging.png",srcSet:["/static/5860fb432becba12cd1423b7ad4e955a/7fc1e/staging.png 288w","/static/5860fb432becba12cd1423b7ad4e955a/a5df1/staging.png 576w","/static/5860fb432becba12cd1423b7ad4e955a/3cbba/staging.png 1152w","/static/5860fb432becba12cd1423b7ad4e955a/0d642/staging.png 1512w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"In CloudFoundry, Droplet images are built by the CloudFoundry buildpacks."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The buildpack will evaluate the application artifacts and construct a runnable Droplet image by providing the necessary pre-requisites and collect dependent codes."),Object(n.b)("li",{parentName:"ul"},"This process is explained further in ",Object(n.b)("a",o({parentName:"li"},{href:"https://docs.cloudfoundry.org/concepts/how-applications-are-staged.html"}),"CloudFoundry staging"),"."),Object(n.b)("li",{parentName:"ul"},"The runnable Droplet image is stored in BLOB store and then to be deployed as a Garden container in a Diego cell."),Object(n.b)("li",{parentName:"ul"},"The service binding is provided by CloudFoundry as VCAP_SERVICES environment variable in the container."),Object(n.b)("li",{parentName:"ul"},"Finally CloudFoundry defines a Router entry for the application.")),Object(n.b)("p",null,"Although these processes sound complicated, it is actually performed using a single command ",Object(n.b)("inlineCode",{parentName:"p"},"cf push"),"."),Object(n.b)("p",null,"In OpenShift the staging of application is perfomed using BuildConfig, DeploymentConfig and bindings are defined in ConfigMaps and Secrets."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"OpenShift is using a ",Object(n.b)("strong",{parentName:"li"},"BuildConfig")," generates an ",Object(n.b)("strong",{parentName:"li"},"ImageStream")," in OpenShift."),Object(n.b)("li",{parentName:"ul"},"ImageStream represent a container image which can be build using Dockerfile or S2I process."),Object(n.b)("li",{parentName:"ul"},"The image building part can be accomplished using the command:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"})," oc start-build (buildconfig_name)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You or the backend service provider then create ConfigMap and Secrets to access backend services."),Object(n.b)("li",{parentName:"ul"},"Finally, you use a Template object that contains at least a ",Object(n.b)("strong",{parentName:"li"},"DeploymentConfig")," (with ",Object(n.b)("strong",{parentName:"li"},"Pod")," definition), ",Object(n.b)("strong",{parentName:"li"},"Service")," and ",Object(n.b)("strong",{parentName:"li"},"Route")," to deploy the application."),Object(n.b)("li",{parentName:"ul"},"You deploy the application using the command:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"})," oc new-app -f template.yaml\n")),Object(n.b)("p",null,"In Kubernetes, staging is performed as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You create a ",Object(n.b)("strong",{parentName:"li"},"docker image")," using a Dockerfile and store the image in a ",Object(n.b)("strong",{parentName:"li"},"Docker repository"))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"})," docker build -t (image)\n docker push (image)\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You create ConfigMap and Secrets to access backend services"),Object(n.b)("li",{parentName:"ul"},"You use YAML file to deploy Kubernetes resources such as ",Object(n.b)("strong",{parentName:"li"},"Kubernetes Pod")," in a Deployment, ",Object(n.b)("strong",{parentName:"li"},"Kubernetes Service")," and maybe an ",Object(n.b)("strong",{parentName:"li"},"Ingress"))),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"})," kubectl apply -f (template)\n")),Object(n.b)("h2",null,"Activities"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Task"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Link"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},Object(n.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:"left"}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Migrating to IKS"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Migrating from Cloud Foundry to IKS"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"../cf-to-k8s/iks-migration/"}),"IKS"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Migrating to OpenShift"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Migrating from Cloud Foundry to OpenShift"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"../cf-to-k8s/oc-migration/"}),"OCP"))))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cf-to-k-8-s-index-mdx-8b980c5642527cc6855f.js.map