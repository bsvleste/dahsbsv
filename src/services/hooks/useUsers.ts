import { useQuery } from 'react-query';
import {api} from '../../services/api';

type User={
  id:string,
  name:string,
  email:string,
  createAt:string
}
type GetUserResponse ={
  totalCount:number,
  users:User[]
}
export async function getUsers(page:number):Promise<GetUserResponse>{
  const {data,headers} = await api.get('users',{
    params:{
      page
    }
  });
  const totalCount = Number(headers['x-total-count'])
    const users = data.users.map(user=>{
      return {
        id:user.id,
        name:user.name,
        email:user.email,
        createAt:new Date(user.createAt).toLocaleDateString('pt-br',{
          day:'2-digit',
          month:'long',
          year:'numeric'
        })
      }
    });
    return {users,totalCount};
  }

export function useUsers(page:number){
  return useQuery(['users',page],()=>getUsers(page), {
     staleTime:1000 *60 *10
    })
}