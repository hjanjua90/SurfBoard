import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

const AddTopic = () =>{
    const [topic, setTopic] = useState("");
    const [stage, setStage] = useState("");
    const [duration, setDuration] = useState("");
    const [Description, setDescription] = useState("");
    const [date, setDate] = useState();

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
		axios.post('http://localhost:8000/api/topics',
		{
			date,
			topic,
            duration,
			stage,
			Description
		},
		)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/surfit/dashboard');
            })
            .catch((err) => {
                console.log(err);
				setErrors(err.response.data.errors)
            })
    };


    return (
        <div>
            <div class="mb-5 text-center">
				<div class="text-mont p-1 d-flex justify-content-between align-items-center">
					<p class="navbar-brand">
						<strong>ADD Meeting</strong>
					</p>
					<p class="navbar-brand">
						<em>
							Dont't catch feelings, instead catch the wave of OPPORTUNITIES.
						</em>
					</p>
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
									<a class="nav-link disabled" href="/surfit/addTopic">
										ADD Meeting
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				</div>
                <div className="text-mont d-flex justify-content-center">
				<Form
					className="mt-5 form-sizing-double blurred-box-form"
					onSubmit={onSubmitHandler}
				>		
					{/* <input type="hidden" value="${userLogin.id}" path="user"/> */}
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Title </Form.Label>
							<Form.Control
								value={topic}
								type="text"
								className="text-center"
								onChange={(e) => {
												setTopic(e.target.value)
											}}
							/>
							{
								errors.topic ?
									<p>{errors.topic.message}</p> :
									null
							}
						</Form.Group>
					</div>
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Duration </Form.Label>
							<Form.Control
								value={duration}
								type="text"
								className="text-center"
								onChange={(e) => {
												setDuration(e.target.value)
											}}
							/>
							{
								errors.duration ?
									<p>{errors.duration.message}</p> :
									null
							}
						</Form.Group>
					</div>
					<div className="d-flex justify-content-center align-items-end">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Stage of Investment </Form.Label>
							<Form.Select
								value={stage}
								className="text-center"
								onChange={(e) => {
												setStage(e.target.value)
											}}
							>
								<option defaultValue="Make a Selection"></option>
								<option>Initial Pitch</option>
								<option>Deep Dive</option>
								<option>Due Diligence and Goal Alignment</option>
								<option>Negoation Of Terms</option>
								<option>Solicitation Of Soft Circle</option>
                                <option>Syndication</option>
                                <option>First Closing</option>
								<option>Other: See Additional Notes</option>
							</Form.Select>
							{
								errors.stage ?
									<p>{errors.stage.message}</p> :
									null
							}
						</Form.Group>
					</div>
                    <Form.Group className="form-sizing-double card-body">
							<Form.Label>Date and Time</Form.Label>
							<Form.Control
								value={date}
								type="datetime-local"
								className="text-center"
								onChange={(e) => {
												setDate(e.target.value)
											}}
							/>
							{
								errors.date ?
									<p>{errors.date.message}</p> :
									null
							}
						</Form.Group>
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Description </Form.Label>
							<Form.Control
								value={Description}
								className="text-center"
								as="textarea"
								rows={3}
								onChange={(e) => {
												setDescription(e.target.value)
											}}
							/>
							{
								errors.Description ?
									<p>{errors.Description.message}</p> :
									null
							}
						</Form.Group>
					</div>
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<button className="btn-link-style-general btn btn-link-style-submit mt-3">Add Meeting</button>
						</Form.Group>
					</div>
				</Form>
			</div>
            </div>
        </div>
    )

}

export default AddTopic; 

