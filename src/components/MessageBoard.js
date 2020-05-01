import React , {useState} from "react";

const MessageBoard = () => {
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  const [signal, setSignal] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    let match = destination.split(",");
    if(message.length > 0 && match.length >0){
    	let msg = "Sent";
    	for (let elem = 0; elem< match.length; elem++){
    	    let phone = `+1${match[elem]}`.trim();
    	    if(!validatePhone(match[elem].trim())){
    	    	msg="Contains invalid phone numbers.";
    	    	continue;
    	    }else{
    	    	fetch(`http://localhost:7777/send?destination=${phone}&message=${message}`)
    	    	.then(res=> {
    	    		console.log("Messages Sent.");
    	    	})
    	    	.catch(err=>{
    	    	  console.error(err);
    	    	});
    	    }
    	}
    	setSignal(msg);
    	clearScreen();
    }else{
    	clearScreen();
    	setSignal("Empty messages or Empty Phone number list. Please try again.");
    }
  }

  const clearScreen = (message) => {
    setMessage("");
    setDestination("");
  }

  const validatePhone = (input) =>{
  	let valid= /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(parseInt(input));
  	return valid;
  }

  return(
    <div className="container mt-5">
          <div className="col-sm-10">
    	      {signal ? <div class="alert alert-primary text-center" role="alert">
          		<h4>{signal}</h4>
        	  </div>: null}
        </div>
      <form onSubmit={handleSubmit}>
	      <div className="form-group">
	        <label htmlFor="destination" className="col-sm-2 col-form-label col-form-label-lg">Phone Lists</label>
	        <div className="col-sm-10">
	          <input type="text" value={destination} onChange={e=>setDestination(e.target.value)} className="form-control form-control-lg" id="destination" placeholder="e.g. 4151231230, 6501232322"/>
	        </div>
	      </div>
	      <div className="form-group">
		    <label htmlFor="message" className="col-sm-2 col-form-label col-form-label-lg">Messages</label>
	        <div className="col-sm-10">
	        	<textarea className="form-control" name="message" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Go Visit Us Today !" />
		      	<button className="btn btn-dark btn-lg btn-block mt-4" type="submit">Submit</button>
	      	</div>
          </div>
      </form>
    </div>
  )
}

export default MessageBoard;