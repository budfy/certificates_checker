const cert_data = {
190801:
{
  "f_name": "Катерина",
  "s_name": "Абрамова ",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190802:
 {
  "f_name": "Ольга ",
  "s_name": "Алещенко ",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190803:
 {
  "f_name": "Тетяна",
  "s_name": "Васильєва",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190804:
 {
  "f_name": "Наталія ",
  "s_name": "Волік",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190805:
 {
  "f_name": "Валентина ",
  "s_name": "Дирда ",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190806:
 {
  "f_name": "Вікторія ",
  "s_name": "Зюзь",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190807:
 {
  "f_name": "Владислав",
  "s_name": "Лінговський",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190808:
 {
  "f_name": "Поліна ",
  "s_name": "Ревнюк ",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190809:
 {
  "f_name": "Олена ",
  "s_name": "Самофалова ",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190810:
 {
  "f_name": "Вікторія ",
  "s_name": "Сильченко",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190811:
 {
  "f_name": "Вікторія ",
  "s_name": "Сіліченко ",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190812:
 {
  "f_name": "Катерина",
  "s_name": "Сорокіна",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190813:
 {
  "f_name": "Софія",
  "s_name": "Троцковець ",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 },
190814:
 {
  "f_name": "Катерина",
  "s_name": "Яворська",
  "course_title": "Техніки арт-терапії",
  "course_length": 12,
  "course_date": "19.08.2024"
 }

};

let inp = document.getElementById("certID");
let sbmt = document.getElementById('certSbmt');
function checkURL ()
{
  return window.location.search.replace("?","")
};

if (checkURL() !== "") {
  inp.setAttribute("hidden", true);
  sbmt.setAttribute("hidden", true);
  findCert(checkURL())
} else {
    inp.removeAttribute("hidden", true);
    sbmt.removeAttribute("hidden", true);
}

function findCert (certID)
{
for (const key in cert_data) {
  if (key == certID) {
    document.querySelector(".content__text").innerHTML = `Ми підтверджуємо, що відповідно до цього сертифікату, <b>${ cert_data[certID].f_name} ${ cert_data[certID].s_name}</b> успішно завершила(в) <b>${cert_data[certID].course_length}-годинний</b> курс <b>"${ cert_data[certID].course_title}"</b>, що викладався ${ cert_data[certID].course_date}`;
  }
}
}

sbmt.addEventListener('click', () =>
{
  window.location.search = inp.value;
})