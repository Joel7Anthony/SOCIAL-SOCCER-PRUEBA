document.addEventListener('DOMContentLoaded', () => {

    const buscar = document.getElementById('buscar');

    buscar.addEventListener('keyup', () => {

        const texto = buscar.value.toLowerCase();
        
        document.querySelectorAll('#table-gestion-clientes tbody tr').forEach(fila => {

            let name_president = fila.querySelector('td:nth-child(1) p').textContent.toLowerCase();
            let name_team = fila.querySelector('td:nth-child(2) p').textContent.toLowerCase();
            let color = fila.querySelector('td:nth-child(3) p').textContent.toLowerCase();
            let creationdate = fila.querySelector('td:nth-child(4) p').textContent.toLowerCase();
            let rol = fila.querySelector('td:nth-child(5) p').textContent.toLowerCase();
            let categori = fila.querySelector('td:nth-child(6) p').textContent.toLowerCase();

            if (!name_president.includes(texto) && !name_team.includes(texto) && !color.includes(texto) && !creationdate.includes(texto) && !rol.includes(texto) && !categori.includes(texto)) {
                fila.style.display = 'none';
            } else {
                fila.style.display = '';
            }

        });

    });
});