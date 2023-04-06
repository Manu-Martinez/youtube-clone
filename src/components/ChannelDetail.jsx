import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState();
	const [videos, setVideos] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`)
		.then((data) => setChannelDetail(data?.items[0]));

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
		.then((data) => setVideos(data?.items[0]));
	}, {id})

  return (
	<Box minHeight="95vh">
		<Box>
			<div style={{ background: 'rgb(63,94,251) radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
			zIndex: 10,
			height: '300px', }}></div>
			<ChannelCard channelDetail={channelDetail} marginTop="-110px"></ChannelCard>
		</Box>
		<Box display="flex" p="2">
			<Box sx={{ mr: {sm: '100px'} }}>
			<Videos videos={videos}></Videos>
			</Box>
		</Box>
	</Box>
  )
}

export default ChannelDetail