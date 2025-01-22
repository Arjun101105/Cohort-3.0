import axios from "axios";

export default async function BlogPage({params}:any){

    const postId = (await params).postId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data

    return <div>
        <br />
        Title: {data.title} <br />
        Body: {data.body}
    </div>
}