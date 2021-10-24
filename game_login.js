function addUser(){
    p1 =document.getElementById("player1_name_input").value;
    p2 =document.getElementById("player2_name_input").value;

    localStorage.setItem("player1name",p1);
    localStorage.setItem("player2name",p2);

    window.location="game_page.html";
    
}