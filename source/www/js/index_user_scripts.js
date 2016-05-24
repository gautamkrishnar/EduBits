/*jshint browser:true */
//var siteurl="http://localhost/";
var siteurl="http://edubits.southeastasia.cloudapp.azure.com/";
/* get catgeory list */
/* @param gid=Category id */
function getcatpage(giid)
     {
         $.post(siteurl+'get_bit_by_cat.php',{"cid":giid},function(data){
        if(data.length>0)
        {
         var len=data.length;
        document.getElementById("pagelist").innerHTML="";
        for(var i=0;i<len;i++)
        {
         document.getElementById("pagelist").innerHTML=document.getElementById("pagelist").innerHTML+"<a onclick=\"getbitsimple("+data[i].bitid+")\" class=\"list-group-item allow-badge widget uib_w_23\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\"><h4 class=\"list-group-item-heading\">"+data[i].bittitle+"</h4></a>";
            //<p class=\"list-group-item-text\">Can't connect to server</p>
        }   
            activate_subpage("#categ_res");
        }
    }, 'json').fail(function(xhr,textStatus,errorThrown){
        this.console.log("error");
             activate_subpage("#errorpage");
                });
     }


//* search function */
/* @param ser=search string */
function searchdb(serstr)
{
    
    $.post(siteurl+'search.php',{"ser":serstr},function(data){
        if(data.length>0)
        {
         var len=data.length;
        document.getElementById("searchlist").innerHTML="";
        for(var i=0;i<len;i++)
        {
            document.getElementById("searchlist").innerHTML=document.getElementById("searchlist").innerHTML+"<a onclick=\"getbitsimple("+data[i].bitid+")\" class=\"list-group-item allow-badge widget uib_w_25\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\"><h4 class=\"list-group-item-heading\">"+data[i].bittitle+"</h4><p class=\"list-group-item-text\">"+data[i].bitcat+"</p></a>";
        }   
            activate_subpage("#searchresults");
        }
        else
            {
                document.getElementById("searchlist").innerHTML="<p>No results found.. If you know something about this topic, please add it to the database...</p>";
                activate_subpage("#searchresults");
            }
    }, 'json').fail(function(xhr,textStatus,errorThrown){
        this.console.log("error");
             activate_subpage("#errorpage");
                });
}

/* get single bit */
function getbitsimple(gbitid)
{
    /*bitdesctxttl  bitdesctxt*/
    $.post(siteurl+'getbit.php',{"bitid":gbitid},function(data){
        if(data.length>0)
        {
         var len=data.length;
        document.getElementById("bitdesctxttl").innerHTML="";
        document.getElementById("bitdesctxt").innerHTML="";
        document.getElementById("editbitbtn").onclick="";
        for(var i=0;i<len;i++)
        {
            document.getElementById("bitdesctxttl").innerHTML=document.getElementById("bitdesctxttl").innerHTML+"<div class=\"widget-container left-receptacle\"></div><div class=\"widget-container right-receptacle\"></div><div class=\"text-container\"><h2 style=\"font-style:italic\"><cite><span dir=\"rtl\"><strong>"+data[i].bittitle+"</strong></span></cite></h2></div>";
            document.getElementById("bitdesctxt").innerHTML=document.getElementById("bitdesctxt").innerHTML+"<div class=\"widget-container left-receptacle\"></div><div class=\"widget-container right-receptacle\"></div><div class=\"text-container\"><p><strong>"+data[i].bitdesc+"</strong></p></div>";
            /*if(data[i].more.length>0){document.getElementById("showsinglebit").innerHTML=document.getElementById("showsinglebit").innerHTM+"<button class=\"btn widget uib_w_43 d-margins btn-default\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"1\" id=\"moreinfobtn\" onclick='window.open("+data[i].more+")'><i class=\"glyphicon glyphicon-share button-icon-top\" data-position=\"top\"></i>More info</button>";
                                      document.getElementById("moreinfobtn").style="display:block";
                                     
                                     }
            else
                {
                    document.getElementById("moreinfobtn").style="display:none";
                    
                }*/
                
            if(localStorage.getItem("logflag")==1)
            {
                document.getElementById("editbitbtn").innerHTML="<i class=\"glyphicon glyphicon-ok button-icon-top\" data-position=\"top\"></i>Update Bit";
                localStorage.setItem("curbit",data[i].bitid);
                
            }
            else
               {
                   document.getElementById("editbitbtn").innerHTML="<i class=\"glyphicon glyphicon-pencil button-icon-top\" data-position=\"top\"></i>Login to Edit";
                   
               }
        }   
            activate_subpage("#showsinglebit");
        }
    }, 'json').fail(function(xhr,textStatus,errorThrown){
        activate_subpage("#errorpage");
                });
    
}

