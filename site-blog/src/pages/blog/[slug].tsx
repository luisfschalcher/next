import { useRouter } from "next/router"

export default function PostPage() {
    const router = useRouter()
    const slug = router.query.slug as string
    return (
        <div className="mt-32">
            <h2 className="text-gray-100">Post Page</h2>
        </div>
    )
}