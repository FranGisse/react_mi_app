export default function Filters({nombreFiltro,datoFiltro,muestraValor}) {

    return(
        /* cambiamos class por className y for por htmlFor para que diferencientre el bucle y el atributo o el nombre de una clase con clases POO*/
        <div className="Filter form-check form-switch mx-2 bg-warning">
            <input className="Filter form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
            <label className="Filter form-check-label" htmlFor={nombreFiltro}>{nombreFiltro}</label>
        </div>
    )
}