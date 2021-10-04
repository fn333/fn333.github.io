var messCol=document.getElementById("messColumn");
 2     var btn=document.getElementById("btn");
 3     var con=document.getElementById("content");
 4     btn.onclick=function(){
 5         if(messCol.value.trim()==""){
 6             alert("輸入內容不可為空或者空格");
 7             return;
 8         }
 9         var messDiv=document.createElement("div");
10         messDiv.setAttribute("style","width:450px;height:30px;border:2px dotted #808080;margin-bottom:5px;");
11         {
12             //這個代碼塊用來存放構建messDiv內容的代碼:留言內容和刪除鍵的樣式
13             var messCon = document.createElement("div");
14             messCon.setAttribute("style","float:left;width:350px;height=30px;line-height:30px;overflow:auto;");
15             var del = document.createElement("a");
16             del.setAttribute("style","float:left;width:50px;height:30px;line-height:30px;");
17             del.setAttribute("href","javascript:;");
18             del.innerHTML = "刪除";
19             messDiv.appendChild(messCon);
20             messDiv.appendChild(del);
21             messCon.innerHTML=messCol.value;
22             del.onclick=function(){
23                 con.removeChild(this.parentNode);   //讓父元素content刪除子元素的messDiv
24             }
25         }
26         con.appendChild(messDiv);
27         messCol.value="";   //清空輸入框的字元內容
28     }
