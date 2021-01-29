import './Profiles.css';
import ProfileCard from './ProfileCard'

function Profiles({users}) {
    return (users.map(user=>
        <ProfileCard 
            key={user.id}
            id={user.id} 
            email={user.email} 
            name={`${user.first_name} ${user.last_name}`} 
            avatarUrl={user.avatar}
        />)
    );
}

export default Profiles;