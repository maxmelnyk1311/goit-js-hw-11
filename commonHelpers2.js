import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as r}from"./assets/vendor-651d7991.js";const l=document.querySelector("input[name='delay']");document.querySelector("input[value='fulfilled']");document.querySelector("input[value='rejected']");const a=document.querySelector("button");a.addEventListener("click",n=>{n.preventDefault();const e=Number(l.value),o=Array.from(document.querySelectorAll("input[name='state']")).find(t=>t.checked);function c(t,u){return new Promise((i,s)=>{setTimeout(()=>{switch(t){case"fulfilled":i();break;case"rejected":s();break;default:console.log("Something is wrong!")}},u)})}c(o.value,e).then(()=>r.success({position:"topRight",message:`✅ Fullfilled promise in ${e}ms`,backgroundColor:"green"})).catch(()=>r.error({position:"topRight",message:`❌ Rejected promise in ${e}ms`,backgroundColor:"red"})),o.checked=!1});
//# sourceMappingURL=commonHelpers2.js.map
