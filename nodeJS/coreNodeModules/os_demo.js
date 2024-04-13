const os=require("os");
//it gives us information about our environment and operating system
//Helps us build applications that have something to do with the system you are using

//platform -> to get the platform name 
console.log(os.platform())

//arch -> to get the CPU architecture
console.log(os.arch())

//cpus -> to get the CPU core info 
console.log(os.cpus())
//returns an object with information about the every core of CPU

//freemem -> 
console.log(os.freemem())

//totalmem -> 
console.log(os.totalmem())

//homedir
console.log(os.homedir())

//uptime -> returns the amount of time that your system has been up
console.log(os.uptime())

