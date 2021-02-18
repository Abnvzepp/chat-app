const users =[]

const addUser = ({ id, name, room }) =>{
    // name=name.trim().charAt(0).toUpperCase() + name.slice(1);
    // room=room.trim().charAt(0).toUpperCase() + room.slice(1);
    name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser){
        return { error: 'Username already exists'};
    }

    const user = { id, name, room };
    users.push(user);
    return {user};
}

const getUser = (id) =>{
    const index = users.find((user) => user.id === id);
    if(index) return index
    
    
}

const removeUser = ( id ) =>{
    const index = users.findIndex((user) => user.id === id);

    if(index !== 1) return users.splice(index, 1)[0];
    
}

const getUsersInRoom = (room) =>{
    const index = users.filter((user) => user.room === room);
    if(index) return index
    
    
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };