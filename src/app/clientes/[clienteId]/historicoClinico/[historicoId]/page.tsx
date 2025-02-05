interface InfoParams {
    clienteId: number
}

interface PageProps {
    params: Promise<InfoParams>
}

export default async function Cliente({ params }: PageProps) {
    const { clienteId } = await params

    return (
        <div>
            <p>Cliente {clienteId}</p>
        </div>
    )
}
