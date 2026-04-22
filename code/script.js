var map;
if (document.getElementById('map')) {
    map = L.map('map').setView([51.4545, -2.5879], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    fetch("https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=1%3D1&outFields=NAME,SPACES,OPERATOR_NAME,OPERATING_TIMES,CCTV&outSR=4326&f=json")
    .then(r => r.json())
    .then(outputMarkers);
}

function outputMarkers(json) {
    if (!map) return; 
    let f = json.features;
    for(let i=0; i<f.length; i++) {
        let a = f[i].attributes;
        let lat = f[i].geometry.y;
        let lon = f[i].geometry.x;
        let marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(`<b>${a.NAME}</b><br>${a.SPACES} spaces<br>Operator: ${a.OPERATOR_NAME}<br>Times: ${a.OPERATING_TIMES}<br>CCTV: ${a.CCTV}`);
    }
}     

function loadLocations() {
    const url = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=1%3D1&outFields=NAME&f=json";
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const select = document.getElementById("locationSelect");
        if (!select) return;
        select.innerHTML = "";
        
        data.features.forEach(f => {
            let option = document.createElement("option");
            option.value = f.attributes.NAME;
            option.text = f.attributes.NAME;
            select.appendChild(option);
        });
    })
    .catch(err => console.error("Error loading locations:", err));
}

function submitReview() {
    const locationSelect = document.getElementById("locationSelect");
    const reviewText = document.getElementById("reviewText");
    const formBody = document.getElementById("reviewFormBody");
    const successMsg = document.getElementById("successMessage");
    const header = document.getElementById("reviewHeader");
    const subtext = document.getElementById("reviewSubtext");


    if (!locationSelect || !reviewText || !formBody || !successMsg) return;

    const location = locationSelect.value;
    const text = reviewText.value;

    if (!location || location === "" || text.trim() === "") {
        alert("Please select a location and write a review first!");
        return;
    }

    formBody.style.display = "none";
    if (header) header.style.display = "none";
    if (subtext) subtext.style.display = "none";

    successMsg.style.display = "block";
}

function outputTable(json) {
    let element = document.getElementById("results");
    if (!element) return;
    element.innerHTML = "";
    
    if (!json.features || json.features.length === 0) {
        element.innerHTML = "<tr><td colspan='2' class='w3-center'>No results found</td></tr>";
        return;
    }

    json.features.forEach(f => {
        let a = f.attributes;
        let row = `<tr><td>${a.NAME}</td><td>${a.TYPE_DESCRIPTION}</td></tr>`;
        element.innerHTML += row;
    });
}

function query() {
    let url = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=1%3D1&outFields=NAME,TYPE_DESCRIPTION&f=json";
    fetch(url).then(r => r.json()).then(outputTable);
}

function filter(type) {
    let encodedType = encodeURIComponent(type);
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=TYPE_DESCRIPTION='${encodedType}'&outFields=NAME,TYPE_DESCRIPTION&f=json`;
    fetch(url).then(r => r.json()).then(outputTable);
}

function search() {
    let term = document.getElementById("searchInput").value;
    let encodedTerm = encodeURIComponent(term.toUpperCase());
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=UPPER(NAME) LIKE '%${encodedTerm}%'&outFields=NAME,TYPE_DESCRIPTION&f=json`;
    fetch(url).then(r => r.json()).then(outputTable);
}


window.onload = function() {
    if (document.getElementById("locationSelect")) {
        loadLocations();
    }
    if (document.getElementById("results")) {
        query();
    }
};