// not exactly vanilla as there is one lodash function

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allUsers = Array.from(document.querySelectorAll('.user'));
var array_test = allUsers[0].getAttribute('data-value');


var test_array = JSON.parse(array_test);

var checked = {};

getChecked('job');
getChecked('techno');
getChecked('method');
getChecked('category')

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allUsers.map(function (el) {
    var job = checked.job.length ? _.intersection(Array.from(el.classList), checked.job).length : true;
    var techno = checked.techno.length ? _.intersection(Array.from(el.classList), checked.techno).length : true;
    var method = checked.method.length ? _.intersection(Array.from(el.classList), checked.method).length : true;
    var category = checked.category.length ? _.intersection(Array.from(el.classList), checked.category).length : true;
    if (job && techno && method && category){
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }
  });
}