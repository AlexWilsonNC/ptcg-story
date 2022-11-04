window.onload = () => {
    let all = document.getElementsByClassName("pok-card-small"),
        zoombox = document.getElementsByClassName("zoom-card-box");
   
    if (all.length > 0) { for (let i of all) {
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