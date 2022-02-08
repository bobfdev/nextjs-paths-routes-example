import { useRouter } from "next/router"

export default function ClientProjectsPage() {
    const router = useRouter();

    console.log(router.query);
    
    // function visitProject() {
    //     router.push('/clients/bob/project')
    // }
    
    function visitProject() {
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'bob', clientprojectid: 'project1' },
        });
    }

    return (
        <div>
            <h1>Client Projects Page</h1>
            <button onClick={visitProject}>Read More</button>
        </div>
    )
}

