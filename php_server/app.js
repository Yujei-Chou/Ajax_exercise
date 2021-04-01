let list_all_btn = document.getElementById("list_all");
let list_all_div = document.getElementById("ajax_list_all");
let search_btn = document.getElementById("search");
let search_div = document.getElementById("ajax_search");
let add_btn = document.getElementById("add");
let delete_btn = document.getElementById("delete");


let list_all_func = function(data){
  let htmlStr = "";
  for(let i=0; i<Object.keys(data).length; i++){
    htmlStr += "\"" + Object.keys(data)[i] + "\":\"" + Object.values(data)[i] + "\"<br>";
  }
  list_all_div.innerHTML = htmlStr;
};


list_all_btn.addEventListener("click", function(){
  let request = new XMLHttpRequest();
  request.open('POST', './ajax.php');
  request.onload = function(){
    let json_data = JSON.parse(request.responseText);
    list_all_func(json_data);
  };
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send("list_all_clicked=yes");
});


search_btn.addEventListener("click", function(){
  let search_ID = document.getElementById("search_ID");
  
  let request = new XMLHttpRequest();
  request.open('POST', './ajax.php');
  request.onload = function(){
    search_div.innerHTML = request.responseText;

  };

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send("search_ID=" + search_ID.value);

});

add_btn.addEventListener("click", function(){
  let add_ID = document.getElementById("add_ID");
  let add_name = document.getElementById("add_name");  
  
  let request = new XMLHttpRequest();
  request.open('POST', './ajax.php');
  request.onload = function(){
    //list_all_div.innerHTML += request.responseText;
    let json_data = JSON.parse(request.responseText);
    list_all_func(json_data);    
  };
  
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send("add_ID=" + add_ID.value + "&add_name=" + add_name.value);
});


delete_btn.addEventListener("click", function(){
  let delete_ID = document.getElementById("delete_ID");

  let request = new XMLHttpRequest();
  request.open('POST', './ajax.php');
  request.onload = function(){
    let json_data = JSON.parse(request.responseText);
    list_all_func(json_data);
  };

  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send("delete_ID=" + delete_ID.value);

});

