
function Voos() {

    const voosDesponiveis = [
        {
            id: '123',
            title: 'Volta ter. 19 de junho',
            details: [
                {
                    id: '152',
                    title: 'Espaço para as pernas (76cm)'
                },
                {
                    id: '632',
                    title: 'Saída USB no assento'
                },
                {
                    id: '133',
                    title: 'Vídeo sobe demanda'
                },{
                    id: '543',
                    title: 'Estímativa de emissões de carbono: ??'
                },
            ]
        },
        {
            id: '152',
            title: 'Volta ter. 29 de junho',
            details: [
                {
                    id: '632',
                    title: 'Espaço para as pernas (76cm)'
                },
                {
                    id: '662',
                    title: 'Saída USB no assento'
                },
                {
                    id: '173',
                    title: 'Vídeo sobe demanda'
                },{
                    id: '163',
                    title: 'Estímativa de emissões de carbono: ??'
                },
            ]
        },
    ]

function ItemVooDetails(props) {
    return(
        <ul>
            {props.details.map(detail => (
                <li key={detail.id}>{detail.title} </li>
        ))}
        </ul>
    )
}


function ItemVoo(props) {
    return(
        <div className="voo">
            <header>
                <h3>{props.title}</h3>
            </header>
            <div className="voo-details">
                <ItemVooDetails details={props.details} />
            </div>
        </div>
        

    )
}

    return(
        <div className="voos">
            {voosDesponiveis.map(voo => (
                <ItemVoo key={voo.id} title={voo.title} details={voo.details} />
            ))}
        </div>
    )
}




export default Voos;