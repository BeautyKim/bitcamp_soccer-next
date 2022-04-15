import axios from "axios";
import { useEffect, useState } from "react";
import tableStyles from "common/style/table.module.css"
import Link from 'next/link'

const Table = ({columns, colspan, data}) => {

    return(
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr>
                                    <td colSpan={colspan}>데이터가 없습니다</td>
                                    </tr>
                :data.map((user) => (
                    <tr key={user.username}>
                    <td>
                        <Link href={{pathname:`/user/[username]`,
                                query:{selectedUser: 'test'}}} as={`/user/${user.username}`}>
                      <a>{user.username}</a>
                    </Link>
                    
                  </td>
                  <td>{user.password}</td>
                  <td>{user.name}</td>
                  <td>{user.telephone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function UserList(){
    const columns = ["사용자ID", "이름", "이메일", "전화번호", "생년월일", "주소"];
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/list').then(res=>{
            setData(res.data.users)
        }).catch(err=>{})
    },[])
    return(<>
        <h1>사용자 목록</h1>
        <div>
            <Table columns={columns} colspan={6} data={data}/>
        </div>
        </>
    )
} 