


document.getElementById("removeDisc").addEventListener("click", function(){
    document.getElementById("removeForm").style.display = "block";
    document.getElementById("discForm").style.display = "none";

});

function removeDiscFromNumber(e) {
    e.preventDefault();
    const number = parseInt(document.getElementById("discNumber").value);
    const rows = document.getElementById("discTable").querySelectorAll('tr');
    if (number > 1 && number <= rows.length) {
        rows[number - 1].remove();
        document.getElementById("removeForm").style.display = "none";
        document.getElementById("removeDisc").reset();

    } else {
        alert("Numero Non Valido");

    }
}

function deleteRow(btn) {
    const row=btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
