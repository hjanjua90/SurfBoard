import React, { useState, useEffect, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const ShowTopic = (props) =>{
    const [topicDetails, setTopicDetails] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

    const options = {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};
	const displayDate = (d) => {
		let date = new Date(d);
		return date.toLocaleString("en-us", options);
	};


    useEffect(() => {
		axios
			.get(`http://localhost:8000/api/topics/${id}`)
			.then((res) => {
				console.log(res.data);
				setTopicDetails(res.data);
			})
			.catch((err) => {
				console.log(err);
				//If Error Display the Error Page
				navigate("/surfit/dashboard");
			});
	}, [id, navigate]);
    return(
        <div>
            <div class="text-center " id="myHeader">
				<div class="text-mont p-1 d-flex justify-content-between align-items-center">
					<p class="navbar-brand">
						<strong>DETAILS</strong>
					</p>
					<p class="navbar-brand">
						<em>
							Embrace Every Challenge
						</em>
					</p>
				</div>

				<div class="mb-3 text-center">
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
						<p class="navbar-brand">
							Surf It
						</p>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="m-1 nav-item">
									<a class="nav-link" href="/surfit/dashboard">
										DASHBOARD
									</a>
								</li>
								<li class="m-1 nav-item">
									<a class="nav-link" href="/surfit/addTopic">
										ADD Topic
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
			<div class=" d-flex text-mont">
				<div class=" d-flex content  blurred-box-form w-75">
					<table class="table table-hover">
						<tbody>
							<tr>
								<th>Date</th>
								
								<td>
									{displayDate(topicDetails.date)}
								</td>
							</tr>
							<tr>
								<th>Job Title:</th>
								
								<td>{topicDetails.topic}</td>
							</tr>
							<tr>
								<th>Duration</th>
								
								<td>{topicDetails.duration}</td>
							</tr>

							<tr>
								<th>Stage of Investment:</th>

								<td>{topicDetails.stage}</td>
							</tr>
							<tr>
								<th>Description:</th>

								<td>{topicDetails.Description}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
        </div>
    )
}


export default ShowTopic;