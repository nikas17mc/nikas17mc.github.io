function xd(tkn){document.write(tkn)}

xd("<script src='./javascript/news_variable.js'></script>");

NS4z=(document.layers);
pix9="9";
sty1="style='font-family:arial;font-size:13px;width:127px;border-radius:5px;border:2px solid #0ba279;margin-top: 0'";
sty2="style='font-family:arial;font-size:13px;border-radius:5px;border:2px solid #0ba279;margin-top: 0;margin-bottom:5px;margin:3px auto;color: #3d71aa'";
if(NS4z){pix9="10";sty1="";sty2="";}

function Ventana9(ur9){
if(OPEN_IN_A_NEW_WINDOW=="yes"){
window.location='http://'+ur9}
else{window.open('http://'+ur9)}}

function Carga9(){
ar3=sN.split(",");
kk=ar3.length;
for(i=0;i<kk;i++){
xd("<option value="+ar3[i]+"</option>")}}

function Begin(){
xd("<table border='0' cellPadding='0' cellSpacing='0'>");
xd("<form><tr><td align='center' valign='top' height='14'><font size='1'>");}

function End(){
xd("</font></td></tr><tr><td align='center'><select "+sty1+" name='list'>");
Carga9();
xd("</select></td></tr><tr><td align='center'>");
xd("</td></tr><tr><td align='center'>");
xd("<input "+sty2+" type='button' value='News' onClick='Ventana9(this.form.list.options[this.form.list.selectedIndex].value)'>");
xd("</td></tr></form></table>");}