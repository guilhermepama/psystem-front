import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Detalhes | Cauê Carniel-Fernandes'
}

interface InfoParams {
    params: Promise<{ clienteId: string }>
}

export default async function Info({ params }: InfoParams) {
    const { clienteId } = await params

    const parsedClienteId = parseInt(clienteId, 10)

    return (
        <p>Informações do Cliente {parsedClienteId}</p>
    )
}
