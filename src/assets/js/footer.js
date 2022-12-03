export default function Footer({contacertos, PERGUNTAS}) {
    return (
        <div className="footer-concluidos" data-test="footer">{contacertos}/{PERGUNTAS.length} CONCLUIDOS</div>

    )
}