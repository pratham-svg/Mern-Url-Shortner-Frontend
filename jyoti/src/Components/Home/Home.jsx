import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home = () => {
	const [data, setData] = useState({ Title: "", URL: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/++++";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem( res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div>
              <h2>.</h2>
		
		<div className={styles.URL_container}>
			<div className={styles.URL_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create your TinyURL</h1>
						<input
							type="Title"
							placeholder="Title"
							name="Title"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="URL"
							placeholder="URL"
							name="URL"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							CREATE
						</button>
					</form>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Home;
