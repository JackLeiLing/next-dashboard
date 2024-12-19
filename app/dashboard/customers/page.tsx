import { fetchCustomers } from "@/app/lib/data"

export default async function Page() {

    // const customers = [{id:1, name:'Jack'},{id:2, name:'John'}, {id:3, name:'Doe'}]

    const customers = await fetchCustomers();
    return (
        <>
            <h3>Customers</h3>
            {customers.map(c=>(<p key={c.id}><span>{c.name}</span><span>{c.id}</span></p>))}
        </>
    )
       
    
        
}