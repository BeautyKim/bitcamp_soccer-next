import axios from "axios";
import { useEffect, useState } from "react";
import tableStyles from "common/style/table.module.css"
import Link from 'next/link'
import Head from "next/head";

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
                    <tr key={user.userid}>
                    <td>
                        <Link href={{pathname:`/user/[userid]`,
                                query:{selectedUser: 'test'}}} as={`/user/${user.userid}`}>
                      <a>{user.userid}</a>
                    </Link>
                    
                  </td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.birth}</td>
                  <td>{user.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function UserProfile(){
    const columns = ["사용자ID", "비밀번호", "이름", "이메일", "전화번호", "생년월일", "주소"];
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/list').then(res=>{
            setData(res.data.users)
        }).catch(err=>{})
    },[])
    return(<>
        <Head>
            <title>사용자| 목록</title>
        </Head>
        <h1>사용자 목록</h1>
        <p>회원가입 리스트입니다.</p>
        <div>
            <Table columns={columns} colspan={6} data={data}/>
        </div>
        </>
    )
} 