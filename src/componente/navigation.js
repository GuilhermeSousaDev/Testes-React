import React, {useEffect,useState} from 'react';
import PostsList from './postsList'
import Loading from './loading'

   
 function Navigation(){
     const [posts,setPosts] = useState([])
     useEffect(async () => {   
        const request = await fetch('https://reqres.in/api/users?page=2')
        const response = await request.json()
        await setTimeout(() => setPosts(response.data),3000)
     });
    const usersPosts = posts.length? posts.map(post => <PostsList key={post.id} post={post}/>) : <Loading/>
     return(
         <>        
            {usersPosts}
         </>
     );
 }

export default Navigation