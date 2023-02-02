const getUserRole = (arr)=>{
    let result = [];

    for(let i =0; i<arr.length; i++){
        result.push(arr[i].value);
    }

    return result;
}

module.exports.globalAccess = ({ currentAdmin }) => { 
    const role = getUserRole(currentAdmin.role);
    return ((currentAdmin && (role.includes('SUPER_ADMIN') || (process.env.NODE_ENV === 'development')))) 
}


module.exports.adminAccess = ({ currentAdmin }) => { 
    const role = getUserRole(currentAdmin.role);
    return ((currentAdmin && (role.includes('ADMIN') || role.includes('SUPER_ADMIN') || (process.env.NODE_ENV === 'development')))) 
}

module.exports.clubAccess = ({ currentAdmin }) => { 
    const role = getUserRole(currentAdmin.role);
    return ((currentAdmin && (role.includes('CLUB') || role.includes('SUPER_ADMIN') || (process.env.NODE_ENV === 'development')))) 
}

module.exports.hmcAccess = ({ currentAdmin }) => { 
    const role = getUserRole(currentAdmin.role);
    return ((currentAdmin && (role.includes('HMC') || role.includes('SUPER_ADMIN') || (process.env.NODE_ENV === 'development')))) 
}

module.exports.onlyAdminAccess = ({ currentAdmin }) => { 
    const role = getUserRole(currentAdmin.role);
    return ((currentAdmin && (role.includes('ADMIN') || (process.env.NODE_ENV === 'development')))) 
}

module.exports.onlyClubAccess = ({ currentAdmin }) => { 
    const role = getUserRole(currentAdmin.role);
    return ((currentAdmin && (role.includes('CLUB') || (process.env.NODE_ENV === 'development')))) 
}

module.exports.onlyhmcAccess = ({ currentAdmin }) => { 
    const role = getUserRole(currentAdmin.role);
    return ((currentAdmin && (role.includes('HMC') || (process.env.NODE_ENV === 'development')))) 
}