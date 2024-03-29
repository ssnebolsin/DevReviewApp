const CurrentUser = ({user}) => {
    return(
        <>
            <img src={user.photoURL} alt={user.displayName} width='50' height='50' />
            {user.displayName}
        </>
    )
}
  
  export default CurrentUser;