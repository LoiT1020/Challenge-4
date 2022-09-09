function submitted(e){
    e.preventDefault();

    let namee= document.forms["id"]["name"].value
    sessionStorage.setItem("name",namee)
}