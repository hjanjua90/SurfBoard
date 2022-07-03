import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'



const EditTopic = (props) =>{
    const [topic, setTopic] = useState("");
    const [stage, setStage] = useState("");
    const [duration, setDuration] = useState("");
    const [Description, setDescription] = useState("");
    const [date, setDate] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/topics/${id}`)
            .then((res)=>{
                console.log(res.data);
                setTopic(res.data.topic);
                setStage(res.data.stage);
                setDuration(res.data.duration);
                setDescription(res.data.Description);
                setDate(res.data.date);
            })
            .catch((err)=>{
                console.log(err);
                navigate("/surfit/dashboard")
            });
    }, [id , navigate])

    const onSubmitHandler = (e) => {
        e.preventDefault();
		axios.put(`http://localhost:8000/api/topics/${id}`,
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
						<strong>Update Topic</strong>
					</p>
					<p class="navbar-brand">
						<em>
							Never Doubt Your Worth
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
										ADD Topic
									</a>
								</li>
								<li class="m-1 nav-item">
									<a class="nav-link" href="/">
										SIGN OUT
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
                                placeholder={topic}
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
                                placeholder={duration}
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
                                placeholder={stage}
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
                                placeholder={date}
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
                                placeholder={Description}
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
							<button className="btn-link-style-general btn btn-link-style-submit mt-3">Update</button>
						</Form.Group>
					</div>
				</Form>
			</div>
            </div>
        </div>
    )
}

export default EditTopic; 