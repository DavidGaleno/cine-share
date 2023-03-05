import { getMovieVideos } from "API/requistion"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from "react-player"

export const Player = () => {
    const params = useParams()
    const [trailer, setTrailer] = useState()
    useEffect(() => {
        const fetchTrailers = async () => {
            const videos = await getMovieVideos(Number(params.id))
            videos.results.map(video => {
                if (!trailer && video.name.includes("Trailer")) setTrailer(video)
            })

        }
        fetchTrailers()
    }, [])
    return (
        <Container>
            {trailer && <ReactPlayer playing
                width="100%"
                height="80rem"
                controls={false} url={`https://www.youtube.com/watch?v=${trailer.key}`} />}
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 3rem;
`