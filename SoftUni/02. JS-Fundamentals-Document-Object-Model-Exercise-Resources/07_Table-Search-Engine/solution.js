// function solve() {
//     const studentsData = Array.from(document.querySelectorAll('table>tbody>tr'));
    
//     let searchFieldElement = document.getElementById('searchField');
//     let searchButton = document.getElementById('searchBtn');
//     searchButton.addEventListener('click', function (event) {
//         let formattedSearch = searchFieldElement.value.toLowerCase();
//         studentsData.forEach(student => {
//             student.classList.remove('select');
//             Array.from(student.cells).forEach(cell => {
//                 if(cell.textContent.toLowerCase().includes(formattedSearch)) {
//                     student.classList.add('select');
//                 }
//             })
//             searchFieldElement.value = '';
//         })
//     });
// }


function solve() {
    let btn = document.getElementById("searchBtn");
    let rows = document.querySelectorAll("table>tbody>tr");
    let searchTerm = '';
 
    btn.addEventListener('click', search);
 
    function search() {
        Array.from(document.getElementsByClassName("select")).forEach(element => {
            element.classList.remove("select");
            debugger
        });
        searchTerm = document.getElementById("searchField").value;
        Array.from(rows).forEach(row => {
            Array.from(row.cells).forEach(cell => {
                if (cell.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                    cell.parentNode.classList.add("select");
                };
            });
        });
        if (searchTerm.length > 0) {
        };
        searchTerm.value = '';
    };
};