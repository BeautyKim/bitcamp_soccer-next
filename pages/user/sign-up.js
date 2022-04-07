import axios from "axios"
import { useState } from "react"

export default function SignUp(){
    const [input, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs({...input, [name]: value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/sign-up', input).then(res=>{
            alert(res.data.result)
        }).catch(err=>alert(err))
    }

    return (<div>
        <form action="" onSubmit={handleSubmit}>
        <h1>회원가입폼</h1>
        <div>
        <label><b>사용자 ID</b></label>
        <input type="text" name='username' onChange={handleChange}/><br />

        <label htmlFor=""><b>비밀번호</b></label>
        <input type="text" name='password' onChange={handleChange}/><br />

        <label><b>이름</b></label>
        <input type="text" name='name'  onChange={handleChange}/><br />

        <label><b>전화번호</b></label>
        <input type="text" name='telephone' onChange={handleChange}/><br />

        <input type="submit" value="전송"/>
        </div>
        </form>
        <div><span id="res-span"></span></div>
    </div>)
}