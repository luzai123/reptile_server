function getRepliteList() {
    const url = document.getElementById('url').value;
    const rule = document.getElementById('rule').value;
    $.ajax({
        type: "GET",
        url: "/getData",
        dataType: 'json',
        data: {
            url: url,
            rule: rule
        },
        success: function (data) {
            // console.log(data)
            const tbody = document.getElementById("tb");
            while (tbody.childNodes.length) {
                tbody.removeChild(tbody.firstChild);
            }
            for (let tmp of data) {
                const row = getTableRow(tmp);
                tbody.appendChild(row);
            }
        },
        error: function (err) {
            console.log(err)
            alert(JSON.stringify(err));
        }
    });
}

function getTableRow(data) {
    const row = document.createElement("tr");
    for (let key in data) {
        const val = data[key];
        const tmp = document.createElement('td');
        if (key == 'href') {
            const url = document.createElement('a');
            url.href = val;
            url.target = "_blank";
            url.innerHTML = val;
            tmp.appendChild(url);
        }
        else {
            tmp.innerHTML = val;
        }
        row.appendChild(tmp);
    }
    return row;
}