const labList = [
  {
    name:"lab_0",
    id: 0,
    path:'./lab_0/index.html'
  },
  {
    name:"lab_1",
    id: 1,
    path:'./lab_1/index.html'
  },
  {
    name:"lab_2",
    id: 2,
    path:'./lab_2/index.html'
  },
  {
    name:"lab_3",
    id: 3,
    path:'./lab_3/index.html'
  },
  {
    name:"lab_4",
    id: 4,
    path:'./lab_4/index.html'
  },
]
window.onload = () => {
  labList.map(item => {
    let newEle = document.createElement("a");
    newEle.className = "lab";
    newEle.href = item.path;
    let newAtag = document.createElement("span");
    newAtag.innerText = item.name;
    let newFolderIcon = document.createElement("img");
    newFolderIcon.src = "./assets/folder.png";
    newEle.appendChild(newFolderIcon);
    newEle.appendChild(newAtag);
    let labList = document.getElementById("labList");
    labList.append(newEle);
  });
}