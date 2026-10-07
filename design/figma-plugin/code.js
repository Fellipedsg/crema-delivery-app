const CR_ICONS={"banknote":"<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M6 12h.01M18 12h.01\"/>","battery-full":"<path d=\"M10 10v4\"/><path d=\"M14 10v4\"/><path d=\"M22 14v-4\"/><path d=\"M6 10v4\"/><rect x=\"2\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\"/>","beer":"<path d=\"M17 11h1a3 3 0 0 1 0 6h-1\"/><path d=\"M9 12v6\"/><path d=\"M13 12v6\"/><path d=\"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z\"/><path d=\"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8\"/>","bell":"<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/>","bike":"<circle cx=\"18.5\" cy=\"17.5\" r=\"3.5\"/><circle cx=\"5.5\" cy=\"17.5\" r=\"3.5\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><path d=\"M12 17.5V14l-3-3 4-3 2 3h2\"/>","briefcase":"<path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/>","calendar":"<path d=\"M8 2v3\"/><path d=\"M16 2v3\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18\"/>","check":"<path d=\"M20 6 9 17l-5-5\"/>","chevron-down":"<path d=\"m6 9 6 6 6-6\"/>","chevron-left":"<path d=\"m15 18-6-6 6-6\"/>","chevron-right":"<path d=\"m9 18 6-6-6-6\"/>","cigarette":"<path d=\"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14\"/><path d=\"M18 8c0-2.5-2-2.5-2-5\"/><path d=\"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M22 8c0-2.5-2-2.5-2-5\"/><path d=\"M7 12v4\"/>","circle-check-big":"<path d=\"M21.801 10A10 10 0 1 1 17 3.335\"/><path d=\"m9 11 3 3L22 4\"/>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/>","copy":"<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>","credit-card":"<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\"/><path d=\"M6 14h2\"/>","eye":"<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","flame":"<path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\"/>","gift":"<path d=\"M12 7v14\"/><path d=\"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8\"/><path d=\"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5\"/><rect x=\"3\" y=\"7\" width=\"18\" height=\"4\" rx=\"1\"/>","heart":"<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"/>","house":"<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>","id-card":"<path d=\"M13 19a4 4 0 00-8 0\"/><path d=\"M16 10h2\"/><path d=\"M16 14h2\"/><circle cx=\"9\" cy=\"12\" r=\"3\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/>","image":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/>","leaf":"<path d=\"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20\"/><path d=\"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13\"/>","lock":"<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>","log-out":"<path d=\"m16 17 5-5-5-5\"/><path d=\"M21 12H9\"/><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/>","mail":"<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/>","map-pin":"<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>","martini":"<path d=\"M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z\"/><path d=\"M12 12v10\"/><path d=\"M7 22h10\"/>","message-circle":"<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/>","minus":"<path d=\"M5 12h14\"/>","navigation":"<polygon points=\"3 11 22 2 13 21 11 13 3 11\"/>","package":"<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\"/><path d=\"M12 22V12\"/><polyline points=\"3.29 7 12 12 20.71 7\"/><path d=\"m7.5 4.27 9 5.15\"/>","package-check":"<path d=\"M12 22V12\"/><path d=\"m16 17 2 2 4-4\"/><path d=\"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753\"/><path d=\"M3.29 7 12 12l8.71-5\"/><path d=\"m7.5 4.27 8.997 5.148\"/>","percent":"<line x1=\"19\" x2=\"5\" y1=\"5\" y2=\"19\"/><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"/>","phone":"<path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"/>","plus":"<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>","qr-code":"<rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"/><path d=\"M21 16h-3a2 2 0 0 0-2 2v3\"/><path d=\"M21 21v.01\"/><path d=\"M12 7v3a2 2 0 0 1-2 2H7\"/><path d=\"M3 12h.01\"/><path d=\"M12 3h.01\"/><path d=\"M12 16v.01\"/><path d=\"M16 12h1\"/><path d=\"M21 12v.01\"/><path d=\"M12 21v-1\"/>","receipt":"<path d=\"M12 17V7\"/><path d=\"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/>","rotate-ccw":"<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/>","search":"<path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/>","settings":"<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","shield-check":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>","shopping-bag":"<path d=\"M16 10a4 4 0 0 1-8 0\"/><path d=\"M3.103 6.034h17.794\"/><path d=\"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z\"/>","signal":"<path d=\"M2 20h.01\"/><path d=\"M7 20v-4\"/><path d=\"M12 20v-8\"/><path d=\"M17 20V8\"/><path d=\"M22 4v16\"/>","sliders-horizontal":"<path d=\"M10 5H3\"/><path d=\"M12 19H3\"/><path d=\"M14 3v4\"/><path d=\"M16 17v4\"/><path d=\"M21 12h-9\"/><path d=\"M21 19h-5\"/><path d=\"M21 5h-7\"/><path d=\"M8 10v4\"/><path d=\"M8 12H3\"/>","smartphone":"<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M12 18h.01\"/>","snowflake":"<path d=\"m10 20-1.25-2.5L6 18\"/><path d=\"M10 4 8.75 6.5 6 6\"/><path d=\"m14 20 1.25-2.5L18 18\"/><path d=\"m14 4 1.25 2.5L18 6\"/><path d=\"m17 21-3-6h-4\"/><path d=\"m17 3-3 6 1.5 3\"/><path d=\"M2 12h6.5L10 9\"/><path d=\"m20 10-1.5 2 1.5 2\"/><path d=\"M22 12h-6.5L14 15\"/><path d=\"m4 10 1.5 2L4 14\"/><path d=\"m7 21 3-6-1.5-3\"/><path d=\"m7 3 3 6h4\"/>","star":"<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/>","store":"<path d=\"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5\"/><path d=\"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244\"/><path d=\"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05\"/>","ticket":"<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"M13 5v2\"/><path d=\"M13 17v2\"/><path d=\"M13 11v2\"/>","trash-2":"<path d=\"M10 11v6\"/><path d=\"M14 11v6\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"/><path d=\"M3 6h18\"/><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/>","user":"<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>","wallet":"<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"/>","wifi":"<path d=\"M12 20h.01\"/><path d=\"M2 8.82a15 15 0 0 1 20 0\"/><path d=\"M5 12.859a10 10 0 0 1 14 0\"/><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/>","wine":"<path d=\"M8 22h8\"/><path d=\"M7 10h10\"/><path d=\"M12 15v7\"/><path d=\"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z\"/>","x":"<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>","zap":"<path d=\"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z\"/>"};
const CR_IMG="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";
(async () => {
const LOG = [];
const ICONS = Object.fromEntries(Object.entries(CR_ICONS).map(([k,v])=>[k,'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+v+'</svg>']));
const IMG = {logo: CR_IMG};
const C = {bg:'#0C0906', s1:'#16110C', s2:'#201911', s3:'#2B2219', line:'#3A2E21', gold:'#D4A54A', goldL:'#F1D18A', goldD:'#8E6A24', wine:'#7B1424', wineL:'#D9606E', txt:'#F4ECDD', mut:'#A89A86', dim:'#6F6455', ok:'#4CB376'};
function rgb(h){h=h.replace('#','');return {r:parseInt(h.slice(0,2),16)/255,g:parseInt(h.slice(2,4),16)/255,b:parseInt(h.slice(4,6),16)/255};}
const solid=(h,o=1)=>({type:'SOLID',color:rgb(h),opacity:o});
const grad=(stops,dir)=>({type:'GRADIENT_LINEAR',gradientTransform:dir==='v'?[[0,1,0],[-1,0,1]]:[[1,0,0],[0,1,0]],gradientStops:stops.map(([p,h,a])=>({position:p,color:Object.assign(rgb(h),{a:a==null?1:a})}))});
const radial=(h,a)=>({type:'GRADIENT_RADIAL',gradientTransform:[[1,0,0],[0,1,0]],gradientStops:[{position:0,color:Object.assign(rgb(h),{a})},{position:1,color:Object.assign(rgb(h),{a:0})}]});
const GOLD=()=>grad([[0,C.goldL],[1,C.gold]],'h');

async function lf(family,style){try{await figma.loadFontAsync({family,style});return {family,style};}catch(e){return null;}}
const IR=await lf('Inter','Regular'), IM=(await lf('Inter','Medium'))||IR, IS=(await lf('Inter','Semi Bold'))||IM, IB=(await lf('Inter','Bold'))||IS;
const SB=(await lf('Cinzel','Bold'))||(await lf('Playfair Display','Bold'))||IB;
const W={r:IR,m:IM,s:IS,b:IB,serif:SB};

function put(p,n,x,y){p.appendChild(n);n.x=x;n.y=y;return n;}
function R(p,x,y,w,h,o={}){const n=figma.createRectangle();put(p,n,x,y);n.resize(Math.max(w,0.01),Math.max(h,0.01));
  n.fills=o.fills||(o.f?[solid(o.f,o.fo==null?1:o.fo)]:[]);
  if(o.r!=null)n.cornerRadius=o.r;
  if(o.tl!=null){n.topLeftRadius=o.tl;n.topRightRadius=o.tl;n.bottomLeftRadius=0;n.bottomRightRadius=0;}
  if(o.s){n.strokes=[solid(o.s,o.so==null?1:o.so)];n.strokeWeight=o.sw||1;n.strokeAlign='INSIDE';if(o.dash)n.dashPattern=o.dash;}
  n.name=o.name||'rect';return n;}
function E(p,x,y,d,o={}){const n=figma.createEllipse();put(p,n,x,y);n.resize(d,d);
  n.fills=o.fills||(o.f?[solid(o.f,o.fo==null?1:o.fo)]:[]);
  if(o.s){n.strokes=[solid(o.s,o.so==null?1:o.so)];n.strokeWeight=o.sw||1;n.strokeAlign=o.sa||'INSIDE';}
  n.name=o.name||'circle';return n;}
function T(p,str,x,y,o={}){const n=figma.createText();p.appendChild(n);n.fontName=W[o.w||'r'];n.characters=String(str);n.fontSize=o.size||14;
  n.fills=[solid(o.c||C.txt,o.co==null?1:o.co)];
  if(o.lh)n.lineHeight={value:o.lh,unit:'PIXELS'};
  if(o.ls!=null)n.letterSpacing={value:o.ls,unit:'PERCENT'};
  if(o.strike)n.textDecoration='STRIKETHROUGH';
  if(o.wd){n.textAutoResize='HEIGHT';n.resize(o.wd,n.height);if(o.al)n.textAlignHorizontal=o.al;}
  n.x=x;n.y=y;
  if(o.center!=null)n.x=x+(o.center-n.width)/2;
  if(o.right!=null)n.x=o.right-n.width;
  n.name=o.name||String(str).slice(0,30);return n;}
function I(p,name,x,y,size=24,color=C.txt,o={}){let svg=ICONS[name];if(!svg){LOG.push('icon missing '+name);return null;}
  svg=svg.replace(/currentColor/g,color);
  if(o.sw)svg=svg.replace(/stroke-width="2"/,'stroke-width="'+o.sw+'"');
  if(o.fill)svg=svg.replace(/fill="none"/,'fill="'+color+'"');
  const n=figma.createNodeFromSvg(svg);put(p,n,x,y);n.fills=[];n.rescale(size/24);n.x=x;n.y=y;n.name='icon/'+name;return n;}
const imgHash={};
function imgFill(key){if(!imgHash[key]){const b=figma.base64Decode(IMG[key]);imgHash[key]=figma.createImage(b).hash;}return {type:'IMAGE',scaleMode:'FILL',imageHash:imgHash[key]};}
function IMGR(p,key,x,y,w,h,r){let fl=imgFill('logo');if(key==='emblem')fl={type:'IMAGE',scaleMode:'CROP',imageHash:fl.imageHash,imageTransform:[[0.305,0,0.381],[0,0.436,0.064]]};const n=R(p,x,y,w,h,{fills:[fl],r,name:key});return n;}
function PH(p,x,y,w,h,r=16,col){R(p,x,y,w,h,{f:col||C.s3,r,name:'img-placeholder'});const s=Math.max(16,Math.min(w,h)*0.3);I(p,'image',x+(w-s)/2,y+(h-s)/2,s,C.dim,{sw:1.5});}
function top(p,...ns){ns.forEach(n=>{if(n)p.appendChild(n);});}

function B(p,label,x,y,w,o={}){const h=o.h||52,v=o.v||'gold';
  const fills=v==='gold'?[GOLD()]:(v==='dark'?[solid(C.s2)]:[]);
  R(p,x,y,w,h,{fills,r:o.r==null?14:o.r,s:v==='outline'?C.gold:(v==='dark'?C.line:null),name:'btn/'+label});
  const tc=v==='gold'?C.bg:(v==='outline'?C.gold:(v==='ghost'?(o.c||C.mut):C.txt));
  const t=T(p,label,0,0,{size:o.size||16,w:'s',c:tc});const iw=o.icon?28:0;
  t.x=x+(w-t.width-iw)/2+iw;t.y=y+(h-t.height)/2;
  if(o.icon)I(p,o.icon,t.x-28,y+(h-20)/2,20,tc);}
function IN(p,label,ph,x,y,w,o={}){if(label)T(p,label,x,y,{size:12,w:'m',c:C.mut});const fy=label?y+20:y;
  R(p,x,fy,w,48,{f:C.s2,r:12,s:o.active?C.gold:C.line,name:'input/'+(label||ph)});let tx=x+16;
  if(o.icon){I(p,o.icon,x+14,fy+14,20,o.active?C.gold:C.mut);tx=x+44;}
  T(p,ph,tx,fy+15,{size:14,c:o.filled?C.txt:C.dim});
  if(o.ricon)I(p,o.ricon,x+w-34,fy+14,20,C.mut);
  if(o.rtext)T(p,o.rtext,0,fy+15,{size:13,w:'s',c:C.gold,right:x+w-16});return fy+48;}
function CH(p,label,x,y,o={}){const t=T(p,label,0,0,{size:13,w:'m',c:o.on?C.bg:C.txt});const icw=o.icon?22:0;const w=t.width+30+icw,h=34;
  R(p,x,y,w,h,{fills:o.on?[GOLD()]:[solid(C.s2)],r:17,s:o.on?null:C.line,name:'chip/'+label});
  let ic=null;if(o.icon)ic=I(p,o.icon,x+14,y+9,16,o.on?C.bg:C.goldL);
  top(p,t,ic);t.x=x+15+icw;t.y=y+(h-t.height)/2;return w;}
function CHROW(p,labels,x,y,maxX,onSet,gap=8,icons){let cx=x,cy=y;labels.forEach((l,i)=>{const tmp=T(p,l,0,0,{size:13,w:'m'});const w=tmp.width+30+(icons?22:0);tmp.remove();
  if(maxX&&cx+w>maxX){cx=x;cy+=42;}CH(p,l,cx,cy,{on:onSet.includes(i),icon:icons&&icons[i]});cx+=w+gap;});return cy+34;}
function RADIO(p,x,y,on){E(p,x,y,22,{s:on?C.gold:C.dim,sw:2,name:'radio'});if(on)E(p,x+6,y+6,10,{fills:[GOLD()]});}
function CB(p,x,y,on){R(p,x,y,22,22,{r:6,fills:on?[GOLD()]:[],s:on?null:C.dim,sw:1.5,name:'checkbox'});if(on)I(p,'check',x+3,y+3,16,C.bg,{sw:3});}
function STEP(p,x,y,n,small){const w=small?96:124,h=small?34:52;R(p,x,y,w,h,{f:C.s3,r:h/2,s:C.line,name:'stepper'});const is=small?16:20;
  I(p,'minus',x+(small?10:16),y+(h-is)/2,is,C.txt);const t=T(p,String(n),0,0,{size:small?14:16,w:'b'});t.x=x+(w-t.width)/2;t.y=y+(h-t.height)/2;
  I(p,'plus',x+w-(small?10:16)-is,y+(h-is)/2,is,C.gold);}
function LINE(p,x,y,w){R(p,x,y,w,1,{f:C.line,name:'divider'});}
function CARD(p,x,y,w,h,o={}){return R(p,x,y,w,h,{fills:o.fills||[solid(o.f||C.s1)],r:o.r==null?16:o.r,s:o.s===undefined?C.line:o.s,so:o.so,name:o.name||'card'});}
function ICIRC(p,ic,x,y,d,bg,col,is){E(p,x,y,d,{f:bg||C.s2});const s=is||Math.round(d*0.5);I(p,ic,x+(d-s)/2,y+(d-s)/2,s,col||C.gold);}
function ROWKV(p,k,v,y,o={}){T(p,k,20,y,{size:o.size||14,c:o.kc||C.mut,w:o.w||'r'});T(p,v,0,y,{size:o.vsize||o.size||14,w:o.vw||'m',c:o.vc||C.txt,right:370});}

function status(f){T(f,'9:41',32,16,{size:15,w:'s'});I(f,'signal',298,17,16,C.txt);I(f,'wifi',318,17,16,C.txt);I(f,'battery-full',340,16,20,C.txt);}
function H(f,title,o={}){if(o.back!==false){E(f,20,52,40,{f:C.s2,s:C.line});I(f,o.close?'x':'chevron-left',28,60,24,C.txt);}
  T(f,title,0,61,{size:17,w:'s',center:390});
  if(o.right){E(f,330,52,40,{f:C.s2,s:C.line});I(f,o.right,338,60,24,C.txt);}
  if(o.rightText)T(f,o.rightText,0,63,{size:13,w:'s',c:C.gold,right:370});}
function TAB(f,active){R(f,0,764,390,80,{f:C.s1,name:'tabbar'});R(f,0,764,390,1,{f:C.line});
  [['house','Início',41],['search','Buscar',121],['receipt','Pedidos',269],['user','Perfil',349]].forEach(([ic,l,cx])=>{const on=l===active,col=on?C.gold:C.dim;
    I(f,ic,cx-12,780,24,col);const t=T(f,l,0,808,{size:11,w:on?'s':'m',c:col});t.x=cx-t.width/2;});
  E(f,163,730,64,{fills:[GOLD()],s:C.bg,sw:5,sa:'OUTSIDE',name:'fab/sacola'});I(f,'shopping-bag',181,748,28,C.bg);
  E(f,208,730,22,{f:C.wine,s:C.bg,sw:2,sa:'OUTSIDE'});const b=T(f,'4',0,733,{size:11,w:'b'});b.x=219-b.width/2;}

let page,OX=0,OY=0;
try{page=figma.createPage();page.name='Crema · Wireframes';await figma.setCurrentPageAsync(page);page.backgrounds=[solid('#1C1A18')];}
catch(e){LOG.push('createPage falhou: '+e);page=figma.currentPage;let mx=0;page.children.forEach(n=>{mx=Math.max(mx,n.x+n.width);});OX=mx+3000;}
const ROW0=900+OY,ROWH=1100,COLW=470;
function S(name,col,row){const f=figma.createFrame();page.appendChild(f);f.name=name;f.resize(390,844);f.x=OX+col*COLW;f.y=ROW0+row*ROWH;f.fills=[solid(C.bg)];f.clipsContent=true;status(f);return f;}
function rowLabel(row,title,sub){const y=ROW0+row*ROWH;T(page,title,OX,y-92,{size:34,w:'serif',c:C.gold});T(page,sub,OX,y-46,{size:16,c:C.mut});}
const screens=[];
function scr(fn){screens.push(fn);}

// ---------- COVER ----------
scr(()=>{const f=figma.createFrame();page.appendChild(f);f.name='00 Capa';f.resize(2820,700);f.x=OX;f.y=OY;f.fills=[grad([[0,'#0C0906'],[1,'#1A120B']],'h')];f.cornerRadius=32;
  E(f,-100,-60,820,{fills:[radial(C.gold,0.16)]});
  IMGR(f,'logo',80,150,560,401,0);
  T(f,'APP DELIVERY · WIREFRAMES',760,150,{size:16,w:'b',c:C.gold,ls:20});
  T(f,'Crema Tabacaria & Adega',760,186,{size:56,w:'serif'});
  T(f,'Fluxo completo do app: acesso com verificação +18, catálogo de adega e tabacaria, sacola, checkout, pagamento (Pix, cartão e na entrega), rastreio em tempo real, entrega com código e conferência de idade, notificações e conta.',760,276,{size:20,c:C.mut,wd:900,lh:32});
  T(f,'PALETA',760,420,{size:13,w:'b',c:C.gold,ls:20});
  [[C.bg,'Fundo','#0C0906'],[C.s1,'Superfície','#16110C'],[C.s2,'Card','#201911'],[C.gold,'Ouro','#D4A54A'],[C.goldL,'Ouro claro','#F1D18A'],[C.wine,'Vinho','#7B1424'],[C.txt,'Texto','#F4ECDD']].forEach(([h,n,hx],i)=>{const x=760+i*124;R(f,x,450,104,104,{f:h,r:20,s:C.line});T(f,n,x,566,{size:14,w:'s'});T(f,hx,x,588,{size:12,c:C.mut});});
  T(f,'TIPOGRAFIA',1660,150,{size:13,w:'b',c:C.gold,ls:20});
  T(f,'Cinzel',1660,180,{size:44,w:'serif'});T(f,'Títulos e destaques',1660,240,{size:16,c:C.mut});
  T(f,'Inter',1660,290,{size:44,w:'b'});T(f,'Interface, textos e preços',1660,350,{size:16,c:C.mut});
  T(f,'FLUXO',2160,150,{size:13,w:'b',c:C.gold,ls:20});
  ['01  Acesso e cadastro','02  Catálogo e sacola','03  Checkout e pagamento','04  Entrega e rastreio','05  Conta e notificações'].forEach((s,i)=>T(f,s,2160,186+i*40,{size:20,w:'m'}));
});

rowLabel(0,'01 · Acesso e cadastro','Splash → verificação +18 → login → cadastro → código SMS → endereço');
rowLabel(1,'02 · Catálogo e sacola','Home → categoria → produto (adega e tabacaria) → sacola');
rowLabel(2,'03 · Checkout e pagamento','Finalizar pedido → forma de pagamento → Pix → pedido confirmado');
rowLabel(3,'04 · Entrega e rastreio','Rastreio em tempo real → entregador na porta (código + idade) → avaliação');
rowLabel(4,'05 · Conta e notificações','Notificações → meus pedidos → perfil / Clube Crema');

// ---------- ROW 0 ----------
scr(()=>{const f=S('01 Splash',0,0);
  E(f,-70,170,530,{fills:[radial(C.gold,0.14)]});
  IMGR(f,'logo',25,300,340,244,0);
  R(f,155,620,80,3,{f:C.s3,r:2});R(f,155,620,30,3,{fills:[GOLD()],r:2});
  T(f,'Delivery de bebidas e tabacaria',0,740,{size:13,c:C.mut,center:390});
  T(f,'Venda proibida para menores de 18 anos',0,800,{size:11,c:C.dim,center:390});});

scr(()=>{const f=S('02 Verificação +18',1,0);
  E(f,95,90,200,{fills:[radial(C.gold,0.18)]});IMGR(f,'emblem',135,120,120,123,60);
  R(f,155,264,80,30,{f:C.wine,r:15});T(f,'+18',0,270,{size:14,w:'b',center:390});
  T(f,'Você tem 18 anos?',0,322,{size:26,w:'serif',center:390});
  T(f,'A Crema vende bebidas alcoólicas e produtos de tabacaria. Por lei, a venda é proibida para menores de 18 anos.',40,368,{size:14,c:C.mut,wd:310,lh:21,al:'CENTER'});
  IN(f,'Data de nascimento','DD / MM / AAAA',20,470,350,{icon:'calendar'});
  B(f,'Sim, tenho 18 anos ou mais',20,640,350);
  B(f,'Não tenho 18 anos',20,704,350,{v:'outline'});
  T(f,'Venda proibida para menores de 18 anos (ECA, art. 243).',0,790,{size:11,c:C.dim,center:390});});

scr(()=>{const f=S('03 Login',2,0);
  IMGR(f,'logo',95,64,200,143,0);
  T(f,'Bem-vindo de volta',20,236,{size:24,w:'serif'});
  T(f,'Entre para pedir sua bebida ou sua essência favorita.',20,272,{size:14,c:C.mut,wd:350,lh:20});
  IN(f,'E-mail ou celular','seuemail@email.com',20,322,350,{icon:'mail'});
  IN(f,'Senha','••••••••',20,400,350,{icon:'lock',ricon:'eye',active:true,filled:true});
  T(f,'Esqueci minha senha',0,478,{size:13,w:'s',c:C.gold,right:370});
  B(f,'Entrar',20,516,350);
  LINE(f,20,606,100);LINE(f,270,606,100);T(f,'ou continue com',0,598,{size:12,c:C.dim,center:390});
  B(f,'Google',20,632,169,{v:'dark',size:15});B(f,'Apple',201,632,169,{v:'dark',size:15});
  B(f,'Entrar só com o celular (SMS)',20,696,350,{v:'ghost',size:14,c:C.goldL,icon:'smartphone'});
  const a=T(f,'Não tem conta?',0,792,{size:14,c:C.mut});const b=T(f,'Cadastre-se',0,792,{size:14,w:'s',c:C.gold});const tw=a.width+6+b.width;a.x=(390-tw)/2;b.x=a.x+a.width+6;});

scr(()=>{const f=S('04 Cadastro',3,0);H(f,'Criar conta');
  T(f,'Etapa 1 de 2 · Seus dados',20,106,{size:12,w:'s',c:C.gold});R(f,20,128,350,4,{f:C.s3,r:2});R(f,20,128,175,4,{fills:[GOLD()],r:2});
  let y=148;[['Nome completo','Como está no seu documento','user'],['CPF','000.000.000-00','id-card'],['Data de nascimento','DD / MM / AAAA','calendar'],['Celular (WhatsApp)','(00) 0 0000-0000','phone'],['E-mail','seuemail@email.com','mail'],['Senha','Mínimo 8 caracteres','lock']].forEach(([l,p,ic])=>{IN(f,l,p,20,y,350,{icon:ic});y+=76;});
  CB(f,20,612,true);T(f,'Confirmo que tenho 18 anos ou mais e aceito os Termos de Uso e a Política de Privacidade.',54,612,{size:12,c:C.mut,wd:316,lh:17});
  B(f,'Continuar',20,700,350);
  const a=T(f,'Já tem conta?',0,782,{size:14,c:C.mut});const b=T(f,'Entrar',0,782,{size:14,w:'s',c:C.gold});const tw=a.width+6+b.width;a.x=(390-tw)/2;b.x=a.x+a.width+6;});

scr(()=>{const f=S('05 Código SMS',4,0);H(f,'Verificação');
  E(f,155,130,80,{f:'#2A2013'});I(f,'smartphone',175,150,40,C.gold);
  T(f,'Confirme seu celular',0,236,{size:24,w:'serif',center:390});
  T(f,'Enviamos um código de 6 dígitos por SMS para (79) 9 ••••-4321',45,278,{size:14,c:C.mut,wd:300,lh:21,al:'CENTER'});
  ['4','8','2','','',''].forEach((d,i)=>{const x=21+i*60;R(f,x,350,48,58,{f:C.s2,r:12,s:i===3?C.gold:C.line,sw:i===3?2:1});if(d){const t=T(f,d,0,365,{size:24,w:'b'});t.x=x+(48-t.width)/2;}});
  T(f,'Reenviar código em 00:45',0,436,{size:13,c:C.mut,center:390});
  T(f,'Alterar número',0,468,{size:13,w:'s',c:C.gold,center:390});
  B(f,'Confirmar',20,764,350);});

scr(()=>{const f=S('06 Endereço',5,0);H(f,'Onde vamos entregar?');
  R(f,20,112,350,230,{f:'#15110C',r:20,s:C.line});
  [150,220,290].forEach(yy=>R(f,20,yy,350,8,{f:'#211A12'}));[90,190,290].forEach(xx=>R(f,xx,112,8,230,{f:'#211A12'}));
  R(f,110,160,70,52,{f:'#14211A',r:6});
  E(f,165,190,60,{f:C.gold,fo:0.15});E(f,180,205,30,{fills:[GOLD()],s:C.bg,sw:3});I(f,'map-pin',185,180,20,C.goldL);
  B(f,'Usar minha localização atual',20,358,350,{v:'outline',icon:'navigation',size:15,h:48});
  IN(f,'CEP','00000-000',20,424,169);IN(f,'Número','120',201,424,169,{filled:true});
  IN(f,'Rua / Avenida','Rua das Flores',20,500,350,{filled:true});
  IN(f,'Complemento / referência','Apto, bloco, ponto de referência',20,576,350);
  T(f,'Salvar como',20,654,{size:12,w:'m',c:C.mut});
  let x=20;x+=CH(f,'Casa',x,676,{on:true,icon:'house'})+8;x+=CH(f,'Trabalho',x,676,{icon:'briefcase'})+8;CH(f,'Outro',x,676,{icon:'map-pin'});
  B(f,'Salvar endereço',20,764,350);});

// ---------- ROW 1 ----------
scr(()=>{const f=S('07 Home',0,1);
  I(f,'map-pin',20,60,22,C.gold);T(f,'Entregar em',52,52,{size:12,c:C.mut});const a=T(f,'Rua das Flores, 120',52,68,{size:15,w:'s'});I(f,'chevron-down',52+a.width+4,69,18,C.gold);
  E(f,330,52,40,{f:C.s2,s:C.line});I(f,'bell',338,60,24,C.txt);E(f,354,56,10,{f:C.wine,s:C.s2,sw:2});
  R(f,20,112,290,48,{f:C.s2,r:14,s:C.line});I(f,'search',34,126,20,C.mut);T(f,'Buscar vinhos, essências, gelo...',62,127,{size:14,c:C.dim});
  R(f,318,112,52,48,{fills:[GOLD()],r:14});I(f,'sliders-horizontal',332,124,24,C.bg);
  R(f,20,172,350,140,{fills:[grad([[0,'#5E101C'],[1,'#140D08']],'h')],r:20,s:C.gold,so:0.35});
  T(f,'HAPPY HOUR CREMA',38,192,{size:11,w:'b',c:C.gold,ls:12});T(f,'Combo Narguilé\n+ Gelo de Coco',38,210,{size:20,w:'serif',lh:26});
  R(f,38,270,118,26,{f:C.bg,fo:0.5,r:13});T(f,'a partir de R$ 59,90',48,276,{size:11,w:'s',c:C.goldL});
  PH(f,252,186,104,112,14,'#3A1A1A');
  [['Adega','Bebidas e gelo','wine','#3A0E16',20],['Tabacaria','Essências e acessórios','cigarette','#2E2312',201]].forEach(([t,s,ic,c0,x])=>{R(f,x,328,169,88,{fills:[grad([[0,c0],[1,C.s1]],'h')],r:18,s:C.line});I(f,ic,x+16,342,26,C.goldL);T(f,t,x+16,374,{size:16,w:'serif'});T(f,s,x+16,396,{size:11,c:C.mut});I(f,'chevron-right',x+139,342,18,C.gold);});
  T(f,'Categorias',20,434,{size:17,w:'s'});T(f,'Ver todas',0,437,{size:13,w:'s',c:C.gold,right:370});
  [['Vinhos','wine'],['Destilados','martini'],['Cervejas','beer'],['Essências','leaf'],['Carvão','flame']].forEach(([l,ic],i)=>{const x=20+i*72;E(f,x,466,56,{f:C.s2,s:C.line});I(f,ic,x+16,482,24,C.goldL);const t=T(f,l,0,530,{size:11,w:'m',c:C.mut});t.x=x+28-t.width/2;});
  T(f,'Mais pedidos',20,562,{size:17,w:'s'});T(f,'Ver todos',0,565,{size:13,w:'s',c:C.gold,right:370});
  [['Gin London Dry','750ml','R$ 79,90'],['Essência Menta Ice','50g','R$ 24,90'],['Energético','473ml','R$ 9,90']].forEach(([n,m,p],i)=>{const x=20+i*162;CARD(f,x,594,150,160,{r:18});PH(f,x+8,602,134,76,12);T(f,n,x+12,688,{size:13,w:'s'});T(f,m,x+12,706,{size:11,c:C.mut});T(f,p,x+12,726,{size:15,w:'b',c:C.gold});E(f,x+112,720,28,{fills:[GOLD()]});I(f,'plus',x+118,726,16,C.bg,{sw:3});});
  TAB(f,'Início');});

scr(()=>{const f=S('08 Categoria · Vinhos',1,1);H(f,'Vinhos',{right:'search'});
  CHROW(f,['Todos','Tintos','Brancos','Rosés','Espumantes'],20,108,null,[0]);
  T(f,'86 produtos',20,160,{size:13,c:C.mut});const o=T(f,'Mais vendidos',0,160,{size:13,w:'s',right:322});I(f,'chevron-down',324,159,16,C.gold);I(f,'sliders-horizontal',348,157,22,C.txt);
  [['Malbec Reserva','Argentina · 750ml','R$ 89,90','-10%'],['Cabernet Sauvignon','Chile · 750ml','R$ 59,90'],['Merlot Suave','Brasil · 750ml','R$ 39,90'],['Carménère Gran Reserva','Chile · 750ml','R$ 119,90']].forEach(([n,m,p,b],i)=>{const x=i%2?201:20,y=i<2?192:466;
    CARD(f,x,y,169,262,{r:18});PH(f,x+8,y+8,153,140,12);E(f,x+125,y+16,28,{f:C.bg,fo:0.7});I(f,'heart',x+131,y+22,16,i===0?C.wineL:C.txt,{fill:i===0});
    if(b){R(f,x+16,y+16,42,22,{f:C.wine,r:11});T(f,b,x+24,y+20,{size:11,w:'b'});}
    T(f,n,x+12,y+158,{size:14,w:'s',wd:145,lh:18});T(f,m,x+12,y+200,{size:12,c:C.mut});T(f,p,x+12,y+224,{size:16,w:'b',c:C.gold});
    E(f,x+125,y+216,32,{fills:[GOLD()]});I(f,'plus',x+133,y+224,16,C.bg,{sw:3});});
  TAB(f,'Início');});

function productTop(f){R(f,0,0,390,380,{f:C.s2,name:'img-produto'});I(f,'image',165,150,60,C.dim,{sw:1});
  E(f,20,52,40,{f:C.bg,fo:0.7});I(f,'chevron-left',28,60,24,C.txt);E(f,330,52,40,{f:C.bg,fo:0.7});I(f,'heart',338,60,24,C.txt);
  R(f,177,330,18,6,{fills:[GOLD()],r:3});E(f,201,330,6,{f:C.txt,fo:0.4});E(f,213,330,6,{f:C.txt,fo:0.4});
  R(f,0,350,390,494,{f:C.bg,tl:28,name:'painel'});}
scr(()=>{const f=S('09 Produto · Adega',2,1);productTop(f);status(f);
  T(f,'ADEGA · VINHO TINTO',20,374,{size:11,w:'b',c:C.gold,ls:10});
  T(f,'Malbec Reserva',20,392,{size:24,w:'serif'});
  I(f,'star',20,432,16,C.gold,{fill:true});T(f,'4,8  (126 avaliações)',42,432,{size:13,c:C.mut});
  R(f,282,426,88,28,{f:C.s2,r:14,s:C.line});I(f,'snowflake',294,432,16,C.goldL);T(f,'Gelado',316,432,{size:12,w:'s'});
  const pr=T(f,'R$ 89,90',20,464,{size:26,w:'b',c:C.gold});T(f,'R$ 99,90',20+pr.width+10,474,{size:14,c:C.dim,strike:true});
  T(f,'Tinto encorpado com notas de ameixa e baunilha e final macio. Uva Malbec, Mendoza. 750ml. Servir entre 16 e 18 °C.',20,508,{size:14,c:C.mut,wd:350,lh:20});
  T(f,'Adicionais',20,584,{size:15,w:'s'});
  [['Gelar na hora','Grátis',true],['Saca-rolhas','+ R$ 4,90',false],['Taças acrílicas (2 un.)','+ R$ 9,90',false]].forEach(([l,p,on],i)=>{const y=612+i*46;CB(f,20,y+9,on);T(f,l,54,y+11,{size:14});T(f,p,0,y+11,{size:13,w:'s',c:on?C.ok:C.mut,right:370});if(i<2)LINE(f,54,y+45,316);});
  R(f,0,756,390,88,{f:C.s1});R(f,0,756,390,1,{f:C.line});STEP(f,20,772,1);B(f,'Adicionar · R$ 89,90',156,772,214);});

scr(()=>{const f=S('10 Produto · Tabacaria',3,1);productTop(f);status(f);
  R(f,20,300,62,24,{f:C.wine,r:12});T(f,'18+',38,304,{size:12,w:'b'});
  T(f,'TABACARIA · ESSÊNCIA',20,374,{size:11,w:'b',c:C.gold,ls:10});
  T(f,'Essência Premium',20,392,{size:24,w:'serif'});
  I(f,'star',20,432,16,C.gold,{fill:true});T(f,'4,9  (342 avaliações)',42,432,{size:13,c:C.mut});
  T(f,'R$ 24,90',20,462,{size:26,w:'b',c:C.gold});
  T(f,'Sabor',20,510,{size:15,w:'s'});R(f,290,508,80,22,{f:C.s3,r:11});T(f,'Obrigatório',300,512,{size:11,w:'m',c:C.goldL});
  CHROW(f,['Menta','Uva','Melancia','Ice Mint','Frutas vermelhas','Pêssego','Maracujá'],20,540,370,[0]);
  T(f,'Tamanho',20,632,{size:15,w:'s'});
  R(f,20,660,350,44,{f:C.s2,r:12,s:C.line});R(f,24,664,171,36,{fills:[GOLD()],r:9});
  T(f,'50g · R$ 24,90',24,674,{size:13,w:'s',c:C.bg,center:171});T(f,'250g · R$ 89,90',195,674,{size:13,w:'m',center:171});
  T(f,'O Ministério da Saúde adverte: fumar causa câncer de pulmão. Venda proibida para menores de 18 anos.',20,716,{size:11,c:C.dim,wd:350,lh:15});
  R(f,0,756,390,88,{f:C.s1});R(f,0,756,390,1,{f:C.line});STEP(f,20,772,2);B(f,'Adicionar · R$ 49,80',156,772,214);});

scr(()=>{const f=S('11 Sacola',4,1);H(f,'Minha sacola',{right:'trash-2'});
  I(f,'store',20,106,20,C.gold);T(f,'Crema Tabacaria & Adega',48,108,{size:14,w:'s'});T(f,'4 itens',0,108,{size:13,c:C.mut,right:370});
  [['Malbec Reserva 750ml','Gelar na hora','R$ 89,90',1],['Essência Premium 50g','Sabor: Menta','R$ 49,80',2],['Carvão de coco 1kg','Hexagonal','R$ 19,90',1],['Gelo em cubos 5kg','Filtrado','R$ 14,90',1]].forEach(([n,o,p,q],i)=>{const y=140+i*94;
    CARD(f,20,y,350,84);PH(f,30,y+10,64,64,12);T(f,n,106,y+12,{size:14,w:'s'});T(f,o,106,y+32,{size:12,c:C.mut});T(f,p,106,y+54,{size:15,w:'b',c:C.gold});STEP(f,264,y+40,q,true);});
  I(f,'plus',20,522,18,C.gold);T(f,'Adicionar mais itens',44,522,{size:14,w:'s',c:C.gold});
  IN(f,null,'CREMA10',20,556,350,{icon:'ticket',filled:true,rtext:'Remover'});
  I(f,'circle-check-big',20,612,16,C.ok);T(f,'Cupom aplicado: R$ 10,00 de desconto',42,612,{size:12,c:C.ok});
  ROWKV(f,'Subtotal','R$ 174,50',644);ROWKV(f,'Taxa de entrega','R$ 6,00',668);ROWKV(f,'Desconto','- R$ 10,00',692,{vc:C.ok});
  LINE(f,20,718,350);ROWKV(f,'Total','R$ 170,50',728,{size:17,kc:C.txt,w:'s',vw:'b',vc:C.gold,vsize:18});
  B(f,'Ir para o pagamento',20,770,350);});

// ---------- ROW 2 ----------
scr(()=>{const f=S('12 Finalizar pedido',0,2);H(f,'Finalizar pedido');
  T(f,'Entregar em',20,108,{size:13,w:'s',c:C.mut});CARD(f,20,130,350,72);ICIRC(f,'map-pin',32,146,40);T(f,'Casa',84,142,{size:15,w:'s'});T(f,'Rua das Flores, 120 – Centro',84,164,{size:13,c:C.mut});T(f,'Trocar',0,156,{size:13,w:'s',c:C.gold,right:356});
  T(f,'Quando?',20,220,{size:13,w:'s',c:C.mut});
  CARD(f,20,242,169,64,{s:C.gold});I(f,'zap',34,262,20,C.gold);T(f,'Agora',62,254,{size:14,w:'s'});T(f,'30–45 min',62,274,{size:12,c:C.mut});
  CARD(f,201,242,169,64);I(f,'calendar',215,262,20,C.mut);T(f,'Agendar',243,254,{size:14,w:'s'});T(f,'Escolha o horário',243,274,{size:12,c:C.mut});
  T(f,'Pagamento',20,324,{size:13,w:'s',c:C.mut});CARD(f,20,346,350,64);ICIRC(f,'qr-code',32,358,40);T(f,'Pix',84,358,{size:15,w:'s'});T(f,'Aprovação imediata',84,380,{size:13,c:C.mut});T(f,'Trocar',0,370,{size:13,w:'s',c:C.gold,right:356});
  T(f,'Observações',20,428,{size:13,w:'s',c:C.mut});R(f,20,450,350,72,{f:C.s2,r:12,s:C.line});T(f,'Ex: interfone 12, deixar na portaria...',36,466,{size:14,c:C.dim});
  CARD(f,20,538,350,70,{f:'#22140E',s:C.gold,so:0.4});I(f,'id-card',34,561,24,C.goldL);T(f,'Tenha um documento com foto em mãos: o entregador vai conferir sua idade na entrega.',70,551,{size:12,wd:286,lh:17});
  ROWKV(f,'Subtotal','R$ 174,50',626);ROWKV(f,'Entrega','R$ 6,00',650);ROWKV(f,'Desconto','- R$ 10,00',674,{vc:C.ok});
  LINE(f,20,700,350);ROWKV(f,'Total','R$ 170,50',712,{size:17,kc:C.txt,w:'s',vw:'b',vc:C.gold,vsize:18});
  B(f,'Confirmar pedido · R$ 170,50',20,770,350);});

scr(()=>{const f=S('13 Forma de pagamento',1,2);H(f,'Forma de pagamento');
  function opt(y,ic,t,s,on,h){CARD(f,20,y,350,h||64,{s:on?C.gold:C.line});ICIRC(f,ic,32,y+12,40);T(f,t,84,y+13,{size:15,w:'s'});T(f,s,84,y+35,{size:12,c:C.mut});RADIO(f,334,y+21,on);}
  T(f,'Pague pelo app',20,108,{size:13,w:'s',c:C.mut});
  opt(132,'qr-code','Pix','Aprovação na hora',true);
  opt(206,'credit-card','Cartão de crédito','Mastercard •••• 4821',false);
  R(f,20,280,350,56,{r:16,s:C.line,dash:[6,4],name:'add-card'});I(f,'plus',36,298,20,C.gold);T(f,'Adicionar novo cartão',66,299,{size:14,w:'s',c:C.gold});
  T(f,'Pague na entrega',20,360,{size:13,w:'s',c:C.mut});
  opt(384,'credit-card','Cartão na maquininha','Crédito ou débito',false);
  opt(458,'banknote','Dinheiro','Informe se precisa de troco',false,160);
  LINE(f,36,526,318);T(f,'Precisa de troco?',36,542,{size:13,c:C.mut});R(f,314,538,40,24,{fills:[GOLD()],r:12});E(f,332,540,20,{f:C.bg});
  R(f,36,572,318,40,{f:C.s2,r:10,s:C.line});T(f,'Troco para R$ 200,00',50,583,{size:14});
  I(f,'lock',20,644,16,C.mut);T(f,'Pagamento seguro e criptografado',44,645,{size:12,c:C.mut});
  B(f,'Continuar com Pix',20,770,350);});

scr(()=>{const f=S('14 Pagamento Pix',2,2);H(f,'Pagamento via Pix');
  R(f,120,108,150,32,{f:'#2A1F12',r:16});I(f,'clock',136,116,16,C.gold);T(f,'Expira em 09:58',158,115,{size:13,w:'s',c:C.gold});
  R(f,85,158,220,220,{f:C.txt,r:20});
  const N=25,m=7.2,ox=105,oy=178;let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};const mods=[];
  const inFinder=(i,j)=>(i<8&&j<8)||(i>N-9&&j<8)||(i<8&&j>N-9);
  for(let i=0;i<N;i++)for(let j=0;j<N;j++){if(inFinder(i,j))continue;if(rnd()<0.48)mods.push(R(f,ox+i*m,oy+j*m,m,m,{f:C.bg}));}
  [[0,0],[N-7,0],[0,N-7]].forEach(([i,j])=>{mods.push(R(f,ox+i*m,oy+j*m,7*m,7*m,{f:C.bg}));mods.push(R(f,ox+(i+1)*m,oy+(j+1)*m,5*m,5*m,{f:C.txt}));mods.push(R(f,ox+(i+2)*m,oy+(j+2)*m,3*m,3*m,{f:C.bg}));});
  try{const q=figma.flatten(mods,f);q.name='qr-code';}catch(e){LOG.push('flatten '+e);}
  T(f,'R$ 170,50',0,398,{size:28,w:'b',center:390});T(f,'Crema Tabacaria & Adega',0,438,{size:13,c:C.mut,center:390});
  R(f,20,474,350,52,{f:C.s2,r:14,s:C.line});T(f,'00020126580014br.gov.bcb.pix0136...',36,491,{size:13,c:C.mut});I(f,'copy',334,488,22,C.gold);
  ['Abra o app do seu banco','Escolha Pix › Pix Copia e Cola','Cole o código e confirme o pagamento'].forEach((s,i)=>{const y=548+i*34;E(f,20,y,24,{f:C.s2,s:C.gold,so:0.6});const n=T(f,String(i+1),0,y+4,{size:12,w:'b',c:C.gold});n.x=32-n.width/2;T(f,s,56,y+4,{size:13});});
  R(f,20,660,350,44,{f:'#1F1910',r:12});E(f,36,678,8,{f:C.gold});T(f,'Aguardando pagamento…',54,673,{size:13,w:'m',c:C.goldL});
  B(f,'Copiar código Pix',20,708,350,{icon:'copy'});B(f,'Já fiz o pagamento',20,772,350,{v:'outline'});});

scr(()=>{const f=S('15 Pedido confirmado',3,2);
  E(f,95,120,200,{fills:[radial(C.gold,0.25)]});E(f,135,160,120,{f:C.gold,fo:0.12});E(f,155,180,80,{fills:[GOLD()]});I(f,'check',175,200,40,C.bg,{sw:3});
  T(f,'Pedido confirmado!',0,300,{size:26,w:'serif',center:390});T(f,'Pedido #CR-4821 · Pix aprovado',0,342,{size:14,c:C.mut,center:390});
  CARD(f,20,392,350,184);
  [['clock','Previsão de entrega','20:15 – 20:30'],['package','4 itens · R$ 170,50','Malbec, Essência, Carvão, Gelo'],['map-pin','Entregar em','Rua das Flores, 120 – Centro']].forEach(([ic,a,b],i)=>{const y=408+i*58;ICIRC(f,ic,36,y,36);T(f,a,84,y,{size:12,c:C.mut});T(f,b,84,y+17,{size:15,w:'s'});if(i<2)LINE(f,84,y+48,270);});
  CARD(f,20,592,350,56,{f:'#22140E',s:C.gold,so:0.4});I(f,'id-card',36,608,24,C.goldL);T(f,'Separe um documento com foto para receber.',72,611,{size:12,wd:280});
  B(f,'Acompanhar pedido',20,704,350,{icon:'navigation'});B(f,'Voltar ao início',20,768,350,{v:'ghost'});});

// ---------- ROW 3 ----------
function MAP(f){R(f,0,0,390,470,{f:'#15110C',name:'mapa'});
  [125,225,325,425].forEach(y=>R(f,0,y,390,10,{f:'#211A12'}));[90,200,300].forEach(x=>R(f,x,0,10,470,{f:'#211A12'}));
  R(f,110,145,75,70,{f:'#13201A',r:8});R(f,215,245,70,70,{f:'#13201A',r:8});R(f,315,40,60,70,{f:'#191510',r:8});R(f,10,245,70,70,{f:'#191510',r:8});
  const r=figma.createNodeFromSvg('<svg width="390" height="470" viewBox="0 0 390 470" xmlns="http://www.w3.org/2000/svg"><path d="M95 150 L95 230 L205 230 L205 330 L305 330 L305 370" stroke="#D4A54A" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>');put(f,r,0,0);r.fills=[];r.name='rota';
  E(f,73,108,44,{fills:[GOLD()],s:C.bg,sw:3});I(f,'store',84,119,22,C.bg);
  E(f,283,352,44,{f:C.wine,s:C.txt,sw:2});I(f,'house',294,363,22,C.txt);
  E(f,163,250,80,{f:C.gold,fo:0.15});E(f,181,268,44,{f:C.bg,s:C.gold,sw:2});I(f,'bike',191,278,24,C.gold);}
scr(()=>{const f=S('16 Rastreio do pedido',0,3);MAP(f);status(f);
  E(f,20,52,40,{f:C.bg,fo:0.8});I(f,'chevron-left',28,60,24,C.txt);R(f,282,52,88,40,{f:C.bg,fo:0.8,r:20});I(f,'message-circle',296,62,18,C.gold);T(f,'Ajuda',320,63,{size:13,w:'s'});
  R(f,0,430,390,414,{f:C.s1,tl:28,name:'sheet'});R(f,171,442,48,5,{f:C.line,r:3});
  T(f,'Chega em',20,464,{size:13,c:C.mut});T(f,'12 min',20,482,{size:32,w:'b'});T(f,'Previsão',0,468,{size:12,c:C.mut,right:370});T(f,'20:24',0,486,{size:18,w:'b',c:C.gold,right:370});
  T(f,'Seu pedido saiu para entrega',20,528,{size:13,w:'m',c:C.goldL});
  R(f,45,570,300,3,{f:C.s3});R(f,45,570,200,3,{fills:[GOLD()]});
  [['Confirmado',45,2],['Preparando',145,2],['A caminho',245,1],['Entregue',345,0]].forEach(([l,cx,st])=>{if(st===2){E(f,cx-11,560,22,{fills:[GOLD()]});I(f,'check',cx-7,564,14,C.bg,{sw:3});}else if(st===1){E(f,cx-16,555,32,{f:C.gold,fo:0.2});E(f,cx-11,560,22,{f:C.s1,s:C.gold,sw:2});E(f,cx-4,567,8,{f:C.gold});}else E(f,cx-11,560,22,{f:C.s3});
    const t=T(f,l,0,594,{size:11,w:st?'s':'m',c:st?C.txt:C.dim});t.x=cx-t.width/2;});
  CARD(f,20,626,350,76,{f:C.s2});E(f,34,640,48,{f:C.s3,s:C.gold,sw:1.5});I(f,'user',46,652,24,C.mut);T(f,'Carlos M.',94,642,{size:15,w:'s'});I(f,'star',94,664,14,C.gold,{fill:true});T(f,'4,9 · Moto · ABC-1D23',114,663,{size:12,c:C.mut});
  E(f,270,644,40,{f:C.s3});I(f,'message-circle',280,654,20,C.txt);E(f,318,644,40,{fills:[GOLD()]});I(f,'phone',328,654,20,C.bg);
  CARD(f,20,716,350,56,{f:'#1F170E',s:C.gold,so:0.5,r:14});I(f,'shield-check',34,732,22,C.gold);T(f,'Código de entrega',66,726,{size:13,w:'s'});T(f,'Informe ao entregador',66,744,{size:11,c:C.mut});T(f,'4 8 2 1',0,732,{size:20,w:'b',c:C.goldL,right:354,ls:10});
  T(f,'Ver detalhes do pedido',0,794,{size:13,w:'s',c:C.gold,center:390});});

scr(()=>{const f=S('17 Entregador na porta',1,3);
  E(f,95,90,200,{fills:[radial(C.gold,0.25)]});E(f,145,140,100,{fills:[GOLD()]});I(f,'bike',170,165,50,C.bg,{sw:1.8});
  T(f,'Seu pedido chegou!',0,268,{size:26,w:'serif',center:390});
  T(f,'O entregador está na sua porta. Confira os itens antes de receber.',40,310,{size:14,c:C.mut,wd:310,lh:21,al:'CENTER'});
  T(f,'Informe este código ao entregador',0,384,{size:13,w:'s',center:390});
  ['4','8','2','1'].forEach((d,i)=>{const x=46+i*78;R(f,x,412,64,72,{f:C.s2,r:16,s:C.gold,so:0.7});const t=T(f,d,0,430,{size:30,w:'b',c:C.goldL});t.x=x+(64-t.width)/2;});
  CARD(f,20,512,350,100,{f:'#2A1015',s:C.wine});I(f,'id-card',36,530,28,C.goldL);T(f,'Verificação de idade',78,528,{size:14,w:'s'});
  T(f,'Apresente um documento oficial com foto. Sem documento, bebidas e produtos de tabaco não podem ser entregues.',78,550,{size:12,c:C.mut,wd:276,lh:17});
  CARD(f,20,628,350,56,{f:C.s2});I(f,'package-check',36,644,24,C.gold);T(f,'4 itens · Pago via Pix',72,647,{size:14,w:'m'});T(f,'Ver itens',0,647,{size:13,w:'s',c:C.gold,right:354});
  B(f,'Recebi meu pedido',20,704,350,{icon:'check'});B(f,'Tive um problema com a entrega',20,768,350,{v:'ghost',size:14});});

scr(()=>{const f=S('18 Avaliação',2,3);H(f,'Avaliar pedido',{close:true});
  I(f,'circle-check-big',175,112,40,C.ok);T(f,'Entregue às 20:22 · #CR-4821',0,162,{size:12,c:C.mut,center:390});
  T(f,'Como foi sua entrega?',0,198,{size:22,w:'serif',center:390});
  for(let i=0;i<5;i++)I(f,'star',71+i*52,246,40,i<4?C.gold:C.dim,{fill:i<4,sw:1.5});
  T(f,'Muito bom!',0,300,{size:15,w:'s',c:C.gold,center:390});
  T(f,'O que você mais gostou?',20,340,{size:14,w:'s'});
  CHROW(f,['Entrega rápida','Bebida gelada','Entregador educado','Embalagem caprichada','Preço justo'],20,370,370,[0,1]);
  T(f,'Deixe um comentário',20,470,{size:14,w:'s'});R(f,20,496,350,100,{f:C.s2,r:12,s:C.line});T(f,'Conte como foi sua experiência (opcional)',36,512,{size:14,c:C.dim});
  T(f,'Gorjeta para o entregador',20,616,{size:14,w:'s'});T(f,'Opcional',0,617,{size:12,c:C.mut,right:370});
  ['R$ 2','R$ 5','R$ 10','Outro'].forEach((l,i)=>{const x=20+i*90,on=i===1;R(f,x,646,80,44,{fills:on?[GOLD()]:[solid(C.s2)],r:12,s:on?null:C.line});const t=T(f,l,0,659,{size:14,w:'s',c:on?C.bg:C.txt});t.x=x+(80-t.width)/2;});
  B(f,'Enviar avaliação',20,770,350);});

// ---------- ROW 4 ----------
scr(()=>{const f=S('19 Notificações',0,4);H(f,'Notificações',{rightText:'Ler todas'});
  CHROW(f,['Todas','Pedidos','Promoções'],20,108,null,[0]);
  function item(y,ic,bg,col,t,b,time,unread){E(f,20,y+4,44,{f:bg});I(f,ic,31,y+15,22,col);T(f,t,78,y+2,{size:14,w:'s',wd:230});T(f,b,78,y+24,{size:12,c:C.mut,wd:250,lh:16});T(f,time,0,y+4,{size:11,c:C.dim,right:370});if(unread)E(f,362,y+40,8,{f:C.gold});LINE(f,78,y+74,292);}
  T(f,'Hoje',20,160,{size:13,w:'s',c:C.mut});
  item(186,'package-check','#2E2414',C.gold,'Pedido a caminho','Carlos saiu com seu pedido #CR-4821. Chega em ~12 min.','agora',true);
  item(268,'circle-check-big','#16291E',C.ok,'Pagamento aprovado','Recebemos seu Pix de R$ 170,50.','12 min',true);
  item(350,'percent','#3A1219',C.wineL,'Happy Hour: 15% off em destilados','Válido hoje, das 18h às 21h.','2 h',false);
  T(f,'Ontem',20,440,{size:13,w:'s',c:C.mut});
  item(466,'star','#2E2414',C.gold,'Avalie seu último pedido','Conte como foi a entrega do pedido #CR-4790.','ontem',false);
  item(548,'gift','#3A1219',C.wineL,'Você ganhou um cupom','CREMA10: R$ 10 de desconto na próxima compra.','ontem',false);
  item(630,'flame','#2E2414',C.gold,'Chegaram essências novas','Conheça os sabores da semana na Tabacaria.','ontem',false);});

scr(()=>{const f=S('20 Meus pedidos',1,4);
  T(f,'Meus pedidos',20,58,{size:24,w:'serif'});
  CHROW(f,['Em andamento','Histórico'],20,106,null,[0]);
  CARD(f,20,156,350,214,{s:C.gold,so:0.6,r:18});T(f,'#CR-4821',36,172,{size:15,w:'s'});R(f,268,170,86,24,{f:'#2E2414',r:12});T(f,'A caminho',280,175,{size:11,w:'s',c:C.gold});
  T(f,'Hoje, 19:52 · 4 itens',36,194,{size:12,c:C.mut});
  for(let i=0;i<4;i++)R(f,36+i*81,222,75,4,{fills:i<3?[GOLD()]:[solid(C.s3)],r:2});
  T(f,'Chega em ~12 min',36,236,{size:13,w:'m',c:C.goldL});
  for(let i=0;i<3;i++)PH(f,36+i*48,264,40,40,10);T(f,'+1',182,276,{size:13,w:'s',c:C.mut});T(f,'R$ 170,50',0,274,{size:16,w:'b',c:C.gold,right:354});
  B(f,'Acompanhar entrega',36,316,318,{h:40,size:14,icon:'navigation'});
  T(f,'Anteriores',20,392,{size:15,w:'s'});
  [['#CR-4790','Entregue','Gin + Tônica + Gelo','02/10 · R$ 128,70',C.ok,'#16291E'],['#CR-4733','Entregue','Essência Uva + Carvão','27/09 · R$ 54,70',C.ok,'#16291E'],['#CR-4701','Cancelado','Kit Cervejas 12 un.','20/09 · R$ 79,90',C.wineL,'#3A1219']].forEach(([n,st,it,d,col,bg],i)=>{const y=422+i*112;
    CARD(f,20,y,350,100);PH(f,32,y+12,56,56,12);T(f,n,100,y+14,{size:14,w:'s'});const sw=T(f,st,0,y+17,{size:11,w:'s',c:col});R(f,354-sw.width-20,y+12,sw.width+20,22,{f:bg,r:11});top(f,sw);sw.x=344-sw.width;
    T(f,it,100,y+36,{size:12,c:C.mut});T(f,d,100,y+54,{size:12,c:C.dim});I(f,'rotate-ccw',100,y+74,14,C.gold);T(f,'Pedir de novo',120,y+73,{size:12,w:'s',c:C.gold});});
  TAB(f,'Pedidos');});

scr(()=>{const f=S('21 Perfil',2,4);
  T(f,'Perfil',20,58,{size:24,w:'serif'});E(f,330,52,40,{f:C.s2,s:C.line});I(f,'settings',338,60,24,C.txt);
  E(f,20,108,64,{f:C.s3,s:C.gold,sw:2});I(f,'user',36,124,32,C.mut);T(f,'Rafael Costa',100,116,{size:18,w:'s'});T(f,'rafael.costa@email.com',100,142,{size:13,c:C.mut});I(f,'chevron-right',346,130,20,C.dim);
  R(f,20,196,350,112,{fills:[grad([[0,'#E2B95E'],[1,'#8E6A24']],'h')],r:20});
  T(f,'CLUBE CREMA',36,214,{size:11,w:'b',c:C.bg,ls:14});T(f,'Nível Ouro',36,232,{size:22,w:'serif',c:C.bg});T(f,'320 pts',0,216,{size:15,w:'b',c:C.bg,right:354});
  R(f,36,274,318,6,{f:C.bg,fo:0.25,r:3});R(f,36,274,204,6,{f:C.bg,r:3});T(f,'Faltam 180 pts para ganhar R$ 20 de desconto',36,286,{size:11,c:C.bg,co:0.8});
  [['user','Meus dados'],['map-pin','Endereços'],['wallet','Formas de pagamento'],['ticket','Cupons','2'],['heart','Favoritos'],['bell','Notificações'],['message-circle','Ajuda e suporte'],['log-out','Sair']].forEach(([ic,l,b],i)=>{const y=324+i*54,out=l==='Sair';
    I(f,ic,22,y+15,22,out?C.wineL:C.goldL);T(f,l,60,y+17,{size:15,c:out?C.wineL:C.txt});
    if(b){E(f,316,y+16,22,{f:C.wine});const t=T(f,b,0,y+19,{size:11,w:'b'});t.x=327-t.width/2;}
    if(!out)I(f,'chevron-right',348,y+17,18,C.dim);if(i<7)LINE(f,60,y+53,310);});
  TAB(f,'Perfil');});

for(const fn of screens){try{fn();}catch(e){LOG.push(String(e&&e.stack||e));}}
figma.viewport.scrollAndZoomIntoView(page.children.filter(n=>n.x>=OX));
figma.notify('Crema · '+screens.length+' telas criadas'+(LOG.length?' ('+LOG.length+' avisos)':''));
console.log('CREMA_DONE',JSON.stringify(LOG));
figma.closePlugin(LOG.length?('Concluído com avisos: '+LOG.slice(0,3).join(' | ')):'Wireframes da Crema criados!');
})().catch(e=>figma.closePlugin('Erro: '+e));
