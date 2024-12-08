
const UserList = ({listOfUsers}) => {

  
  return (
    < >
            <ul className="grid  grid-cols-3" >
      {
        listOfUsers.map((user) => 
            <li key={user.id} className="border border-black m-16 p-4 ">
            <h3 className="font-semibold text-2xl ">{user.firstName} {user.lastName} </h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p> <strong>Gender:</strong> {user.gender}</p>
          </li>
        )
    }
      </ul>
    </>
  );
};

export default UserList;
