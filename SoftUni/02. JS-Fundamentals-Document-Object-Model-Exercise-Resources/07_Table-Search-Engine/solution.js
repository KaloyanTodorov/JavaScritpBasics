function solve() {
    const studentsData = Array.from(document.querySelectorAll('table>tbody>tr'));
    
    let searchFieldElement = document.getElementById('searchField');
    let searchButton = document.getElementById('searchBtn');
    searchButton.addEventListener('click', function (event) {
        let formattedSearch = searchFieldElement.value.toLowerCase();
        studentsData.forEach(student => {
            student.classList.remove('select');
            Array.from(student.cells).forEach(cell => {
                if(cell.textContent.toLowerCase().includes(formattedSearch)) {
                    student.classList.add('select');
                }
            })
            searchFieldElement.value = '';
        })
    });
}