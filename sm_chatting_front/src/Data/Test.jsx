import base64 from 'base-64';

const Test = () =>{
      let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiLrsJXshozrp50iLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiZW1haWwiOiJkZW5pc3QyM0BuYXZlci5jb20iLCJpZCI6MywiaWF0IjoxNjYzNDc0NzE1LCJleHAiOjE2NjM0NzY1MTV9.N4xjl-CARWTeRwBEJo_mZZB1u9PmERp507D-LfuiDn8";
      let payload = token.substring(token.indexOf('.')+1,token.lastIndexOf('.')); 
      let dec = JSON.parse(base64.decode(payload));
      return(
            <div>{dec.email}</div>
      )
} 

export default Test;