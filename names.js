exports.findNames = async () => {
    const names= await new Promise((res,rej)=>{
        setTimeout(()=>{
            res([1,2,3])
        }, 5000);
    });
    console.log('Names:', names);
};
