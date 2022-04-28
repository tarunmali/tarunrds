
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

import React, { useEffect, useState } from "react";
import axios from "axios";

const fetcher= url => fetch(url).then(res => res.json());



const Hope = () => {
	const [postObject, setPostObject] = useState({});

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_DATA}/data`).then((response) => {
		  setPostObject(response.data);
		});
	
	  }, []);
	
	  const x=8;

// Sample data
const data = [
{name: 'Number of users', students: postObject.totalUsers},
{name: 'Technical scripter', students: 7},
{name: 'Geek-i-knack', students: 2},
{name: 'Geek-o-mania', students: 1}
];


return (
<BarChart width={600} height={600} data={data}>
	<Bar dataKey="students" fill="green" />
	<CartesianGrid stroke="#ccc" />
	<XAxis dataKey="name" />
	<YAxis />
</BarChart>
);
}

export default Hope;
