const idList = [
    { primaryOrgId: "EENL01", userId: "snnl001", firstName: "ScentsyNL", lastName: "1" },
    // Add all other IDs here...
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
