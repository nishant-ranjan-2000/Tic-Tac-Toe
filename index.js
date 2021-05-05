var zero=0;
var cross=0;
var play_board = [[-3, -3, -3],[-3, -3, -3],[-3, -3, -3]];
function putZero(obj){
  if(obj.firstElementChild!==null){
  }
   else if(cross==zero){
    var para = document.createElement("p");
    var node = document.createTextNode("0");
    para.appendChild(node);
    obj.appendChild(para);
    zero++;
    let a=obj.id;
    a=parseInt(a[a.length-1]);
    play_board[parseInt(a/3)][a%3]=0;

    let b=check();
    if(b==0){
      var winner=document.getElementById("modal");
      winner.style.display = "block";
      document.getElementById("result").innerHTML = "O WINS!";
      var winner=document.getElementById("winner");
      winner.innerHTML="New Game!";
    }
    else if(b==1){
      console.log("someone wins");
      var winner=document.getElementById("modal");
      winner.style.display = 'block';
      document.getElementById("result").innerHTML = "X WINS!";
      var winner=document.getElementById("winner");
      winner.innerHTML="New Game!";
    }
    else{
      var winner=document.getElementById("winner");
      winner.innerHTML="continued!";
    }

  }
  else{
    var para = document.createElement("p");
    var node = document.createTextNode("X");
    para.appendChild(node);
    obj.appendChild(para);
    cross++;
    let a=obj.id;
    a=parseInt(a[a.length-1]);
    play_board[parseInt(a/3)][a%3]=1;

    let b=check();
    if(b==0){
      var winner=document.getElementById("modal");
      winner.style.display = 'block';
      document.getElementById("result").innerHTML = "O WINS!";
      var winner=document.getElementById("winner");
      winner.innerHTML="New Game!";
    }
    else if(b==1){
      console.log("someone wins");
      var winner=document.getElementById("modal");
      winner.style.display = 'block';
      document.getElementById("result").innerHTML = "X WINS!";
      var winner=document.getElementById("winner");
      winner.innerHTML="New Game!";
    }
    else{
      var winner=document.getElementById("winner");
      winner.innerHTML="continued!";
    }

  }
}
function check(){
  for(var i=0;i<3;i++){
    let sum1=0;
    let sum2=0;
    for(var j=0;j<3;j++){
      sum1+=play_board[i][j];
      sum2+=play_board[j][i];
    }
    if(sum1==0||sum2==0){
      return 0;
    }
    else if(sum1==3||sum2==3){
      return 1;
    }
  }
  if((play_board[0][0]+play_board[1][1]+play_board[2][2])==0 || (play_board[0][2]+play_board[1][1]+play_board[2][0])==0){
    return 0;
  }
  else if((play_board[0][0]+play_board[1][1]+play_board[2][2])==3 || (play_board[0][2]+play_board[1][1]+play_board[2][0])==3){
    return 1;
  }
  else{
    return -1;
  }
}
function reload(){
  location.reload();
  return false;
}
