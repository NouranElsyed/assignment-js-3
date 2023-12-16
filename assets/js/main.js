function ValidationName(){
    var messageName = document.getElementById('messageName')
    var text = siteName.value
    var regexName =/^[a-z]{3,10}$/
    if(regexName.test(text)==true){//valid
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        messageName.classList.add('d-none');
        return true ;
    }else{//not valid
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
        messageName.classList.remove('d-none')
        return false ;
    }
}

function ValidationURL(){
    var messageURL = document.getElementById('messageURL')
    var url = siteURL.value
    var regexURL = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    if(regexURL.test(url)==true){//valid
        siteURL.classList.add('is-valid');
        siteURL.classList.remove('is-invalid');
        messageURL.classList.add('d-none');
        return true ;


    }else{//not valid
        siteURL.classList.add('is-invalid');
        siteURL.classList.remove('is-valid');
        messageURL.classList.remove('d-none')
        return false ;

    }
}




var siteName=document.getElementById("siteName");
var siteURL=document.getElementById("siteURL");
var siteList=[]


if(localStorage.getItem("siteList")==null){
    siteList=[];
}else{
    siteList= JSON.parse(localStorage.getItem("siteList"));
    console.log(siteList)
    displaySite();

}

function displaySite(){
    var cartona = ``;
    for (var i=0; i<siteList.length;i++){
        cartona += `
    <tr>
        <td>${i+1}</td>
        <td>${siteList[i].name}</td>
        <td><a class="btn btn-success" href="${siteList[i].url}">Visit</a></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger">Delete</button></td>
    </tr>
    `;
 }

 document.getElementById("row").innerHTML= cartona;
}

function addSite(){
    if(ValidationName() == true & ValidationURL() == true ){
        var site = {
            name: siteName.value,
            url: siteURL.value
        }
        console.log('hello from the other site')
        siteList.push(site); 
        console.log(site);
        console.log(siteList);
        localStorage.setItem("siteList",JSON.stringify(siteList));
         displaySite();
        }
       
    
    }
    function deleteSite(index){
        console.log("delete");
        siteList.splice(index,1);
        console.log(siteList);
        localStorage.setItem("siteList",JSON.stringify(siteList));
        displaySite();
        
}