function addUser(){
    var player1=document.getElementById("player1_name_input");
    var player2=document.getElementById("player2_name_input");
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    document.location.href="quiz_page.html"
}