document.getElementById('addCon').addEventListener('click', function () {
    addItemToConTable(document.getElementById('conName').value, document.getElementById('conTel').value, document.getElementById('conMail').value);
})

function addItemToConTable(conName, conTel, conMail) {
    var CreateTr = document.createElement('tr');
    var CreateTdName = document.createElement('td');
    var CreateTdMail = document.createElement('td');
    var CreateTdTel = document.createElement('td');
    CreateTdName.append(conName);
    CreateTdMail.append(conMail);
    CreateTdTel.append(conTel);
    CreateTr.appendChild(CreateTdName);
    CreateTr.appendChild(CreateTdMail);
    CreateTr.appendChild(CreateTdTel);
    document.getElementById ('contactTable').appendChild(CreateTr);
}