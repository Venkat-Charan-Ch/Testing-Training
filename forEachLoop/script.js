let paths = [
    "https://cdn.pixabay.com/photo/2026/08/15/18/56/jan_meyes-flowers-10428572_1280.jpg",
    "https://cdn.pixabay.com/photo/2026/08/06/19/34/19-34-30-602_1280.jpg",
    "https://cdn.pixabay.com/photo/2026/08/26/15/44/k_michels-alps-10445555_1280.jpg",
    "https://cdn.pixabay.com/photo/2026/08/26/01/18/ri_lens-mountain-10444397_1280.jpg",
    "https://cdn.pixabay.com/photo/2026/07/27/19/04/19-04-37-755_1280.jpg"
];
let imgsContainer = document.querySelector("#canvas");

paths.forEach((path) => {
    let img = document.createElement("img");
    img.setAttribute("src" , path);
    img.style.height = "300px";
    img.style.margin = "25px";
    imgsContainer.append(img);
});
