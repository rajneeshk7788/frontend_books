
  export const UserStr = {
    isAuth: "Auth",
    data : "Data",
}

export const AuthAction = (data)=>(
    {
        type : UserStr.isAuth,
        payload : data,
    }
)


export const DataAction = (data)=>(
    {
        type : UserStr.data,
        payload : data,
    }
)
