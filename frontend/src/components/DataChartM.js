
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useQuery } from 'react-query';
import React, { useEffect, useState } from "react";
import axios from "axios";

const fetcher= url => fetch(url).then(res => res.json());



const DataChartM = () => {
	





// Sample data
const data = [
{name: 'Questions ', students: 2},
{name: 'Videos', students: 1},

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

export default DataChartM;
