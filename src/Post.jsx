import './Posts.css'
export default function Post ({post}){
    const {title,body,id}= post
    return(
        <div className='box-two'>
            <h2>Id:{id}</h2>
            <h3>Title: {title}</h3>
            <p>Body:{body}</p>
        </div>
    )
}