import axios from "axios";
import { useEffect, useState } from "react";
import tableStyles from "common/style/table.module.css"

const Table = ({columns, colspan, data}) => {

    return(
        <table className={tableStyles.table}>
            <thead>
                <tr className={tableStyles.tr}>
                    {columns.map((column) => (
                        <th key={column} className={tableStyles.th}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={tableStyles.tr}>
                <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다</td>
                </tr>
                :data.map((user) => (
                    <tr className={tableStyles.tr} key={user.username}>
                        <td className={tableStyles.td}>{user.username}</td>
                        <td className={tableStyles.td}>{user.password}</td>
                        <td className={tableStyles.td}>{user.name}</td>
                        <td className={tableStyles.td}>{user.telephone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function UserList(){
    const columns = ["username", "password", "name", "telephon"];
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/list').then(res=>{
            setData(res.data.users)
        }).catch(err=>{})
    },[])
    return(<>
        <h1>사용자 목록</h1>
        <div className={tableStyles.td}>
            <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>
    )
} 