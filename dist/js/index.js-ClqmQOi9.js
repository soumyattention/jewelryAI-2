import{r as e}from"./chunk-D0gqxGPa.js";import{g as r}from"./chunk-CZGzrBZV.js";
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let t="undefined"!=typeof document?e.useLayoutEffect:e.useEffect,n=e=>e&&!Array.isArray(e)&&"object"==typeof e,c=[],u={},s=r;const d=(r,d=c)=>{let o=u;n(r)?(o=r,r=null,d="dependencies"in o?o.dependencies:c):n(d)&&(o=d,d="dependencies"in o?o.dependencies:c);const{scope:f,revertOnUpdate:i}=o,p=e.useRef(!1),a=e.useRef(s.context(()=>{},f)),l=e.useRef(e=>a.current.add(null,e)),m=d&&d.length&&!i;return m&&t(()=>(p.current=!0,()=>a.current.revert()),c),t(()=>{if(r&&a.current.add(r,f),!m||!p.current)return()=>a.current.revert()},d),{context:a.current,contextSafe:l.current}};d.register=e=>{s=e},d.headless=!0;export{d as useGSAP};
