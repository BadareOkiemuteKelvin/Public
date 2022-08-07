import React, { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import ProductSkeleton from "../Products/Skeletonloading/ProductSkeleton";
import { FiTrash2} from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";

const Users = () => 
{

  const [user,setUsers] =useState([]);
  const [isLoading, setLoading] = useState(true);
  const [reload,setReload] =useState("0");
  const [LMT, setLMT] = useState(10);
  const [SQL, setSQL] = useState("SELECT * FROM users LIMIT 10");
  const [page1,setPage1] = useState(true)
  const [page2,setPage2] = useState(false)
  const [page3,setPage3] = useState(false)
  const [page4,setPage4] = useState(false)
  const [page5,setPage5] = useState(false)
  const [page6,setPage6] = useState(false)
  const [page7,setPage7] = useState(false)
  const [page8,setPage8] = useState(false)
  const [Next,setNext] = useState(50)
    const PaginationSQL1 = ({OFFSET})=>
  {
    setSQL(`SELECT * FROM users LIMIT 10`);setReload("1");setPage1(true);setPage2(false);setPage3(false);setPage4(false);setPage5(false);setPage6(false);setPage7(false);setPage8(false);
  }
  const PaginationSQL2 = ({OFFSET})=>
  {
    setSQL(`SELECT * FROM users LIMIT 10 OFFSET 10`);setReload("2");setPage1(false);setPage2(true);setPage3(false);setPage4(false);setPage5(false);setPage6(false);setPage7(false);setPage8(false)
  }
const PaginationSQL3 = ({OFFSET})=>{
  setSQL(`SELECT * FROM users LIMIT 10 OFFSET 20`);setReload("3");setPage1(false);setPage2(false);setPage3(true);setPage4(false);setPage5(false);setPage6(false);setPage7(false);setPage8(false);
}
const PaginationSQL4 = ({OFFSET})=>{

  setSQL(`SELECT * FROM users LIMIT 10 OFFSET 30`)
  setReload("4");       
  setPage1(false)
  setPage2(false)
  setPage3(false)
  setPage4(true)
  setPage5(false)
  setPage6(false)
  setPage7(false)
  setPage8(false)
  setLMT(LMT)
}
const PaginationSQL5 = ({OFFSET})=>{

  setSQL(`SELECT * FROM users LIMIT 10 OFFSET 40`)
  setReload("5");       
  setPage1(false)
  setPage2(false)
  setPage3(false)
  setPage4(false)
  setPage5(true)
  setPage6(false)
  setPage7(false)
  setPage8(false)
}
const PaginationSQL6 = ({OFFSET})=>{

  setSQL(`SELECT * FROM users LIMIT 10 OFFSET 50`)
  setReload("6");       
  setPage1(false)
  setPage2(false)
  setPage3(false)
  setPage4(false)
  setPage5(false)
  setPage6(true)
  setPage7(false)
  setPage8(false)
}
const PaginationSQL7 = ({OFFSET})=>{
  setNext(Next + 10);
  setSQL(`SELECT * FROM users LIMIT 10 OFFSET ${Next}`)
  setReload(Next);       
  setPage1(false);
  setPage2(false);
  setPage3(false);
  setPage4(false);
  setPage5(false);
  setPage6(false);
  setPage7(true);
  setPage8(false);
}
const PaginationSQL8 = ({OFFSET})=>{
  setNext(page8 + 10);
  setSQL(`SELECT * FROM users LIMIT 10 OFFSET ${Next}`)
  setReload(Next);       
  setPage1(false);
  setPage2(false);
  setPage3(false);
  setPage4(false);
  setPage5(false);
  setPage6(false);
  setPage7(true);
  setPage8(false);
}

const PaginationSQLPrevious = ({OFFSET})=>{
  setNext(Next - 10);
  setSQL(`SELECT * FROM users LIMIT 10 OFFSET ${Next}`)
  setReload(Next);       
  setPage1(false);
  setPage2(false);
  setPage3(false);
  setPage4(false);
  setPage5(false);
  setPage6(false);
  setPage7(true);
  setPage8(false);
  
}



const AdminPagination = () =>{
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev active={page7} onClick={()=>PaginationSQLPrevious(10)}/>
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item active={page1} onClick={()=>PaginationSQL1(10)}>{5}</Pagination.Item>
      <Pagination.Item active={page2} onClick={()=>PaginationSQL2(10)}>{10}</Pagination.Item>
      <Pagination.Item active={page3} onClick={()=>PaginationSQL3(20)}>{20}</Pagination.Item>
      <Pagination.Item active={page4} onClick={()=>PaginationSQL4(30)}>{30}</Pagination.Item>
      <Pagination.Item active={page5} onClick={()=>PaginationSQL5(40)}>{40}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item active={page6} onClick={()=>PaginationSQL6(50)}>{50}</Pagination.Item>
      <Pagination.Next active={page7} onClick={()=>PaginationSQL7(50)}/>
      <Pagination.Last active={page8} onClick={()=>PaginationSQL8(50)}/>
    </Pagination>
  );
}
   
  const getUsers = async () => 
  {
    
    const requestOptions = {
      method: 'POST',
      Accept:'application/json',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"LMT":`${LMT}`,"sql":`${SQL}`})
       };

     try 
     {    
      const response = await fetch('https://expressapiz.herokuapp.com/users',requestOptions)
      const fetchedUsers = await response.json();
      setUsers(fetchedUsers);         
    } 
    catch (error) {console.error(error);}finally {setLoading(false) }
  }


    const deleteUser = async (id) =>
    {
    
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "userID":`${id}`})
    };
     const status = await fetch('https://expressapiz.herokuapp.com/deleteUser',requestOptions)
     setReload(status);
     }
    useEffect(() => 
    {
     getUsers()
      
    },[reload]);
  
  
    const UserList = ({dataX})=>
    {
      return(
        <div>
                <Table striped bordered hover>
               <thead>
               <tr><th>#</th><th>Name</th><th>User Type</th><th>email</th><th>phone</th><th>Option</th></tr>
               </thead>
             <tbody>
                   {
                   dataX.map((data)=>
                   <tr>
                    <td>{data.id}</td><td>{data.name}</td><td>{data.user_type}</td><td>{data.email}</td><td>{data.phone}</td>                   
                    <td style={{ }}>
                    <div style = {{display:"flex",justifyContent:"space-between"}}>
                    <div> <Button size="sm" variant="success" onClick={()=>{}}><FaRegCopy color="white"  /></Button></div>
                    <div><a href="/edithUsers"><Button size="sm" variant="info" onClick={()=>{localStorage.setItem("name", JSON.stringify(data.id));}}><BsPencilSquare color="white" size={15} /></Button></a></div>
                    <div><Button size="sm" variant="danger" onClick={()=>deleteUser(data.id)}><FiTrash2 color="white" size={15} /></Button></div>
                    </div>
                    </td> 
                  </tr>
                  )}                  
             </tbody> 
            </Table>
          <AdminPagination />
        </div>
      )
    }

   return(
         <div>           
             {isLoading?<ProductSkeleton />:<UserList dataX = {user} />}
         </div>
  );
};

export default Users;