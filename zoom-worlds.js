window.onload = () => {
    let worldsall = document.getElementsByClassName("pok-card-small"),
        zoombox = document.getElementById("zoom-card-box");
   
    if (worldsall.length>0) { for (let i of worldsall) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        zoombox.innerHTML = "";
        zoombox.appendChild(clone);
        zoombox.className = "show";
      };
    }}
   
    zoombox.onclick = () => {
        zoombox.className = "";
    };
  };