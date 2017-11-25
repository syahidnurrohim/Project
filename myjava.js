var indek = 1;
showDivs(indek);

function plusDivs(n) {
  showDivs(indek += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("cntn");
  if (n > x.length) {indek = 1}    
  if (n < 1) {indek = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[indek-1].style.display = "block";  
}