/* edit bit function */
function editbit(bitcat,bitid,title,desc)
{
    document.getElementById("titlebit").value=title;
    document.getElementById("descbit").value=desc;
    document.getElementById("catedirbill").selectedIndex=bitcat;
    activate_subpage("#editbitpage");   
}


/* add a new bit*/
function newbit(bitcat,bittittle,bitdesc)
{
    $.post(siteurl+'addbit.php',{"bitcat":bitcat,"bitttl":bittittle,"bitdesc":bitdesc},function(data){
    return 0;
    }, 'json').fail(function(xhr,textStatus,errorThrown){
        return 1;
                });
 }

/* editbit post function  */
function neweditbit(bitcat,bittittle,bitdesc,bitid)
{
    $.post(siteurl+'editbit.php',{"bitcat":bitcat,"bitttl":bittittle,"bitdesc":bitdesc,"bitid":bitid},function(data){
    return 0;
    }, 'json').fail(function(xhr,textStatus,errorThrown){
        return 1;
                });
 }
/* Overloaded instance of the above function
function newbit(bitcat,bittittle,bitdesc,morerurl)
{
        $.post(siteurl+'addbit.php',{"bitcat":bitcat,"bitttl":bittittle,"bitdesc":bitdesc,"moreurl":morerurl},function(data){
    return 0;
    }, 'json').fail(function(xhr,textStatus,errorThrown){
        return 1;
                });
    
}*/


function updbt(bitid,bitcat,bitt,bitdesc)
{
    
}


function apppreloader()
{
     $.post(siteurl+'getcat.php',{},function(data){
    var len=data.length;
    var inp=document.getElementById("catlist");
        inp.innerHTML="";
    var cat=document.getElementById("addbitcat");
         cat.innerHTML="<option>Select</option>";
    var cat2=document.getElementById("catedirbill");
         cat2.innerHTML="<option>Select</option>";
    for(var i=0;i<len;i++)
        {
            inp.innerHTML=inp.innerHTML+
                "<a onclick=\"getcatpage("+data[i].id+")\" class=\"list-group-item allow-badge widget uib_w_20\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\"><h4 class=\"list-group-item-heading\">"+data[i].name+"</h4></a>";
            cat.innerHTML=cat.innerHTML+"<option>"+data[i].name+"</option>";
            cat2.innerHTML=cat2.innerHTML+"<option>"+data[i].name+"</option>";
            
        }
    }, 'json').fail(function(xhr,textStatus,errorThrown){
         activate_subpage("#errorpage");
                });
    
    if(localStorage.getItem("logflag")==1)
        {
           
            document.getElementById("swipemenus").innerHTML="<a onclick=\"appreset();activate_subpage('#addbitpage');uib_sb.toggle_sidebar($('#swipebar'));\" class=\"list-group-item allow-badge widget uib_w_41 d-margins\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\"><h4 class=\"list-group-item-heading\">Add Bits</h4></a>"+document.getElementById("swipemenus").innerHTML;
        document.getElementById("usernametext").innerHTML="<p>"+localStorage.getItem("user_nm")+"</p>";
            document.getElementById("swipelogin").innerHTML='<h4 class="list-group-item-heading">Logout</h4>';
        }
}
function appreset()
{
    document.getElementById('addbitcat').selectedIndex=0;document.getElementById("addbtittl").value='';
    document.getElementById("addbitdesc").value='';
}

