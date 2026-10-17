
function Render2() {

    const isLoggedIn = true;
    const usuario = null;

    if(isLoggedIn) {
        return <div>Cargando perfil....</div>;
    }
    if(!usuario) {
        return <div>No existe usuario</div>;
    }

    return (
        <div>
            <h1>Render2</h1>
        </div>
    )
}

export default Render2;