const os = require('os')
const { uptime } = require('process')
//info about current user

const user = os.userInfo()

console.log(user)

// info about uptime 

console.log (`the system has been up for ${os.uptime()}`)

const info = {
    name : os.type(), 
    relese :os.release(), 
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}

console.log(info)