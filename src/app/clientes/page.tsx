    import { Metadata } from "next"
    import Link from 'next/link'
     
    export const metadata: Metadata = {
        title: 'Clientes'
    }
    
    export default function Clientes(){
        const id = 1
        return (
            <div>
                <Link href={`/clientes/${id}`}>Cliente 1</Link>
                <Link href={'/clientes/2'}>Cliente 2</Link>
                <Link href={'/clientes/3'}>Cliente 3</Link>
            </div>
        )
}