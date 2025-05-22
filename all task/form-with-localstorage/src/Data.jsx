import React from 'react'

const Data = ({formdata,deletedata}) => {
    console.log(formdata);  
    
  return (
    <section>
     <table className='table border-4'>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>gender</th>
                <th>language</th>
                <th>city</th>
                <th>comments</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {
                formdata.map((val,index)=>{
                    const {username,useremail,gender,language,city,comments}=val;
                    return(
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{username}</td>
                            <td>{useremail}</td>
                            
                            <td>{gender}</td>
                            <td>{language.join(" ,")}</td>
                            <td>{city}</td>
                            <td>{comments}</td>
                            <td><button onClick={()=>deletedata(--index)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
     </table>
    </section>
  )
}

export default Data
