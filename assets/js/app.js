fetch("data/pharmacy-data.json")
  .then(res => res.json())
  .then(data => {
    const params = new URLSearchParams(window.location.search);
    const course = params.get("course");

    if (!data[course]) return;

    document.getElementById("courseTitle").innerText =
      course.toUpperCase();

    let html = "";
    for (let sem in data[course]) {
      html += `<h3>${sem}</h3><ul>`;
      data[course][sem].forEach(sub => {
        html += `<li>
          <a href="subject.html?name=${sub}">
            ${sub}
          </a>
        </li>`;
      });
      html += "</ul>";
    }
    document.getElementById("semesterList").innerHTML = html;
  });
