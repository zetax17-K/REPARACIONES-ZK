function mostrarVentana(detalles, servicio) {
    var modal = document.getElementById("ventanaEmergente");
    var infoDiv = document.getElementById("detalles");

    var detallesHTML = `
        <div class="js">
            <h2>Detalles de ${servicio}</h2>
            `;

    switch (servicio) {
        case 'Instalación de Office':
            detallesHTML += `
                <p>Instalación, configuración y activación de Office licencia permanente.<br><br>Precio: $20</p>
                `;
            break;

        case 'Restauración del Sistema':
            detallesHTML += `
                <p>Restauración del sistema operativo.<br>Si el sistema muestra fallos se puede restaurar con poco riesgo de perdida de documento.<br><br>Precio: $20</p>
                `;
            break;

        case 'Instalación de Sistema':
            detallesHTML += `
                <p>Instalación del sistema operativo desde cero con la licencia activada.<br><br>Precio: $25</p>
                `;
            break;

        default:
            detallesHTML += `<li>No hay detalles adicionales disponibles.</li>`;
            break;
    }

    detallesHTML += `</ul></div>`;
    infoDiv.innerHTML = detallesHTML;
    modal.style.display = "block";
}


function cerrarVentana() {
    document.getElementById('ventanaEmergente').style.display = 'none';
}
