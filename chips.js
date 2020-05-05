// Initialize all td's to the defailt img 1 circles
console.log("Js connected");
var cols = [1,1,1,1,1,1,1];
var clrcnt = 0;
var redarr = [];
var bluarr = [];

for(var i=0 ; i < $('td').length ; i++){
  $('td').eq(i).html("<img src='./img_1.jpg' height='100px' width='100px' alt='1'>");
}

var pl1 = prompt("Please enter name for player 1 with blue chips - ");
console.log("Player 1 is : " + pl1);
var pl2 = prompt("Please enter name for player 2 with Red chips - ");
console.log("Player 2 is : " + pl2);

// col 1
$('td').eq(0).click(function(){
if(cols[0] <= 5){
  var clkst = 5 - cols[0];
  clkst = clkst * 7;
  cols[0] = cols[0] + 1;
  if(clrcnt === 0){
    $('td').eq(clkst).html("<img src='./img_2.jpg' height='100px' width='100px' alt='1'>");
    clrcnt++;
    $('p').html("Player " +pl2+ ": Your turn!");
    bluarr.push(clkst);
    checkWinner();
  }else if(clrcnt === 1){
    $('td').eq(clkst).html("<img src='./img_3.jpg' height='100px' width='100px' alt='1'>");
    clrcnt--;
    $('p').html("Player " +pl1+ ": Your turn!");
    redarr.push(clkst);
    checkWinner();
  }
}
});

// col 2

$('td').eq(1).click(function(){
if(cols[1] <= 5){
  var clkst = 5 - cols[1];
  clkst = (clkst * 7) + 1;
  cols[1] = cols[1] + 1;
  if(clrcnt === 0){
    $('td').eq(clkst).html("<img src='./img_2.jpg' height='100px' width='100px' alt='1'>");
    clrcnt++;
    $('p').html("Player " +pl2+ ": Your turn!");
    bluarr.push(clkst);
    checkWinner();
  }else if(clrcnt === 1){
    $('td').eq(clkst).html("<img src='./img_3.jpg' height='100px' width='100px' alt='1'>");
    clrcnt--;
    $('p').html("Player " +pl1+ ": Your turn!");
    redarr.push(clkst);
    checkWinner();
  }
}
});

// col 3

$('td').eq(2).click(function(){
if(cols[2] <= 5){
  var clkst = 5 - cols[2];
  clkst = (clkst * 7) + 2;
  cols[2] = cols[2] + 1;
  if(clrcnt === 0){
    $('td').eq(clkst).html("<img src='./img_2.jpg' height='100px' width='100px' alt='1'>");
    clrcnt++;
    $('p').html("Player " +pl2+ ": Your turn!");
    bluarr.push(clkst);
    checkWinner();
  }else if(clrcnt === 1){
    $('td').eq(clkst).html("<img src='./img_3.jpg' height='100px' width='100px' alt='1'>");
    clrcnt--;
    $('p').html("Player " +pl1+ ": Your turn!");
    redarr.push(clkst);
    checkWinner();
  }
}
});

// col 4

$('td').eq(3).click(function(){
if(cols[3] <= 5){
  var clkst = 5 - cols[3];
  clkst = (clkst * 7) + 3;
  cols[3] = cols[3] + 1;
  if(clrcnt === 0){
    $('td').eq(clkst).html("<img src='./img_2.jpg' height='100px' width='100px' alt='1'>");
    clrcnt++;
    $('p').html("Player " +pl2+ ": Your turn!");
    bluarr.push(clkst);
    checkWinner();
  }else if(clrcnt === 1){
    $('td').eq(clkst).html("<img src='./img_3.jpg' height='100px' width='100px' alt='1'>");
    clrcnt--;
    $('p').html("Player " +pl1+ ": Your turn!");
    redarr.push(clkst);
    checkWinner();
  }
}
});

// col 5

