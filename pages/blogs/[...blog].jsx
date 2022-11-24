import { useRouter } from "next/router"
import { use } from "react"

export default function CatchRoute() {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>The Catch All Route</h1>
        </div>
    )
}