window.onload = () => {
    let card = document.getElementsByClassName("pok-card-small"),
        zoombox = document.getElementsByClassName("zoom-card-box");
   
    if (card.length > 0) { for (let i of card) {
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