$('td').eq(4).click(function(){
if(cols[4] <= 5){
  var clkst = 5 - cols[4];
  clkst = (clkst * 7) + 4;
  cols[4] = cols[4] + 1;
  if(clrcnt === 0){
    $('td').eq(clkst).html("<img src='./img_2.jpg' height='100px' width='100px' alt='1'>");
    clrcnt++;
    $('p').html("Player " +pl2+ ": Your turn!");
    bluarr.push(clkst);
    checkWinner();
  }else if(clrcnt === 1){
    $('td').eq(clkst).html("<img src='./img_3.jpg' height='100px' width='100px' alt='1'>");
    clrcnt--;
    $('p').html("Player " +pl1+ ": Your turn!");
    redarr.push(clkst);
    checkWinner();
  }
}
});

// col 6

$('td').eq(5).click(function(){
if(cols[5] <= 5){
  var clkst = 5 - cols[5];
  clkst = (clkst * 7) + 5;
  cols[5] = cols[5] + 1;
  if(clrcnt === 0){
    $('td').eq(clkst).html("<img src='./img_2.jpg' height='100px' width='100px' alt='1'>");
    clrcnt++;
    $('p').html("Player " +pl2+ ": Your turn!");
    bluarr.push(clkst);
    checkWinner();
  }else if(clrcnt === 1){
    $('td').eq(clkst).html("<img src='./img_3.jpg' height='100px' width='100px' alt='1'>");
    clrcnt--;
    $('p').html("Player " +pl1+ ": Your turn!");
    redarr.push(clkst);
    checkWinner();
  }
}
});

// col 7

$('td').eq(6).click(function(){
if(cols[6] <= 5){
  var clkst = 5 - cols[6];
  clkst = (clkst * 7) + 6;
  cols[6] = cols[6] + 1;
  if(clrcnt === 0){
    $('td').eq(clkst).html("<img src='./img_2.jpg' height='100px' width='100px' alt='1'>");
    clrcnt++;
    $('p').html("Player " +pl2+ ": Your turn!");
    bluarr.push(clkst);
    checkWinner();
  }else if(clrcnt === 1){
    $('td').eq(clkst).html("<img src='./img_3.jpg' height='100px' width='100px' alt='1'>");
    clrcnt--;
    $('p').html("Player " +pl1+ ": Your turn!");
    redarr.push(clkst);
    checkWinner();
  }
}
});

// To check for 4 continuous chips vertically or horizontally
function checkWinner(){
  console.log("Inside Check Winner" + bluarr + " :: " + redarr);

  if(bluarr.length >= 4 || redarr.length >= 4){
    console.log("CHECKING BLUEEEEEEEE");
    // CHECK BLUE
    chkarr(bluarr,pl1);
    console.log("CHECKING REDDDDDDDDD");
    // CHECK RED
    chkarr(redarr,pl2);
  }
}

function chkarr(arr,pl){
  console.log("For player : " + pl);
  var win = false;
  // Sorted
  arr.sort(function(a,b){return a-b;});
  console.log("WIN 1 : " + win);

  if(arr.length >=4){
    console.log("Win inside Fn. : " + win);
    // Check vertically
    var nw = null;
    for (var i = 0; i < arr.length; i++) {
      console.log("Inside for loop : " + arr[i] );
      nw = arr[i];
      if(($.inArray(nw+7,arr)!== -1) && ($.inArray(nw+14,arr)!== -1) && ($.inArray(nw+21,arr)!== -1)){
        win = true;
        break;
      }else{
        continue;
      }

    }
      console.log("Win outside loop : " + win);
      if(win){
        cols = [6,6,6,6,6,6,6];
      }else{
        // Check Horizontally

        for (var i = 0; i < arr.length; i++) {
          var numh = arr[i];
          console.log("Inside FOR LOOP 2 : " + numh);
          if(numh === 4 || numh === 5 || numh === 6 || numh % 4 === 0 || numh %5 === 0 || numh %6 === 0){
            win = false;
          }else{
            if( ($.inArray(numh,arr) !== -1) && ($.inArray(numh+1,arr) !== -1) && ($.inArray(numh+2,arr) !== -1) && ($.inArray(numh+3,arr) !== -1)){
              win = true;
              break;
            }else{
              win = false;
            }
          }
        }

      }
  }
  console.log("Win is : " + win);
  if(win){
    cols = [6,6,6,6,6,6,6];
    $("#rslt").html(" CONGRATULATIONS !!!!! " + pl + " Won the game. </br> Please refresh the page for a new game.")
  }
}
