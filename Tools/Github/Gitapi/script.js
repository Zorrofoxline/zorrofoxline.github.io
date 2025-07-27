async function getinfo(url) {
    uwl = `https://api.github.com/users/${url}`;
    const response = await fetch(uwl)
    .then(response => {
        Swal.fire({
  title: "done.",
  icon: "success",
  draggable: true
});
        return response.json();
    })
    .then(data => {
        console.log(data); // Process the fetched data
        console.log(data.avatar_url);
        imade = data.avatar_url;
        nameu = data.login;
        emaiu = data.email;
        locat = data.location;
        typ = data.user_view_type;
        prepos = data.public_repos;
        gotop = data.html_url;
        blos = data.blog;
        getina(imade, nameu, locat, emaiu, typ, prepos, gotop, blos);
      })
      .catch(error => {
          Swal.fire({
  title: 'Error fetching data:' + error,
  icon: "error",
  draggable: true
});
        console.error('Error fetching data:', error); // Handle errors during fetch or parsing
      });

}

function getina(aurl, name, loca, emai, typs, pe, page, bloe) {
    const git = name
    const imvElement = document.getElementById('si');
    const namea = document.getElementById('name');
    const loc = document.getElementById('location');
    const ind = document.getElementById('email');
    const tpy = document.getElementById('user_view_type');
    const pel = document.getElementById('public_repos');
    const blog = document.getElementById('blog');
    const goto = document.getElementById('goto');
    const url = document.getElementById('url');
    imvElement.src = aurl;
    namea.textContent = "name: " + name
    loc.textContent = "location: " + loca
    ind.textContent = "email: " + emai
    tpy.textContent = "user_view_type: " + typs
    pel.textContent = "public_repos: " + pe
    goto.href = page
    url.textContent = `go to ${git}`
    blog.textContent = "blog: " + bloe
}

/*function valu(isidorlv, var, id) {
 if (isidorlv) {
     const var = document.getElementById(id);
 } else {
     const var = id;
 }   
}
*/
