(function(){
    function Face(name){
        this.name = name;
      }
      
      var faces = {
        0:new Face("front"),
        1:new Face("back"),
        2:new Face("right"),
        3:new Face("left"),
        4:new Face("top"),
        5:new Face("bottom")
      };
      
      var cube = document.getElementById("cube");
      var showFace = 0;
      cube.addEventListener("click", function(){
        showFace++;
        
        if(showFace>5){
          showFace = 0;
        }
        
        cube.className="show-" + faces[showFace].name;
      });
})();  