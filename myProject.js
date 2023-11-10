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
    <h3>${dataProject[index].nama_project}</h3>
    <h5>${dataProject[index].tanggal_mulai} | ${
      dataProject[index].tanggal_selesai
    }</h5>
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
