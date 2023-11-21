const stripe =require("stripe")('sk_test_51LuJaySF8bC6SK7mS9wWSPfjPIwfwLH8uEJx5vAEizQqTi524CxGl7eye16rO7kDWweElM2V4pUuTD0yqwU4VS6f000jFAn4hO')

const paymentCheckout=async(req,res)=>
{
    try{
        const {reportID}=req.body
        console.log(reportID)
        const session = await stripe.checkout.sessions.create(
            {
                mode: 'payment',
              line_items: [
                {
                    price:'price_1OEcHTSF8bC6SK7mD9Z2SJE8',
                    quantity:1
                }
              ],
              success_url: `http://localhost:3000/reportupdate/${reportID}`, 
              cancel_url: 'http://localhost:3000/reporthistory',
              metadata:{
                  reportID:reportID
                }
            }
          );
          console.log(session)
          res.json( {
            message:"Payment session created",
            created:true,
            sessionUrl:session.url
          })
          }catch(err){
            console.log(err.message)
            res.json( {
              message:"some error occured while trying to checkout subscription payment fee",
              created:false
            }
            )
          }
}



module.exports={paymentCheckout}