import { Link } from "react-router-dom";




export default function Index() {
	return <main className="container cont ">
		<div className=" mt-5">
			
			<h2 className="text-center">Upload your music and share it with the world! </h2>
				
				
				<div class="contain d-flex justify-content-center align-items-center">
					<img src= "https://res.cloudinary.com/onehundreddevs/image/upload/v1673588157/rpnnmbcfz1fmwrfbbd7q.png" className="mt-5"/>
	   			</div> 

				
			<h3 className="text-center">Connect with other artists to discover new and exciting music.</h3>
		</div>
		<div className="d-flex flex-column align-items-center mt-3">
			<Link to="/login" className="mb-3 col-2 btn btn-warning fw-bold hBtn">Login </Link><br />
			<Link to="/signup" className="col-2 btn btn-dark fw-bold sBtn"> Signup</Link>
			
		</div>
			
	</main>
}