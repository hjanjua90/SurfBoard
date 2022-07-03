import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import DeleteButton from "./DeleteButton";

const Dashboard = (props) => {

    const [listAllTopics, setListAllTopics] = useState([])

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
    const removeFromDom = (listAllid) => {
		setListAllTopics(listAllTopics.filter((listAll) => listAll._id !== listAllid));
	};


    useEffect(() => {
		axios
			.get("http://localhost:8000/api/topics")
			.then((res) => {
				console.log(res.data);
				setListAllTopics(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

    return (
        <div class="text-center" id="myHeader">
            <div class="text-mont p-1 d-flex justify-content-between align-items-center">
					<p class="navbar-brand">
						<strong>
							DASHBOARD
						</strong>
					</p>
					<p class="navbar-brand">
						<em>
							Ride the wave to sucess with Power, Determination and Funding!!!
						</em>
					</p>
					<p> Any Questions :
						<a href="mailto:hjanjua90@gmail.com"> Email Me</a>
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
									<a
										class="nav-link disabled"
										href="/surfit/dashboard">
										DASHBOARD
									</a>
								</li>
								<li class="m-1 nav-item">
									<a class="nav-link" href="/surfit/addTopic">
										ADD Topics
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
                <div class="text-center m-5 text-mont">
				<h1 class="header-career-detector">
					<strong>Surf It</strong>
					
				</h1>
				<table class="mb-5 blurred-box-form table table-hover">
					<thead>
						<tr>
							<th class="align-middle text-center">Title</th>
							<th class="align-middle text-center">Stage</th>
							<th class="align-middle text-center">Description</th>
							<th class="align-middle text-center">Duration</th>
							<th class="align-middle text-center">Date</th>
							<th class="align-middle text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						{listAllTopics
							? listAllTopics.map((listAll, index) => (
								<tr>
									<td class="box-link-style-general align-middle text-center">
										<Link
											to={`/surfit/showTopic/${listAll._id}`}
											class="btn btn-link-style-general">
											{listAll.topic}
										</Link>
									</td>

									<td class="align-middle text-center">{listAll.stage}</td>

									<td class="align-middle text-center">

										{listAll.Description}
									</td>


									<td class="align-middle text-center">
										{listAll.duration}
									</td>

									<td class="align-middle text-center">
										{displayDate(listAll.date)}
									</td>
									<td class="box-link-style-delete align-middle text-center">
										<DeleteButton
											listAllID={listAll._id}
											successCallBack={() => removeFromDom(listAll._id)}
										/>
									</td>
									<td class="align-middle text-center">
										<div class="m-2 box-link-style-action">
											<Link class="btn btn-link-style-general btn btn-link-style-submit" to={`/surfit/editTopic/${listAll._id}`}>
												{" "}
												Edit{" "}
											</Link>
										</div>
									</td>
								</tr>
							))
							: null}
					</tbody>
				</table>
			</div>
        </div>
    )
    
};

export default Dashboard;
