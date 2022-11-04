window.onload = () => {
    let all = document.getElementsByClassName("zoomed"),
        zoombox = document.getElementById("zoom-card-box");
   
    if (all.length > 0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        zoombox.innerHTML = "";
        zoombox.appendChild(clone);
        zoombox.className = "show";

        // document.body.style.position = 'fixed';
        // document.body.style.top = `-${window.scrollY}px`;

        // document.body.style.position = '';
        // document.body.style.top = '';

        // const scrollY = document.body.style.top;
        // document.body.style.position = '';
        // document.body.style.top = '';
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
      };
    }}
   
    zoombox.onclick = () => {
        zoombox.className = "";
    };
  };
  
