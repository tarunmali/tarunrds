import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';


const Hope = () => {

// Sample data
const data = [
{name: 'Number of users', students: 3},
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
