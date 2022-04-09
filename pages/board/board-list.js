import Head from "next/head"
import tableStyles from "common/style/table.module.css"
import { useEffect ,useState} from "react"
import axios from "axios"

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
                    <td colSpan={colspan} className={tableStyles.td}>게시글 없음</td>
                    </tr>
                    :data.map((board)=> (
                        <tr className={tableStyles.tr} key={board.passengerId}>
                            <td className={tableStyles.td}>{board.passengerId}</td>
                            <td className={tableStyles.td}>{board.name}</td>
                            <td className={tableStyles.td}>{board.teamId}</td>
                            <td className={tableStyles.td}>{board.subject}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default function BoardList(){
    const columns = ["passengerId", "name", "teamId", "subject"]
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
            axios.get('http://localhost:5000/api/board/list').then(res=>{
                setData(res.data.boards)
        }).catch(err=>{})
    }, [])

    return(<>
        <Head>
        <title>보드 리스트</title>
        </Head>
        <h1>보드 리스트</h1>
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)
}