/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
    
    
 function register_event_handlers()
 {
    
    apppreloader();
    /*       EVENT HANDLERZ ---------------------------------------------------------------------------    */
        /* button  #backbtnsrc */
    $(document).on("click", "#backbtnsrc", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_72_61"); 
    });
    
        /* button  #headmenu1 */
    $(document).on("click", "#headmenu1", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#swipebar"));  
    
    });
    
        /* listitem  #swipehome */
    $(document).on("click", "#swipehome", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_72_61"); 
        uib_sb.toggle_sidebar($("#swipebar"));  
    });
    
        /* listitem  #swipecategories */
    $(document).on("click", "#swipecategories", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#categories"); 
        uib_sb.toggle_sidebar($("#swipebar"));  
    });
    
        /* button  #searchbtn */
    $(document).on("click", "#searchbtn", function(evt)
    {
        var sertext=document.getElementById("searchtxt").value;
        if(sertext.length<1)
            {document.getElementById("searchtxt").value="Enter keyword..."; return;}
        else if (document.getElementById("searchtxt").value=="Enter keyword...")
            {return;}
        document.getElementById("searchtxt").value="";
        searchdb(sertext);
        
    });
    
        /* listitem  #swipelogin */
    $(document).on("click", "#swipelogin", function(evt)
    {
        if(localStorage.getItem("logflag")==1)
        {
            localStorage.setItem("logflag",0);
            document.getElementById("swipelogin").innerHTML='<h4 class="list-group-item-heading">Login</h4>';
            
            document.getElementById("usernametext").innerHTML="<p>Guest</p>";
            uib_sb.toggle_sidebar($("#swipebar"));
            document.getElementById("swipemenus").innerHTML="<a class=\"list-group-item allow-badge widget uib_w_12\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\" id=\"swipehome\"><h4 class=\"list-group-item-heading\">Search</h4></a><a class=\"list-group-item allow-badge widget uib_w_13\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\" id=\"swipecategories\"><h4 class=\"list-group-item-heading\">Categories</h4></a><a class=\"list-group-item allow-badge widget uib_w_14\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\" id=\"swipelogin\"><h4 class=\"list-group-item-heading\">Login</h4></a>";
            activate_subpage("#login");
            return;
        }
     
        /*global activate_subpage */
         activate_subpage("#login"); 
        uib_sb.toggle_sidebar($("#swipebar"));  
    });
     /* updatebit button */
     $('#editbitbtn').on('click', function(event) {
         
         if(localStorage.getItem("logflag")==1){
                    var gbitid=localStorage.getItem("curbit");
         $.post(siteurl+'getbit.php',{"bitid":gbitid},function(data){
        if(data.length>0)
        {
         var len=data.length;
        for(var i=0;i<len;i++)
        {
            editbit(data[i].catid,data[i].bitid,data[i].bittitle,data[i].bitdesc);
        }   
        }
    }, 'json').fail(function(xhr,textStatus,errorThrown){
        activate_subpage("#errorpage");
                });}
         else{
            activate_subpage("#login");
         }
        });
         
    
        /* button  #loginbtn */
    $(document).on("click", "#loginbtn", function(evt)
    {
        var uname=document.getElementById("usn").value;
        var passw=document.getElementById("pass").value;
        document.getElementById("usn").value="";
        document.getElementById("pass").value="";
        var pwd="usn="+uname+"&pss="+passw;
        $.post(siteurl+'login.php',{"usn":uname,"pss":passw},function(data){
        if(data.key==1)
        {
            localStorage.setItem("logflag",1);
            activate_subpage("#page_72_61");
            document.getElementById("swipelogin").innerHTML='<h4 class="list-group-item-heading">Logout</h4>';
            document.getElementById("swipemenus").innerHTML="<a onclick=\"appreset();activate_subpage('#addbitpage');uib_sb.toggle_sidebar($('#swipebar'));\" class=\"list-group-item allow-badge widget uib_w_41 d-margins\" data-uib=\"twitter%20bootstrap/list_item\" data-ver=\"1\"><h4 class=\"list-group-item-heading\">Add Bits</h4></a>"+document.getElementById("swipemenus").innerHTML;
            localStorage.setItem("user_nm",data.user_name);
            document.getElementById("usernametext").innerHTML="<p>"+data.user_name+"</p>";
            
        }
        else
            {
             document.getElementById("pwdtextw").innerHTML="Wrong username or password!";
                return;
            }
    }, 'json').fail(function(xhr,textStatus,errorThrown){
        document.getElementById("pwdtextw").innerHTML="Check your internet connection!";
                });
    });
        /* button  #addbitbtn */
    $(document).on("click", "#addbitbtn", function(evt)
    {
        var catid=document.getElementById("addbitcat").selectedIndex;
        var tittl=document.getElementById("addbtittl").value;
        var desc=document.getElementById("addbitdesc").value;
        //var morurl=document.getElementById("morinfoadd").value;
        if(catid<1){document.getElementById("addbiterrordesc").innerHTML="<p>Select a category...</p>"; return;}
        else if(tittl.length<1){document.getElementById("addbiterrordesc").innerHTML="<p>Enter a title...</p>";return;}
        else if(desc.length<1){document.getElementById("addbiterrordesc").innerHTML="<p>Enter a description...</p>";return;}
        else if(desc.length>300||tittl.length>80){document.getElementById("addbiterrordesc").innerHTML="<p>Description<300 and Title<80 chars.</p>";return;}
        else{
            var k;
            /*if(morurl.length>0){
            k=newbit(catid,tittl,desc,morurl);
            }
            else
                {
                   k=newbit(catid,tittl,desc);
                }*/
            k=newbit(catid,tittl,desc);
            if(k==1){document.getElementById("addbiterrordesc").innerHTML="<p>Network error!</p>";return;}
        }
        getcatpage(catid);
    });
    
        /* button  #updatebit on page editbit */
    $(document).on("click", "#updatebit", function(evt)
    {
        var catid=document.getElementById("catedirbill").selectedIndex;
        var tittl=document.getElementById("titlebit").value;
        var desc=document.getElementById("descbit").value;
        //var morurl=document.getElementById("morinfoadd").value;
        if(catid<1){document.getElementById("editbiterr").innerHTML="<p>Select a category...</p>"; return;}
        else if(tittl.length<1){document.getElementById("editbiterr").innerHTML="<p>Enter a title...</p>";return;}
        else if(desc.length<1){document.getElementById("editbiterr").innerHTML="<p>Enter a description...</p>";return;}
        else if(desc.length>300||tittl.length>80){document.getElementById("editbiterr").innerHTML="<p>Description<300 and Title<80 chars.</p>";return;}
        else{
            var k;
            /*if(morurl.length>0){
            k=newbit(catid,tittl,desc,morurl);
            }
            else
                {
                   k=newbit(catid,tittl,desc);
                }*/
            var bitid=localStorage.getItem("curbit");
            k=neweditbit(catid,tittl,desc,bitid);
            if(k==1){document.getElementById("addbiterrordesc").innerHTML="<p>Network error!</p>";return;}
        }
        getcatpage(catid);
        
    });
    
        /* button  #joinnowbtn */
    $(document).on("click", "#joinnowbtn", function(evt)
    {
        var usn=document.getElementById("reg_username").value;
        var pass=document.getElementById("reg_pass").value;
        var email=document.getElementById("reg_email").value;
        var name=document.getElementById("reg_name").value;
        var err=document.getElementById("regerrorline");
        if(usn.length<=6){err.innerHTML="Username must be greater than 6 chars";return;}
        if(pass.length<=8){err.innerHTML="Password must be greater than 8 chars";return;}
        if(email.length<1){err.innerHTML="Enter a valid email";return;}
        if(name.length<2){err.innerHTML="Enter a valid name";return;}
        
        $.post(siteurl+'adduser.php',{"usn":usn,"pss":pass,"name":name,"email":email},function(data){
        if(data.length>0)
        {
            if(data=="user_found")
                {
                    err.innerHTML="Username already exists. Try another one.";
                    return;
                }            
        }
    }, 'json').fail(function(xhr,textStatus,errorThrown){
                err.innerHTML="Can't connect to the server. Try again.";
                });
        
        activate_subpage("#login");
        
    });
    
        /* button  #register */
    
    
        /* button  #register */
    $(document).on("click", "#register", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#registeruserpage"); 
    });
    
        /* listitem  #swipeabout */
    $(document).on("click", "#swipeabout", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#aboutpage"); 
        uib_sb.toggle_sidebar($("#swipebar"));
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
