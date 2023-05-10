import React from 'react'
import { useGetUserPostsQuery } from '../../Store/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { setText } from '../../Store/userSlice'

const User = () => {
    const {data:users}=useGetUserPostsQuery()
    const {text} = useSelector(state=>state.users)
    const dispatch=useDispatch()
    console.log(users);
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>{dispatch(setText(e.target.value))}}></input>
        <button>Add Post</button>
        {
            <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user=>{
                        const {id,userId,title}=user
                        return (
                            <tr key ={id}>
                                <td>{userId}</td>
                                <td>{id}</td>
                                <td>{title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        }
    </div>
  )
}

export default User