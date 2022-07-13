import React from "react";

function SingleStat(props){
   return( <div style={{height:"150px", width:"300px",  textAlign: "center", color:"white",fontFamily:'Microsoft YaHei',fontSize:"14px",fontWeight:"bold"}}>

        Output Rate
        <div style={{fontSize:"30px", paddingTop:"60px", fontWeight:"bold"}}>{props.value}</div>
    </div>);
}
export default SingleStat; 