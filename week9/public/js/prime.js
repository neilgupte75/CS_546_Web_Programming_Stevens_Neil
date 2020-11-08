let form=document.querySelector('.form')


let primeCheck=(num)=>{
  let onezero=0;
    if (num<0)
    {
      return false;
    }
    else if(num===1||num===0)
    {
      onezero=2;
      return onezero;
    }
    else if(num===2)
    {
      return true;
    }else
    {
      for(var i = 2; i < num; i++)
      {
        if(num % i === 0)
        {
          return false;
        }
      }
      return true;  
    }
}

 
form.addEventListener('submit',function(event){
    event.preventDefault()
    let arr=[]
    let number=parseInt(document.getElementById('Number').value)
    if(isNaN(number)==1){
        alert("Input field cannot be empty")
        return
    }
    var ol = document.getElementById("attempts");
    var items = ol.getElementsByTagName("li");
    //console.log(items)
    for (var i = 0; i < items.length; ++i) {
        //console.log(items[i].value)
        //console.log(items[i])
        let z=items[i].getAttribute("data-num");
        arr.push(parseInt(z))
        // do something with items[i], which is a <li> element
      }
    arr.push(number)
    arr.sort(function(a, b){return a - b})
    //console.log(arr)
    //for (let i = 0; i < listItems.length; i++) {
    //alert (listItems[i].textContent);   
    //}
    //arr.push(number)
    //window.sessionStorage.setItem("numbers",JSON.stringify(number));
    //let saved=window.sessionStorage.getItem("numbers");
    //console.log(JSON.parse(saved))
    //console.log(number)
    var ol = document.getElementById("attempts");
    ol.innerHTML = ""
    for (var i = 0; i < arr.length; i++) {
        //console.log(items[i].value)
        // do something with items[i], which is a <li> element
      
    let final=primeCheck(arr[i]);
    //console.log(final)
    
    var ol = document.getElementById("attempts");
    if(final===true){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`"${arr[i]} is a prime number"`));
        li.setAttribute("class","is-prime")
        li.setAttribute("data-num",arr[i])
        ol.appendChild(li)
    }
    if(final===false){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`"${arr[i]} is NOT a prime number"`));
        li.setAttribute("class","not-prime")
        li.setAttribute("data-num",arr[i])
        ol.appendChild(li)
    }
    if(final===2){
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(`"${arr[i]} is neither prime nor composite"`));
      li.setAttribute("class","not-prime")
      li.setAttribute("data-num",arr[i])
      ol.appendChild(li)
  }
}
    //console.log(arr)
})