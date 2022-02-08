import Link from 'next/link';

export default function ClientsPage() {
    const clients = [
        { id: 'bob', name: 'Bob' },
        { id: 'dan', name: 'Dan' },
        { id: 'jack', name: 'Jack' }
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            {/* <ul>
                <li><Link href='/clients/bob'>Bob</Link></li>
                <li><Link href='/clients/dan'>Dan</Link></li>
                <li><Link href='/clients/jack'>Jack</Link></li>
            </ul> */}
            {/* <ul>
                {clients.map(({ id, name }) => (
                    <li key={id}>
                        <Link href={`/clients/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul> */}
            <ul>
                {clients.map(({ id, name }) => (
                    <li key={id}>
                        <Link
                            href={{
                                pathname: '/clients/[id]',
                                query: { id: id },
                            }} 
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}