const asyncHandler = (requestHandler)=>{
    (req ,res, next)=>{
        Promise.resolve().catch((err)=>next(err))
    }
}

export { asyncHandler }






// this for try and catch block

// const asyncHandler () =>{};
// const asyncHandler = (fnc) => { () => {} };
// const asyncHandler = (fnc) =>  async() => {} ;

// const asyncHandler = (fnc) => async (req, res, next) => {
//     try {
//         await fnc(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({ success : false, message : err.message })
//     }
// }