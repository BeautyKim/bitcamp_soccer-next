import Todo from '../Todo'
import Head from 'next/head'

export default function TodoList(){
    return(<>
        <Head>
            <title>비트캠프 TodoList</title>
        </Head>
        <h1>TodoList</h1>
        <Todo/>
    
        </>
    )
}