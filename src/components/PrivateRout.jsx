import { useSelector } from 'react-redux/es/exports'
import { Navigate } from 'react-router';

const PrivateRout = ({children}) => {
const isAuth = useSelector((e)=>e.data.isAuth);
if(!isAuth){
  return <Navigate  to="/login"/>
}
return children;
}


export default PrivateRout