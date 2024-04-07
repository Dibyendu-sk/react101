function ProfileCard(props){
    const {title,handle}=props
    return <div>
        <h4>
            Title is {title}
        </h4>
        <p>handle is {handle}</p>
    </div>
}
export default ProfileCard;