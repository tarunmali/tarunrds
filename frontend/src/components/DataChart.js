
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useQuery } from 'react-query';
import React, { useEffect, useState } from "react";
import axios from "axios";

const fetcher= url => fetch(url).then(res => res.json());



const DataChart = () => {
	
	const [postObject, setPostObject] = useState({});
	
	useEffect(() => {
		axios.get(`${process.env.REACT_APP_DATA}/data`).then((response) => {
		  setPostObject(response.data);
		});
	  }, []);
	console.log(postObject);




// Sample data
const data = [
{name: 'No. of users 🧑', students: postObject.users},
{name: 'Posts posted ✉️ ', students: postObject.posts},
{name: 'Comments  ✍️', students: postObject.comments},
{name: 'Likes done ❤️', students: postObject.likes},
];


return (
<BarChart width={600} height={600} data={data}>
	<Bar dataKey="students" fill="blue" />
	<CartesianGrid stroke="#ccc" />
	<XAxis dataKey="name" />
	<YAxis />
</BarChart>
);
}

export default DataChart;
