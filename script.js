const idList = [
    { primaryOrgId: "EENL01", userId: "snnl001", firstName: "ScentsyNL", lastName: "1" },
    { primaryOrgId: "EENL01", userId: "snnl002", firstName: "ScentsyNL", lastName: "2" },
    { primaryOrgId: "EENL01", userId: "snnl003", firstName: "ScentsyNL", lastName: "3" },
    { primaryOrgId: "EENL01", userId: "snnl004", firstName: "ScentsyNL", lastName: "4" },
    { primaryOrgId: "EENL01", userId: "snnl005", firstName: "ScentsyNL", lastName: "5" },
    { primaryOrgId: "EENL01", userId: "snnl006", firstName: "ScentsyNL", lastName: "6" },
    { primaryOrgId: "EENL01", userId: "snnl007", firstName: "ScentsyNL", lastName: "7" },
    { primaryOrgId: "EENL01", userId: "snnl008", firstName: "ScentsyNL", lastName: "8" },
    { primaryOrgId: "EENL01", userId: "snnl009", firstName: "ScentsyNL", lastName: "9" },
    { primaryOrgId: "EENL01", userId: "snnl010", firstName: "ScentsyNL", lastName: "10" },
    { primaryOrgId: "EENL01", userId: "snnl011", firstName: "ScentsyNL", lastName: "11" },
    { primaryOrgId: "EENL01", userId: "snnl012", firstName: "ScentsyNL", lastName: "12" },
    { primaryOrgId: "EENL01", userId: "snnl013", firstName: "ScentsyNL", lastName: "13" },
    { primaryOrgId: "EENL01", userId: "snnl014", firstName: "ScentsyNL", lastName: "14" },
    { primaryOrgId: "EENL01", userId: "snnl015", firstName: "ScentsyNL", lastName: "15" },
    { primaryOrgId: "EENL01", userId: "snnl016", firstName: "ScentsyNL", lastName: "16" },
    { primaryOrgId: "EENL01", userId: "snnl017", firstName: "ScentsyNL", lastName: "17" },
    { primaryOrgId: "EENL01", userId: "snnl018", firstName: "ScentsyNL", lastName: "18" },
    { primaryOrgId: "EENL01", userId: "snnl019", firstName: "ScentsyNL", lastName: "19" },
    { primaryOrgId: "EENL01", userId: "snnl020", firstName: "ScentsyNL", lastName: "20" },
    { primaryOrgId: "EENL01", userId: "snnl021", firstName: "ScentsyNL", lastName: "21" },
    { primaryOrgId: "EENL01", userId: "snnl022", firstName: "ScentsyNL", lastName: "22" },
    { primaryOrgId: "EENL01", userId: "snnl023", firstName: "ScentsyNL", lastName: "23" },
    { primaryOrgId: "EENL01", userId: "snnl024", firstName: "ScentsyNL", lastName: "24" },
    { primaryOrgId: "EENL01", userId: "snnl025", firstName: "ScentsyNL", lastName: "25" },
    { primaryOrgId: "EENL01", userId: "snnl026", firstName: "ScentsyNL", lastName: "26" },
    { primaryOrgId: "EENL01", userId: "snnl027", firstName: "ScentsyNL", lastName: "27" },
    { primaryOrgId: "EENL01", userId: "snnl028", firstName: "ScentsyNL", lastName: "28" },
    { primaryOrgId: "EENL01", userId: "snnl029", firstName: "ScentsyNL", lastName: "29" },
    { primaryOrgId: "EENL01", userId: "snnl030", firstName: "ScentsyNL", lastName: "30" },
    { primaryOrgId: "EENL01", userId: "snnl031", firstName: "ScentsyNL", lastName: "31" },
    { primaryOrgId: "EENL01", userId: "snnl032", firstName: "ScentsyNL", lastName: "32" },
    { primaryOrgId: "EENL01", userId: "snnl033", firstName: "ScentsyNL", lastName: "33" },
    { primaryOrgId: "EENL01", userId: "snnl034", firstName: "ScentsyNL", lastName: "34" },
    { primaryOrgId: "EENL01", userId: "snnl035", firstName: "ScentsyNL", lastName: "35" },
    { primaryOrgId: "EENL01", userId: "snnl036", firstName: "ScentsyNL", lastName: "36" },
    { primaryOrgId: "EENL01", userId: "snnl037", firstName: "ScentsyNL", lastName: "37" },
    { primaryOrgId: "EENL01", userId: "snnl038", firstName: "ScentsyNL", lastName: "38" },
    { primaryOrgId: "EENL01", userId: "snnl039", firstName: "ScentsyNL", lastName: "39" },
    { primaryOrgId: "EENL01", userId: "snnl040", firstName: "ScentsyNL", lastName: "40" },
    { primaryOrgId: "EENL01", userId: "snnl041", firstName: "ScentsyNL", lastName: "41" },
    { primaryOrgId: "EENL01", userId: "gronstgt01", firstName: "gronstgt01", lastName: "gronstgt01" },
    { primaryOrgId: "EENL01", userId: "gronstgt02", firstName: "gronstgt02", lastName: "gronstgt02" },
    { primaryOrgId: "EENL01", userId: "gronstgt03", firstName: "gronstgt03", lastName: "gronstgt03" },
    { primaryOrgId: "EENL01", userId: "gronstgt04", firstName: "gronstgt04", lastName: "gronstgt04" },
    { primaryOrgId: "EENL01", userId: "gronstgt05", firstName: "gronstgt05", lastName: "gronstgt05" },
    { primaryOrgId: "EENL01", userId: "gronstgt06", firstName: "gronstgt06", lastName: "gronstgt06" },
    { primaryOrgId: "EENL01", userId: "gronstgt07", firstName: "gronstgt07", lastName: "gronstgt07" },
    { primaryOrgId: "EENL01", userId: "gronstgt08", firstName: "gronstgt08", lastName: "gronstgt08" },
    { primaryOrgId: "EENL01", userId: "gronstgt09", firstName: "gronstgt09", lastName: "gronstgt09" },
    { primaryOrgId: "EENL01", userId: "gronstgt10", firstName: "gronstgt10", lastName: "gronstgt10" },
    { primaryOrgId: "EENL01", userId: "gronstgp01", firstName: "gronstgp01", lastName: "gronstgp01" },
    { primaryOrgId: "EENL01", userId: "gronstgp02", firstName: "gronstgp02", lastName: "gronstgp02" },
    { primaryOrgId: "EENL01", userId: "gron01", firstName: "GRON01", lastName: "GRON01" },
    { primaryOrgId: "EENL01", userId: "gron02", firstName: "GRON02", lastName: "GRON02" },
    { primaryOrgId: "EENL01", userId: "gron03", firstName: "GRON03", lastName: "GRON03" },
    { primaryOrgId: "EENL01", userId: "gron04", firstName: "GRON04", lastName: "GRON04" },
    { primaryOrgId: "EENL01", userId: "gron05", firstName: "GRON05", lastName: "GRON05" },
    { primaryOrgId: "EENL01", userId: "gron06", firstName: "GRON06", lastName: "GRON06" },
    { primaryOrgId: "EENL01", userId: "gron07", firstName: "GRON07", lastName: "GRON07" },
    { primaryOrgId: "EENL01", userId: "gron08", firstName: "GRON08", lastName: "GRON08" },
    { primaryOrgId: "EENL01", userId: "gron09", firstName: "GRON09", lastName: "GRON09" },
    { primaryOrgId: "EENL01", userId: "gron10", firstName: "GRON10", lastName: "GRON10" },
    { primaryOrgId: "EENL01", userId: "gron11", firstName: "GRON11", lastName: "GRON11" },
    { primaryOrgId: "EENL01", userId: "gron12", firstName: "GRON12", lastName: "GRON12" },
    { primaryOrgId: "EENL01", userId: "gron13", firstName: "GRON13", lastName: "GRON13" },
    { primaryOrgId: "EENL01", userId: "gron14", firstName: "GRON14", lastName: "GRON14" },
    { primaryOrgId: "EENL01", userId: "gron15", firstName: "GRON15", lastName: "GRON15" },
    { primaryOrgId: "EENL01", userId: "gron16", firstName: "GRON16", lastName: "GRON16" },
    { primaryOrgId: "EENL01", userId: "gron17", firstName: "GRON17", lastName: "GRON17" },
    { primaryOrgId: "EENL01", userId: "gron18", firstName: "GRON18", lastName: "GRON18" },
    { primaryOrgId: "EENL01", userId: "gron19", firstName: "GRON19", lastName: "GRON19" },
    { primaryOrgId: "EENL01", userId: "gron20", firstName: "GRON20", lastName: "GRON20" },
    { primaryOrgId: "EENL01", userId: "gron21", firstName: "GRON21", lastName: "GRON21" },
    { primaryOrgId: "EENL01", userId: "gron22", firstName: "GRON22", lastName: "GRON22" },
    { primaryOrgId: "EENL01", userId: "gron23", firstName: "GRON23", lastName: "GRON23" },
    { primaryOrgId: "EENL01", userId: "gron24", firstName: "GRON24", lastName: "GRON24" },
    { primaryOrgId: "EENL01", userId: "gron25", firstName: "GRON25", lastName: "GRON25" },
    { primaryOrgId: "EENL01", userId: "gron26", firstName: "GRON26", lastName: "GRON26" },
    { primaryOrgId: "EENL01", userId: "gron27", firstName: "GRON27", lastName: "GRON27" },
    { primaryOrgId: "EENL01", userId: "gron28", firstName: "GRON28", lastName: "GRON28" },
    { primaryOrgId: "EENL01", userId: "gron29", firstName: "GRON29", lastName: "GRON29" },
    { primaryOrgId: "EENL01", userId: "gron30", firstName: "GRON30", lastName: "GRON30" }
];

function createList() {
    const idListContainer = document.getElementById('idList');
    idList.forEach(item => {
        const button = document.createElement('button');
        button.textContent = `${item.primaryOrgId} - ${item.userId} - ${item.firstName} ${item.lastName}`;
        button.onclick = toggleButtonColor;
        idListContainer.appendChild(button);
    });
}

function toggleButtonColor(event) {
    const button = event.target;
    button.style.backgroundColor = button.style.backgroundColor === 'green' ? 'red' : 'green';
}

window.onload = createList;
