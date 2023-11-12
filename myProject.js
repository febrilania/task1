function getFullTime(tanggal) {
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = tanggal.getDate();
  const month = tanggal.getMonth();
  const year = tanggal.getFullYear();
  let hours = tanggal.getHours();
  let minutes = tanggal.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  }

  if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthList[month]} ${year} ${hours}:${minutes}`;
}
function getDistanceTime(time) {
  const timeNow = new Date().getTime(); // jam sekarang miliseconds
  const timePosted = time;

  const distance = timeNow - timePosted; // miliseconds

  // Math :
  // floor -> dibulatkan ke bawah, ex : 8.6 -> 8
  // round -> dibulatkan angka terdekat, ex : 8.3 -> 8
  // ceil -> dibulatkan ke atas, ex : 8.3 -> 9

  const distanceSeconds = Math.floor(distance / 1000);
  const distanceMinutes = Math.floor(distance / 1000 / 60);
  const distanceHours = Math.floor(distance / 1000 / 60 / 60);
  const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24);

  // console.log("distanceSeconds", distanceSeconds);
  // console.log("distanceMinutes", distanceMinutes);
  // console.log("distanceHours", distanceHours);
  // console.log("distanceDay", distanceDay);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSeconds} seconds ago `;
  }
}
let dataProject = [];
function upProject(event) {
  event.preventDefault();

  let inputName = document.getElementById("projectName").value;
  let inputstartDate = document.getElementById("startDate").value;
  let inputendDate = document.getElementById("endDate").value;
  let inputDescription = document.getElementById("description").value;

  let checkNodeJs = document.getElementById("nodeJs").checked;
  let checkNextJs = document.getElementById("nextJs").checked;
  let checkReactJs = document.getElementById("reactJs").checked;
  let checkTypeScript = document.getElementById("typeScript").checked;

  let inputFile = document.getElementById("inputFile");
  let file = inputFile.files[0];

  let imageUrl = file ? URL.createObjectURL(file) : "";

  const project = {
    nama_project: inputName,
    tanggal_mulai: inputstartDate,
    tanggal_selesai: inputendDate,
    deskripsi: inputDescription,
    postAt: new Date(),
    ceknode: checkNodeJs,
    ceknext: checkNextJs,
    cekreact: checkReactJs,
    cektype: checkTypeScript,
    file: imageUrl,
  };

  dataProject.push(project);
  console.log("dataProject", dataProject);
  renderProject();
}

function renderProject() {
  document.getElementById("cards").innerHTML = "";
  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById("cards").innerHTML += `<div class="card">
    <img src=${dataProject[index].file} alt="" />
    <a href = "detail.html"><h3>${dataProject[index].nama_project}</h3></a>
    <h5>${dataProject[index].tanggal_mulai} | ${
      dataProject[index].tanggal_selesai
    } | Posting : ${getDistanceTime(dataProject[index].postAt)}</h5>
    <p>
    ${dataProject[index].deskripsi}
    </p>
    <div class="icons">
      ${
        dataProject[index].ceknode
          ? '<img src="img/node.png" alt="Node JS">'
          : ""
      }
      ${
        dataProject[index].ceknext
          ? '<img src="img/next.png" alt="Next JS">'
          : ""
      }
      ${
        dataProject[index].cekreact
          ? '<img src="img/react.png" alt="React JS">'
          : ""
      }
      ${
        dataProject[index].cektype
          ? '<img src="img/typeScript.png" alt="TypeScript">'
          : ""
      }
    </div>
    <button>Edit</button>
    <button>Delete</button>
  </div>`;
  }
}
setInterval(function () {
  renderProject();
}, 1000);
