const CurrentUser = ({userPhotoUrl, userDisplayName}) => {
    return(
        <div className="flex flex-row flex-wrap gap-3 ml-3 mt-3">
            <img src={userPhotoUrl} alt={userDisplayName} width='30' height='30' />
            {userDisplayName}
        </div>

            
    )   
}
  
  export default CurrentUser;