import style from"./Todolist.module.css"

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function Todolist() {
  const[activity,setActivity]=useState("");
  const [listData,setListdata]=useState([]);
  function addActivity(){
           //work asyncronous
            //  setListdata([...listData,activity]) 
            //  console.log(listData )

            // syncronous
            setListdata(()=>{
              const updatedList =[...listData,activity]
              console.log(updatedList)
              setActivity('');
              return updatedList
            }
            )
        
  }
  function removeActivity(index){
      const updatedListData = listData.filter((elem,id)=>{return index!=id ;})
      setListdata(updatedListData);
  }
  function removeAll(){
    setListdata([])
  }
  return (
    <>
      <div className={style.container}> 
      <div className={style.header}>TODO</div>
      <input type='text' placeholder='add activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
      <button onClick={addActivity}>Add</button>
      <p className={style.Listheading}>here is your list :{")"}</p>
      {listData!=[] && listData.map((data,index)=>{
        return(
          <>
            <p key={index}>
              <div className={style.listData}>{data}</div>
              <div className={style.btnposition}><button onClick={()=>removeActivity(index)}>remove</button></div> 
            </p>
          </>
        )
      })}
      
      {listData.length>=1 &&<button onClick={removeAll}>RemoveAll</button>}
      </div>
    </>
  )
}

export default Todolist