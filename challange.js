var x = setInterval(
  function() {
    document.getElementById('banner1').id = 'banner2';
  }, 20000);
var y = setInterval(
  function() {
    document.getElementById('banner2').id = 'banner1';
  }, 40000);
  var z = setInterval(
    function() {
      document.getElementById('banner1').id = 'banner2';
    }, 60000);



window.onload = x, y, z;
