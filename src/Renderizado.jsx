
function PanelUsuario() {
    const isLoggedIn = true;
    const nuevoMensaje = ["mensaje1"];

    return (
        <div>
            <h1>Panel de Usuario</h1>
            {/* operador ternario */}
            {isLoggedIn ? (
                // true, if
                <button className="counter">Cerrar sesion</button>
            ) : (
                // false, else
                <button className="counter">Iniciar sesion</button>
            )}

            {/* AND */}

            {nuevoMensaje.length > 0 && (
                //true
                <p>Tienes {nuevoMensaje.length} nuevo mensaje</p>
            )}
        </div>

    );
};

export default PanelUsuario;