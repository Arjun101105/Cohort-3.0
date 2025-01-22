export default async function PostId({params}: any){
    const postId = (await params).postId

    return <div>
        {JSON.stringify(postId)}
    </div>
}